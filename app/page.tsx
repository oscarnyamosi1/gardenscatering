import { Layout } from '@/components/layout/Layout';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, MapPin, Clock, Users, Star, Utensils } from "lucide-react";

export default function HomePage() {
  return (
    <Layout>
      <div className="w-full">
        {/* Hero - Full-screen immersive with offset content */}
        <section className="relative min-h-screen flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745926/WhatsApp_Image_2026-06-29_at_15.44.55_1_nu7tnw.jpg"
              alt="Upscale African Catering Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 bg-background/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-white/80 tracking-wider">
                  A Taste of Heritage, Elevated
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.95] tracking-tight">
                African
                <br />
                <span className="italic text-primary/90">Catering</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 max-w-xl font-light leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-2xl">
                Where traditional warmth meets modern elegance. We craft unforgettable culinary experiences for your most cherished moments.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full px-10 h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl shadow-primary/20" asChild>
                  <Link href="/booking">Book Your Event</Link>
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-base text-white hover:bg-white/10 border border-white/20" asChild>
                  <Link href="/menu">Explore Menu</Link>
                </Button>
              </div>

              {/* Quick stats floating */}
              <div className="flex gap-12 pt-8 border-t border-white/10">
                <div>
                  <p className="text-2xl font-serif text-white">200+</p>
                  <p className="text-sm text-white/60">Events Hosted</p>
                </div>
                <div>
                  <p className="text-2xl font-serif text-white">4.9★</p>
                  <p className="text-sm text-white/60">Client Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-serif text-white">12</p>
                  <p className="text-sm text-white/60">African Cuisines</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About - Split screen with diagonal offset */}
        <section className="py-28 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <span className="text-sm font-medium text-primary uppercase tracking-[0.3em]">Our Story</span>
                <h2 className="font-serif text-5xl md:text-6xl mt-4 leading-tight">
                  The Art of
                  <br />
                  <span className="text-primary italic">Hospitality</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mt-6">
                  Gardens Catering was born from a simple desire: to elevate the rich, vibrant flavors of the African continent to the realm of fine dining.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  From intimate gatherings to grand corporate galas, our team meticulously curates every detail. Rich mahogany, crisp linens, and the intoxicating aroma of slow-cooked delicacies define the gardens experience.
                </p>
                <Button variant="link" className="px-0 group text-foreground font-medium mt-4" asChild>
                  <Link href="/about">Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </div>

              <div className="lg:col-span-3 order-1 lg:order-2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                      <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745937/WhatsApp_Image_2026-06-29_at_15.44.52_1_en80ky.jpg" alt="Fine dining table" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-primary/5 border border-primary/10 flex items-center justify-center p-8">
                      <div className="text-center">
                        <Utensils className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Farm-to-table</p>
                        <p className="text-xs text-muted-foreground">Fresh ingredients daily</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                      <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745935/WhatsApp_Image_2026-06-29_at_15.44.55_3_eoanxs.jpg" alt="Plated dish" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-xl bg-primary/5 border border-primary/10 flex items-center justify-center p-8">
                      <div className="text-center">
                        <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Award Winning</p>
                        <p className="text-xs text-muted-foreground">Culinary excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Services - Cards with hover parallax */}
        <section className="py-28 bg-card/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-16 gap-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-[0.3em]">What We Offer</span>
                <h2 className="font-serif text-5xl md:text-6xl mt-4">Our Services</h2>
              </div>
              <p className="text-muted-foreground max-w-md hidden md:block text-right">
                Catering services designed specifically for the scale and significance of your event.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <div
                  key={service.title}
                  className="group relative cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 rounded-3xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-3xl aspect-[3/4]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                      <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {service.description}
                      </p>
                      <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium group-hover:gap-2 transition-all">
                        Discover <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu - Full-width horizontal scroll hint */}
        <section className="py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-[0.3em]">Featured</span>
                <h2 className="font-serif text-5xl md:text-6xl mt-2">Culinary Signatures</h2>
              </div>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/menu">View Full Menu →</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {MENU_ITEMS.slice(0, 4).map((item, i) => (
                <div
                  key={item.name}
                  className="group relative rounded-2xl overflow-hidden aspect-square"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-medium text-primary/90 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg text-white leading-tight">{item.name}</h4>
                  </div>
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Floating card in full-width section */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/5" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-8">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Limited dates available for 2026</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-7xl leading-tight">
                Ready to
                <br />
                <span className="text-primary italic">Host?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-6 mb-10">
                Let us handle the details while you enjoy the moment. Reserve your date and begin customizing your menu today.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-12 h-14 text-lg shadow-2xl shadow-primary/30" asChild>
                  <Link href="/booking">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary/60" />
                  <span className="text-sm text-muted-foreground">Serving 500+ events</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary/60" />
                  <span className="text-sm text-muted-foreground">Nationwide reach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary/60" />
                  <span className="text-sm text-muted-foreground">4.9/5 average rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

const SERVICES = [
  {
    title: "Private Dining",
    description: "Intimate gatherings with bespoke menus and elegant table settings.",
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745929/WhatsApp_Image_2026-06-29_at_15.44.55_e2zhat.jpg",
  },
  {
    title: "Corporate Events",
    description: "Professional catering for galas, conferences, and office celebrations.",
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745929/WhatsApp_Image_2026-06-29_at_15.44.55_2_hgh9gi.jpg",
  },
  {
    title: "Wedding Feasts",
    description: "Celebrate your union with a menu that tells your love story.",
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745926/WhatsApp_Image_2026-06-29_at_15.44.55_1_nu7tnw.jpg",
  },
];

const MENU_ITEMS = [
  { name: "Jollof Risotto", category: "Main Course", img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745945/WhatsApp_Image_2026-06-29_at_15.44.51_kglfsd.jpg" },
  { name: "Plantain Tartare", category: "Starter", img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745941/WhatsApp_Image_2026-06-29_at_15.44.52_za1c6b.jpg" },
  { name: "Suya Lamb Chops", category: "Grill", img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745941/WhatsApp_Image_2026-06-29_at_15.44.54_1_vqccaj.jpg" },
  { name: "Puff Puff Dessert", category: "Pastry", img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745939/WhatsApp_Image_2026-06-29_at_15.44.53_kxiwnr.jpg" },
];