import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    id: 1,
    title: 'Bina Avtomatlaşdırma',
    subtitle: 'Sistemləri',
    description: 'Gələcəyin ağıllı binalarını bu gün qurun',
    image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rkm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU5NzEwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Enerji Səmərəli',
    subtitle: 'Gələcək',
    description: 'Enerjiyə qənaət edən sistemlərlə davamlılıq',
    image: 'https://images.unsplash.com/photo-1590989740416-1ac405330be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBlZmZpY2llbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU5NjI5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Tam Nəzarət',
    subtitle: 'İdarəetmə',
    description: 'Bina sistemlərinin inteqrasiyalı idarə edilməsi',
    image: 'https://images.unsplash.com/photo-1760866613530-e3e09e013c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzY2MDQ1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function EditorialHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20 md:pt-0">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 md:via-white/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Small label */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 md:mb-8 px-3 md:px-4 py-1.5 md:py-2 bg-[#0078C8]/5 rounded-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#FFD500]" />
            <span className="text-xs md:text-sm tracking-wide text-[#0078C8]">
              Bina Avtomatlaşdırma Lideri
            </span>
          </motion.div>

          {/* Main title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-3 md:mb-4 tracking-tight">
                <span className="block text-gray-900">{slide.title}</span>
                <span className="block text-[#0078C8]">{slide.subtitle}</span>
              </h1>
              
              <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-xl leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base text-gray-900 rounded-full border border-gray-200 hover:border-[#0078C8] transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Məhsullar
            </motion.button>
          </motion.div>

          {/* Slide indicators */}
          <motion.div 
            className="flex gap-2 md:gap-3 mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
              >
                <div className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 md:w-16 bg-[#FFD500]' 
                    : 'w-6 md:w-8 bg-gray-300 group-hover:bg-gray-400'
                }`} />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 right-8 md:right-12 w-20 h-20 md:w-32 md:h-32 border-2 border-[#FFD500] rounded-full opacity-20 hidden sm:block"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </section>
  );
}