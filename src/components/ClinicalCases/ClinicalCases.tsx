"use client";

import Image from 'next/image';

const cases = [
  {
    title: "주걱턱 반대교합 환자 교정치료 증례",
    category: "교정치료",
    desc: "심미성, 기능을 동시에 개선",
    date: "2023.10.15"
  },
  {
    title: "오픈바이트, 중간 교정 환자 교정치료 증례",
    category: "교정치료",
    desc: "타 의료기관 폐업, 중간 교정 이어받기",
    date: "2023.09.20"
  },
  {
    title: "장기간 틀니 사용, 골 흡수가 심한 환자 임플란트",
    category: "임플란트",
    desc: "틀니 제거 후 픽스처 식립 및 보철",
    date: "2023.08.11"
  },
  {
    title: "자연치 결손, 파절로 인한 환자분의 임플란트",
    category: "임플란트",
    desc: "부러지고 결손된 치아 방치하지 않고 치료",
    date: "2023.07.05"
  }
];

const ClinicalCases = () => {
  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-8 md:mb-0">
                <h3 className="text-blue-900 font-bold tracking-widest uppercase mb-3">Dentist Story</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    치과진료에 대한<br/>다양한 궁금증과 증례 이야기
                </h2>
                <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                    본 컬럼은 의료법을 준수하여 작성되었으며 실제 내원 환자분의 동의하에 공개된 치료과정의 사진이 포함되어 있습니다.
                    개인에 따라 진료 및 치료방법이 다르게 적용될 수 있으며, 효과와 부작용이 다르게 나타날 수 있는 점을 안내 드립니다.
                </p>
            </div>

            {/* Category Filter (Visual Only) */}
            <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <button className="px-4 py-2 bg-blue-900 text-white rounded-full text-sm font-medium whitespace-nowrap">전체</button>
                <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50">임플란트</button>
                <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50">교정치료</button>
                <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50">심미치료</button>
                <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50">충치치료</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group cursor-pointer">
                    <div className="h-48 bg-gray-200 relative">
                         {/* Image Placeholder */}
                         <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-400">
                            <span>Case Image</span>
                         </div>
                         <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                             {item.category}
                         </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-900 transition">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                            {item.desc}
                        </p>
                        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                            <span className="text-xs text-gray-400">{item.date}</span>
                            <span className="text-xs font-bold text-blue-900">자세히보기 +</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 text-center">
             <button className="px-8 py-3 border border-gray-300 bg-white rounded-full hover:bg-gray-50 hover:border-gray-400 transition font-medium text-gray-700">
              임상증례 전체보기 +
            </button>
        </div>
      </div>
    </section>
  );
};

export default ClinicalCases;
