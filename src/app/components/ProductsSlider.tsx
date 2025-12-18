import React from 'react';
import Slider from 'react-slick';
import product1 from '../../../public/assets/107c8e08ad87f293ba432d924546dfe723391806.png';
import product2 from '../../../public/assets/3eedc9ae08abd1c2c66e8730ecbbdf796913c476.png';

const products = [
  {
    id: 1,
    name: 'Otaq Termostatı',
    category: 'İdarəetmə Sistemləri',
    image: product1,
    description: 'Müasir rəqəmsal termostat - enerji idarəetməsi və rahatlıq',
  },
  {
    id: 2,
    name: 'Modulyar Avtomatika',
    category: 'İdarəetmə Sistemləri',
    image: product2,
    description: 'DDC modulları - bina avtomatlaşdırma sistemlərinin əsası',
  },
  {
    id: 3,
    name: 'Otaq Termostatı',
    category: 'İdarəetmə Sistemləri',
    image: product1,
    description: 'Müasir rəqəmsal termostat - enerji idarəetməsi və rahatlıq',
  },
  {
    id: 4,
    name: 'Modulyar Avtomatika',
    category: 'İdarəetmə Sistemləri',
    image: product2,
    description: 'DDC modulları - bina avtomatlaşdırma sistemlərinin əsası',
  },
];

export function ProductsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Məhsullarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Müasir bina avtomatlaşdırma həlləri ilə enerjiyə qənaət edin
          </p>
        </div>
        
        <div className="products-slider">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#0078C8] mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl mb-2 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <button className="text-[#0078C8] hover:text-[#005a96] transition-colors">
                      Ətraflı →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
