import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  {
    id: 1,
    number: 40,
    suffix: '',
    label: 'İllik Təcrübə',
    description: 'Bina avtomatlaşdırma sənayesində',
  },
  {
    id: 2,
    number: 500,
    suffix: '+',
    label: 'İstinad Layihəsi',
    description: 'Uğurla tamamlanmış',
  },
  {
    id: 3,
    number: 30,
    suffix: '%',
    label: 'Enerji Qənaəti',
    description: 'Sistemlərimizlə əldə edilən',
  },
  {
    id: 4,
    number: 20,
    suffix: '+',
    label: 'Sistem İnteqrasiyası',
    description: 'Müxtəlif protokollar',
  },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function DataStatistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-[#0078C8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 left-20 w-96 h-96 border border-white/5 rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section intro */}
        <motion.div 
          className="max-w-3xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1 bg-white/10 rounded-full">
            <span className="text-xs md:text-sm tracking-wide text-white/80">Nəticələrimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight mb-4 md:mb-6 leading-tight">
            Rəqəmlərlə
            <span className="block text-[#FFD500]">Nailiyyətlər</span>
          </h2>
          <p className="text-base md:text-xl text-white/70 leading-relaxed">
            İl ərzində toplanmış təcrübə və müvəffəqiyyətlər
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-12 md:w-16 h-1 bg-[#FFD500] mb-8" />
              
              <div className="pt-10 md:pt-12">
                {/* Number */}
                <div className="text-6xl md:text-7xl lg:text-8xl text-[#FFD500] mb-3 md:mb-4 tracking-tight tabular-nums">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} inView={isInView} />
                </div>

                {/* Label */}
                <h3 className="text-xl md:text-2xl text-white mb-2 md:mb-3 tracking-tight">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 border border-white/0 rounded-2xl -z-10 group-hover:border-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}