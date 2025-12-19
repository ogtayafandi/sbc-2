import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';
import logo from '../../../public/assets/babb0ac6774f0a04c09783266ac1d27f08c12fad.png';

export function MinimalFooter() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="SAUTER" className="h-10 mb-6" />
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Bina avtomatlaşdırma sistemlərində texnoloji liderlik
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm tracking-wide text-gray-400 mb-6 uppercase">
              Əlaqə
            </h4>
            <div className="space-y-3 text-gray-700">
              <p>info@sbcotomasyon.az</p>
              <p>+994 12 XXX XX XX</p>
              <p>Bakı, Azərbaycan</p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm tracking-wide text-gray-400 mb-6 uppercase">
              Bizi izləyin
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="group relative w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <motion.div
                  className="absolute inset-0 bg-[#0078C8] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white relative z-10 transition-colors" />
              </motion.a>

              <motion.a
                href="#"
                className="group relative w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <motion.div
                  className="absolute inset-0 bg-[#0078C8] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-white relative z-10 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 SBC Otomasyon. Bütün hüquqlar qorunur.</p>
            
            <div className="flex gap-8">
              <motion.a
                href="#"
                className="hover:text-[#0078C8] transition-colors"
                whileHover={{ x: 2 }}
              >
                Məxfilik
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-[#0078C8] transition-colors"
                whileHover={{ x: 2 }}
              >
                Şərtlər
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-1 bg-gradient-to-r from-[#0078C8] via-[#FFD500] to-[#0078C8]" />
    </footer>
  );
}