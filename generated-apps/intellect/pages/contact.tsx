import React, { useState } from 'react';
import Head from 'next/head';
import { SectionRenderer, Navbar, Footer } from '../components/Sections';
import { ShoppingBag, VideoIcon } from 'lucide-react';

interface PageProps {}

const colors = {
  primary: '#14213D',
  secondary: '#FCA311',
  accent: '#E5E5E5',
  background: '#FFFFFF',
  text: '#101830',
};

const pageData = {
  "_id": "68a8552ea80eaaa9404925c8",
  "site_id": "6890776e3ef483401bd09ed2",
  "title": "Contact",
  "slug": "contact",
  "is_homepage": false,
  "order_index": 2,
  "created_at": "2025-08-22T11:31:58.910Z",
  "updated_at": "2025-08-22T11:31:58.911Z",
  "__v": 0,
  "sections": [
    {
      "_id": "68a8554ca80eaaa9404925d2",
      "page_id": "68a8552ea80eaaa9404925c8",
      "type": "heading",
      "label": "Heading",
      "order_index": 0,
      "content": {
        "text": "Contact",
        "level": 1,
        "backgroundColor": "",
        "backgroundImage": {
          "hide": true,
          "src": "",
          "alt": ""
        }
      },
      "created_at": "2025-08-22T11:32:28.601Z",
      "updated_at": "2025-08-22T11:32:44.173Z",
      "__v": 0
    },
    {
      "_id": "68a85537a80eaaa9404925cd",
      "page_id": "68a8552ea80eaaa9404925c8",
      "type": "contact_form",
      "label": "Contact Form",
      "order_index": 1,
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
        "email": "info@schoolname.edu",
        "phone": "(555) 123-4567",
        "description": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        "buttonText": "Send Message",
        "buttonLink": {
          "pageId": "",
          "link": "#"
        }
      },
      "created_at": "2025-08-22T11:32:07.848Z",
      "updated_at": "2025-08-22T12:25:21.802Z",
      "__v": 0
    }
  ]
};
const websiteData = {
  "_id": "6890776e3ef483401bd09ed2",
  "name": "Intellect",
  "schoolId": "6825af9c42c008c2bc0ccd6c",
  "domain": "intellect.edusite.com",
  "status": "draft",
  "created_at": "2025-08-04T09:03:42.724Z",
  "updated_at": "2025-08-04T09:03:42.725Z",
  "last_updated": "2025-08-04T09:03:42.725Z",
  "__v": 0,
  "settings": {
    "colors": {
      "primary": "#14213D",
      "secondary": "#FCA311",
      "accent": "#E5E5E5",
      "background": "#FFFFFF",
      "text": "#101830"
    },
    "fonts": {
      "heading": "Arial",
      "body": "Arial"
    },
    "seo": {
      "title": "Intellect",
      "description": "",
      "keywords": []
    },
    "_id": "6890776e3ef483401bd09ed4",
    "site_id": "6890776e3ef483401bd09ed2",
    "social_links": {},
    "analytics": {},
    "created_at": "2025-08-04T09:03:42.802Z",
    "updated_at": "2025-08-22T11:30:29.059Z",
    "__v": 0
  },
  "pages": [
    {
      "_id": "689077753ef483401bd09ede",
      "site_id": "6890776e3ef483401bd09ed2",
      "title": "Home",
      "slug": "home",
      "is_homepage": false,
      "order_index": 0,
      "created_at": "2025-08-04T09:03:49.479Z",
      "updated_at": "2025-08-04T09:03:49.480Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68a852a9a80eaaa940492561",
          "page_id": "689077753ef483401bd09ede",
          "type": "heading",
          "label": "Heading",
          "order_index": 0,
          "content": {
            "text": "New Section Heading",
            "level": 2,
            "backgroundColor": "#14213D",
            "backgroundImage": {
              "hide": true,
              "src": "",
              "alt": ""
            }
          },
          "created_at": "2025-08-22T11:21:13.320Z",
          "updated_at": "2025-08-22T11:30:38.074Z",
          "__v": 0
        },
        {
          "_id": "68a852b5a80eaaa940492565",
          "page_id": "689077753ef483401bd09ede",
          "type": "carousel",
          "label": "Animated Carousel",
          "order_index": 1,
          "content": {
            "backgroundColor": "#f0f9ff",
            "textPosition": "left",
            "items": [
              {
                "title": "Welcome to Our School",
                "descriptions": [
                  "Discover excellence in education",
                  "Building tomorrow's leaders today",
                  "Join our community of learners"
                ],
                "image": "https://iread.education/static/media/girl-image.4cef0f73b3900c512313.png",
                "buttons": [
                  {
                    "text": "Learn More",
                    "link": "/contact",
                    "pageId": "68a8552ea80eaaa9404925c8"
                  },
                  {
                    "text": "Apply Now",
                    "link": "/signup",
                    "pageId": "signup"
                  }
                ]
              },
              {
                "title": "Academic Excellence",
                "descriptions": [
                  "Innovative curriculum design",
                  "Expert faculty guidance",
                  "State-of-the-art facilities"
                ],
                "image": "https://morweb.org/get/files/image/galleries/A_woman_sits_at_a_table_reading_a_book_while_her_laptop_is_open_in_front_of_her.png?resize=700x0",
                "buttons": [
                  {
                    "text": "View Programs",
                    "link": "/courses",
                    "pageId": "68a85506a80eaaa9404925bd"
                  }
                ]
              }
            ]
          },
          "created_at": "2025-08-22T11:21:25.769Z",
          "updated_at": "2025-08-22T11:34:06.456Z",
          "__v": 0
        },
        {
          "_id": "68a852c1a80eaaa94049256f",
          "page_id": "689077753ef483401bd09ede",
          "type": "products",
          "label": "Products Grid",
          "order_index": 2,
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
          "created_at": "2025-08-22T11:21:37.052Z",
          "updated_at": "2025-08-22T11:21:37.055Z",
          "__v": 0
        },
        {
          "_id": "68a852dda80eaaa940492573",
          "page_id": "689077753ef483401bd09ede",
          "type": "carousel",
          "label": "Animated Carousel",
          "order_index": 3,
          "content": {
            "backgroundColor": "#f0f9ff",
            "textPosition": "right",
            "items": [
              {
                "title": "Welcome to Our School",
                "descriptions": [
                  "Discover excellence in education"
                ],
                "image": "https://cdn-icons-png.flaticon.com/512/10240/10240131.png",
                "buttons": [
                  {
                    "text": "Learn More",
                    "link": "/contact",
                    "pageId": "68a8552ea80eaaa9404925c8"
                  }
                ]
              }
            ]
          },
          "created_at": "2025-08-22T11:22:05.300Z",
          "updated_at": "2025-08-22T11:34:29.473Z",
          "__v": 0
        },
        {
          "_id": "68a8531ca80eaaa94049258e",
          "page_id": "689077753ef483401bd09ede",
          "type": "testimonials",
          "label": "Testimonials",
          "order_index": 4,
          "content": {
            "title": "What Our Students Say",
            "backgroundColor": "#14213D",
            "backgroundImage": {
              "hide": true,
              "src": "",
              "alt": ""
            },
            "testimonials": [
              {
                "quote": "This school has transformed my learning experience. The teachers are amazing!",
                "author": "Sarah Johnson",
                "role": "Student",
                "image": "https://static.vecteezy.com/system/resources/thumbnails/032/712/071/small/a-young-african-american-man-in-a-brown-t-shirt-poses-against-a-gray-background-man-looking-at-camera-ai-generative-photo.jpg",
                "rating": 4
              },
              {
                "quote": "The best decision I made was choosing this school for my education.",
                "author": "Michael Chen",
                "role": "Graduate",
                "image": "data:image/jpeg;base64,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",
                "rating": 5
              },
              {
                "quote": "Outstanding facilities and dedicated staff. Highly recommended!",
                "author": "Emily Rodriguez",
                "role": "Parent",
                "image": "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
                "rating": 3
              }
            ]
          },
          "created_at": "2025-08-22T11:23:08.544Z",
          "updated_at": "2025-08-22T11:30:45.725Z",
          "__v": 0
        },
        {
          "_id": "68a854b1a80eaaa9404925ab",
          "page_id": "689077753ef483401bd09ede",
          "type": "features",
          "label": "Features Grid",
          "order_index": 5,
          "content": {
            "title": "Features Section",
            "backgroundColor": "#FFFFFF",
            "items": [
              {
                "title": "Quality Education",
                "description": "Providing excellent education with modern teaching methods",
                "icon": "BookOpen"
              },
              {
                "title": "Expert Teachers",
                "description": "Learn from experienced and qualified educators",
                "icon": "Users"
              },
              {
                "title": "Modern Facilities",
                "description": "State-of-the-art classrooms and learning environments",
                "icon": "Building"
              }
            ]
          },
          "created_at": "2025-08-22T11:29:53.837Z",
          "updated_at": "2025-08-22T11:31:06.386Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "68a85506a80eaaa9404925bd",
      "site_id": "6890776e3ef483401bd09ed2",
      "title": "Courses",
      "slug": "courses",
      "is_homepage": false,
      "order_index": 1,
      "created_at": "2025-08-22T11:31:18.633Z",
      "updated_at": "2025-08-22T11:31:18.634Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68a8550fa80eaaa9404925c2",
          "page_id": "68a85506a80eaaa9404925bd",
          "type": "allProducts",
          "label": "All Products Page",
          "order_index": 0,
          "content": {
            "title": "Courses",
            "description": "Browse our complete collection of educational products",
            "showSearch": true,
            "showFilters": true,
            "showSorting": true,
            "itemsPerPage": 12,
            "layout": "grid"
          },
          "created_at": "2025-08-22T11:31:27.992Z",
          "updated_at": "2025-08-22T11:31:50.342Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "68a8552ea80eaaa9404925c8",
      "site_id": "6890776e3ef483401bd09ed2",
      "title": "Contact",
      "slug": "contact",
      "is_homepage": false,
      "order_index": 2,
      "created_at": "2025-08-22T11:31:58.910Z",
      "updated_at": "2025-08-22T11:31:58.911Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68a8554ca80eaaa9404925d2",
          "page_id": "68a8552ea80eaaa9404925c8",
          "type": "heading",
          "label": "Heading",
          "order_index": 0,
          "content": {
            "text": "Contact",
            "level": 1,
            "backgroundColor": "",
            "backgroundImage": {
              "hide": true,
              "src": "",
              "alt": ""
            }
          },
          "created_at": "2025-08-22T11:32:28.601Z",
          "updated_at": "2025-08-22T11:32:44.173Z",
          "__v": 0
        },
        {
          "_id": "68a85537a80eaaa9404925cd",
          "page_id": "68a8552ea80eaaa9404925c8",
          "type": "contact_form",
          "label": "Contact Form",
          "order_index": 1,
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
            "email": "info@schoolname.edu",
            "phone": "(555) 123-4567",
            "description": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            "buttonText": "Send Message",
            "buttonLink": {
              "pageId": "",
              "link": "#"
            }
          },
          "created_at": "2025-08-22T11:32:07.848Z",
          "updated_at": "2025-08-22T12:25:21.802Z",
          "__v": 0
        }
      ]
    }
  ]
};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
export default function ContactPage(props: PageProps) {
  const [activePage, setActivePage] = useState('68a8552ea80eaaa9404925c8');
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
}