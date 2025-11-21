import React from 'react';
import Image from 'next/image';

const SpecializedTreatment = () => {
  const treatments = [
    {
      title: 'RE:ON 임플란트',
      description: '구강악안면외과, 통합치의학과, 치과보철과 전문의 협진으로 고난이도 임플란트도 효과적으로',
      image: '/images/main02_1.jpg',
    },
    {
      title: 'RE:ON 치아교정',
      description: '초진 상담부터 유지장치를 장착하는 마무리 단계까지 치과교정과 전문의가 책임지고 꼼꼼하게 진료',
      image: '/images/main02_2.jpg',
    },
    {
      title: 'RE:ON 소아진료',
      description: '아이들의 심리적 안정까지 고려해 설계된 독립된 소아진료실에서 소중한 우리 아이 치아, 바르고 고르게',
      image: '/images/main02_3.jpg',
    },
  ];

  return (
    <section id="main02" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">RE:ON SIGNATURE</h2>
        <p className="text-center text-gray-600 mb-16">치료가 까다로운 고난이도 케이스도 가능. 우리는 결과로 전문성을 입증하는 리온치과 입니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64">
                <Image src={treatment.image} alt={treatment.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{treatment.title}</h3>
                <p className="text-gray-600 mb-6">{treatment.description}</p>
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">READ MORE &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedTreatment;
