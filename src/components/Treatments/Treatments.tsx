import Link from 'next/link';
import Image from 'next/image';

const Treatments = () => {
  return (
    <section id="special" className="py-24 bg-white">
       {/* Signature Treatments */}
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h3 className="text-blue-900 font-bold tracking-[0.2em] uppercase mb-3">RE:ON Signature</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            치료가 까다로운<br/>고난이도 케이스도 가능
          </h2>
          <p className="text-gray-600 text-lg">
            우리는 <span className="font-bold text-gray-800">결과로 전문성을 입증하는</span> 리온치과 입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Implant */}
           <div className="group relative overflow-hidden rounded-2xl h-[450px] bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
             <Image
                src="https://reondc.com/images/common/main02_1.jpg"
                alt="RE:ON Implant"
                fill
                className="object-cover transition duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
             />
             <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white transition-all duration-300">
               <h3 className="text-3xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition duration-300">RE:ON 임플란트</h3>
               <div className="h-0.5 w-12 bg-white mb-4 opacity-0 group-hover:opacity-100 transition duration-500 delay-100"></div>
               <p className="mb-6 text-base opacity-90 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-100">
                 구강악안면외과, 통합치의학과, 치과보철과 전문의 협진으로 고난이도 임플란트도 효과적으로
               </p>
               <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-200">
                    <span className="text-sm border-b border-white pb-1 inline-block hover:opacity-80">READ MORE</span>
               </div>
             </div>
           </div>

           {/* Orthodontics */}
           <div className="group relative overflow-hidden rounded-2xl h-[450px] bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
             <Image
                src="https://reondc.com/images/common/main02_2.jpg"
                alt="RE:ON Orthodontics"
                fill
                className="object-cover transition duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
             />
             <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white transition-all duration-300">
               <h3 className="text-3xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition duration-300">RE:ON 치아교정</h3>
               <div className="h-0.5 w-12 bg-white mb-4 opacity-0 group-hover:opacity-100 transition duration-500 delay-100"></div>
               <p className="mb-6 text-base opacity-90 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-100">
                 초진 상담부터 유지장치를 장착하는 마무리 단계까지 치과교정과 전문의가 책임지고 꼼꼼하게 진료
               </p>
               <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-200">
                    <span className="text-sm border-b border-white pb-1 inline-block hover:opacity-80">READ MORE</span>
               </div>
             </div>
           </div>

           {/* Pediatrics */}
           <div className="group relative overflow-hidden rounded-2xl h-[450px] bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
             <Image
                src="https://reondc.com/images/common/main02_3.jpg"
                alt="RE:ON Pediatrics"
                fill
                className="object-cover transition duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
             />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white transition-all duration-300">
               <h3 className="text-3xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition duration-300">RE:ON 소아진료</h3>
               <div className="h-0.5 w-12 bg-white mb-4 opacity-0 group-hover:opacity-100 transition duration-500 delay-100"></div>
               <p className="mb-6 text-base opacity-90 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-100">
                 아이들의 심리적 안정까지 고려해 설계된 독립된 소아진료실에서 소중한 우리 아이 치아, 바르고 고르게
               </p>
               <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-200">
                    <span className="text-sm border-b border-white pb-1 inline-block hover:opacity-80">READ MORE</span>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Treatment Subjects */}
      <div id="subjects" className="container mx-auto px-4 bg-gray-50 rounded-[3rem] py-20">
        <div className="text-center mb-16">
             <h3 className="text-blue-900 font-bold tracking-[0.2em] uppercase mb-3">RE:ON Your Smile</h3>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                체계적인 정기검진 시스템
             </h2>
             <p className="text-gray-600 text-lg">
                 치료의 예방부터 전문의 협진 진료, 사후관리까지 꼼꼼하게 책임집니다.
             </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 text-center">
            <div className="group cursor-pointer">
                <div className="w-28 h-28 mx-auto overflow-hidden rounded-full shadow-lg group-hover:shadow-xl mb-6 transition duration-300 relative border-4 border-white group-hover:border-blue-900">
                    <Image src="https://reondc.com/images/common/main03_01.jpg" alt="Implant" fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-900 transition">임플란트</h4>
                <p className="text-sm text-gray-500 leading-relaxed">내비게이션<br/>뼈이식/재수술</p>
            </div>
             <div className="group cursor-pointer">
                <div className="w-28 h-28 mx-auto overflow-hidden rounded-full shadow-lg group-hover:shadow-xl mb-6 transition duration-300 relative border-4 border-white group-hover:border-blue-900">
                    <Image src="https://reondc.com/images/common/main03_02.jpg" alt="Orthodontics" fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-900 transition">교정치료</h4>
                <p className="text-sm text-gray-500 leading-relaxed">투명교정<br/>클리피씨/부분</p>
            </div>
             <div className="group cursor-pointer">
                <div className="w-28 h-28 mx-auto overflow-hidden rounded-full shadow-lg group-hover:shadow-xl mb-6 transition duration-300 relative border-4 border-white group-hover:border-blue-900">
                    <Image src="https://reondc.com/images/common/main03_03.jpg" alt="Pediatrics" fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-900 transition">소아진료</h4>
                <p className="text-sm text-gray-500 leading-relaxed">영유아검진<br/>웃음가스치료</p>
            </div>
            <div className="group cursor-pointer">
                <div className="w-28 h-28 mx-auto overflow-hidden rounded-full shadow-lg group-hover:shadow-xl mb-6 transition duration-300 relative border-4 border-white group-hover:border-blue-900">
                    <Image src="https://reondc.com/images/common/main03_04.jpg" alt="Dentures" fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-900 transition">틀니치료</h4>
                <p className="text-sm text-gray-500 leading-relaxed">전체틀니<br/>부분틀니</p>
            </div>
             <div className="group cursor-pointer">
                <div className="w-28 h-28 mx-auto overflow-hidden rounded-full shadow-lg group-hover:shadow-xl mb-6 transition duration-300 relative border-4 border-white group-hover:border-blue-900">
                    <Image src="https://reondc.com/images/common/main03_05.jpg" alt="Aesthetic" fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-900 transition">심미치료</h4>
                <p className="text-sm text-gray-500 leading-relaxed">라미네이트<br/>미백/잇몸성형</p>
            </div>
             <div className="group cursor-pointer">
                <div className="w-28 h-28 mx-auto overflow-hidden rounded-full shadow-lg group-hover:shadow-xl mb-6 transition duration-300 relative border-4 border-white group-hover:border-blue-900">
                    <Image src="https://reondc.com/images/common/main03_06.jpg" alt="General" fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-900 transition">일반진료</h4>
                <p className="text-sm text-gray-500 leading-relaxed">충치/신경치료<br/>사랑니발치</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
