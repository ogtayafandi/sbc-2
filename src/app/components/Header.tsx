import React from 'react';
// @ts-ignore
import logo from '../../../public/assets/babb0ac6774f0a04c09783266ac1d27f08c12fad.png';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="SAUTER" className="h-12" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-[#0078C8] transition-colors">
              Məhsullar
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#0078C8] transition-colors">
              Haqqımızda
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#0078C8] transition-colors">
              Əlaqə
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
