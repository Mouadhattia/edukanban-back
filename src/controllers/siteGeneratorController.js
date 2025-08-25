const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const { Site } = require("../models/Site");
const { Page } = require("../models/Page");
const { SiteSettings } = require("../models/SiteSettings");
const { Section } = require("../models/Section");

// Generate Next.js app from website data
const genrateNextApp = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }

    //settings
    const settings = await SiteSettings.findOne({ site_id: site._id });
    // pages
    const pages = await Page.find({ site_id: site._id }).sort({
      order_index: 1,
    });
    //sections

    // For each page, get its sections and attach them
    const pagesWithSections = await Promise.all(
      pages.map(async (page) => {
        const sections = await Section.find({ page_id: page._id });
        return {
          ...page._doc,
          sections,
        };
      })
    );

    // Combine everything into a final object
    const websiteData = {
      ...site._doc,
      settings,
      pages: pagesWithSections,
    };

    const appName = websiteData.domain.split(".")[0]; // e.g., "test-school-id"
    const appPath = path.join(__dirname, "../../generated-apps", appName);

    // Clean existing directory (handle Windows EBUSY locks)
    if (fs.existsSync(appPath)) {
      try {
        fs.removeSync(appPath);
      } catch (err) {
        if (err && err.code === "EBUSY") {
          try {
            fs.rmSync(appPath, { recursive: true, force: true });
          } catch (err2) {
            // brief retry
            await new Promise((r) => setTimeout(r, 500));
            fs.rmSync(appPath, { recursive: true, force: true });
          }
        } else {
          throw err;
        }
      }
    }

    // Create app directory structure
    fs.ensureDirSync(appPath);
    fs.ensureDirSync(path.join(appPath, "pages"));
    fs.ensureDirSync(path.join(appPath, "components"));
    fs.ensureDirSync(path.join(appPath, "public"));
    fs.ensureDirSync(path.join(appPath, "styles"));

    // Generate package.json
    const packageJson = generatePackageJson(appName, websiteData);
    fs.writeFileSync(
      path.join(appPath, "package.json"),
      JSON.stringify(packageJson, null, 2)
    );

    // Generate next.config.js
    const nextConfig = generateNextConfig(websiteData);
    fs.writeFileSync(path.join(appPath, "next.config.js"), nextConfig);

    // Generate tsconfig.json
    const tsConfig = generateTsConfig();
    fs.writeFileSync(
      path.join(appPath, "tsconfig.json"),
      JSON.stringify(tsConfig, null, 2)
    );

    // Generate tailwind.config.js
    const tailwindConfig = generateTailwindConfig();
    fs.writeFileSync(path.join(appPath, "tailwind.config.js"), tailwindConfig);

    // Generate postcss.config.js
    const postcssConfig = generatePostcssConfig();
    fs.writeFileSync(path.join(appPath, "postcss.config.js"), postcssConfig);

    // Generate global styles

    const globalStyles = generateGlobalStyles(websiteData.settings.colors);
    fs.writeFileSync(path.join(appPath, "styles/globals.css"), globalStyles);

    // Generate components
    const componentsCode = generateComponents(websiteData.settings.colors);
    fs.writeFileSync(
      path.join(appPath, "components/Sections.tsx"),
      componentsCode
    );

    // Generate pages
    generatePages(websiteData, appPath);

    // Generate _app.tsx
    const appTsx = generateAppTsx();
    fs.writeFileSync(path.join(appPath, "pages/_app.tsx"), appTsx);

    // Generate _document.tsx
    const documentTsx = generateDocumentTsx(websiteData);
    fs.writeFileSync(path.join(appPath, "pages/_document.tsx"), documentTsx);

    // Create a simple README
    const readme = generateReadme(appName);
    fs.writeFileSync(path.join(appPath, "README.md"), readme);

    res.json({
      success: true,
      message: `Next.js app generated successfully at: ${appPath}`,
      appPath,
      instructions: {
        install: `cd ${appPath} && npm install`,
        dev: `cd ${appPath} && npm run dev`,
        build: `cd ${appPath} && npm run build`,
        start: `cd ${appPath} && npm start`,
      },
    });
  } catch (error) {
    console.error("Error generating Next.js app:", error);
    res.status(500).json({
      error: "Failed to generate Next.js app",
      details: error.message,
    });
  }
};

function generatePackageJson(appName, websiteData) {
  return {
    name: appName,
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint",
    },
    dependencies: {
      next: "14.0.4",
      react: "^18",
      "react-dom": "^18",
      "@types/node": "^20",
      "@types/react": "^18",
      "@types/react-dom": "^18",
      autoprefixer: "^10.0.1",
      postcss: "^8",
      tailwindcss: "^3.3.0",
      typescript: "^5",
      "lucide-react": "^0.476.0",
    },
    devDependencies: {
      eslint: "^8",
      "eslint-config-next": "14.0.4",
    },
  };
}

function generateNextConfig(websiteData) {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '${websiteData.domain}'],
    unoptimized: true
  },
  env: {
    SITE_NAME: '${websiteData.name}',
    SITE_DOMAIN: '${websiteData.domain}',
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
  }
}

module.exports = nextConfig`;
}

function generateTsConfig() {
  return {
    compilerOptions: {
      target: "es5",
      lib: ["dom", "dom.iterable", "es6"],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "bundler",
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: "preserve",
      incremental: true,
      plugins: [
        {
          name: "next",
        },
      ],
      paths: {
        "@/*": ["./*"],
      },
    },
    include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    exclude: ["node_modules"],
  };
}

function generateTailwindConfig() {
  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;
}

function generatePostcssConfig() {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
}

function generateGlobalStyles(colors) {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-background: ${colors.background};
  --color-text: ${colors.text};
}

body {
  color: var(--color-text);
  background: var(--color-background);
}

@layer components {
  .btn-primary {
    @apply px-8 py-3 rounded-md hover:opacity-90 transition-colors;
    background: var(--color-accent);
    color: var(--color-secondary);
    border: 2px solid var(--color-primary);
  }
}`;
}

function generateComponents(colors) {
  return `import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, ShoppingBag, 
  Video as VideoIcon, BookOpen, ChevronLeft, ChevronRight, Grid, 
  ListOrdered, Users, Star, CheckCircle, Shield, Lightbulb, Target, 
  Heart, Zap, ImageIcon
} from 'lucide-react';

interface SectionType {
  _id: string;
  type: string;
  content: any;
  order_index: number;
  
}

interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Utility to build API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

// Enhanced Navbar Component
export function Navbar({ 
  pages, 
  colors, 
  siteName, 
  onPageChange, 
  onAuthView,
  activePage 
  
}: { 
  pages: any[]; 
  colors: Colors; 
  siteName: string;
  onPageChange?: (pageId: string) => void;
  onAuthView?: (view: 'signin' | 'signup') => void;
  activePage?: string;
}) {


  const router = useRouter();
  // handle navigation
  const handlePageChange = (p: any) => {
    if (p._id === activePage || !p._id) return;
    if (p.slug && p.slug == "home") {
      router.push("/");
    } else {
      router.push("/"+p.slug);
    }

    onPageChange && onPageChange(p._id);
  };
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center space-x-2 text-2xl font-bold hover:opacity-80 transition-opacity"
                style={{ color: colors.primary || "#000" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: colors.primary || "#000" }}
                >
                  {siteName.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:block">{siteName}</span>
              </a>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {pages.map((p: any) => (
                <button
                  key={p._id}
                   onClick={() => handlePageChange(p)}
                  className={\`px-3 py-2 rounded-md text-sm font-medium capitalize transition-all duration-200 relative \${
                    p._id === activePage
                      ? "text-white shadow-md"
                      : "text-gray-700 hover:text-white hover:shadow-sm"
                  }\`}
                  style={{
                    backgroundColor: p._id === activePage ? colors.primary : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (p._id !== activePage) {
                      e.currentTarget.style.backgroundColor = colors.primary || "#000";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (p._id !== activePage) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {p.title}
                  {p._id === activePage && (
                    <div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ backgroundColor: colors.text || "#fff" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Right: Auth buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onAuthView && onAuthView('signin')}
              className="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors border border-gray-300 hover:border-gray-400 rounded-md"
              style={{
                borderColor: colors.primary,
                color: colors.primary,
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => onAuthView && onAuthView('signup')}
              className="text-white px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:shadow-lg"
              style={{
                backgroundColor: colors.primary,
                boxShadow: \`0 2px 4px \${colors.primary}20\`,
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {pages.map((p: any) => (
              <button
                key={p._id}
                   onClick={() => handlePageChange(p)}
                className={\`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize transition-colors \${
                  p._id === activePage ? "text-white" : "text-gray-700 hover:text-white"
                }\`}
                style={{
                  backgroundColor: p._id === activePage ? colors.primary : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (p._id !== activePage) {
                    e.currentTarget.style.backgroundColor = colors.primary || "#000";
                  }
                }}
                onMouseLeave={(e) => {
                  if (p._id !== activePage) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

// Enhanced Footer Component
export function Footer({ siteName, pages, colors, onPageChange }: { 
  siteName: string; 
  pages: any[]; 
  colors: Colors; 
  onPageChange?: (pageId: string) => void;
}) {
  return (
    <footer className="bg-black text-white" style={{ backgroundColor: colors.primary }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{siteName}</h3>
            <p className="text-gray-300 text-sm">
              Building the future of education with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {pages.map((page: any) => (
                <li key={page._id}>
                  <button
                    onClick={() => onPageChange && onPageChange(page._id)}
                    className="text-gray-300 hover:text-white transition-colors text-sm capitalize"
                  >
                    {page.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Online Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Course Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Student Progress</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Educational Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">
                  info@{siteName.toLowerCase().replace(/\\s+/g, "")}.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">123 Education St, Learning City, LC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


// Hero Section Component
function HeroSection({ content, colors,onAuthView }: { content: any; colors: Colors ,onAuthView?: (view: 'signin' | 'signup') => void  }) {
 const router = useRouter();
  return (
   <section className="my-8">
  <div
    className="text-center p-8 rounded-lg"
    style={{
      backgroundColor: content.backgroundColor || "transparent",
      backgroundImage:
        content.backgroundImage?.hide === false &&
      content.backgroundImage?.src
          ? 'url("' + content.backgroundImage.src + '")'
          : content.backgroundImage &&
            typeof content.backgroundImage === "string"
          ? 'url("' + content.backgroundImage + '")'
          : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h2
      className="text-5xl font-bold mb-4"
      style={{
        color:
          content.backgroundColor ||
          content.backgroundImage?.hide === false ||
          (content.backgroundImage &&
            typeof content.backgroundImage === "string")
            ? "white"
            : "inherit",
        textShadow:
          content.backgroundImage?.hide === false ||
          (content.backgroundImage &&
            typeof content.backgroundImage === "string")
            ? "2px 2px 4px rgba(0,0,0,0.7)"
            : "none",
      }}
    >
      {content.title}
    </h2>
    <p
      className="text-xl mb-6"
      style={{
        color:
          content.backgroundColor ||
          content.backgroundImage?.hide === false ||
          (content.backgroundImage &&
            typeof content.backgroundImage === "string")
            ? "white"
            : "inherit",
        textShadow:
          content.backgroundImage?.hide === false ||
          (content.backgroundImage &&
            typeof content.backgroundImage === "string")
            ? "1px 1px 2px rgba(0,0,0,0.7)"
            : "none",
      }}
    >
      {content.subtitle}
    </p>
    {content.ctaText && 
      <button
        className="px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
         onClick={() => {
           if (content.ctaLink?.link) {
             if(content.ctaLink.link === "/signin"||content.ctaLink.link === "/signup"){
            onAuthView && onAuthView(content.ctaLink.link.replace("/",""));
           }
            else{
            router.push("/"+content.ctaLink.link);
            }
          }
        }}
        style={{
          color: "white",
          backgroundColor: colors.primary,
          boxShadow:
            content.backgroundImage?.hide === false ||
            (content.backgroundImage &&
              typeof content.backgroundImage === "string")
              ? "0 4px 8px rgba(0,0,0,0.3)"
              : "none",
        }}
      >
        <a>{content.ctaText}</a>
      </button>
    }
  </div>
</section>
  );
}

// Heading Section Component
function HeadingSection({ content, colors }: { content: any; colors: Colors }) {
  const level = content.level || 2;
  const HeadingTag = \`h\${level}\` as keyof JSX.IntrinsicElements;
  
  return (
 <section className="my-8">
  <div
    className="text-center p-6 rounded-lg"
    style={{
      backgroundColor: content.backgroundColor || "transparent",
      backgroundImage:
        content.backgroundImage?.hide === false &&
        typeof content.backgroundImage?.src === "string" &&
        content.backgroundImage.src.trim() !== ""
          ? 'url("' + content.backgroundImage.src + '")'
          : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h2
      className={
        "font-bold mb-2 " +
        (content.level === 1
          ? "text-4xl"
          : content.level === 2
          ? "text-3xl"
          : "text-2xl")
      }
      style={{
        color:
          content.backgroundColor ||
          content.backgroundImage?.hide === false
            ? "white"
            : colors.text || "inherit",
        textShadow:
          content.backgroundImage?.hide === false
            ? "2px 2px 4px rgba(0,0,0,0.7)"
            : "none",
      }}
    >
      {content.text}
    </h2>
  </div>
</section>

  );
}





// School News Section Component
function SchoolNewsSection({
  content,
  activeView = 'desktop',
  colors,
}: {
  content: any;
  activeView?: 'desktop' | 'tablet' | 'mobile';
  colors: Colors;
}) {
  let flexDir = 'flex-col';
  if (activeView === 'desktop' || activeView === 'tablet')
    flexDir = 'md:flex-row';
  return (
    <section
      className="py-16 px-6"
      style={{ color: colors.text, background: colors.background }}
    >
      <div
        className={\`max-w-2xl md:max-w-4xl mx-auto rounded-lg shadow-md p-8 flex \${flexDir} items-center md:items-start gap-8\`}
        style={{
          background: colors.secondary,
          border: \`2px solid \${colors.accent}\`,
        }}
      >
        {/* Left: Title, date, content */}
        <div className="flex-1 w-full">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: colors.accent }}
          >
            {content.title}
          </h2>
          <div className="text-xs mb-4" style={{ color: colors.primary }}>
            {content.date}
          </div>
          <p className="text-md" style={{ color: colors.text }}>
            {content.content}
          </p>
        </div>
        {/* Right: Image */}
        {content.image && (
          <div className="flex-shrink-0 w-full md:w-64">
            <img
              src={content.image}
              alt="News"
              className="rounded w-full max-h-64 object-cover border"
              style={{
                borderColor: colors.accent,
                background: colors.background,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}





// CTA Section Component
function CtaSection({ content, colors,onAuthView}: { content: any; colors: Colors ,onAuthView?: (view: 'signin' | 'signup') => void  }) {
 const router = useRouter();
  return (
    <section className="my-8 text-center">
      <div className="rounded-lg bg-muted/20 p-8">
        <h3 className="text-2xl font-bold mb-2">
          {content.title}
        </h3>
        <p className="mb-4">{content.description}</p>
        {content.buttonText && (
          <button
           className="px-6 py-3 rounded-md" 
           style={{ backgroundColor: colors.primary, color: 'white' }}
           onClick={() => {
            if(content.buttonLink){
              if(content.buttonLink.link === "/signin"||content.buttonLink.link === "/signup"){
                onAuthView && onAuthView(content.buttonLink.link.replace("/",""));
              }
              else{
                router.push("/"+content.buttonLink.link);
              }
            }
           }}
           >
            {content.buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

// Contact Form Section Component
function ContactFormSection({ content, colors }: { content: any; colors: Colors }) {
 // form Data
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    subject: "",
    message: "",
    to: content.email,
  });
  // handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send formData to the server or perform any other action
    try {
      const response = await fetch(API_BASE_URL + "/api/auth/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      alert(data.message);
      setFormData({
        name: "",
        from: "",
        subject: "",
        message: "",
        to: content.email,
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <section className="my-8">
      <div
        className="p-8 rounded-lg"
        style={{
          backgroundColor: content.backgroundColor || "transparent",
          backgroundImage: content.backgroundImage?.hide === false && content.backgroundImage?.src
            ? \`url(\${content.backgroundImage.src})\` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={\`text-3xl font-bold mb-4 \${
              content.textPosition === "center" ? "text-center" : content.textPosition === "right" ? "text-right" : "text-left"
            }\`}
            style={{
              color: content.backgroundColor || content.backgroundImage?.hide === false
                ? "white" : "inherit",
              textShadow: content.backgroundImage?.hide === false
                ? "2px 2px 4px rgba(0,0,0,0.7)" : "none",
            }}
          >
            {content.title}
          </h2>

          {content.description && (
            <p
              className={\`text-lg mb-8 \${
                content.textPosition === "center" ? "text-center" : content.textPosition === "right" ? "text-right" : "text-left"
              }\`}
              style={{
                color: content.backgroundColor || content.backgroundImage?.hide === false
                  ? "white" : "inherit",
                textShadow: content.backgroundImage?.hide === false
                  ? "1px 1px 2px rgba(0,0,0,0.7)" : "none",
              }}
            >
              {content.description}
            </p>
          )}

          <div className={\`grid grid-cols-1 \${
            content.image?.hide === false ? "lg:grid-cols-2" : ""
          } gap-8 items-start\`}>
            {/* Contact Form */}
            <div className={\`\${
              content.textPosition === "right" && content.image?.hide === false ? "lg:order-2" : ""
            }\`}>
               <div className="p-6 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg">
                <div className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg border bg-background"
                    />
                    <input
                      value={formData.from}
                      onChange={(e) =>
                        setFormData({ ...formData, from: e.target.value })
                      }
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg border bg-background"
                    />
                  </div>
                  <input
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded-lg border bg-background"
                  />
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your Message"
                    className="w-full p-3 rounded-lg border bg-background min-h-[120px] resize-none"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 text-lg rounded-md"
                    style={{ backgroundColor: colors.primary, color: "white" }}
                  >
                    {content.buttonText || "Send Message"}
                  </button>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 text-center bg-white/95 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-sm text-muted-foreground">{content.address}</p>
                </div>
                <div className="p-4 text-center bg-white/95 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">{content.email}</p>
                </div>
                <div className="p-4 text-center bg-white/95 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">{content.phone}</p>
                </div>
              </div>
            </div>

            {/* Contact Image */}
            {content.image?.hide === false && (
              <div className={\`\${content.textPosition === "right" ? "lg:order-1" : ""}\`}>
                <div className="flex items-center justify-center">
                  {content.image?.src ? (
                    <img src={content.image.src} alt={content.image.alt} className="w-full max-w-lg h-auto rounded-lg shadow-lg" />
                  ) : (
                    <div className="w-full max-w-lg h-96 bg-muted rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-16 w-16 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Video Section Component
function VideoSection({ content, colors }: { content: any; colors: Colors }) {
  return (
    <section className="my-8">
      <div
        className="p-8 rounded-lg"
        style={{
          backgroundColor: content.backgroundColor || "transparent",
          backgroundImage: content.backgroundImage?.hide === false && content.backgroundImage?.src
            ? \`url(\${content.backgroundImage.src})\` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={\`max-w-4xl mx-auto \${
          content.textPosition === "center" ? "text-center" : content.textPosition === "right" ? "text-right" : "text-left"
        }\`}>
          {/* Title and Description */}
          {(content.title || content.description) && (
            <div className="mb-8">
              {content.title && (
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{
                    color: content.backgroundColor || content.backgroundImage?.hide === false
                      ? "white" : "inherit",
                    textShadow: content.backgroundImage?.hide === false
                      ? "2px 2px 4px rgba(0,0,0,0.7)" : "none",
                  }}
                >
                  {content.title}
                </h2>
              )}
              {content.description && (
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: content.backgroundColor || content.backgroundImage?.hide === false
                      ? "rgba(255,255,255,0.9)" : "inherit",
                    textShadow: content.backgroundImage?.hide === false
                      ? "1px 1px 2px rgba(0,0,0,0.7)" : "none",
                  }}
                >
                  {content.description}
                </p>
              )}
            </div>
          )}

          {/* Video Player */}
          {content.video ? (
            <div className="aspect-video rounded-lg overflow-hidden bg-black shadow-lg">
              <iframe
                src={content.video}
                className="w-full h-full"
                allowFullScreen
                title={content.title || "Video content"}
                style={{ border: "none" }}
              />
            </div>
          ) : (
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center">
                <VideoIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No video URL provided</p>
                <p className="text-muted-foreground text-sm mt-2">Add a video URL in the editor to display content here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection({ content }: { content: any }) {
  return (
    <section className="my-8">
      <div className="flex flex-col md:flex-row items-center gap-6 bg-muted/20 rounded-lg p-6">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="mb-2">{content.text}</p>
          <p className="text-sm text-muted-foreground italic">{content.caption}</p>
        </div>
      </div>
    </section>
  );
}

// Carousel Section with dynamic states
function CarouselSection({ content, colors ,onAuthView}: { content: any; colors: Colors ,onAuthView?: (view: 'signin' | 'signup') => void  }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
 const router = useRouter();
  return (
    <section className="my-8">
      <div>
        <div
          className="relative flex items-center overflow-hidden rounded-lg min-h-[24rem] md:min-h-[28rem]"
          style={{ backgroundColor: content.backgroundColor || "#f0f9ff" }}
        >
          {(content.items || []).map((item: any, index: number) => {
            const isActive = index === carouselIndex;
            const textPosition = content.textPosition || "left";

            return (
              <div
                key={index}
                className={\`absolute inset-0 transition-all duration-700 ease-in-out \${
                  isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }\`}
              >
                <div className={\`grid grid-cols-1 md:grid-cols-2 w-full h-full items-center gap-6 md:gap-10 \${
                  textPosition === "right" ? "md:grid-flow-col-dense" : ""
                }\`}>
                  {/* Content Side */}
                  <div className={\`flex flex-col p-8 gap-6 \${
                    textPosition === "right" ? "md:col-start-2" : ""
                  }\`}>
                    <h2 className={\`text-4xl font-bold text-gray-900 transition-all duration-1000 delay-200 \${
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }\`}>
                      {item.title}
                    </h2>

                    <div className="space-y-3">
                      {(item.descriptions || []).map((desc: string, descIndex: number) => (
                        <p
                          key={descIndex}
                          className={\`text-lg text-gray-600 transition-all duration-1000 \${
                            isActive ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                          }\`}
                          style={{ transitionDelay: \`\${400 + descIndex * 200}ms\` }}
                        >
                          {desc}
                        </p>
                      ))}
                    </div>

                    <div className={\`flex gap-4 transition-all duration-1000 delay-700 \${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }\`}>
                      {(item.buttons || []).map((button: any, btnIndex: number) => (
                        <button
                          key={btnIndex}
                          className="px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: btnIndex % 2 === 0 ? colors.primary : "white",
                            color: btnIndex % 2 === 0 ? "white" : colors.primary,
                            border: \`2px solid \${colors.primary}\`
                          }}
                          onClick={() => {
                            if (button.link) {
                              if(button.link === "/signin"||button.link === "/signup"){
                                  onAuthView && onAuthView(button.link.replace("/",""));
                              }
                              else{ 
                                router.push("/"+button.link);
                              }
                            }
                          }}
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={\`p-8 \${textPosition === "right" ? "md:col-start-1" : ""}\`}>
                    <div className={\`relative w-full max-w-[720px] bg-muted rounded-lg overflow-hidden transition-all duration-1000 delay-300 \${
                      isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    } aspect-[16/10] md:aspect-[16/9]\`}>
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-contain" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon className="h-16 w-16 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Carousel Controls */}
          {(content.items || []).length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                onClick={() => {
                  const newIndex = carouselIndex === 0 ? (content.items?.length || 1) - 1 : carouselIndex - 1;
                  setCarouselIndex(newIndex);
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                onClick={() => {
                  const newIndex = carouselIndex === (content.items?.length || 1) - 1 ? 0 : carouselIndex + 1;
                  setCarouselIndex(newIndex);
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {(content.items || []).map((_: any, index: number) => (
                  <button
                    key={index}
                    className={\`w-3 h-3 rounded-full transition-all duration-300 \${
                      carouselIndex === index ? "bg-primary scale-125" : "bg-white/60 hover:bg-white/80"
                    }\`}
                    onClick={() => setCarouselIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// Courses Section Component
function CoursesSection({ content, colors }: { content: any; colors: Colors }) {
  return (
    <section className="my-8">
      <div className="mt-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">{content.title}</h3>
          {content.description && (
            <p className="text-muted-foreground">{content.description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(content.courses || []).map((course: any, index: number) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="aspect-video bg-muted flex items-center justify-center">
                {course.image ? (
                  <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                ) : (
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">{course.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="font-medium">{course.price}</span>
                    <span className="text-muted-foreground">{course.duration} hours</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section Component
function FeaturesSection({
  content,
  colors,
}: {
  content: any;
  colors: Colors;
}) {
  return (
 <section
                       
                        className="my-8 p-8 rounded-lg"
                        style={{
                          backgroundColor:
                            content.backgroundColor || "#f8fafc",
                        }}
                      >
                        <h3 className="text-3xl font-bold mb-8 text-center">
                          {content.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {(content.items || []).map(
                            (item: any, idx: number) => {
                              // Simple icon rendering - in a real implementation you'd dynamically import
                              const renderIcon = () => {
                                switch (item.icon) {
                                  case "BookOpen":
                                    return (
                                      <BookOpen className="h-12 w-12 text-primary" />
                                    );
                                  case "Users":
                                    return (
                                      <Users className="h-12 w-12 text-primary" />
                                    );
                                  case "Building":
                                    return (
                                      <Grid className="h-12 w-12 text-primary" />
                                    ); // Using Grid as Building fallback
                                  case "Star":
                                    return (
                                      <Star className="h-12 w-12 text-primary" />
                                    );
                                  case "CheckCircle":
                                    return (
                                      <CheckCircle className="h-12 w-12 text-primary" />
                                    );
                                  case "Award":
                                    return (
                                      <Star className="h-12 w-12 text-primary" />
                                    ); // Using Star as Award fallback
                                  case "Shield":
                                    return (
                                      <Shield className="h-12 w-12 text-primary" />
                                    );
                                  case "Globe":
                                    return (
                                      <Grid className="h-12 w-12 text-primary" />
                                    ); // Using Grid as Globe fallback
                                  case "Lightbulb":
                                    return (
                                      <Lightbulb className="h-12 w-12 text-primary" />
                                    );
                                  case "Target":
                                    return (
                                      <Target className="h-12 w-12 text-primary" />
                                    );
                                  case "Heart":
                                    return (
                                      <Heart className="h-12 w-12 text-primary" />
                                    );
                                  case "Zap":
                                    return (
                                      <Zap className="h-12 w-12 text-primary" />
                                    );
                                  default:
                                    return (
                                      <Star className="h-12 w-12 text-primary" />
                                    );
                                }
                              };

                              return (
                                <div
                                  key={idx}
                                  className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-white"
                                >
                                  <div className="flex flex-col items-center space-y-6">
                                    <div className="p-4 bg-primary/10 rounded-full">
                                      {renderIcon()}
                                    </div>
                                    <div>
                                      <h4 className="text-xl font-semibold mb-3">
                                        {item.title}
                                      </h4>
                                      <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </section>
 );
}

// Testimonials Section Component

function TestimonialsSection({
  content,
  colors,
}: {
  content: any;
  colors: Colors;
}) {
  return (
    <section  className="my-8">
                        <div
                          className="p-8 rounded-lg"
                          style={{
                            backgroundColor:
                              content.backgroundColor || "transparent",
                            backgroundImage:
                              content.backgroundImage?.hide === false &&
                              content.backgroundImage?.src
                                ? 'url("' + content.backgroundImage.src + '")'
                                : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <h3
                            className="text-2xl font-bold mb-6 text-center"
                            style={{
                              color:
                                content.backgroundColor ||
                                content.backgroundImage?.hide === false
                                  ? "white"
                                  : "inherit",
                              textShadow:
                                content.backgroundImage?.hide === false
                                  ? "2px 2px 4px rgba(0,0,0,0.7)"
                                  : "none",
                            }}
                          >
                              {content.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {(content.testimonials || []).map(
                              (t: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="p-6 text-center bg-white/95 backdrop-blur-sm shadow-lg"
                                >
                                  {/* Author Image */}
                                  {t.image && (
                                    <div className="mb-4 flex justify-center">
                                      <img
                                        src={t.image}
                                        alt={t.author}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                                      />
                                    </div>
                                  )}

                                  {/* Rating Stars */}
                                  {t.rating && (
                                    <div className="mb-4 flex justify-center">
                                      {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                          key={starIndex}
                                          className={"h-5 w-5 " +
                                            starIndex < t.rating
                                              ? "text-yellow-400 fill-current"
                                              : "text-gray-300"
                                            }
                                        />
                                      ))}
                                    </div>
                                  )}

                                  <p className="italic text-muted-foreground mb-4 text-base leading-relaxed">
                                    "{t.quote}"
                                  </p>
                                  <div className="border-t pt-4">
                                    <span className="font-semibold text-lg block">
                                      {t.author}
                                    </span>
                                    <div className="text-sm text-muted-foreground mt-1">
                                      {t.role}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </section>
  );
}
  // Section Renderer

export function SectionRenderer({
  section,
  activeView = 'desktop',
  colors,
  siteSchoolId,
  onViewProduct,
  onAuthView,
}: {
  section: SectionType;
  activeView?: 'desktop' | 'tablet' | 'mobile';
  colors: Colors;
  siteSchoolId?: string;
  onViewProduct?: (p: any) => void;
  onAuthView?: (view: 'signin' | 'signup') => void;
}) {
  switch (section.type) {
    case 'hero':
      return <HeroSection content={section.content} colors={colors} onAuthView={onAuthView} />;
    case 'heading':
      return <HeadingSection content={section.content} colors={colors} />;

    case 'features':
      return <FeaturesSection content={section.content} colors={colors}  />;
    case 'testimonials':
      return <TestimonialsSection content={section.content} colors={colors}  />;
    case 'cta':
      return <CtaSection content={section.content} colors={colors} onAuthView={onAuthView} />;
    case 'contact_form':
      return <ContactFormSection content={section.content} colors={colors} />;
    case 'video':
      return <VideoSection content={section.content} colors={colors} />;
    case 'contact':
      return <ContactSection content={section.content} />;
    case 'carousel':
      return <CarouselSection content={section.content} colors={colors} onAuthView={onAuthView} />;
    case 'courses':
      return <CoursesSection content={section.content} colors={colors} />;
    case 'products':
      return (
        <ProductsSection
          content={section.content}
          colors={colors}
          siteSchoolId={siteSchoolId}
          onViewProduct={onViewProduct}
        />
      );
    case 'allProducts':
      return (
        <AllProductsSection
          content={section.content}
          colors={colors}
          siteSchoolId={siteSchoolId}
           onViewProduct={onViewProduct}
        />
      );
    default:
      return null;
  }
}

// Old simple navigation - keeping for backward compatibility
export function Navigation({ pages, colors }: { pages: any[]; colors: Colors }) {
  return (
    <nav
      className="sticky top-0 z-50 px-6 py-4"
      style={{ background: colors.primary, borderBottom: \`2px solid \${colors.accent}\` }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold" style={{ color: colors.accent }}>
          {process.env.SITE_NAME}
        </Link>
        <div className="flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page._id}
              href={page.slug === 'home' ? '/' : \`/\${page.slug}\`}
              className="hover:opacity-80 transition-opacity capitalize"
              style={{ color: colors.secondary }}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default SectionRenderer;${productsSectionsTsx()}`;
}

// -----------------------
// Products and AllProducts (API-driven)
// -----------------------

// Simple product card used by product listings
function productCardTsx() {
  return `function ProductCard({ product, colors, onView }: { product: any; colors: Colors; onView?: (p: any) => void }) {
  return (
    <div className=\"rounded overflow-hidden border\" >
      <div className=\"aspect-video bg-gray-100 flex items-center justify-center\">
        {product.image ? (
          <img src={product.image} alt={product.title || product.name} className=\"w-full h-full object-cover\" />
        ) : (
          <div className=\"text-sm text-gray-400 flex items-center justify-center\">
            <ShoppingBag className=\"h-8 w-8 text-gray-400\" />
          </div>
        )}
      </div>
      <div className=\"p-4\">
        <h4 className=\"font-semibold text-lg mb-2 line-clamp-1\" >
          {product.title || product.name}
        </h4>
        {product.description && (
          <p className=\"text-sm mb-3 line-clamp-2\" >
            {product.description}
          </p>
        )}
        <div className=\"flex items-center justify-between\">
          <span className=\"text-lg font-bold\" >
            {\`\${product.price || '0'}\`}
          </span>
         
            <button onClick={() => onView && onView(product)} className=\"px-3 py-1 rounded font-medium transition-colors\" style={{ background: colors.primary, color: "white", border: '2px solid ' + colors.primary }}>
              View Details
            </button>
        
        </div>
      </div>
    </div>
  );
}`;
}

function productsSectionsTsx() {
  return `// Product card
${productCardTsx()}

// Products Section (carousel/grid depending on count)
function ProductsSection({ content, colors, siteSchoolId, onViewProduct }: { content: any; colors: Colors; siteSchoolId?: string; onViewProduct?: (p: any) => void }) {
  const [products, setProducts] = useState<any[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const params = new URLSearchParams({
      schoolId: siteSchoolId || '',
      page: String(content.page || 1),
      limit: String(content.limit || 9),
      search: String(content.search || ''),
    });
    fetch(\`\${API_BASE_URL}/api/school/courses?\${params.toString()}\`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: 'Bearer ' + token } : {}),
      },
      signal: controller.signal,
    })
      .then(async (r) => {
        const data = await r.json();
        setProducts(Array.isArray(data?.courses) ? data.courses : []);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [siteSchoolId]);

  if (!products.length) {
    return (
      <section className=\"py-12\" style={{ background: colors.background, color: colors.text }}>
        <div className=\"max-w-6xl mx-auto text-center\">No products available.</div>
      </section>
    );
  }

  const isCarousel = products.length > 3;

  return (
    <section className=\"py-12\" >
      <div className=\"max-w-6xl mx-auto\">
        {content.title && (
          <h3 className=\"text-2xl font-bold mb-4 text-center\" >{content.title}</h3>
        )}
        {content.description && (
          <p className=\"text-center mb-6\" >{content.description}</p>
        )}
        {!isCarousel ? (
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">
            {products.map((p, idx) => (
              <ProductCard key={idx} product={p} colors={colors} onView={(pp) => onViewProduct && onViewProduct(pp)} />
            ))}
          </div>
        ) : (
          <div className=\"relative\">
            <div className=\"flex justify-between items-center mb-4\">
              <button
                className=\"px-3 py-2 border rounded\"
                onClick={() => setCarouselIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, products.length - 3)))}
              >
                Prev
              </button>
              <span >
                {\`\${carouselIndex + 1} - \${Math.min(carouselIndex + 3, products.length)} of \${products.length}\`}
              </span>
              <button
                className=\"px-3 py-2 border rounded\"
                onClick={() => setCarouselIndex((prev) => (prev < products.length - 3 ? prev + 1 : 0))}
              >
                Next
              </button>
            </div>
            <div className=\"overflow-hidden\">
              <div className=\"flex transition-transform duration-300 ease-in-out gap-6\" style={{ transform: \`translateX(-\${carouselIndex * (100 / 3)}%)\` }}>
                {products.map((p, idx) => (                                                                       
                  <div key={idx} className=\"flex-none w-1/3 min-w-0\">
                    <ProductCard product={p} colors={colors} onView={(pp) => onViewProduct && onViewProduct(pp)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// All Products Section (search/sort/grid-list)
function AllProductsSection({ content, colors, siteSchoolId, onViewProduct }: { content: any; colors: Colors; siteSchoolId?: string; onViewProduct?: (p: any) => void }) {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const controller = new AbortController();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const params = new URLSearchParams({
      schoolId: siteSchoolId || '',
      page: String(content.page || 1),
      limit: String(content.limit || 999),
      search: String(content.search || ''),
    });
    fetch(\`\${API_BASE_URL}/api/school/courses?\${params.toString()}\`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: 'Bearer ' + token } : {}),
      },
      signal: controller.signal,
    })
      .then(async (r) => {
        const data = await r.json();
        setProducts(Array.isArray(data?.courses) ? data.courses : []);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [siteSchoolId]);

  const filtered = products
    .filter((c: any) => {
      const t = searchTerm.toLowerCase();
      return (
        (c.name || '').toLowerCase().includes(t) ||
        (c.title || '').toLowerCase().includes(t) ||
        (c.description || '').toLowerCase().includes(t)
      );
    })
    .sort((a: any, b: any) => {
      switch (sortBy) {
        case 'name':
          return (a.name || '').localeCompare(b.name || '');
        case 'name-desc':
          return (b.name || '').localeCompare(a.name || '');
        case 'price':
          return parseFloat(a.price || '0') - parseFloat(b.price || '0');
        case 'price-desc':
          return parseFloat(b.price || '0') - parseFloat(a.price || '0');
        case 'duration':
          return parseFloat(a.duration || '0') - parseFloat(b.duration || '0');
        default:
          return 0;
      }
    });

  return (
    <section className=\"py-12 min-h-screen\" >
      <div className=\"max-w-6xl mx-auto\">
        {content.title && (
          <h3 className=\"text-3xl font-bold mb-4 text-center\" >{content.title}</h3>
        )}
        {content.description && (
          <p className=\"text-center mb-8\">{content.description}</p>
        )}

        <div className=\"mb-6 flex flex-wrap gap-3 justify-center items-center\">
          {content.showSearch !== false && (
            <input
              className=\"px-3 py-2 border rounded w-full max-w-md\"
              placeholder=\"Search products...\"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             
            />
          )}
          {content.showSorting !== false && (
            <select
              className=\"px-3 py-2 border rounded\"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            
            >
              <option value=\"name\">Name (A-Z)</option>
              <option value=\"name-desc\">Name (Z-A)</option>
              <option value=\"price\">Price (Low to High)</option>
              <option value=\"price-desc\">Price (High to Low)</option>
              <option value=\"duration\">Duration</option>
            </select>
          )}
          <div className=\"flex gap-2\">
            <button
              className=\"px-3 py-2 border rounded\"
              onClick={() => setLayout('grid')}
             
            >
              Grid
            </button>
            <button
              className=\"px-3 py-2 border rounded\"
              onClick={() => setLayout('list')}
           
            >
              List
            </button>
          </div>
        </div>


        {filtered.length ? (
          layout === 'list' ? (
            <div className=\"space-y-4\">
              {filtered.map((c: any, i: number) => (
                <div key={i} className=\"rounded border overflow-hidden flex\" >
                  <div className=\"w-32 h-32 bg-gray-100 flex items-center justify-center flex-shrink-0\">
                    {c.image ? (
                      <img src={c.image} alt={c.name} className=\"w-full h-full object-cover\" />
                    ) : (
                      <div className=\"text-xs text-gray-400\">No image</div>
                    )}
                  </div>
                  <div className=\"flex-1 p-4\">
                    <div className=\"flex justify-between items-start mb-2\">
                      <h4 className=\"font-semibold text-lg\" >{c.name}</h4>
                      <span className=\"text-xl font-bold\" >{\`\${c.price || '0'}\`}</span>
                    </div>
                    {c.description && <p className=\"text-sm mb-2\" >{c.description}</p>}
                    {c.duration && <span className=\"text-sm\" >{c.duration} hours</span>}
                  </div>
                  <button onClick={() => onViewProduct && onViewProduct(c)} className=\"px-3 py-1 rounded font-medium transition-colors\" style={{ background: colors.primary, color: "white", border: '2px solid ' + colors.primary }}>
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
              {filtered.map((c: any, i: number) => (
                <ProductCard key={i} product={c} colors={colors} onView={(pp) => onViewProduct && onViewProduct(pp)} />
              ))}
            </div>
          )
        ) : (
          <div className=\"text-center text-sm\">No products match your search.</div>
        )}
      </div>
    </section>
  );
}`;
}

// Append the products sections to the generated code
const PRODUCTS_SECTIONS_SNIPPET = productsSectionsTsx();

function generatePages(websiteData, appPath) {
  const pagesPath = path.join(appPath, "pages");
  const colors = websiteData.settings.colors;

  // Generate index.js (home page)
  const homePage =
    websiteData.pages.find((p) => p.slug === "home") || websiteData.pages[0];
  const homePageCode = generatePageCode(homePage, websiteData, true);
  fs.writeFileSync(path.join(pagesPath, "index.tsx"), homePageCode);

  // Generate other pages
  websiteData.pages.forEach((page) => {
    if (page.slug !== "home") {
      const pageCode = generatePageCode(page, websiteData, false);
      fs.writeFileSync(path.join(pagesPath, `${page.slug}.tsx`), pageCode);
    }
  });
}

function generatePageCode(page, websiteData, isHome) {
  const colors = websiteData.settings.colors;

  return `import React, { useState } from 'react';
import Head from 'next/head';
import { SectionRenderer, Navbar, Footer } from '../components/Sections';
import { ShoppingBag, VideoIcon } from 'lucide-react';

interface PageProps {}

const colors = {
  primary: '${colors.primary}',
  secondary: '${colors.secondary}',
  accent: '${colors.accent}',
  background: '${colors.background}',
  text: '${colors.text}',
};

const pageData = ${JSON.stringify(page, null, 2)};
const websiteData = ${JSON.stringify(websiteData, null, 2)};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
export default function ${page.title.replace(
    /\s+/g,
    ""
  )}Page(props: PageProps) {
  const [activePage, setActivePage] = useState('${page._id}');
 const [authView, setAuthView] = useState<'signin' | 'signup' | 'product' | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
 

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product);
    setAuthView('product');
  };

  const handlePageChange = (pageId: string) => {
    // In a real app, this would navigate to the new page
    setActivePage(pageId);
    setAuthView(null);
   
    setSelectedProduct(null);
  };

  const handleAuthView = (view: 'signin' | 'signup') => {
    setAuthView(view);
   
    setSelectedProduct(null);
  };




      // Product Detail View Component
    const ProductDetailView = () => {
      if (!selectedProduct) return <p>loading</p>;

      return (
        <div className="min-h-screen bg-white">
          {/* Page Title and Description */}
          <div className="max-w-6xl mx-auto px-4 py-8 border-b">
            <div className="text-center space-y-4">
              <h1
                className="text-4xl font-bold text-gray-900"
                style={{
                  color: colors.text || "#000",
                }}
              >
                {selectedProduct.title || selectedProduct.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {selectedProduct.description ||
                  "Discover the details of this amazing product and enhance your learning experience."}
              </p>
            </div>
          </div>

          {/* Product Detail Content */}
          <main className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Media */}
              <div className="space-y-6">
                {/* Product Image */}
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {selectedProduct.image ? (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title || selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <ShoppingBag className="h-24 w-24 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Product Video */}
                {selectedProduct.video &&
                  selectedProduct.video.includes("youtube") && (
                    // youtube video
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src={selectedProduct.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
              </div>

              {/* Right Column - Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-4">
                    {selectedProduct.title || selectedProduct.name}
                  </h1>

                  {/* Product ID */}
                  <p className="text-sm text-muted-foreground mb-2">
                    Product ID: {selectedProduct._id || selectedProduct.id}
                  </p>

                  {/* School */}
                  {selectedProduct.school && (
                    <p className="text-lg text-muted-foreground mb-4">
                      By {selectedProduct.school}
                    </p>
                  )}

                  {/* Price */}
                  <div className="text-4xl font-bold text-primary mb-6">
                    {selectedProduct.price || "0"}
                  </div>

                  {/* Duration */}
                  {selectedProduct.duration && (
                    <div className="flex items-center gap-2 mb-6">
                      <VideoIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-lg">
                        {selectedProduct.duration} hours
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.description || "No description available."}
                  </p>
                </div>

                {/* Order Now Button */}
                <div className="pt-6">
                  <button
                    className="w-full text-lg py-6 text-white rounded-md"
                    onClick={() => setAuthView("signin")}
                    style={{
                      backgroundColor: colors.primary,
                      // color: textColor,
                    }}
                  >
                    Order Now
                  </button>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Please log in to place an order
                  </p>
                </div>

                {/* Additional Product Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Course Details</h3>
                  <div className="space-y-2">
                    {selectedProduct.level && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="capitalize">
                          {selectedProduct.level}
                        </span>
                      </div>
                    )}
                    {selectedProduct.category && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span>{selectedProduct.category}</span>
                      </div>
                    )}
                    {selectedProduct.language && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Language:</span>
                        <span>{selectedProduct.language}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    };
    const SignInPreview = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch(API_BASE_URL + "/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Login response:", data);
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    return (
      <div className="min-h-screen bg-[#F8FAFC] p-4 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          {/* Back to Home button */}
          <div className="mb-6 flex items-center gap-2 justify-center">
            <button
              style={{
                color: colors.text,
              }}
              onClick={() => setAuthView(null)}
              className="flex items-center gap-2 outline-none border-none"
            >
              <span className="text-4xl font-bold capitalize">
                {websiteData.name}
              </span>
            </button>
          </div>

          <div className="text-center mb-8">
            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              style={{
                color: colors.text,
              }}
            >
              Sign In
            </h1>
            <p className="text-gray-600">
              Welcome back! Please sign in to your account.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-black hover:text-gray-600">
                Forgot password?
              </a>
            </div>

            <button
              style={{
                backgroundColor: colors.primary,
                borderRadius: 6,
              }}
              className="w-full bg-black hover:bg-gray-800 text-white p-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => setAuthView("signup")}
                className="text-black hover:text-gray-600 font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  const SignUpPreview = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      schoolId: websiteData.schoolId,
      fullName: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (formData.password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        const response = await fetch(API_BASE_URL + "/api/auth/register-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Login response:", data);
        if (data.token) {
          setAuthView(null);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    };

    return (
      <div className="min-h-screen bg-[#F8FAFC] p-4 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          {/* Back to Home button */}
          <div className="mb-6 flex items-center gap-2 justify-center">
            <button
              onClick={() => setAuthView(null)}
              className="flex items-center gap-2 outline-none border-none"
              style={{
                color: colors.text,
              }}
            >
              <span className="text-4xl font-bold capitalize">
                {websiteData.name}
              </span>
            </button>
          </div>

          <div className="text-center mb-8">
            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              style={{
                color: colors.text,
              }}
            >
              Sign Up
            </h1>
            <p className="text-gray-600">Create your account to get started.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="signupEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                id="signupEmail"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="signupPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                id="signupPassword"
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-black hover:text-gray-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-black hover:text-gray-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              style={{
                backgroundColor: colors.text,
                borderRadius: 6,
              }}
              className="w-full bg-black hover:bg-gray-800 text-white p-2"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setAuthView("signin")}
                className="text-black hover:text-gray-600 font-medium"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };

   // Auth views would be rendered here similar to preview
  if (authView === "signin") {
    return <SignInPreview />;
  }
  if (authView === "signup") {
    return <SignUpPreview />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{websiteData.settings.seo.title}</title>
        <meta name="description" content={
          websiteData.settings.seo.description
        } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar 
        pages={websiteData.pages} 
        colors={colors} 
        siteName={websiteData.name}
        activePage={activePage}
        onPageChange={handlePageChange}
        onAuthView={handleAuthView}
      />
      
        {authView && authView === "product" ? (
        <ProductDetailView />
      ) : (
        <main className="w-full max-w-6xl mx-auto pb-16">
          <div className="p-4 min-h-[400px]">
            {pageData.sections.length === 0 && (
              <div className="text-center text-muted-foreground py-16">
                This page is empty.
              </div>
            )}
            {pageData.sections
              .sort((a, b) => a.order_index - b.order_index)
              .map((section) => (
                <SectionRenderer
                  key={section._id}
                  section={section}
                  colors={colors}
                  siteSchoolId={websiteData.schoolId}
                  onViewProduct={handleViewProduct}
                  onAuthView={handleAuthView}
                />
              ))}
          </div>
        </main>
      )}

      <Footer 
        siteName={websiteData.name} 
        pages={websiteData.pages} 
        colors={colors} 
        onPageChange={handlePageChange}
      />
    </div>
  );
}`;
}

function generateAppTsx() {
  return `import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`;
}

function generateDocumentTsx(websiteData) {
  return `import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=${websiteData.settings.fonts.heading.replace(
            " ",
            "+"
          )}:wght@400;600;700&family=${websiteData.settings.fonts.body.replace(
    " ",
    "+"
  )}:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}`;
}

function generateReadme(appName) {
  return `# ${appName}

This is a Next.js application generated from your website builder.

## Getting Started

First, install the dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
`;
}

module.exports = {
  genrateNextApp,
};
