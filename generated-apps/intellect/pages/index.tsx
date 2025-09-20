import React, { useState } from 'react';
import Head from 'next/head';
import { SectionRenderer, Navbar, Footer } from '../components/Sections';
import { ShoppingBag, VideoIcon } from 'lucide-react';

interface PageProps {}

const colors = {
  primary: '#003049',
  secondary: '#D62828',
  accent: '#F77F00',
  background: '#FCFCFC',
  text: '#00263A',
};

const pageData = {
  "_id": "68b020a98084b176679f1cc4",
  "site_id": "68b020928084b176679f1cb5",
  "title": "Home",
  "slug": "home",
  "is_homepage": false,
  "order_index": 0,
  "created_at": "2025-08-28T09:26:01.840Z",
  "updated_at": "2025-08-28T09:26:01.840Z",
  "__v": 0,
  "sections": [
    {
      "_id": "68b020b08084b176679f1cc9",
      "page_id": "68b020a98084b176679f1cc4",
      "type": "heading",
      "label": "Heading",
      "order_index": 0,
      "content": {
        "text": "Intellect School",
        "level": 1,
        "backgroundColor": "#003049",
        "backgroundImage": {
          "hide": true,
          "src": "",
          "alt": ""
        }
      },
      "created_at": "2025-08-28T09:26:08.440Z",
      "updated_at": "2025-08-28T09:26:35.909Z",
      "__v": 0
    },
    {
      "_id": "68b020d48084b176679f1cd1",
      "page_id": "68b020a98084b176679f1cc4",
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
                "pageId": "68b020ff8084b176679f1ce3"
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
            "image": "https://cdn.kastatic.org/images/lohp/trusted_content_icon.png",
            "buttons": [
              {
                "text": "View Programs",
                "link": "/courses",
                "pageId": "68b0210d8084b176679f1ce8"
              }
            ]
          }
        ]
      },
      "created_at": "2025-08-28T09:26:44.597Z",
      "updated_at": "2025-08-28T09:47:41.764Z",
      "__v": 0
    },
    {
      "_id": "68b021758084b176679f1cf7",
      "page_id": "68b020a98084b176679f1cc4",
      "type": "products",
      "label": "Products Grid",
      "order_index": 2,
      "content": {
        "title": "Our Courses",
        "description": "Explore our range of educational products",
        "showAllButton": {
          "show": false,
          "text": "Show more",
          "link": "",
          "pageId": ""
        }
      },
      "created_at": "2025-08-28T09:29:25.057Z",
      "updated_at": "2025-08-28T09:30:00.902Z",
      "__v": 0
    },
    {
      "_id": "68b0219e8084b176679f1cfd",
      "page_id": "68b020a98084b176679f1cc4",
      "type": "features",
      "label": "Features Grid",
      "order_index": 3,
      "content": {
        "title": "Features Section",
        "backgroundColor": "#f8fafc",
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
      "created_at": "2025-08-28T09:30:06.953Z",
      "updated_at": "2025-08-28T09:30:06.960Z",
      "__v": 0
    },
    {
      "_id": "68b021aa8084b176679f1d01",
      "page_id": "68b020a98084b176679f1cc4",
      "type": "carousel",
      "label": "Animated Carousel",
      "order_index": 4,
      "content": {
        "backgroundColor": "#f0f9ff",
        "textPosition": "right",
        "items": [
          {
            "title": "Differentiate your classroom and engage every student.",
            "descriptions": [
              "We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective."
            ],
            "image": "https://cdn.kastatic.org/images/lohp/faces_collage_2@2x.png",
            "buttons": [
              {
                "text": "Teachers, start here",
                "link": "/signin",
                "pageId": "signin"
              }
            ]
          }
        ]
      },
      "created_at": "2025-08-28T09:30:18.689Z",
      "updated_at": "2025-08-28T09:31:47.415Z",
      "__v": 0
    },
    {
      "_id": "68b022188084b176679f1d15",
      "page_id": "68b020a98084b176679f1cc4",
      "type": "carousel",
      "label": "Animated Carousel",
      "order_index": 5,
      "content": {
        "backgroundColor": "#f0f9ff",
        "textPosition": "left",
        "items": [
          {
            "title": "You can learn anything.",
            "descriptions": [
              "Build a deep, solid understanding in math, science, and more."
            ],
            "image": "https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png",
            "buttons": [
              {
                "text": "Learners, start here ",
                "link": "/signup",
                "pageId": "signup"
              }
            ]
          }
        ]
      },
      "created_at": "2025-08-28T09:32:08.474Z",
      "updated_at": "2025-08-28T09:32:58.478Z",
      "__v": 0
    },
    {
      "_id": "68b022658084b176679f1d24",
      "page_id": "68b020a98084b176679f1cc4",
      "type": "testimonials",
      "label": "Testimonials",
      "order_index": 6,
      "content": {
        "title": "What Our Customers Say",
        "backgroundColor": "#003049",
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
            "image": "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl95b3VuZ19naXJsX3dpdGhfc3R1ZGVudF9iYWNrcGFja19hbl82OWU5MGJmMC04OTRiLTQ3Y2QtOTlmNS1kZTBmZmU0MThiYWJfMS5wbmc.png",
            "rating": 5
          },
          {
            "quote": "The best decision I made was choosing this school for my education.",
            "author": "Michael Chen",
            "role": "Graduate",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsNGuds9X8EeqS3mg9dhACdaTaouCXhVsQg&s",
            "rating": 4
          },
          {
            "quote": "Outstanding facilities and dedicated staff. Highly recommended!",
            "author": "Emily Rodriguez",
            "role": "Parent",
            "image": "data:image/jpeg;base64,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",
            "rating": 5
          }
        ]
      },
      "created_at": "2025-08-28T09:33:25.438Z",
      "updated_at": "2025-08-28T09:36:11.185Z",
      "__v": 0
    }
  ]
};
const websiteData = {
  "_id": "68b020928084b176679f1cb5",
  "name": "Intellect",
  "schoolId": "68af0f67a29faea3413fed2e",
  "domain": "intellect.edusite.com",
  "status": "draft",
  "created_at": "2025-08-28T09:25:38.932Z",
  "updated_at": "2025-08-28T09:25:38.935Z",
  "last_updated": "2025-08-28T09:25:38.935Z",
  "__v": 0,
  "settings": {
    "colors": {
      "primary": "#003049",
      "secondary": "#D62828",
      "accent": "#F77F00",
      "background": "#FCFCFC",
      "text": "#00263A"
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
    "_id": "68b020938084b176679f1cb7",
    "site_id": "68b020928084b176679f1cb5",
    "social_links": {},
    "analytics": {},
    "created_at": "2025-08-28T09:25:39.015Z",
    "updated_at": "2025-08-28T09:26:20.195Z",
    "__v": 0
  },
  "pages": [
    {
      "_id": "68b020a98084b176679f1cc4",
      "site_id": "68b020928084b176679f1cb5",
      "title": "Home",
      "slug": "home",
      "is_homepage": false,
      "order_index": 0,
      "created_at": "2025-08-28T09:26:01.840Z",
      "updated_at": "2025-08-28T09:26:01.840Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68b020b08084b176679f1cc9",
          "page_id": "68b020a98084b176679f1cc4",
          "type": "heading",
          "label": "Heading",
          "order_index": 0,
          "content": {
            "text": "Intellect School",
            "level": 1,
            "backgroundColor": "#003049",
            "backgroundImage": {
              "hide": true,
              "src": "",
              "alt": ""
            }
          },
          "created_at": "2025-08-28T09:26:08.440Z",
          "updated_at": "2025-08-28T09:26:35.909Z",
          "__v": 0
        },
        {
          "_id": "68b020d48084b176679f1cd1",
          "page_id": "68b020a98084b176679f1cc4",
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
                    "pageId": "68b020ff8084b176679f1ce3"
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
                "image": "https://cdn.kastatic.org/images/lohp/trusted_content_icon.png",
                "buttons": [
                  {
                    "text": "View Programs",
                    "link": "/courses",
                    "pageId": "68b0210d8084b176679f1ce8"
                  }
                ]
              }
            ]
          },
          "created_at": "2025-08-28T09:26:44.597Z",
          "updated_at": "2025-08-28T09:47:41.764Z",
          "__v": 0
        },
        {
          "_id": "68b021758084b176679f1cf7",
          "page_id": "68b020a98084b176679f1cc4",
          "type": "products",
          "label": "Products Grid",
          "order_index": 2,
          "content": {
            "title": "Our Courses",
            "description": "Explore our range of educational products",
            "showAllButton": {
              "show": false,
              "text": "Show more",
              "link": "",
              "pageId": ""
            }
          },
          "created_at": "2025-08-28T09:29:25.057Z",
          "updated_at": "2025-08-28T09:30:00.902Z",
          "__v": 0
        },
        {
          "_id": "68b0219e8084b176679f1cfd",
          "page_id": "68b020a98084b176679f1cc4",
          "type": "features",
          "label": "Features Grid",
          "order_index": 3,
          "content": {
            "title": "Features Section",
            "backgroundColor": "#f8fafc",
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
          "created_at": "2025-08-28T09:30:06.953Z",
          "updated_at": "2025-08-28T09:30:06.960Z",
          "__v": 0
        },
        {
          "_id": "68b021aa8084b176679f1d01",
          "page_id": "68b020a98084b176679f1cc4",
          "type": "carousel",
          "label": "Animated Carousel",
          "order_index": 4,
          "content": {
            "backgroundColor": "#f0f9ff",
            "textPosition": "right",
            "items": [
              {
                "title": "Differentiate your classroom and engage every student.",
                "descriptions": [
                  "We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective."
                ],
                "image": "https://cdn.kastatic.org/images/lohp/faces_collage_2@2x.png",
                "buttons": [
                  {
                    "text": "Teachers, start here",
                    "link": "/signin",
                    "pageId": "signin"
                  }
                ]
              }
            ]
          },
          "created_at": "2025-08-28T09:30:18.689Z",
          "updated_at": "2025-08-28T09:31:47.415Z",
          "__v": 0
        },
        {
          "_id": "68b022188084b176679f1d15",
          "page_id": "68b020a98084b176679f1cc4",
          "type": "carousel",
          "label": "Animated Carousel",
          "order_index": 5,
          "content": {
            "backgroundColor": "#f0f9ff",
            "textPosition": "left",
            "items": [
              {
                "title": "You can learn anything.",
                "descriptions": [
                  "Build a deep, solid understanding in math, science, and more."
                ],
                "image": "https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png",
                "buttons": [
                  {
                    "text": "Learners, start here ",
                    "link": "/signup",
                    "pageId": "signup"
                  }
                ]
              }
            ]
          },
          "created_at": "2025-08-28T09:32:08.474Z",
          "updated_at": "2025-08-28T09:32:58.478Z",
          "__v": 0
        },
        {
          "_id": "68b022658084b176679f1d24",
          "page_id": "68b020a98084b176679f1cc4",
          "type": "testimonials",
          "label": "Testimonials",
          "order_index": 6,
          "content": {
            "title": "What Our Customers Say",
            "backgroundColor": "#003049",
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
                "image": "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl95b3VuZ19naXJsX3dpdGhfc3R1ZGVudF9iYWNrcGFja19hbl82OWU5MGJmMC04OTRiLTQ3Y2QtOTlmNS1kZTBmZmU0MThiYWJfMS5wbmc.png",
                "rating": 5
              },
              {
                "quote": "The best decision I made was choosing this school for my education.",
                "author": "Michael Chen",
                "role": "Graduate",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsNGuds9X8EeqS3mg9dhACdaTaouCXhVsQg&s",
                "rating": 4
              },
              {
                "quote": "Outstanding facilities and dedicated staff. Highly recommended!",
                "author": "Emily Rodriguez",
                "role": "Parent",
                "image": "data:image/jpeg;base64,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",
                "rating": 5
              }
            ]
          },
          "created_at": "2025-08-28T09:33:25.438Z",
          "updated_at": "2025-08-28T09:36:11.185Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "68b020ff8084b176679f1ce3",
      "site_id": "68b020928084b176679f1cb5",
      "title": "Contact",
      "slug": "contact",
      "is_homepage": false,
      "order_index": 1,
      "created_at": "2025-08-28T09:27:27.515Z",
      "updated_at": "2025-08-28T09:27:27.515Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68b0234e8084b176679f1d30",
          "page_id": "68b020ff8084b176679f1ce3",
          "type": "heading",
          "label": "Heading",
          "order_index": 0,
          "content": {
            "text": "Contact Us",
            "level": 1,
            "backgroundColor": "",
            "backgroundImage": {
              "hide": true,
              "src": "",
              "alt": ""
            }
          },
          "created_at": "2025-08-28T09:37:18.624Z",
          "updated_at": "2025-08-28T09:47:01.892Z",
          "__v": 0
        },
        {
          "_id": "68b023328084b176679f1d2b",
          "page_id": "68b020ff8084b176679f1ce3",
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
            "email": "attiamou3adh@gmail.com",
            "phone": "(555) 123-4567",
            "description": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            "buttonText": "Send Message",
            "buttonLink": {
              "pageId": "",
              "link": "#"
            }
          },
          "created_at": "2025-08-28T09:36:50.011Z",
          "updated_at": "2025-08-28T09:44:46.523Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "68b0210d8084b176679f1ce8",
      "site_id": "68b020928084b176679f1cb5",
      "title": "Courses",
      "slug": "courses",
      "is_homepage": false,
      "order_index": 2,
      "created_at": "2025-08-28T09:27:41.008Z",
      "updated_at": "2025-08-28T09:27:41.008Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68b025178084b176679f1d3d",
          "page_id": "68b0210d8084b176679f1ce8",
          "type": "allProducts",
          "label": "All Products Page",
          "order_index": 0,
          "content": {
            "title": "All Courses",
            "description": "Browse our complete collection of educational products",
            "showSearch": true,
            "showFilters": true,
            "showSorting": true,
            "itemsPerPage": 12,
            "layout": "grid"
          },
          "created_at": "2025-08-28T09:44:55.935Z",
          "updated_at": "2025-08-28T09:45:09.593Z",
          "__v": 0
        }
      ]
    }
  ]
};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
export default function HomePage(props: PageProps) {
  const [activePage, setActivePage] = useState('68b020a98084b176679f1cc4');
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