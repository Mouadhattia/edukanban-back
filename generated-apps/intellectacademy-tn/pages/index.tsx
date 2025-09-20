import React, { useState } from 'react';
import Head from 'next/head';
import { SectionRenderer, Navbar, Footer } from '../components/Sections';
import { ShoppingBag, VideoIcon } from 'lucide-react';

interface PageProps {}

const colors = {
  primary: '#1A535C',
  secondary: '#4ECDC4',
  accent: '#FF6B6B',
  background: '#F7FFF7',
  text: '#184A52',
};

const pageData = {
  "_id": "68b9b5cfc6c69104ed414865",
  "site_id": "68b9b5abc6c69104ed414856",
  "title": "home",
  "slug": "home",
  "is_homepage": false,
  "order_index": 0,
  "created_at": "2025-09-04T15:52:47.670Z",
  "updated_at": "2025-09-04T15:52:47.675Z",
  "__v": 0,
  "sections": [
    {
      "_id": "68b9b600c6c69104ed414871",
      "page_id": "68b9b5cfc6c69104ed414865",
      "type": "heading",
      "label": "Heading",
      "order_index": 0,
      "content": {
        "text": "Wecome to The English World",
        "level": 1,
        "backgroundColor": "#1A535C",
        "backgroundImage": {
          "hide": true,
          "src": "",
          "alt": ""
        }
      },
      "created_at": "2025-09-04T15:53:36.637Z",
      "updated_at": "2025-09-04T15:54:43.672Z",
      "__v": 0
    },
    {
      "_id": "68b9b65ac6c69104ed414882",
      "page_id": "68b9b5cfc6c69104ed414865",
      "type": "products",
      "label": "Products Grid",
      "order_index": 1,
      "content": {
        "title": "Our Products",
        "description": "Explore our range of educational products",
        "showAllButton": {
          "show": false,
          "text": "Show more",
          "link": "",
          "pageId": ""
        }
      },
      "created_at": "2025-09-04T15:55:06.690Z",
      "updated_at": "2025-09-04T15:55:06.692Z",
      "__v": 0
    },
    {
      "_id": "68b9b66bc6c69104ed414886",
      "page_id": "68b9b5cfc6c69104ed414865",
      "type": "contact_form",
      "label": "Contact Form",
      "order_index": 2,
      "content": {
        "backgroundColor": "",
        "backgroundImage": {
          "hide": true,
          "src": "",
          "alt": ""
        },
        "textPosition": "left",
        "image": {
          "hide": true,
          "src": "/placeholder.svg?height=400&width=400",
          "alt": "Contact us"
        },
        "title": "Get in Touch",
        "address": "123 Education Street, Learning City, 54321",
        "email": "amine.lamine83@gmail.com",
        "phone": "(555) 123-4567",
        "description": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        "buttonText": "Send Message",
        "buttonLink": {
          "pageId": "",
          "link": "#"
        }
      },
      "created_at": "2025-09-04T15:55:23.849Z",
      "updated_at": "2025-09-04T15:55:55.361Z",
      "__v": 0
    }
  ]
};
const websiteData = {
  "_id": "68b9b5abc6c69104ed414856",
  "name": "intellectacademy.tn",
  "schoolId": "68b9b1e84db029e48e42f43b",
  "domain": "intellectacademy-tn.edusite.com",
  "status": "draft",
  "created_at": "2025-09-04T15:52:11.414Z",
  "updated_at": "2025-09-04T15:58:11.195Z",
  "last_updated": "2025-09-04T15:58:11.195Z",
  "__v": 0,
  "settings": {
    "colors": {
      "primary": "#1A535C",
      "secondary": "#4ECDC4",
      "accent": "#FF6B6B",
      "background": "#F7FFF7",
      "text": "#184A52"
    },
    "fonts": {
      "heading": "Arial",
      "body": "Arial"
    },
    "seo": {
      "title": "intellectacademy.tn",
      "description": "",
      "keywords": []
    },
    "_id": "68b9b5abc6c69104ed414858",
    "site_id": "68b9b5abc6c69104ed414856",
    "social_links": {},
    "analytics": {},
    "created_at": "2025-09-04T15:52:11.537Z",
    "updated_at": "2025-09-04T15:54:33.843Z",
    "__v": 0
  },
  "pages": [
    {
      "_id": "68b9b5cfc6c69104ed414865",
      "site_id": "68b9b5abc6c69104ed414856",
      "title": "home",
      "slug": "home",
      "is_homepage": false,
      "order_index": 0,
      "created_at": "2025-09-04T15:52:47.670Z",
      "updated_at": "2025-09-04T15:52:47.675Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68b9b600c6c69104ed414871",
          "page_id": "68b9b5cfc6c69104ed414865",
          "type": "heading",
          "label": "Heading",
          "order_index": 0,
          "content": {
            "text": "Wecome to The English World",
            "level": 1,
            "backgroundColor": "#1A535C",
            "backgroundImage": {
              "hide": true,
              "src": "",
              "alt": ""
            }
          },
          "created_at": "2025-09-04T15:53:36.637Z",
          "updated_at": "2025-09-04T15:54:43.672Z",
          "__v": 0
        },
        {
          "_id": "68b9b65ac6c69104ed414882",
          "page_id": "68b9b5cfc6c69104ed414865",
          "type": "products",
          "label": "Products Grid",
          "order_index": 1,
          "content": {
            "title": "Our Products",
            "description": "Explore our range of educational products",
            "showAllButton": {
              "show": false,
              "text": "Show more",
              "link": "",
              "pageId": ""
            }
          },
          "created_at": "2025-09-04T15:55:06.690Z",
          "updated_at": "2025-09-04T15:55:06.692Z",
          "__v": 0
        },
        {
          "_id": "68b9b66bc6c69104ed414886",
          "page_id": "68b9b5cfc6c69104ed414865",
          "type": "contact_form",
          "label": "Contact Form",
          "order_index": 2,
          "content": {
            "backgroundColor": "",
            "backgroundImage": {
              "hide": true,
              "src": "",
              "alt": ""
            },
            "textPosition": "left",
            "image": {
              "hide": true,
              "src": "/placeholder.svg?height=400&width=400",
              "alt": "Contact us"
            },
            "title": "Get in Touch",
            "address": "123 Education Street, Learning City, 54321",
            "email": "amine.lamine83@gmail.com",
            "phone": "(555) 123-4567",
            "description": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            "buttonText": "Send Message",
            "buttonLink": {
              "pageId": "",
              "link": "#"
            }
          },
          "created_at": "2025-09-04T15:55:23.849Z",
          "updated_at": "2025-09-04T15:55:55.361Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "68b9b69ac6c69104ed41488e",
      "site_id": "68b9b5abc6c69104ed414856",
      "title": "Courses",
      "slug": "courses",
      "is_homepage": false,
      "order_index": 1,
      "created_at": "2025-09-04T15:56:10.839Z",
      "updated_at": "2025-09-04T15:56:10.840Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68b9b6abc6c69104ed414893",
          "page_id": "68b9b69ac6c69104ed41488e",
          "type": "allProducts",
          "label": "All Products Page",
          "order_index": 0,
          "content": {
            "title": "All Products",
            "description": "Browse our complete collection of educational products",
            "showSearch": true,
            "showFilters": true,
            "showSorting": true,
            "itemsPerPage": 12,
            "layout": "grid"
          },
          "created_at": "2025-09-04T15:56:27.667Z",
          "updated_at": "2025-09-04T15:56:27.674Z",
          "__v": 0
        }
      ]
    }
  ]
};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
export default function homePage(props: PageProps) {
  const [activePage, setActivePage] = useState('68b9b5cfc6c69104ed414865');
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
      role: "student",
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
          setAuthView("signin");
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
            {/* role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                id="role"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              
              </select>
            </div>
            {/* password */}
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
}