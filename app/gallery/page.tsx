'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const CLOUDINARY_URL = 'https://res.cloudinary.com/dw0l7b86h/image/upload';
const CATEGORIES = ['All', 'Events', 'Food', 'Venues'];

const IMAGES = [
  { id: 1, src: 'https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538225/IMG-20260615-WA0089_djy9qo.jpg', category: 'Events', title: 'Gala Dinner Setup' },
  { id: 2, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748490/WhatsApp_Image_2026-06-29_at_15.19.55_1_ynw9fz.jpg`, category: 'Venues', title: 'Outdoor Reception' },
  { id: 3, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748491/WhatsApp_Image_2026-06-29_at_15.20.03_2_fqc1ph.jpg`, category: 'Events', title: 'Corporate Buffet' },
  { id: 4, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748489/WhatsApp_Image_2026-06-29_at_15.20.03_1_tv1gym.jpg`, category: 'Food', title: 'Slow Braised Stew' },
  { id: 5, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748486/WhatsApp_Image_2026-06-29_at_15.20.04_1_zbgter.jpg`, category: 'Food', title: 'Appetizer' },
  { id: 6, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1782745945/WhatsApp_Image_2026-06-29_at_15.44.51_kglfsd.jpg`, category: 'Venues', title: 'Intimate Dining' },
  { id: 7, src: `${CLOUDINARY_URL}/unnamed_11_oamiov.jpg`, category: 'Food', title: 'Artisanal Dessert' },
  { id: 8, src: `${CLOUDINARY_URL}/unnamed_12_q7qjxj.jpg`, category: 'Food', title: 'Signature Drinks' },
  { id: 9, src: 'https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393611/IMG-20260617-WA0000_u13390.jpg',category:'food',title:''},
  { id: 10, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393610/IMG-20260617-WA0001_vvxtkv.jpg" ,category:'food',title:''},
  { id: 11, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393606/IMG-20260617-WA0002_fqe3nw.jpg" ,category:'food',title:''},
  { id: 12, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393605/IMG-20260617-WA0004_jnsldq.jpg" ,category:'food',title:''},
  { id: 13, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393605/IMG-20260617-WA0003_eegbu3.jpg" ,category:'food',title:''},
  { id: 14, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393604/IMG-20260617-WA0005_zfqxvn.jpg" ,category:'food',title:''},
  { id: 15, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393604/IMG-20260617-WA0005_zfqxvn.jpg" ,category:'food',title:''},
  { id: 16, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393600/IMG-20260617-WA0006_aglhlq.jpg" ,category:'food',title:''},
  { id: 17, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393599/IMG-20260617-WA0008_vevag9.jpg" ,category:'food',title:''},
  { id: 18, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393599/IMG-20260617-WA0007_vljltw.jpg" ,category:'food',title:''},
  { id: 19, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393597/IMG-20260617-WA0009_gxz1zc.jpg" ,category:'food',title:''},
  { id: 20, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393592/IMG-20260617-WA0010_tearox.jpg" ,category:'food',title:''},
  { id: 21, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393592/IMG-20260617-WA0011_p7wnlo.jpg" ,category:'food',title:''},
  { id: 22, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393590/IMG-20260617-WA0012_djjh3q.jpg" ,category:'food',title:''},
  { id: 23, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393590/IMG-20260617-WA0013_oirkye.jpg" ,category:'food',title:''},
  { id: 24, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393588/IMG-20260617-WA0014_vpmvn4.jpg" ,category:'food',title:''},
  { id: 25, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393582/IMG-20260617-WA0015_qgetca.jpg" ,category:'food',title:''},
  { id: 26, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393581/IMG-20260617-WA0017_efsmxz.jpg" ,category:'food',title:''},
  { id: 27, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393581/IMG-20260617-WA0018_ph7cve.jpg" ,category:'food',title:''},
  { id: 28, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393580/IMG-20260617-WA0019_vbxw0d.jpg" ,category:'food',title:''},
  { id: 29, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393574/IMG-20260617-WA0020_zdzhoz.jpg" ,category:'food',title:''},
  { id: 30, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393572/IMG-20260617-WA0021_u8easr.jpg" ,category:'food',title:''},
  { id: 31, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393570/IMG-20260617-WA0022_g8vdty.jpg" ,category:'food',title:''},
  { id: 32, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393569/IMG-20260617-WA0023_dvcqxc.jpg" ,category:'food',title:''},
  { id: 33, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393564/IMG-20260617-WA0024_c7e7xj.jpg" ,category:'food',title:''},
  { id: 34, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393563/IMG-20260617-WA0026_uaiqr5.jpg" ,category:'food',title:''},
  { id: 35, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393563/IMG-20260617-WA0016_xvrpai.jpg" ,category:'food',title:''},
  { id: 36, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393562/IMG-20260617-WA0027_bkfj2y.jpg" ,category:'food',title:''},
  { id: 37, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782393562/IMG-20260617-WA0025_pweuxo.jpg" ,category:'food',title:''},
  { id: 38, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782748489/WhatsApp_Image_2026-06-29_at_15.20.04_fhrzou.jpg" ,category:'food',title:''},

];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImg, setSelectedImg] = useState<typeof IMAGES[0] | null>(null);

  const filteredImages = IMAGES.filter(img =>
    activeCategory === 'All' || img.category === activeCategory
  );

  return (
    <Layout>
      <div className="pt-4 pb-20 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase mb-4 block">Portfolio</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Event Gallery</h1>
            <p className="text-lg text-muted-foreground">
              A visual journey through our most memorable events and exquisite dishes.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {CATEGORIES.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={`rounded-full ${activeCategory === cat ? 'shadow-md' : 'bg-background/50 backdrop-blur-sm'}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer glass"
                  onClick={() => setSelectedImg(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <ZoomIn className="w-8 h-8 text-white mb-2" />
                    <span className="text-white font-medium text-center">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/90 border-0 glass">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImg && (
              <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
                <img
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md text-white p-4 rounded-xl text-center">
                  <h3 className="font-serif text-2xl">{selectedImg.title}</h3>
                  <p className="text-white/70 text-sm uppercase tracking-wider">{selectedImg.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
