import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

// Testimonials Section Component
function TestimonialsSection({
  content,
  activeView = 'desktop',
  colors,
}: {
  content: any;
  activeView?: 'desktop' | 'tablet' | 'mobile';
  colors: Colors;
}) {
  let gridCols = 'grid-cols-1';
  if (activeView === 'desktop') gridCols = 'md:grid-cols-3';
  else if (activeView === 'tablet') gridCols = 'md:grid-cols-2';

  return (
    <section
      className="py-16 px-6"
      style={{ color: colors.text, background: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: colors.accent }}
        >
          {content.title}
        </h2>
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {(content.testimonials || []).map(
            (testimonial: any, index: number) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md flex flex-col"
                style={{
                  background: colors.secondary,
                  color: colors.text,
                  border: '2px solid ' + colors.accent,
                }}
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border"
                    style={{
                      borderColor: colors.accent,
                      background: colors.background,
                    }}
                  />
                </div>
                <p
                  className="flex-1 italic mb-4 text-center"
                  style={{ color: colors.text }}
                >
                  {testimonial.quote}
                </p>
                <div className="flex flex-col items-center">
                  <h4
                    className="font-semibold"
                    style={{ color: colors.primary }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: colors.accent }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// Hero Section Component
function HeroSection({ content, colors }: { content: any; colors: Colors }) {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center"
      style={{ color: colors.text, background: colors.background }}
    >
      <img
        src={
          content.backgroundImage?.startsWith('http')
            ? content.backgroundImage
            : '/placeholder.svg'
        }
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ background: colors.background }}
      />
      <div
        className="absolute inset-0"
        style={{ background: colors.primary, opacity: 0.6 }}
      />
      <div className="relative z-10 text-center p-6 max-w-4xl mx-auto">
        <h1
          className="text-5xl font-bold mb-4"
          style={{ color: colors.accent }}
        >
          {content.title}
        </h1>
        <p className="text-xl mb-8" style={{ color: colors.secondary }}>
          {content.subtitle}
        </p>
        <Link
          href={content.ctaLink || '#'}
          className="inline-block px-8 py-3 rounded-md hover:opacity-90 transition-colors"
          style={{
            background: colors.accent,
            color: colors.secondary,
            border: `2px solid ${colors.primary}`,
          }}
        >
          {content.ctaText}
        </Link>
      </div>
    </section>
  );
}

// Heading Section Component
function HeadingSection({ content, colors }: { content: any; colors: Colors }) {
  const level = content.level || 2;
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <section
      className="py-12 px-4"
      style={{ color: colors.text, background: colors.background }}
    >
      <div className="container mx-auto">
        <HeadingTag
          className="text-3xl font-bold text-center"
          style={{
            color: colors.accent,
            background: colors.secondary,
            padding: '0.5rem',
            borderRadius: '0.5rem',
          }}
        >
          {content.text}
        </HeadingTag>
      </div>
    </section>
  );
}

// Contact Form Section Component
function ContactFormSection({
  content,
  colors,
}: {
  content: any;
  colors: Colors;
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: content.emailSubject || '',
    message: content.emailContent || '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would add logic to actually send the form data
  };

  return (
    <section
      className="py-16 px-6"
      style={{ background: colors.background, color: colors.text }}
    >
      <div
        className="max-w-2xl mx-auto rounded-lg shadow-md p-8"
        style={{
          background: colors.secondary,
          border: `2px solid ${colors.accent}`,
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: colors.accent }}
        >
          {content.title}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: colors.primary }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              style={{
                background: colors.background,
                color: colors.text,
                borderColor: colors.accent,
              }}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: colors.primary }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              style={{
                background: colors.background,
                color: colors.text,
                borderColor: colors.accent,
              }}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: colors.primary }}
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              style={{
                background: colors.background,
                color: colors.text,
                borderColor: colors.accent,
              }}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: colors.primary }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 min-h-[100px]"
              style={{
                background: colors.background,
                color: colors.text,
                borderColor: colors.accent,
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded font-semibold transition-colors"
            style={{
              background: colors.accent,
              color: colors.secondary,
              border: `2px solid ${colors.primary}`,
            }}
          >
            Send
          </button>
          {submitted && (
            <div className="text-green-600 text-center mt-2">
              Message sent! (demo only)
            </div>
          )}
        </form>
        <div
          className="mt-8 space-y-2 text-sm"
          style={{ color: colors.primary }}
        >
          <div>
            <strong>Address:</strong> {content.address}
          </div>
          <div>
            <strong>School Email:</strong> {content.email}
          </div>
          <div>
            <strong>Phone:</strong> {content.phone}
          </div>
        </div>
      </div>
    </section>
  );
}

// Video Section Component
function VideoSection({
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
        className={`max-w-5xl mx-auto flex ${flexDir} items-center justify-center gap-8 text-left`}
      >
        <div className="flex-1 mb-4 md:mb-0">
          <h3
            className="text-3xl font-bold mb-2"
            style={{ color: colors.accent }}
          >
            {content.title}
          </h3>
          <p className="text-lg mb-4" style={{ color: colors.secondary }}>
            {content.description}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <iframe
            width="400"
            height="225"
            src={content.videoUrl}
            title="Embedded Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              border: `2px solid ${colors.accent}`,
              background: colors.secondary,
            }}
          />
        </div>
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

// Sign In Section Component
function SignInSection({ content, colors }: { content: any; colors: Colors }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Login response:', data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <section
      className="py-16 px-6"
      style={{ color: colors.text, background: colors.background }}
    >
      <div
        className="max-w-md mx-auto rounded-lg shadow-md p-8"
        style={{
          background: colors.secondary,
          border: '2px solid ' + colors.accent,
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: colors.accent }}
        >
          {content.title}
        </h2>
        <p className="text-muted-foreground mb-6 text-center">
          {content.description}
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            style={{
              background: colors.background,
              color: colors.text,
              borderColor: colors.accent,
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            style={{
              background: colors.background,
              color: colors.text,
              borderColor: colors.accent,
            }}
          />
          <button
            className="w-full py-2 px-4 rounded font-semibold transition-colors mt-2"
            style={{
              background: colors.accent,
              color: colors.secondary,
              border: '2px solid ' + colors.primary,
            }}
            type="submit"
          >
            {content.buttonText}
          </button>
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>
          <button
            className="w-full flex items-center justify-center gap-2 border rounded px-4 py-2"
            style={{
              borderColor: colors.accent,
              background: colors.background,
              color: colors.text,
            }}
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Sign in with Google
          </button>
        </form>
      </div>
    </section>
  );
}

// Section Renderer Component
export function SectionRenderer({
  section,
  activeView = 'desktop',
  colors,
}: {
  section: SectionType;
  activeView?: 'desktop' | 'tablet' | 'mobile';
  colors: Colors;
}) {
  switch (section.type) {
    case 'hero':
      return <HeroSection content={section.content} colors={colors} />;
    case 'heading':
      return <HeadingSection content={section.content} colors={colors} />;
    case 'testimonials':
      return (
        <TestimonialsSection
          content={section.content}
          activeView={activeView}
          colors={colors}
        />
      );
    case 'contact-form':
      return <ContactFormSection content={section.content} colors={colors} />;
    case 'video':
      return (
        <VideoSection
          content={section.content}
          activeView={activeView}
          colors={colors}
        />
      );
    case 'news':
      return (
        <SchoolNewsSection
          content={section.content}
          activeView={activeView}
          colors={colors}
        />
      );
    case 'signin':
      return <SignInSection content={section.content} colors={colors} />;
    default:
      return null;
  }
}

// Navigation Component
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

export default SectionRenderer;