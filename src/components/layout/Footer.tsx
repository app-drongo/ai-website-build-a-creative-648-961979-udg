'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleNewsletterSignup = () => {
    // Newsletter signup functionality
    console.log('Newsletter signup clicked');
  };

  const footerSections = [
    {
      title: 'Design Services',
      links: [
        { name: 'Web Design', href: '/' },
        { name: 'UI/UX Design', href: '/' },
        { name: 'Brand Identity', href: '/' },
        { name: 'Logo Design', href: '/' },
        { name: 'Print Design', href: '/' },
        { name: 'Mobile Design', href: '/' },
      ],
    },
    {
      title: 'Studio',
      links: [
        { name: 'Our Process', href: '/' },
        { name: 'Portfolio', href: '/' },
        { name: 'Case Studies', href: '/' },
        { name: 'Client Reviews', href: '/' },
        { name: 'Design Team', href: '/' },
        { name: 'Studio Tour', href: '/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Design Guide', href: '/' },
        { name: 'Brand Guidelines', href: '/' },
        { name: 'Design Tools', href: '/' },
        { name: 'Color Palettes', href: '/' },
        { name: 'Typography', href: '/' },
        { name: 'Inspiration', href: '/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Project Inquiry', href: '/' },
        { name: 'Design Consultation', href: '/' },
        { name: 'Revision Policy', href: '/' },
        { name: 'File Delivery', href: '/' },
        { name: 'Maintenance', href: '/' },
        { name: 'FAQ', href: '/' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-background border-t border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">PP</span>
                </div>
                <span className="font-bold text-xl">Pixel Perfect</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Crafting exceptional digital experiences through innovative design and pixel-perfect
                execution. Trusted by creative agencies and forward-thinking brands worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">studio@pixelperfect.design</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) DESIGN-1</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Creative District, Design Hub 200</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Design Inspiration Weekly</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get weekly design trends and creative insights. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="mt-12 pt-8 border-t border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <nav className="flex flex-wrap justify-center md:justify-start gap-8">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <Button onClick={handleCTA} className="px-6">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Pixel Perfect. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> by our design
                team
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our work:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border/30">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Design Process
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility Standards
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Project Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
