import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import logo from '../../../public/assets/babb0ac6774f0a04c09783266ac1d27f08c12fad.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="SAUTER" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-gray-400 leading-relaxed">
              Bina avtomatlaşdırma sistemlərində lider. 
              Enerji səmərəli və innovativ həllər.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6">Əlaqə</h4>
            <div className="space-y-3 text-gray-400">
              <p>Tel: +994 12 XXX XX XX</p>
              <p>Email: info@sbcotomasyon.az</p>
              <p>Ünvan: Bakı, Azərbaycan</p>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6">Sosial Şəbəkələr</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#FFD500] flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-gray-900" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#FFD500] flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SBC Otomasyon. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FFD500] transition-colors">
                Məxfilik Siyasəti
              </a>
              <a href="#" className="hover:text-[#FFD500] transition-colors">
                İstifadə Şərtləri
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
