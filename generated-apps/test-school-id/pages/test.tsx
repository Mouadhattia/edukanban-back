import React from 'react';
import Head from 'next/head';
import { SectionRenderer, Navigation } from '../components/Sections';

interface PageProps {}

const colors = {
  primary: '#000000',
  secondary: '#ffffff',
  accent: '#222222',
  background: '#ffffff',
  text: '#000000',
};

const pageData = {
  "_id": "685981fa14b54c1d1021480e",
  "site_id": "68494ba14e1ba5d72f914b9d",
  "title": "test",
  "slug": "test",
  "is_homepage": false,
  "order_index": 2,
  "created_at": "2025-06-23T16:34:02.346Z",
  "updated_at": "2025-06-23T16:34:02.346Z",
  "__v": 0,
  "sections": [
    {
      "_id": "6859820114b54c1d10214814",
      "page_id": "685981fa14b54c1d1021480e",
      "type": "hero",
      "label": "Hero Banner",
      "order_index": 0,
      "content": {
        "title": "Welcome to Our School",
        "subtitle": "Educating tomorrow's leaders today",
        "ctaText": "Learn More",
        "ctaLink": "#",
        "backgroundImage": "http://localhost:5000/api/builder/images/1750696501784-search.png"
      },
      "created_at": "2025-06-23T16:34:09.481Z",
      "updated_at": "2025-06-23T16:35:10.191Z",
      "__v": 0
    },
    {
      "_id": "6859832214b54c1d1021483c",
      "page_id": "685981fa14b54c1d1021480e",
      "type": "testimonials",
      "label": "Testimonials",
      "order_index": 1,
      "content": {
        "title": "What Parents & Students Say",
        "testimonials": [
          {
            "name": "Sarah Johnson",
            "role": "Parent",
            "quote": "The teachers truly care about each student's success. My daughter has thrived here.",
            "avatar": "http://localhost:5000/api/builder/images/1750697152120-search.png"
          },
          {
            "name": "Michael Chen",
            "role": "Student, Grade 12",
            "quote": "The opportunities for growth both academically and personally are incredible.",
            "avatar": "http://localhost:5000/api/builder/images/1750697158770-hexgone.png"
          },
          {
            "name": "Mouadh",
            "role": "Teacher",
            "quote": "The opportunities for growth both academically and personally are incredible",
            "avatar": "http://localhost:5000/api/builder/images/1750697734878-1647529523854.jpg"
          }
        ]
      },
      "created_at": "2025-06-23T16:38:58.432Z",
      "updated_at": "2025-06-23T16:55:43.811Z",
      "__v": 0
    },
    {
      "_id": "68598d2e285f9351ae2943dc",
      "page_id": "685981fa14b54c1d1021480e",
      "type": "video",
      "label": "Video",
      "order_index": 2,
      "content": {
        "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "title": "title ",
        "description": "desc "
      },
      "created_at": "2025-06-23T17:21:50.198Z",
      "updated_at": "2025-06-23T17:24:38.083Z",
      "__v": 0
    },
    {
      "_id": "68598a4b285f9351ae294374",
      "page_id": "685981fa14b54c1d1021480e",
      "type": "contact-form",
      "label": "Contact Form",
      "order_index": 3,
      "content": {
        "title": "Get in Touch",
        "address": "123 Education Street, Learning City, 54321",
        "email": "info@schoolname.edu",
        "phone": "(555) 123-4567",
        "emailSubject": "Inquiry from School Website",
        "emailContent": "Hello, I would like to know more about your school."
      },
      "created_at": "2025-06-23T17:09:31.668Z",
      "updated_at": "2025-06-23T17:09:31.669Z",
      "__v": 0
    },
    {
      "_id": "685a6e6c8fab1621912de445",
      "page_id": "685981fa14b54c1d1021480e",
      "type": "news",
      "label": "School News",
      "order_index": 4,
      "content": {
        "title": "School News Title",
        "date": "2025-06-24",
        "content": "This is a news announcement. Edit this to add your own news.",
        "image": "http://localhost:5000/api/builder/images/1750757092696-youtubeBanner-Hero.png"
      },
      "created_at": "2025-06-24T09:22:52.777Z",
      "updated_at": "2025-06-24T09:24:54.013Z",
      "__v": 0
    }
  ]
};
const websiteData = {
  "_id": "68494ba14e1ba5d72f914b9d",
  "name": "test school Id",
  "schoolId": "6825af9c42c008c2bc0ccd6c",
  "domain": "test-school-id.edusite.com",
  "status": "draft",
  "created_at": "2025-06-11T09:25:53.486Z",
  "updated_at": "2025-06-11T09:25:53.489Z",
  "last_updated": "2025-06-11T09:25:53.489Z",
  "__v": 0,
  "settings": {
    "colors": {
      "primary": "#000000",
      "secondary": "#ffffff",
      "accent": "#222222",
      "background": "#ffffff",
      "text": "#000000"
    },
    "fonts": {
      "heading": "Arial",
      "body": "Arial"
    },
    "seo": {
      "title": "test school Id",
      "description": "",
      "keywords": []
    },
    "_id": "68494ba14e1ba5d72f914ba0",
    "site_id": "68494ba14e1ba5d72f914b9d",
    "social_links": {},
    "analytics": {},
    "created_at": "2025-06-11T09:25:53.674Z",
    "updated_at": "2025-06-25T11:11:51.088Z",
    "__v": 0
  },
  "pages": [
    {
      "_id": "684956e71468ce85d4147226",
      "site_id": "68494ba14e1ba5d72f914b9d",
      "title": "About",
      "slug": "about",
      "is_homepage": false,
      "order_index": 1,
      "created_at": "2025-06-11T10:13:59.436Z",
      "updated_at": "2025-06-11T10:13:59.436Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68593b7848344ab3fd969377",
          "page_id": "684956e71468ce85d4147226",
          "type": "heading",
          "label": "Heading",
          "order_index": 0,
          "content": {
            "text": "About page ",
            "level": 2
          },
          "created_at": "2025-06-23T11:33:12.500Z",
          "updated_at": "2025-06-23T11:33:26.347Z",
          "__v": 0
        },
        {
          "_id": "68593b8c48344ab3fd96937d",
          "page_id": "684956e71468ce85d4147226",
          "type": "hero",
          "label": "Hero Banner",
          "order_index": 1,
          "content": {
            "title": "About Us",
            "subtitle": "Educating tomorrow's leaders today",
            "ctaText": "Learn More",
            "ctaLink": "#",
            "backgroundImage": "/traditional-schoolhouse.png"
          },
          "created_at": "2025-06-23T11:33:32.935Z",
          "updated_at": "2025-06-23T11:33:41.574Z",
          "__v": 0
        },
        {
          "_id": "68593c8348344ab3fd9693c3",
          "page_id": "684956e71468ce85d4147226",
          "type": "heading",
          "label": "Heading",
          "order_index": 2,
          "content": {
            "text": "New Section Heading",
            "level": 2
          },
          "created_at": "2025-06-23T11:37:39.525Z",
          "updated_at": "2025-06-23T11:37:39.525Z",
          "__v": 0
        },
        {
          "_id": "68595e6cd8ffb81c7ae6092c",
          "page_id": "684956e71468ce85d4147226",
          "type": "hero",
          "label": "Hero Banner",
          "order_index": 3,
          "content": {
            "title": "Test Image",
            "subtitle": "Educating tomorrow's leaders today",
            "ctaText": "Learn More",
            "ctaLink": "#",
            "backgroundImage": "http://localhost:5000/api/builder/images/1750688893264-youtubeBanner-Hero.png"
          },
          "created_at": "2025-06-23T14:02:20.101Z",
          "updated_at": "2025-06-23T14:28:17.286Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "685bd85f4d4ca008adc11463",
      "site_id": "68494ba14e1ba5d72f914b9d",
      "title": "Contact",
      "slug": "contact",
      "is_homepage": false,
      "order_index": 3,
      "created_at": "2025-06-25T11:07:11.010Z",
      "updated_at": "2025-06-25T11:07:11.011Z",
      "__v": 0,
      "sections": [
        {
          "_id": "685bd8994d4ca008adc11476",
          "page_id": "685bd85f4d4ca008adc11463",
          "type": "hero",
          "label": "Hero Banner",
          "order_index": 0,
          "content": {
            "title": "Welcome to Our School",
            "subtitle": "Educating tomorrow's leaders today",
            "ctaText": "Learn More",
            "ctaLink": "#",
            "backgroundImage": "/traditional-schoolhouse.png"
          },
          "created_at": "2025-06-25T11:08:09.418Z",
          "updated_at": "2025-06-25T11:08:09.421Z",
          "__v": 0
        },
        {
          "_id": "685bd89b4d4ca008adc1147a",
          "page_id": "685bd85f4d4ca008adc11463",
          "type": "heading",
          "label": "Heading",
          "order_index": 1,
          "content": {
            "text": "New Section Heading",
            "level": 2
          },
          "created_at": "2025-06-25T11:08:11.759Z",
          "updated_at": "2025-06-25T11:08:11.762Z",
          "__v": 0
        },
        {
          "_id": "685bd8a14d4ca008adc1147e",
          "page_id": "685bd85f4d4ca008adc11463",
          "type": "testimonials",
          "label": "Testimonials",
          "order_index": 2,
          "content": {
            "title": "What Parents & Students Say",
            "testimonials": [
              {
                "name": "Sarah Johnson",
                "role": "Parent",
                "quote": "The teachers truly care about each student's success. My daughter has thrived here.",
                "avatar": "http://localhost:5000/api/builder/images/1750849767499-Capture d'Ã©cran 2025-04-25 174129.png"
              },
              {
                "name": "Michael Chen",
                "role": "Student, Grade 12",
                "quote": "The opportunities for growth both academically and personally are incredible.",
                "avatar": "http://localhost:5000/api/builder/images/1750849774474-Capture d'Ã©cran 2025-04-25 174129.png"
              }
            ]
          },
          "created_at": "2025-06-25T11:08:17.568Z",
          "updated_at": "2025-06-25T11:09:42.702Z",
          "__v": 0
        },
        {
          "_id": "685bd8c04d4ca008adc11482",
          "page_id": "685bd85f4d4ca008adc11463",
          "type": "contact-form",
          "label": "Contact Form",
          "order_index": 3,
          "content": {
            "title": "Get in Touch",
            "address": "123 Education Street, Learning City, 54321",
            "email": "info@schoolname.edu",
            "phone": "(555) 123-4567",
            "emailSubject": "Inquiry from School Website",
            "emailContent": "Hello, I would like to know more about your school."
          },
          "created_at": "2025-06-25T11:08:48.742Z",
          "updated_at": "2025-06-25T11:08:48.742Z",
          "__v": 0
        },
        {
          "_id": "685bd8c74d4ca008adc11486",
          "page_id": "685bd85f4d4ca008adc11463",
          "type": "news",
          "label": "School News",
          "order_index": 4,
          "content": {
            "title": "School News Title",
            "date": "2025-06-25",
            "content": "This is a news announcement. Edit this to add your own news.",
            "image": "http://localhost:5000/api/builder/images/1750849792517-Capture d'Ã©cran 2025-04-25 174129.png"
          },
          "created_at": "2025-06-25T11:08:55.743Z",
          "updated_at": "2025-06-25T11:09:53.964Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "684956e31468ce85d4147222",
      "site_id": "68494ba14e1ba5d72f914b9d",
      "title": "Home",
      "slug": "home",
      "is_homepage": false,
      "order_index": 0,
      "created_at": "2025-06-11T10:13:55.452Z",
      "updated_at": "2025-06-11T10:13:55.454Z",
      "__v": 0,
      "sections": [
        {
          "_id": "68498a58931c3140b4d3f552",
          "page_id": "684956e31468ce85d4147222",
          "type": "heading",
          "label": "Heading",
          "order_index": 0,
          "content": {
            "text": "Test School ",
            "level": 2
          },
          "created_at": "2025-06-11T13:53:28.772Z",
          "updated_at": "2025-06-23T10:04:29.485Z",
          "__v": 0
        },
        {
          "_id": "68498b3bed1b285cee8adfa2",
          "page_id": "684956e31468ce85d4147222",
          "type": "hero",
          "label": "Hero Banner",
          "order_index": 1,
          "content": {
            "title": "Welcome toTest School",
            "subtitle": "Educating tomorrow's leaders today",
            "ctaText": "Learn More",
            "ctaLink": "#",
            "backgroundImage": "/traditional-schoolhouse.png"
          },
          "created_at": "2025-06-11T13:57:15.953Z",
          "updated_at": "2025-06-23T10:04:43.228Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "685c03f1baa421596f56674e",
      "site_id": "68494ba14e1ba5d72f914b9d",
      "title": "SignIn",
      "slug": "signin",
      "is_homepage": false,
      "order_index": 4,
      "created_at": "2025-06-25T14:13:05.188Z",
      "updated_at": "2025-06-25T14:13:05.189Z",
      "__v": 0,
      "sections": [
        {
          "_id": "685c03f6baa421596f566753",
          "page_id": "685c03f1baa421596f56674e",
          "type": "signin",
          "label": "Sign In",
          "order_index": 0,
          "content": {
            "title": "Sign In",
            "description": "Access your account.",
            "buttonText": "Sign In",
            "buttonLink": "/login"
          },
          "created_at": "2025-06-25T14:13:10.775Z",
          "updated_at": "2025-06-25T14:13:10.777Z",
          "__v": 0
        }
      ]
    },
    {
      "_id": "685981fa14b54c1d1021480e",
      "site_id": "68494ba14e1ba5d72f914b9d",
      "title": "test",
      "slug": "test",
      "is_homepage": false,
      "order_index": 2,
      "created_at": "2025-06-23T16:34:02.346Z",
      "updated_at": "2025-06-23T16:34:02.346Z",
      "__v": 0,
      "sections": [
        {
          "_id": "6859820114b54c1d10214814",
          "page_id": "685981fa14b54c1d1021480e",
          "type": "hero",
          "label": "Hero Banner",
          "order_index": 0,
          "content": {
            "title": "Welcome to Our School",
            "subtitle": "Educating tomorrow's leaders today",
            "ctaText": "Learn More",
            "ctaLink": "#",
            "backgroundImage": "http://localhost:5000/api/builder/images/1750696501784-search.png"
          },
          "created_at": "2025-06-23T16:34:09.481Z",
          "updated_at": "2025-06-23T16:35:10.191Z",
          "__v": 0
        },
        {
          "_id": "6859832214b54c1d1021483c",
          "page_id": "685981fa14b54c1d1021480e",
          "type": "testimonials",
          "label": "Testimonials",
          "order_index": 1,
          "content": {
            "title": "What Parents & Students Say",
            "testimonials": [
              {
                "name": "Sarah Johnson",
                "role": "Parent",
                "quote": "The teachers truly care about each student's success. My daughter has thrived here.",
                "avatar": "http://localhost:5000/api/builder/images/1750697152120-search.png"
              },
              {
                "name": "Michael Chen",
                "role": "Student, Grade 12",
                "quote": "The opportunities for growth both academically and personally are incredible.",
                "avatar": "http://localhost:5000/api/builder/images/1750697158770-hexgone.png"
              },
              {
                "name": "Mouadh",
                "role": "Teacher",
                "quote": "The opportunities for growth both academically and personally are incredible",
                "avatar": "http://localhost:5000/api/builder/images/1750697734878-1647529523854.jpg"
              }
            ]
          },
          "created_at": "2025-06-23T16:38:58.432Z",
          "updated_at": "2025-06-23T16:55:43.811Z",
          "__v": 0
        },
        {
          "_id": "68598d2e285f9351ae2943dc",
          "page_id": "685981fa14b54c1d1021480e",
          "type": "video",
          "label": "Video",
          "order_index": 2,
          "content": {
            "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
            "title": "title ",
            "description": "desc "
          },
          "created_at": "2025-06-23T17:21:50.198Z",
          "updated_at": "2025-06-23T17:24:38.083Z",
          "__v": 0
        },
        {
          "_id": "68598a4b285f9351ae294374",
          "page_id": "685981fa14b54c1d1021480e",
          "type": "contact-form",
          "label": "Contact Form",
          "order_index": 3,
          "content": {
            "title": "Get in Touch",
            "address": "123 Education Street, Learning City, 54321",
            "email": "info@schoolname.edu",
            "phone": "(555) 123-4567",
            "emailSubject": "Inquiry from School Website",
            "emailContent": "Hello, I would like to know more about your school."
          },
          "created_at": "2025-06-23T17:09:31.668Z",
          "updated_at": "2025-06-23T17:09:31.669Z",
          "__v": 0
        },
        {
          "_id": "685a6e6c8fab1621912de445",
          "page_id": "685981fa14b54c1d1021480e",
          "type": "news",
          "label": "School News",
          "order_index": 4,
          "content": {
            "title": "School News Title",
            "date": "2025-06-24",
            "content": "This is a news announcement. Edit this to add your own news.",
            "image": "http://localhost:5000/api/builder/images/1750757092696-youtubeBanner-Hero.png"
          },
          "created_at": "2025-06-24T09:22:52.777Z",
          "updated_at": "2025-06-24T09:24:54.013Z",
          "__v": 0
        }
      ]
    }
  ]
};

export default function testPage(props: PageProps) {
  return (
    <>
      <Head>
        <title>test - test school Id</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation pages={websiteData.pages} colors={colors} />
      
      <main>
        {pageData.sections
          .sort((a, b) => a.order_index - b.order_index)
          .map((section) => (
            <SectionRenderer
              key={section._id}
              section={section}
              colors={colors}
            />
          ))}
      </main>
    </>
  );
}