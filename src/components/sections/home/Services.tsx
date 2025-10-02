'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Palette,
  Brush,
  Camera,
  Monitor,
  Megaphone,
  Sparkles,
  Video,
  Globe,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      description:
        'Stunning, responsive websites that captivate audiences and drive conversions through innovative design and seamless functionality.',
      icon: Monitor,
      badge: 'Most Popular',
      features: ['Responsive Design', 'Custom CMS', 'E-commerce Ready'],
      link: '/services/web-design',
      projects: '150+ Projects',
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      description:
        'Complete brand transformations from logo design to comprehensive brand guidelines that make lasting impressions.',
      icon: Sparkles,
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
      link: '/services/branding',
      projects: '200+ Brands',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description:
        "Strategic campaigns that amplify your brand's voice across all digital channels and maximize your online presence.",
      icon: Megaphone,
      badge: 'High ROI',
      features: ['Social Media', 'Content Strategy', 'PPC Campaigns'],
      link: '/services/digital-marketing',
      projects: '300% Avg Growth',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description:
        'Eye-catching visuals for print and digital media that communicate your message with creative excellence.',
      icon: Palette,
      features: ['Print Design', 'Digital Graphics', 'Packaging Design'],
      link: '/services/graphic-design',
      projects: '500+ Designs',
    },
    {
      id: 'photography',
      title: 'Creative Photography',
      description:
        "Professional photography services that capture your brand's essence through compelling visual storytelling.",
      icon: Camera,
      features: ['Product Photography', 'Brand Portraits', 'Event Coverage'],
      link: '/services/photography',
      projects: '1000+ Photos',
    },
    {
      id: 'video-production',
      title: 'Video Production',
      description:
        'Cinematic video content that engages audiences and brings your brand story to life with professional production quality.',
      icon: Video,
      features: ['Brand Videos', 'Commercials', 'Social Content'],
      link: '/services/video-production',
      projects: '100+ Videos',
    },
  ];

  const handleLearnMore = (serviceId: string) => {
    console.log(`Navigating to service: ${serviceId}`);
    // Navigation logic would go here
  };

  const handleScheduleConsultation = () => {
    console.log('Opening consultation booking');
    // Consultation booking logic
  };

  const handleViewAllServices = () => {
    console.log('Navigating to services overview');
    // Services page navigation
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Creative Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to creation, we deliver exceptional creative solutions that elevate your
            brand and captivate your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => {
            const Icon = service.icon;

            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <div className="text-sm text-primary font-medium">{service.projects}</div>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* View Portfolio Button */}
                  <Button
                    variant="ghost"
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    onClick={() => handleLearnMore(service.id)}
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to bring your creative vision to life?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleScheduleConsultation}>
              Start Project
            </Button>
            <Button size="lg" variant="outline" onClick={handleViewAllServices}>
              View Portfolio
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
