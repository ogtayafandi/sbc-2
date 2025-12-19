import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sectors = [
  {
    id: 1,
    name: 'Kommersiya Dəşınmaz əmlakı',
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU5Nzc4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Qonaqla Sektoru',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NjAxMDAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Səhiyyə və Sağlamlıq Sektoru',
    image: 'https://images.unsplash.com/photo-1629410484397-a4dcd74088a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvcnJpZG9yfGVufDF8fHx8MTc2NjA1MjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'İstehsalat Sənayesi',
    image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjYwMTg4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Energetika Sektoru',
    image: 'https://images.unsplash.com/photo-1659290541783-3241bc39f7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBwb3dlciUyMHBsYW50fGVufDF8fHx8MTc2NTk3OTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Təhsil Müəssisələri',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2NTk2MjAzMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    name: 'Mədəniyyət Mərkəzləri',
    image: 'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU5NjQ4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    name: 'Ticarət Mərkəzləri',
    image: 'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGx8ZW58MXx8fHwxNzY2MDA2MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 9,
    name: 'Data Mərkəzləri',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyfGVufDF8fHx8MTc2NjA1MjE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 10,
    name: 'Logistika Mərkəzləri',
    image: 'https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY2MDMwMjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const SectorCard = ({ sector, index, hoveredId, setHoveredId }: { 
  sector: typeof sectors[0]; 
  index: number; 
  hoveredId: number | null; 
  setHoveredId: (id: number | null) => void;
}) => (
  <motion.div
    key={sector.id}
    className="group relative aspect-square cursor-pointer mx-2"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    onHoverStart={() => setHoveredId(sector.id)}
    onHoverEnd={() => setHoveredId(null)}
  >
    {/* Card container */}
    <div className="relative h-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
      {/* Image */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          scale: hoveredId === sector.id ? 1.1 : 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${sector.image})` }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0078C8] via-[#0078C8]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.h3 
          className="text-white text-lg leading-tight tracking-tight"
          animate={{
            y: hoveredId === sector.id ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {sector.name}
        </motion.h3>
        
        {/* Hover accent line */}
        <motion.div
          className="mt-4 h-1 bg-[#FFD500] rounded-full"
          initial={{ width: 0 }}
          animate={{ 
            width: hoveredId === sector.id ? '100%' : '40px' 
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Border hover effect */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl"
        animate={{
          borderColor: hoveredId === sector.id ? 'rgba(255, 213, 0, 0.5)' : 'transparent',
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </motion.div>
);

export function ReferenceSectors() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="py-16 md:py-20 bg-[#0078C8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFD500]/10 rounded-full blur-3xl" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1 bg-white/10 rounded-full">
            <span className="text-xs md:text-sm tracking-wide text-white/80">Sektorlar</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#FFD500] tracking-tight mb-4 md:mb-6">
            İstinad Sektorlarımız
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            Müxtəlif sahələrdə uğurla həyata keçirilmiş layihələrimiz
          </p>
        </motion.div>

        {/* Sectors - Grid on Desktop, Slider on Mobile */}
        {isMobile ? (
          <div className="relative">
            <Slider ref={sliderRef} {...settings} className="sectors-slider">
              {sectors.map((sector, index) => (
                <div key={sector.id}>
                  <SectorCard 
                    sector={sector} 
                    index={index} 
                    hoveredId={hoveredId} 
                    setHoveredId={setHoveredId} 
                  />
                </div>
              ))}
            </Slider>

            {/* Navigation Arrows for Mobile */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#FFD500] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#FFD500] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <SectorCard 
                key={sector.id}
                sector={sector} 
                index={index} 
                hoveredId={hoveredId} 
                setHoveredId={setHoveredId} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}