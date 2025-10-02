'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Sparkles, Palette, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // View Portfolio - showcase work
  };

  const handleSecondaryAction = () => {
    router.push('/'); // Start Project - begin collaboration
  };
  // ACTION_PLACEHOLDER_END

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80',
      title: 'Crafting Digital',
      highlight: 'Masterpieces',
      description:
        'Award-winning web design and branding that transforms businesses into unforgettable brands',
      service: 'Web Design',
      icon: Globe,
    },
    {
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&q=80',
      title: 'Brand Identity',
      highlight: 'Reimagined',
      description:
        'From logo to lifestyle - we create cohesive brand experiences that resonate with your audience',
      service: 'Branding',
      icon: Palette,
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
      title: 'Digital Marketing',
      highlight: 'Excellence',
      description:
        'Strategic campaigns that drive engagement, conversions, and sustainable business growth',
      service: 'Marketing',
      icon: Sparkles,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Dynamic Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20" />
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-ping" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-secondary/50 rounded-full animate-bounce" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Service Badge */}
          <div className="mb-8">
            {slides.map((slide, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-6 py-2 text-sm font-medium transition-all duration-500 ${
                  index === currentSlide
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-4 absolute'
                }`}
              >
                <slide.icon className="mr-2 size-4" />
                {slide.service} Specialists
              </Badge>
            ))}
          </div>

          {/* Dynamic Headlines */}
          <div className="mb-8 relative h-48 sm:h-40 md:h-32">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                  {slide.title}
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {slide.highlight}
                  </span>
                </h1>
              </div>
            ))}
          </div>

          {/* Dynamic Descriptions */}
          <div className="mb-12 relative h-16">
            {slides.map((slide, index) => (
              <p
                key={index}
                className={`absolute inset-0 text-lg sm:text-xl text-muted-foreground max-w-3xl transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                {slide.description}
              </p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="group text-base px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handlePrimaryAction}
            >
              View Portfolio
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-4 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
              onClick={handleSecondaryAction}
            >
              <Play className="mr-2 size-5" />
              Start Project
            </Button>
          </div>

          {/* Enhanced Slide Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`group relative transition-all duration-500 ${
                    index === currentSlide ? 'w-16 h-2' : 'w-8 h-2 hover:w-12'
                  }`}
                  aria-label={`View ${slide.service} showcase`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? 'bg-primary shadow-lg shadow-primary/30'
                        : 'bg-muted group-hover:bg-muted-foreground/70'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="text-sm text-muted-foreground font-medium">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      {/* Pixel Perfect Branding */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground">Pixel Perfect</div>
          <div className="text-sm text-muted-foreground">Creative Agency</div>
        </div>
      </div>
    </section>
  );
}
