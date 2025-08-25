import React, { useEffect, useState } from 'react';
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
                  className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-all duration-200 relative ${
                    p._id === activePage
                      ? "text-white shadow-md"
                      : "text-gray-700 hover:text-white hover:shadow-sm"
                  }`}
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
                boxShadow: `0 2px 4px ${colors.primary}20`,
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
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize transition-colors ${
                  p._id === activePage ? "text-white" : "text-gray-700 hover:text-white"
                }`}
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
                  info@{siteName.toLowerCase().replace(/\s+/g, "")}.com
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
function HeroSection({ content, colors }: { content: any; colors: Colors }) {
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
        // onClick={() => {
        //   if (content.ctaLink?.pageId) {
        //     const targetPage = pages.find(
        //       (page) => page._id === content.ctaLink.pageId
        //     );
        //     if (targetPage) {
        //       setActivePage(targetPage._id);
        //       setAuthView(null);
        //     }
        //   }
        // }}
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
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
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
        className={`max-w-2xl md:max-w-4xl mx-auto rounded-lg shadow-md p-8 flex ${flexDir} items-center md:items-start gap-8`}
        style={{
          background: colors.secondary,
          border: `2px solid ${colors.accent}`,
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
function CtaSection({ content, colors }: { content: any; colors: Colors }) {
  return (
    <section className="my-8 text-center">
      <div className="rounded-lg bg-muted/20 p-8">
        <h3 className="text-2xl font-bold mb-2">
          {content.title}
        </h3>
        <p className="mb-4">{content.description}</p>
        {content.buttonText && (
          <button className="px-6 py-3 rounded-md" style={{ backgroundColor: colors.primary, color: 'white' }}>
            {content.buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

// Contact Form Section Component
function ContactFormSection({ content, colors }: { content: any; colors: Colors }) {
  return (
    <section className="my-8">
      <div
        className="p-8 rounded-lg"
        style={{
          backgroundColor: content.backgroundColor || "transparent",
          backgroundImage: content.backgroundImage?.hide === false && content.backgroundImage?.src
            ? `url(${content.backgroundImage.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-4 ${
              content.textPosition === "center" ? "text-center" : content.textPosition === "right" ? "text-right" : "text-left"
            }`}
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
              className={`text-lg mb-8 ${
                content.textPosition === "center" ? "text-center" : content.textPosition === "right" ? "text-right" : "text-left"
              }`}
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

          <div className={`grid grid-cols-1 ${
            content.image?.hide === false ? "lg:grid-cols-2" : ""
          } gap-8 items-start`}>
            {/* Contact Form */}
            <div className={`${
              content.textPosition === "right" && content.image?.hide === false ? "lg:order-2" : ""
            }`}>
              <div className="p-6 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border bg-background" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border bg-background" />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full p-3 rounded-lg border bg-background" />
                  <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border bg-background min-h-[120px] resize-none" />
                  <button className="w-full py-3 text-lg rounded-md" style={{ backgroundColor: colors.primary, color: 'white' }}>
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
              <div className={`${content.textPosition === "right" ? "lg:order-1" : ""}`}>
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
            ? `url(${content.backgroundImage.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`max-w-4xl mx-auto ${
          content.textPosition === "center" ? "text-center" : content.textPosition === "right" ? "text-right" : "text-left"
        }`}>
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
function CarouselSection({ content, colors }: { content: any; colors: Colors }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

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
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 w-full h-full items-center gap-6 md:gap-10 ${
                  textPosition === "right" ? "md:grid-flow-col-dense" : ""
                }`}>
                  {/* Content Side */}
                  <div className={`flex flex-col p-8 gap-6 ${
                    textPosition === "right" ? "md:col-start-2" : ""
                  }`}>
                    <h2 className={`text-4xl font-bold text-gray-900 transition-all duration-1000 delay-200 ${
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}>
                      {item.title}
                    </h2>

                    <div className="space-y-3">
                      {(item.descriptions || []).map((desc: string, descIndex: number) => (
                        <p
                          key={descIndex}
                          className={`text-lg text-gray-600 transition-all duration-1000 ${
                            isActive ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                          }`}
                          style={{ transitionDelay: `${400 + descIndex * 200}ms` }}
                        >
                          {desc}
                        </p>
                      ))}
                    </div>

                    <div className={`flex gap-4 transition-all duration-1000 delay-700 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                      {(item.buttons || []).map((button: any, btnIndex: number) => (
                        <button
                          key={btnIndex}
                          className="px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: btnIndex % 2 === 0 ? colors.primary : "white",
                            color: btnIndex % 2 === 0 ? "white" : colors.primary,
                            border: `2px solid ${colors.primary}`
                          }}
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`p-8 ${textPosition === "right" ? "md:col-start-1" : ""}`}>
                    <div className={`relative w-full max-w-[720px] bg-muted rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${
                      isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    } aspect-[16/10] md:aspect-[16/9]`}>
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      carouselIndex === index ? "bg-primary scale-125" : "bg-white/60 hover:bg-white/80"
                    }`}
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
}: {
  section: SectionType;
  activeView?: 'desktop' | 'tablet' | 'mobile';
  colors: Colors;
  siteSchoolId?: string;
  onViewProduct?: (p: any) => void;
}) {
  switch (section.type) {
    case 'hero':
      return <HeroSection content={section.content} colors={colors} />;
    case 'heading':
      return <HeadingSection content={section.content} colors={colors} />;

    case 'features':
      return <FeaturesSection content={section.content} colors={colors} />;
    case 'testimonials':
      return <TestimonialsSection content={section.content} colors={colors} />;
    case 'cta':
      return <CtaSection content={section.content} colors={colors} />;
    case 'contact_form':
      return <ContactFormSection content={section.content} colors={colors} />;
    case 'video':
      return <VideoSection content={section.content} colors={colors} />;
    case 'contact':
      return <ContactSection content={section.content} />;
    case 'carousel':
      return <CarouselSection content={section.content} colors={colors} />;
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
          // onViewProduct={onViewProduct}
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
      style={{ background: colors.primary, borderBottom: `2px solid ${colors.accent}` }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold" style={{ color: colors.accent }}>
          {process.env.SITE_NAME}
        </Link>
        <div className="flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page._id}
              href={page.slug === 'home' ? '/' : `/${page.slug}`}
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

export default SectionRenderer;// Product card
function ProductCard({ product, colors, onView }: { product: any; colors: Colors; onView?: (p: any) => void }) {
  return (
    <div className="rounded overflow-hidden border" >
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.title || product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-sm text-gray-400 flex items-center justify-center">
            <ShoppingBag className="h-8 w-8 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2 line-clamp-1" >
          {product.title || product.name}
        </h4>
        {product.description && (
          <p className="text-sm mb-3 line-clamp-2" >
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold" >
            {`${product.price || '0'}`}
          </span>
         
            <button onClick={() => onView(product)} className="px-3 py-1 rounded font-medium transition-colors" style={{ background: colors.primary, color: "white", border: '2px solid ' + colors.primary }}>
              View Details
            </button>
        
        </div>
      </div>
    </div>
  );
}

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
    fetch(`${API_BASE_URL}/api/school/courses?${params.toString()}`, {
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
      <section className="py-12" style={{ background: colors.background, color: colors.text }}>
        <div className="max-w-6xl mx-auto text-center">No products available.</div>
      </section>
    );
  }

  const isCarousel = products.length > 3;

  return (
    <section className="py-12" >
      <div className="max-w-6xl mx-auto">
        {content.title && (
          <h3 className="text-2xl font-bold mb-4 text-center" >{content.title}</h3>
        )}
        {content.description && (
          <p className="text-center mb-6" >{content.description}</p>
        )}
        {!isCarousel ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p, idx) => (
              <ProductCard key={idx} product={p} colors={colors} onView={(pp) => onViewProduct && onViewProduct(pp)} />
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <button
                className="px-3 py-2 border rounded"
                onClick={() => setCarouselIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, products.length - 3)))}
              >
                Prev
              </button>
              <span >
                {`${carouselIndex + 1} - ${Math.min(carouselIndex + 3, products.length)} of ${products.length}`}
              </span>
              <button
                className="px-3 py-2 border rounded"
                onClick={() => setCarouselIndex((prev) => (prev < products.length - 3 ? prev + 1 : 0))}
              >
                Next
              </button>
            </div>
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out gap-6" style={{ transform: `translateX(-${carouselIndex * (100 / 3)}%)` }}>
                {products.map((p, idx) => (                                                                       
                  <div key={idx} className="flex-none w-1/3 min-w-0">
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
function AllProductsSection({ content, colors, siteSchoolId }: { content: any; colors: Colors; siteSchoolId?: string }) {
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
    fetch(`${API_BASE_URL}/api/school/courses?${params.toString()}`, {
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
    <section className="py-12 min-h-screen" >
      <div className="max-w-6xl mx-auto">
        {content.title && (
          <h3 className="text-3xl font-bold mb-4 text-center" >{content.title}</h3>
        )}
        {content.description && (
          <p className="text-center mb-8">{content.description}</p>
        )}

        <div className="mb-6 flex flex-wrap gap-3 justify-center items-center">
          {content.showSearch !== false && (
            <input
              className="px-3 py-2 border rounded w-full max-w-md"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             
            />
          )}
          {content.showSorting !== false && (
            <select
              className="px-3 py-2 border rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            
            >
              <option value="name">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="duration">Duration</option>
            </select>
          )}
          <div className="flex gap-2">
            <button
              className="px-3 py-2 border rounded"
              onClick={() => setLayout('grid')}
             
            >
              Grid
            </button>
            <button
              className="px-3 py-2 border rounded"
              onClick={() => setLayout('list')}
           
            >
              List
            </button>
          </div>
        </div>


        {filtered.length ? (
          layout === 'list' ? (
            <div className="space-y-4">
              {filtered.map((c: any, i: number) => (
                <div key={i} className="rounded border overflow-hidden flex" >
                  <div className="w-32 h-32 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {c.image ? (
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-xs text-gray-400">No image</div>
                    )}
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg" >{c.name}</h4>
                      <span className="text-xl font-bold" >{`${c.price || '0'}`}</span>
                    </div>
                    {c.description && <p className="text-sm mb-2" >{c.description}</p>}
                    {c.duration && <span className="text-sm" >{c.duration} hours</span>}
                  </div>
                  <button onClick={() => onView(c)} className="px-3 py-1 rounded font-medium transition-colors" style={{ background: colors.primary, color: "white", border: '2px solid ' + colors.primary }}>
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((c: any, i: number) => (
                <ProductCard key={i} product={c} colors={colors} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center text-sm">No products match your search.</div>
        )}
      </div>
    </section>
  );
}