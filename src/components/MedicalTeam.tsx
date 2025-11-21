import React from 'react';
import Image from 'next/image';

const MedicalTeam = () => {
  const teamMembers = [
    {
      name: '박재우 대표원장',
      specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
      image: '/images/20250419214723_blu1QO2s_EBB095EC9EACEC9AB01.png',
    },
    {
      name: '기혜림 대표원장',
      specialty: '치과교정과 전문의',
      image: '/images/20250419215503_pVYlw18M_EAB8B0ED989CEBA6BC1.png',
    },
    {
      name: '배지수 원장',
      specialty: '소아치과 전문의',
      image: '/images/20250419215907_mh5YDuSb_EBB0B0ECA780EC88981.png',
    },
    {
      name: '구철홍 원장',
      specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
      image: '/images/20250419220323_ZKYxvVCS_EAB5ACECB2A0ED998D1.png',
    },
    {
      name: '송지은 원장',
      specialty: '치과보철과 전문의',
      image: '/images/20250419220743_Yt5a0O9F_EC86A1ECA780EC9D801.png',
    },
  ];

  return (
    <section id="maindr" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">리온치과, 의료진 소개</h2>
        <p className="text-center text-gray-600 mb-16">각 분과별 협진 진료 시스템 분과별 전문 의료진들이 함께합니다.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-bold mt-6 mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
