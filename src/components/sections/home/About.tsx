'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Palette,
  Code,
  Megaphone,
} from 'lucide-react';

export default function About() {
  const handleViewPortfolio = () => {
    window.location.href = '/portfolio';
  };

  const handleStartProject = () => {
    window.location.href = '/contact';
  };

  const handleReadStory = () => {
    window.location.href = '/story';
  };

  const handleViewTeam = () => {
    window.location.href = '/team';
  };

  const values = [
    {
      icon: Palette,
      title: 'Creative Excellence',
      description:
        'We push creative boundaries to deliver visually stunning designs that captivate audiences and drive engagement across all touchpoints.',
    },
    {
      icon: Code,
      title: 'Technical Mastery',
      description:
        'Our development expertise ensures every creative vision is brought to life with flawless functionality and optimal performance.',
    },
    {
      icon: Megaphone,
      title: 'Strategic Impact',
      description:
        'Every design decision is backed by strategic thinking, ensuring your brand message resonates with your target audience.',
    },
    {
      icon: Heart,
      title: 'Client Partnership',
      description:
        'We believe in collaborative relationships, working closely with clients to understand their vision and exceed expectations.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Studio Founded', icon: Award },
    { value: '200+', label: 'Projects Delivered', icon: Target },
    { value: '98%', label: 'Client Retention', icon: TrendingUp },
    { value: '15+', label: 'Industries Served', icon: Globe },
  ];

  const team = [
    {
      name: 'Alexandra Rivera',
      role: 'Creative Director & Founder',
      image: 'AR',
      bio: 'Award-winning designer with 12+ years crafting brand identities for Fortune 500 companies.',
    },
    {
      name: 'Marcus Thompson',
      role: 'Lead Developer',
      image: 'MT',
      bio: 'Full-stack developer specializing in interactive web experiences and e-commerce platforms.',
    },
    {
      name: 'Sofia Chen',
      role: 'Brand Strategist',
      image: 'SC',
      bio: 'Former marketing director turned brand consultant, expert in digital storytelling and positioning.',
    },
    {
      name: 'James Wilson',
      role: 'UX/UI Designer',
      image: 'JW',
      bio: 'User experience specialist focused on creating intuitive interfaces that convert visitors into customers.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Pixel Perfect
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital Experiences That
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Inspire & Convert
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate creative agency specializing in web design, branding, and digital
            marketing. Our mission is to transform your vision into compelling digital experiences
            that drive results.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Creative Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by a team of designers and developers who believed that great design
                should be both beautiful and functional, Pixel Perfect emerged from a simple
                observation: too many brands were settling for mediocre digital experiences.
              </p>
              <p>
                We started with a portfolio of local businesses and a commitment to pixel-perfect
                execution. Today, we've grown into a full-service creative agency, helping brands
                across industries tell their stories through compelling design and strategic digital
                marketing.
              </p>
              <p>
                From startup logos to enterprise web platforms, we've delivered over 200 successful
                projects, each one crafted with the same attention to detail and creative passion
                that defines our studio.
              </p>
            </div>
            <Button onClick={handleReadStory} className="group">
              Explore Our Portfolio
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every pixel matters. Every interaction counts. We design with purpose and
                      develop with precision."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Alexandra Rivera, Creative Director
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Drives Us</h3>
            <p className="text-muted-foreground">
              The core principles that shape our creative process and define our commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Creative Team</h3>
            <p className="text-muted-foreground">
              The talented creatives, strategists, and developers who bring your vision to life with
              passion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleViewTeam} variant="outline" className="group">
              Meet the Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Pixel Perfect transformed our entire brand identity and digital presence. Their
                creative vision and technical expertise resulted in a 300% increase in online
                engagement and conversions."
              </blockquote>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Kim</div>
                  <div className="text-sm text-muted-foreground">
                    Marketing Director, TechFlow Solutions
                  </div>
                </div>
              </div>
              <Button onClick={handleStartProject} size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
