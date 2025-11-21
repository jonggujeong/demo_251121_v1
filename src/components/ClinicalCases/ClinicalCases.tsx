"use client";

import Image from 'next/image';

const cases = [
  {
    title: "주걱턱 반대교합 환자 교정치료 증례",
    category: "교정치료",
    desc: "심미성, 기능을 동시에 개선",
    date: "2023.10.15",
    image: "https://reondc.com/filedata/md_board/20250421185014_d1sDL8MI_main_60.jpg"
  },
  {
    title: "오픈바이트, 중간 교정 환자 교정치료 증례",
    category: "교정치료",
    desc: "타 의료기관 폐업, 중간 교정 이어받기",
    date: "2023.09.20",
    image: "https://reondc.com/filedata/md_board/20250421161559_wSxpZXAc_main_58.jpg"
  },
  {
    title: "장기간 틀니 사용, 골 흡수가 심한 환자 임플란트",
    category: "임플란트",
    desc: "틀니 제거 후 픽스처 식립 및 보철",
    date: "2023.08.11",
    image: "https://reondc.com/filedata/md_board/20250421144728_zP8lwWkI_main_57.jpg"
  },
  {
    title: "자연치 결손, 파절로 인한 환자분의 임플란트",
    category: "임플란트",
    desc: "부러지고 결손된 치아 방치하지 않고 치료",
    date: "2023.07.05",
    image: "https://reondc.com/filedata/md_board/20250421135709_SsnVo5Hj_main_56.jpg"
  }
];

const ClinicalCases = () => {
  return (
    <section id="cases" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-8 md:mb-0">
                <h3 className="text-blue-900 font-bold tracking-[0.2em] uppercase mb-3 animate-fade-in-up">Dentist Story</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in-up delay-100">
                    치과진료에 대한<br/>다양한 궁금증과 증례 이야기
                </h2>
                <p className="text-gray-500 text-xs md:text-sm max-w-3xl leading-relaxed animate-fade-in-up delay-200">
                    본 컬럼은 의료법을 준수하여 작성되었으며 실제 내원 환자분의 동의하에 공개된 치료과정의 사진이 포함되어 있습니다.<br className="hidden md:block"/>
                    개인에 따라 진료 및 치료방법이 다르게 적용될 수 있으며, 효과와 부작용이 다르게 나타날 수 있는 점을 안내 드립니다.
                </p>
            </div>

            {/* Category Filter (Visual Only) */}
            <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide animate-fade-in-up delay-300">
                <button className="px-5 py-2.5 bg-blue-900 text-white rounded-full text-sm font-bold whitespace-nowrap shadow-md hover:bg-blue-800 transition">전체</button>
                <button className="px-5 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-50 hover:border-blue-900 hover:text-blue-900 transition">임플란트</button>
                <button className="px-5 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-50 hover:border-blue-900 hover:text-blue-900 transition">교정치료</button>
                <button className="px-5 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-50 hover:border-blue-900 hover:text-blue-900 transition">심미치료</button>
                <button className="px-5 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-50 hover:border-blue-900 hover:text-blue-900 transition">충치치료</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cases.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer border border-gray-100">
                    <div className="h-56 bg-gray-100 relative overflow-hidden">
                         <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                         <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                             {item.category}
                         </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition leading-snug h-[3.5rem]">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-5 line-clamp-2 h-[2.5rem]">
                            {item.desc}
                        </p>
                        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                            <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                            <span className="text-xs font-bold text-blue-900 flex items-center group-hover:translate-x-1 transition">
                                자세히보기 <span className="ml-1 text-lg leading-none">+</span>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center">
             <button className="px-10 py-3.5 border border-gray-300 bg-white rounded-full hover:bg-gray-50 hover:border-gray-400 transition font-bold text-gray-700 text-sm shadow-sm tracking-wide uppercase">
              임상증례 전체보기 +
            </button>
        </div>
      </div>
    </section>
  );
};

export default ClinicalCases;
