import React from 'react';
import Slider from 'react-slick';

const slides = [
  {
    id: 1,
    title: 'Bina Avtomatlaşdırma Sistemləri',
    image: 'https://images.unsplash.com/photo-1753272691001-4d68806ac590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjU5ODE1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Gələcəyin Binaları Bu Gündən İdarə Olunur: Enerji Səmərəli Binalara Sahib Olun',
    image: 'https://images.unsplash.com/photo-1590989740416-1ac405330be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBlZmZpY2llbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU5NjI5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Bina İdarəetməsi. Tam Nəzarət. Davamlı Gələcək.',
    image: 'https://images.unsplash.com/photo-1760866613530-e3e09e013c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzY2MDQ1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="relative h-[600px] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
              </div>
              <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <button className="bg-[#FFD500] text-gray-900 px-8 py-4 rounded-lg hover:bg-[#FFD500]/90 transition-all shadow-lg">
                    Ətraflı Məlumat
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
