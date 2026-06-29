// 'use client';

import { Award, Heart, Leaf, Star, ChefHat, Clock, Users, Utensils, Calendar, MapPin, Coffee } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="w-full min-h-screen">

        {/* Hero - Full-width with floating elements */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
                  <ChefHat className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary tracking-wider">EST. 2015</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
                  Where African
                  <br />
                  <span className="text-primary italic">Flavors</span>
                  <br />
                  Shine
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  gardens catering is one of the leading catering companies in Kisii, renowned for delivering exceptional culinary experiences that combine authentic African flavors with modern international cuisine.
                </p>
                
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <p className="text-3xl font-serif text-primary">10+</p>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Events Hosted</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-primary">4.9★</p>
                    <p className="text-sm text-muted-foreground">Client Rating</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image Collage */}
              <div className="order-1 lg:order-2 relative">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748490/WhatsApp_Image_2026-06-29_at_15.19.55_ogzyox.jpg" 
                      alt="Our culinary approach" 
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748491/WhatsApp_Image_2026-06-29_at_15.20.03_2_fqc1ph.jpg" 
                      alt="Mr. Gardens" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="col-span-1 rounded-2xl overflow-hidden shadow-xl bg-primary/5 border border-primary/10 flex items-center justify-center p-4">
                    <div className="text-center">
                      <Utensils className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-xs font-medium">Premium</p>
                      <p className="text-xs text-muted-foreground">Catering</p>
                    </div>
                  </div>
                  <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748489/WhatsApp_Image_2026-06-29_at_15.20.01_cns0bu.jpg" 
                      alt="Mr. Gardens" 
                      className="w-full h-full object-cover aspect-[3/2]"
                    />
                  </div>
                </div>
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Story & Vision - Split with stats */}
        <section className="py-20 bg-card/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Our Story */}
              <div className="space-y-6">
                <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase block">Our Story</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                  Crafting <span className="text-primary italic">Memories</span> Through Food
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Whether you're searching for a professional chef in Kisii, premium catering services, or complete event catering solutions, gardens catering is committed to making every occasion memorable through outstanding food, elegant presentation, and impeccable service.
                  </p>
                  <p>
                    From intimate family gatherings to grand weddings, corporate functions, graduations, birthdays, conferences, and private celebrations, our experienced chefs and hospitality team create customized menus that suit every taste, culture, and budget.
                  </p>
                  <p>
                    Our dedication to consistency, hygiene, punctuality, and customer satisfaction has earned us a strong reputation among individuals, businesses, institutions, and organizations throughout Kisii County and beyond.
                  </p>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="space-y-8">
                <div className="glass p-8 rounded-3xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be the most trusted and preferred catering company in Kisii and across Kenya, recognized for culinary excellence, innovation, and exceptional customer service.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 rounded-3xl border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To create memorable dining experiences by providing delicious food, professional chefs, outstanding hospitality, and world-class catering services that exceed our clients' expectations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-background/50 rounded-2xl">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-serif">50+</p>
                    <p className="text-xs text-muted-foreground">Team Members</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-2xl">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-serif">12</p>
                    <p className="text-xs text-muted-foreground">Counties</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-2xl">
                    <Coffee className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-serif">100+</p>
                    <p className="text-xs text-muted-foreground">Menu Items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Full-width cards with icons */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase block mb-2">Why Choose Us</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Philosophy</h2>
              <p className="text-muted-foreground">The principles that guide our kitchen and our service.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Star, 
                  title: 'Excellence', 
                  desc: 'Uncompromising quality in ingredients, preparation, and presentation.',
                  color: 'primary'
                },
                { 
                  icon: Heart, 
                  title: 'Heritage', 
                  desc: 'Honoring traditional recipes while embracing modern culinary techniques.',
                  color: 'secondary'
                },
                { 
                  icon: Leaf, 
                  title: 'Sustainability', 
                  desc: 'Sourcing locally and minimizing our environmental footprint.',
                  color: 'green'
                },
                { 
                  icon: Award, 
                  title: 'Hospitality', 
                  desc: 'Anticipating needs and exceeding expectations at every touchpoint.',
                  color: 'amber'
                },
              ].map((val, i) => {
                const Icon = val.icon;
                const colorMap = {
                  primary: 'bg-primary/10 text-primary border-primary/20',
                  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
                  green: 'bg-green-500/10 text-green-500 border-green-500/20',
                  amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
                };
                return (
                  <div
                    key={val.title}
                    className="group relative p-8 rounded-3xl bg-background border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorMap[val.color as keyof typeof colorMap]}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-xl mb-3">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>

            {/* Trust Badge */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 glass px-8 py-4 rounded-full">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
                <span className="text-sm font-medium">Trusted by families, businesses, schools, churches, and organizations across Kisii</span>
              </div>
            </div>
          </div>
        </section>

        {/* Journey - Interactive timeline with visual cards */}
        <section className="py-24 bg-card/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase block mb-2">Our Journey</span>
              <h2 className="font-serif text-4xl md:text-5xl">The Road So Far</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  year: '2015', 
                  title: 'The Beginning', 
                  desc: 'Started as a boutique private chef service catering to intimate gatherings of 10-20 people.',
                  icon: ChefHat,
                  color: 'primary'
                },
                { 
                  year: '2018', 
                  title: 'Expansion', 
                  desc: 'Opened our first commercial kitchen and expanded into wedding and mid-sized corporate events.',
                  icon: Utensils,
                  color: 'secondary'
                },
                { 
                  year: '2021', 
                  title: 'Recognition', 
                  desc: "Awarded 'Best Contemporary African Caterer' by Culinary Excellence Magazine.",
                  icon: Award,
                  color: 'amber'
                },
                { 
                  year: '2024', 
                  title: 'Today', 
                  desc: 'A team of 50+ professionals executing large-scale, high-end events across the region.',
                  icon: Users,
                  color: 'green'
                },
              ].map((item, i) => {
                const Icon = item.icon;
                const colorMap = {
                  primary: 'bg-primary/10 text-primary border-primary/20',
                  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
                  amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
                  green: 'bg-green-500/10 text-green-500 border-green-500/20',
                };
                return (
                  <div
                    key={item.year}
                    className="group relative"
                  >
                    <div className="glass p-6 rounded-3xl h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      {/* Year badge */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${colorMap[item.color as keyof typeof colorMap]}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <span className="text-3xl font-serif text-primary font-bold mb-1">{item.year}</span>
                      <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                      
                      {/* Progress indicator */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <div className={`h-1 flex-1 rounded-full bg-primary/20`}>
                            <div 
                              className={`h-full rounded-full bg-primary transition-all duration-1000`}
                              style={{ width: `${((i + 1) / 4) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{i + 1}/4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA - Full-width with action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">
                Ready to Create
                <br />
                <span className="text-primary italic">Unforgettable</span> Moments?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Let's bring your vision to life with exceptional food and impeccable service.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-2xl shadow-primary/30">
                  Get a Free Quote
                </button>
                <button className="px-8 py-3 border border-border rounded-full hover:bg-background/50 transition-colors">
                  View Our Menu
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}