// "use client";

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button'; // Adjust path based on your shadcn setup

// const CAROUSEL_IMAGES = [
//   "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538225/IMG-20260615-WA0089_djy9qo.jpg",
//   "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393562/IMG-20260617-WA0027_bkfj2y.jpg",
//   "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393572/IMG-20260617-WA0021_u8easr.jpg"
// ];

// export default function HeroSection() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image Carousel using Next.js Image */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImageIndex}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2, ease: 'easeInOut' }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <Image
//               src={CAROUSEL_IMAGES[currentImageIndex]}
//               alt="Upscale African Catering Event"
//               fill
//               priority={currentImageIndex === 0} // Prioritize loading the first image
//               sizes="100vw"
//               className="object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
        
//         {/* Ambient overlays */}
//         <div className="absolute inset-0 bg-black/30 z-[1]" />
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-[2]" />
//       </div>

//       {/* Foreground Content */}
//       <div className="container relative z-10 px-4 md:px-6 mx-auto text-center mt-[-5vh]">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Trimmed Text Backdrop Box */}
//           <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 shadow-2xl max-w-3xl mx-auto">
//             <span className="text-primary tracking-[0.3em] text-sm md:text-base font-medium uppercase block">
//               A Taste of Heritage, Elevated
//             </span>
            
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
//               Exceptional <br />
//               <span className="italic text-white/90">African</span> Catering
//             </h1>
            
//             <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto font-light leading-relaxed">
//               Where traditional warmth meets modern elegance. We craft unforgettable culinary experiences for your most cherished moments.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//               <Button size="lg" className="rounded-full px-8 text-base h-14 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" asChild>
//                 <Link href="/booking">Book Your Event</Link>
//               </Button>
//               <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto" asChild>
//                 <Link href="/menu">Explore Menu</Link>
//               </Button>
//             </div>
//           </div>chrome
//         </motion.div>
//       </div>

//       {/* Carousel Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
//         {CAROUSEL_IMAGES.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === currentImageIndex ? 'bg-primary w-6' : 'bg-white/40 w-2'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CAROUSEL_IMAGES = [
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538225/IMG-20260615-WA0089_djy9qo.jpg",
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393562/IMG-20260617-WA0027_bkfj2y.jpg",
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393572/IMG-20260617-WA0021_u8easr.jpg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={CAROUSEL_IMAGES[currentImageIndex]}
              alt="Luxury Catering"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Decorative blur */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
        }}
        className="absolute right-20 top-24 h-72 w-72 rounded-full bg-primary/20 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-orange-400/10 blur-[150px]"
      />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>

            <span className="uppercase tracking-[0.35em] text-xs text-white/80">
              Luxury African Catering
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .8,
            }}
            className="font-serif text-white font-light leading-[0.9]
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl"
          >
            Best
            <br />

            <span className="italic text-primary">
              Catering
            </span>

            <br />

            For You.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .15,
              duration: .8,
            }}
            className="mt-8 max-w-xl text-white/80 text-lg leading-8"
          >
            Bringing authentic African flavours to weddings, corporate
            gatherings and unforgettable celebrations with elegant presentation,
            premium service and culinary excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .25,
              duration: .8,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-xl h-14 px-8 text-base shadow-2xl"
            >
              <Link href="/booking">
                Book Your Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl h-14 px-8 bg-white/10 border-white/20 backdrop-blur-xl text-white hover:bg-white/20"
            >
              <Link href="/menu">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Explore Menu
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: .45,
            }}
            className="mt-16 grid grid-cols-3 gap-10 max-w-xl"
          >
            <div>
              <h2 className="text-4xl font-bold text-white">
                500+
              </h2>

              <p className="text-white/60 mt-2">
                Events Catered
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                10+
              </h2>

              <p className="text-white/60 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                100%
              </h2>

              <p className="text-white/60 mt-2">
                Fresh Ingredients
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              currentImageIndex === index
                ? "w-10 h-2 bg-primary"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center text-white/70"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-3">
          Scroll
        </span>

        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}