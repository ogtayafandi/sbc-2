import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import product1 from '../../../public/assets/107c8e08ad87f293ba432d924546dfe723391806.png';
import product2 from '../../../public/assets/3eedc9ae08abd1c2c66e8730ecbbdf796913c476.png';

const products = [
  {
    id: 1,
    name: 'Rəqəmsal Termostat',
    category: 'İdarəetmə',
    image: product1,
    description: 'Ağıllı temperatur nəzarəti və enerji optimallaşdırması',
    features: ['Wi-Fi', 'Proqramlaşdırıla bilən', 'Enerji monitoru'],
  },
  {
    id: 2,
    name: 'DDC Modul',
    category: 'Avtomatika',
    image: product2,
    description: 'Modulyar bina avtomatlaşdırma nəzarət sistemi',
    features: ['BACnet', 'Modbus', 'IoT Ready'],
  },
  {
    id: 3,
    name: 'Akıllı Sensör',
    category: 'Monitorinq',
    image: product1,
    description: 'Real vaxt data toplama və analitika sistemi',
    features: ['Cloud', 'AI-Powered', 'Multi-zone'],
  },
  {
    id: 4,
    name: 'İdarəetmə Paneli',
    category: 'İnterfeys',
    image: product2,
    description: 'İntuitivə istifadəçi interfeysi və mərkəzi idarəetmə',
    features: ['Touch Screen', 'Responsive', 'Multi-language'],
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer h-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain relative z-10"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        
        {/* Decorative background element */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078C8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6 relative">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-xs tracking-wide text-[#0078C8] mb-2">
              {product.category}
            </div>
            <h3 className="text-xl text-gray-900 tracking-tight">
              {product.name}
            </h3>
          </div>
          
          <motion.div
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FFD500] transition-colors"
            whileHover={{ scale: 1.1, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5 text-gray-900" />
          </motion.div>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Hover line accent */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFD500] group-hover:w-full transition-all duration-400" />
      </div>
    </motion.div>
  );
};

export function ModernProducts() {
  const sliderRef = useRef<Slider>(null);
  const [isMobile, setIsMobile] = useState(false);

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
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1 bg-[#0078C8]/10 rounded-full">
              <span className="text-sm tracking-wide text-[#0078C8]">Məhsullar</span>
            </div>
            <h2 className="text-6xl md:text-7xl tracking-tight text-gray-900 leading-tight">
              Müasir
              <span className="block text-[#0078C8]">Texnologiya</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-8">
              Bina avtomatlaşdırma sistemləri üçün yüksək texnologiyalı həllər. 
              Enerji səmərəliliyi və rahatlığı birləşdirən innovativ məhsullar.
            </p>

            {/* Mobile Navigation - Only show on mobile when slider is active */}
            {isMobile && (
              <div className="flex gap-4">
                <motion.button
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0078C8] hover:bg-[#0078C8] hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => sliderRef.current?.slickNext()}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0078C8] hover:bg-[#0078C8] hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Products - Grid on Desktop, Slider on Mobile */}
        {isMobile ? (
          <Slider ref={sliderRef} {...settings} className="mobile-products-slider">
            {products.map((product, index) => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}