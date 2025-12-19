import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import logo from '../../../public/assets/babb0ac6774f0a04c09783266ac1d27f08c12fad.png';

export function ModernHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('Az');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = ['Az', 'TR', 'EN'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.lang-switcher')) {
        setShowLangMenu(false);
      }
    };

    if (showLangMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLangMenu]);

  // Close mobile menu when clicking on a link
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent md:bg-transparent bg-white/95'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="SAUTER" className="h-8 md:h-10" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {['Haqqımızda', 'Xidmətlərimiz', 'Məhsullarımız', 'Layihələr', 'Əlaqə'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide text-gray-700 hover:text-[#0078C8] transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFD500] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
          
          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative lang-switcher">
              <motion.button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-[#0078C8] rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang}</span>
              </motion.button>

              {showLangMenu && (
                <motion.div
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden min-w-[80px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-[#0078C8] hover:text-white transition-colors ${
                        currentLang === lang ? 'bg-[#0078C8]/10 text-[#0078C8]' : 'text-gray-700'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            {/* Mobile Language Switcher */}
            <div className="relative lang-switcher">
              <motion.button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1 px-2 py-1 text-sm text-gray-700 hover:text-[#0078C8] rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang}</span>
              </motion.button>

              {showLangMenu && (
                <motion.div
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden min-w-[80px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-[#0078C8] hover:text-white transition-colors ${
                        currentLang === lang ? 'bg-[#0078C8]/10 text-[#0078C8]' : 'text-gray-700'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#0078C8] hover:bg-gray-50 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {['Haqqımızda', 'Xidmətlərimiz', 'Məhsullarımız', 'Layihələr', 'Əlaqə'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleMobileMenuClick}
                  className="text-base text-gray-700 hover:text-[#0078C8] transition-colors py-2 border-b border-gray-100 last:border-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}