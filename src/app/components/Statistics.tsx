import React from 'react';

const stats = [
  {
    id: 1,
    number: '40',
    label: 'İllik Təcrübə',
  },
  {
    id: 2,
    number: '500',
    label: 'İstinad Layihəsi',
  },
  {
    id: 3,
    number: '%30',
    label: 'ə qədər Enerjiyə Qənaət Edən Sistemlər',
  },
  {
    id: 4,
    number: '20',
    label: 'Növ Sistemlə İn­teqrasiya',
  },
];

export function Statistics() {
  return (
    <section className="py-20 bg-[#0078C8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-6xl md:text-7xl mb-4 text-[#FFD500]">
                {stat.number}
              </div>
              <div className="text-xl text-white leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
