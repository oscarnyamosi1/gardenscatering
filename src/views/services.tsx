'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Users, Calendar, Trophy } from 'lucide-react';

import { SERVICES } from '@/lib/mockData';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase mb-4 block">What We Do</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Catering Services</h1>
          <p className="text-muted-foreground text-lg">
            From intimate dinners to grand galas, we deliver bespoke catering experiences tailored to your vision and guest count.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features?.map((f: string) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="rounded-full w-full" asChild>
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-16 border-y border-border">
          {[
            { icon: Users, label: 'Guests Served', value: '50,000+' },
            { icon: Calendar, label: 'Events Catered', value: '1,200+' },
            { icon: Trophy, label: 'Awards Won', value: '15+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-serif text-4xl font-bold mb-2">{value}</div>
              <p className="text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h2 className="font-serif text-4xl mb-6">Ready to Plan Your Event?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today to discuss your vision. Our event specialists will craft a bespoke proposal just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/booking">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
