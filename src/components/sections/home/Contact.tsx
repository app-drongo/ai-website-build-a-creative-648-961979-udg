'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Palette,
  Monitor,
  TrendingUp,
  Award,
  Users,
  Calendar,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project inquiry submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Creative Consultation',
      description: 'Discuss your design vision',
      contact: 'hello@pixelperfect.studio',
      action: 'Send Brief',
    },
    {
      icon: Phone,
      title: 'Project Hotline',
      description: 'Speak with our creative team',
      contact: '+1 (555) 847-2963',
      action: 'Schedule Call',
    },
    {
      icon: MessageSquare,
      title: 'Design Chat',
      description: 'Real-time creative support',
      contact: 'Available during studio hours',
      action: 'Start Chat',
    },
  ];

  const studioLocations = [
    {
      city: 'Creative District, NYC',
      address: '247 Design Avenue, Studio 12',
      timezone: 'EST (UTC-5)',
      specialty: 'Web Design & Branding',
    },
    {
      city: 'Arts Quarter, LA',
      address: '891 Creative Boulevard, Loft 8',
      timezone: 'PST (UTC-8)',
      specialty: 'Digital Marketing & Video',
    },
  ];

  const services = [
    'Web Design',
    'Brand Identity',
    'Digital Marketing',
    'Graphic Design',
    'Photography',
    'Video Production',
  ];

  const budgetRanges = ['$5K - $15K', '$15K - $30K', '$30K - $50K', '$50K+'];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Palette className="size-4 mr-2" />
            Start Your Creative Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Something
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let's bring your vision to life. Share your project details and our creative team will
            craft a solution that exceeds your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Project Brief Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Tell Us About Your Project
              </CardTitle>
              <CardDescription>
                Share your creative vision and we'll provide a detailed proposal within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your project goals, target audience, timeline, and any specific requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" className="flex-1 text-base py-6 group">
                    Start Project
                    <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSecondaryAction}
                    className="flex-1 text-base py-6"
                  >
                    View Portfolio
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Studio Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Monitor className="size-5 text-primary" />
                Connect With Our Team
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Studio Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Pixel Perfect Studios
              </h3>
              <div className="space-y-3">
                {studioLocations.map((studio, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{studio.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{studio.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {studio.timezone}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {studio.specialty}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Hours & Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <Clock className="size-5 text-primary" />
                    Studio Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mon - Thu</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weekend</span>
                      <span className="text-muted-foreground">By appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <Award className="size-5 text-primary" />
                    Quick Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="size-4 text-primary" />
                      <span>200+ Projects Delivered</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="size-4 text-primary" />
                      <span>98% Client Retention</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="size-4 text-primary" />
                      <span>24-48hr Response Time</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to Begin?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join 200+ brands who trust Pixel Perfect with their creative vision.
                </p>
                <Button onClick={handlePrimaryAction} className="w-full">
                  View Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
