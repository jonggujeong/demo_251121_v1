import React from 'react';
import Philosophy from '@/components/Philosophy';
import MedicalTeam from '@/components/MedicalTeam';
import SpecializedTreatment from '@/components/SpecializedTreatment';

export default function Home() {
  return (
    <div>
      <section id="mainvisual" className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">환한 웃음을 되찾는 곳,<br />여기는 리온치과 입니다</h1>
      </section>

      <Philosophy />
      <MedicalTeam />
      <SpecializedTreatment />

      {/* 나머지 섹션들은 여기에 추가됩니다. */}
      <section id="main03" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">진료과목</h2>
          {/* 진료과목 콘텐츠가 여기에 들어갑니다. */}
        </div>
      </section>

      <section id="main05" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">임상사례</h2>
          {/* 임상사례 콘텐츠가 여기에 들어갑니다. */}
        </div>
      </section>

      <section id="main10" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">장비소개</h2>
          {/* 장비소개 콘텐츠가 여기에 들어갑니다. */}
        </div>
      </section>

      <section id="main06" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">둘러보기</h2>
          {/* 둘러보기 콘텐츠가 여기에 들어갑니다. */}
        </div>
      </section>
    </div>
  );
}
