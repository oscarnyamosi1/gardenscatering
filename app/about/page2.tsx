// 'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Star } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-4 pb-20 min-h-screen">

        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              // initial={{ opacity: 0, x: -30 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase block">Our Story</span>
              <h1 className="font-serif text-5xl md:text-6xl leading-tight">
                Elevating <br /><span className="text-muted-foreground italic">African</span> Cuisine
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                gardens catering is one of the leading catering companies in Kisii, renowned for delivering exceptional culinary experiences that combine authentic African flavors with modern international cuisine. Whether you're searching for a professional chef in Kisii, premium catering services, or complete event catering solutions, gardens catering is committed to making every occasion memorable through outstanding food, elegant presentation, and impeccable service.

From intimate family gatherings to grand weddings, corporate functions, graduations, birthdays, conferences, and private celebrations, our experienced chefs and hospitality team create customized menus that suit every taste, culture, and budget. Every dish is prepared using fresh, carefully selected ingredients to ensure exceptional flavor, quality, and presentation.

At gardens catering, we believe that great food is at the heart of every successful event. Our team works closely with clients from planning to execution, ensuring every detail is handled professionally and every guest enjoys a five-star dining experience. Our dedication to consistency, hygiene, punctuality, and customer satisfaction has earned us a strong reputation among individuals, businesses, institutions, and organizations throughout Kisii County and beyond.

Whether you need a private chef, wedding catering, buffet catering, outdoor catering, corporate catering, event planning support, or full-service catering for large events, gardens catering provides reliable solutions tailored to your needs. We pride ourselves on delivering not just meals, but unforgettable experiences that leave lasting impressions.

Our passion for excellence, creativity in menu design, and commitment to outstanding hospitality continue to make gardens catering a preferred choice for catering services in Kisii. Every event we serve reflects our promise of quality, professionalism, and attention to detail.

Why Choose gardens catering?
Professional chefs with extensive culinary expertise.
Premium wedding, corporate, and event catering services.
Authentic African cuisine alongside continental and international dishes.
Fresh, high-quality ingredients sourced with care.
Elegant buffet setups and food presentation.
Reliable, punctual, and professional service.
Customized menus for every event and budget.
Exceptional customer experience from consultation to event completion.
Trusted by families, businesses, schools, churches, and organizations across Kisii.
Our Vision

To be the most trusted and preferred catering company in Kisii and across Kenya, recognized for culinary excellence, innovation, and exceptional customer service.

Our Mission

To create memorable dining experiences by providing delicious food, professional chefs, outstanding hospitality, and world-class catering services that exceed our clients' expectations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don&apos;t just cook food; we curate experiences. From the sourcing of authentic spices to the final exquisite plating, every step is guided by a deep respect for our heritage and a passion for hospitality.
              </p>
            </div>

            <div
              // initial={{ opacity: 0, scale: 0.95 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.7, delay: 0.2 }}
              className="glass p-2 rounded-[2rem] relative"
            >
              <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782392526/IMG-20230607-WA0006_hydiuh.jpg" alt="Our culinary approach" className="rounded-[1.5rem] w-full aspect-square md:aspect-[4/5] object-cover" />
            </div>

            <div
              // initial={{ opacity: 0, scale: 0.95 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.7, delay: 0.3 }}
              className="glass p-2 rounded-[2rem] relative"
            >
              <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538196/IMG-20260615-WA0031_apsxwp.jpg" alt="mr. gardens" className="rounded-[1.5rem] w-full aspect-square md:aspect-[4/5] object-cover" />
            </div>

            <div
              // initial={{ opacity: 0, scale: 0.95 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.7, delay: 0.4 }}
              className="glass p-2 rounded-[2rem] relative"
            >
              <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538197/IMG-20260615-WA0032_lndxzt.jpg" alt="mr. gardens" className="rounded-[1.5rem] w-full aspect-square md:aspect-[4/5] object-cover" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-card/50 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-4xl mb-4">Our Philosophy</h2>
              <p className="text-muted-foreground">The principles that guide our kitchen and our service.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Star, title: 'Excellence', desc: 'Uncompromising quality in ingredients, preparation, and presentation.' },
                { icon: Heart, title: 'Heritage', desc: 'Honoring traditional recipes while embracing modern culinary techniques.' },
                { icon: Leaf, title: 'Sustainability', desc: 'Sourcing locally and minimizing our environmental footprint.' },
                { icon: Award, title: 'Hospitality', desc: 'Anticipating needs and exceeding expectations at every touchpoint.' },
              ].map((val, i) => {
                const Icon = val.icon;
                return (<div
                    key={val.title}
                    // initial={{ opacity: 0, y: 20 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-3xl text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl mb-3">{val.title}</h3>
                    <p className="text-sm text-muted-foreground">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="font-serif text-4xl mb-16 text-center">Our Journey</h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
              {[
                { year: '2015', title: 'The Beginning', desc: 'Started as a boutique private chef service catering to intimate gatherings of 10-20 people.' },
                { year: '2018', title: 'Expansion', desc: 'Opened our first commercial kitchen and expanded into wedding and mid-sized corporate events.' },
                { year: '2021', title: 'Recognition', desc: "Awarded 'Best Contemporary African Caterer' by Culinary Excellence Magazine." },
                { year: '2024', title: 'Today', desc: 'A team of 50+ professionals executing large-scale, high-end events across the region.' },
              ].map((item, i) => (<div
                  key={item.year}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true, margin: '-100px' }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                    <span className="text-primary font-mono font-bold text-xl mb-2 block">{item.year}</span>
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
