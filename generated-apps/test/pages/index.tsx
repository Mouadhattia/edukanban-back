import React, { useState } from "react";
import Head from "next/head";
import { SectionRenderer, Navbar, Footer } from "../components/Sections";

interface PageProps {}

const colors = {
  primary: "#000000",
  secondary: "#ffffff",
  accent: "#007bff",
  background: "#ffffff",
  text: "#000000",
};

const pageData = {
  _id: "68a8362b34933ca99c92a36e",
  site_id: "68a8360734933ca99c92a35f",
  title: "Home",
  slug: "home",
  is_homepage: false,
  order_index: 0,
  created_at: "2025-08-22T09:19:39.640Z",
  updated_at: "2025-08-22T09:19:39.640Z",
  __v: 0,
  sections: [
    {
      _id: "68a838e1b013a8506170cec9",
      page_id: "68a8362b34933ca99c92a36e",
      type: "contact_form",
      label: "Contact Form",
      order_index: 0,
      content: {
        backgroundColor: "",
        backgroundImage: {
          hide: true,
          src: "",
          alt: "",
        },
        textPosition: "left",
        image: {
          hide: false,
          src: "/placeholder.svg?height=400&width=400",
          alt: "Contact us",
        },
        title: "Get in Touch",
        address: "123 Education Street, Learning City, 54321",
        email: "attiamou3adh@gmail.com",
        phone: "(555) 123-4567",
        description:
          "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        buttonText: "Send Message",
        buttonLink: {
          pageId: "",
          link: "#",
        },
      },
      created_at: "2025-08-22T09:31:13.324Z",
      updated_at: "2025-08-22T09:31:13.328Z",
      __v: 0,
    },
  ],
};
const websiteData = {
  _id: "68a8360734933ca99c92a35f",
  name: "test",
  schoolId: "6825af9c42c008c2bc0ccd6c",
  domain: "test.edusite.com",
  status: "draft",
  created_at: "2025-08-22T09:19:03.086Z",
  updated_at: "2025-08-22T09:19:03.087Z",
  last_updated: "2025-08-22T09:19:03.087Z",
  __v: 0,
  settings: {
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#007bff",
      background: "#ffffff",
      text: "#000000",
    },
    fonts: {
      heading: "Arial",
      body: "Arial",
    },
    seo: {
      title: "test",
      description: "",
      keywords: [],
    },
    _id: "68a8360734933ca99c92a361",
    site_id: "68a8360734933ca99c92a35f",
    social_links: {},
    analytics: {},
    created_at: "2025-08-22T09:19:03.793Z",
    updated_at: "2025-08-22T09:19:03.794Z",
    __v: 0,
  },
  pages: [
    {
      _id: "68a8362b34933ca99c92a36e",
      site_id: "68a8360734933ca99c92a35f",
      title: "Home",
      slug: "home",
      is_homepage: false,
      order_index: 0,
      created_at: "2025-08-22T09:19:39.640Z",
      updated_at: "2025-08-22T09:19:39.640Z",
      __v: 0,
      sections: [
        {
          _id: "68a838e1b013a8506170cec9",
          page_id: "68a8362b34933ca99c92a36e",
          type: "contact_form",
          label: "Contact Form",
          order_index: 0,
          content: {
            backgroundColor: "",
            backgroundImage: {
              hide: true,
              src: "",
              alt: "",
            },
            textPosition: "left",
            image: {
              hide: false,
              src: "/placeholder.svg?height=400&width=400",
              alt: "Contact us",
            },
            title: "Get in Touch",
            address: "123 Education Street, Learning City, 54321",
            email: "attiamou3adh@gmail.com",
            phone: "(555) 123-4567",
            description:
              "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            buttonText: "Send Message",
            buttonLink: {
              pageId: "",
              link: "#",
            },
          },
          created_at: "2025-08-22T09:31:13.324Z",
          updated_at: "2025-08-22T09:31:13.328Z",
          __v: 0,
        },
      ],
    },
  ],
};
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
export default function HomePage(props: PageProps) {
  const [activePage, setActivePage] = useState("68a8362b34933ca99c92a36e");
  const [authView, setAuthView] = useState<"signin" | "signup" | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const handlePageChange = (pageId: string) => {
    // In a real app, this would navigate to the new page
    setActivePage(pageId);
    setAuthView(null);
    setShowProductDetail(false);
    setSelectedProduct(null);
  };

  const handleAuthView = (view: "signin" | "signup") => {
    setAuthView(view);
    setShowProductDetail(false);
    setSelectedProduct(null);
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
        <title>Home - test</title>
        <meta name="description" content="" />
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
              />
            ))}
        </div>
      </main>

      <Footer
        siteName={websiteData.name}
        pages={websiteData.pages}
        colors={colors}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
