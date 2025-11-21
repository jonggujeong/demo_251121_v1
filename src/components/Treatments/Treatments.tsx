import Link from 'next/link';

const Treatments = () => {
  return (
    <section id="special" className="py-24 bg-white">
       {/* Signature Treatments */}
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h3 className="text-blue-900 font-bold tracking-widest uppercase mb-3">RE:ON Signature</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            치료가 까다로운<br/>고난이도 케이스도 가능
          </h2>
          <p className="text-gray-600 text-lg">
            우리는 결과로 전문성을 입증하는 리온치과 입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Implant */}
           <div className="group relative overflow-hidden rounded-2xl h-[400px] bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition z-10"></div>
             {/* Image Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-600"></div>
             <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
               <h3 className="text-3xl font-bold mb-3">RE:ON 임플란트</h3>
               <p className="mb-6 text-base opacity-90 leading-relaxed">
                 구강악안면외과, 통합치의학과, 치과보철과 전문의 협진으로 고난이도 임플란트도 효과적으로
               </p>
               <Link href="#" className="text-sm border-b border-white pb-1 inline-block hover:opacity-80">READ MORE</Link>
             </div>
           </div>

           {/* Orthodontics */}
           <div className="group relative overflow-hidden rounded-2xl h-[400px] bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-500"></div>
             <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
               <h3 className="text-3xl font-bold mb-3">RE:ON 치아교정</h3>
               <p className="mb-6 text-base opacity-90 leading-relaxed">
                 초진 상담부터 유지장치를 장착하는 마무리 단계까지 치과교정과 전문의가 책임지고 꼼꼼하게 진료
               </p>
               <Link href="#" className="text-sm border-b border-white pb-1 inline-block hover:opacity-80">READ MORE</Link>
             </div>
           </div>

           {/* Pediatrics */}
           <div className="group relative overflow-hidden rounded-2xl h-[400px] bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-400"></div>
             <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
               <h3 className="text-3xl font-bold mb-3">RE:ON 소아진료</h3>
               <p className="mb-6 text-base opacity-90 leading-relaxed">
                 아이들의 심리적 안정까지 고려해 설계된 독립된 소아진료실에서 소중한 우리 아이 치아, 바르고 고르게
               </p>
               <Link href="#" className="text-sm border-b border-white pb-1 inline-block hover:opacity-80">READ MORE</Link>
             </div>
           </div>
        </div>
      </div>

      {/* Treatment Subjects */}
      <div id="subjects" className="container mx-auto px-4 bg-gray-50 rounded-[3rem] py-20">
        <div className="text-center mb-16">
             <h3 className="text-blue-900 font-bold tracking-widest uppercase mb-3">RE:ON Your Smile</h3>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                체계적인 정기검진 시스템
             </h2>
             <p className="text-gray-600">
                 치료의 예방부터 전문의 협진 진료, 사후관리까지 꼼꼼하게 책임집니다.
             </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            <div className="group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full shadow-md group-hover:shadow-lg flex items-center justify-center mb-6 text-blue-900 transition duration-300">
                   {/* Icon Placeholder: Implant */}
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2">임플란트</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                   임플란트<br/>
                   내비게이션임플란트<br/>
                   가이드 임플란트<br/>
                   발치즉시 임플란트<br/>
                   재수술 임플란트<br/>
                   뼈이식 임플란트<br/>
                   상악동 거상술<br/>
                   전체 임플란트<br/>
                   임플란트 틀니
                </p>
            </div>
             <div className="group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full shadow-md group-hover:shadow-lg flex items-center justify-center mb-6 text-blue-900 transition duration-300">
                     {/* Icon Placeholder: Orthodontics */}
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2">교정치료</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                   교정치료<br/>
                   투명교정(인비절라인)<br/>
                   클리피씨 교정<br/>
                   세라믹 교정<br/>
                   메탈 교정<br/>
                   소아 교정<br/>
                   부분 교정
                </p>
            </div>
             <div className="group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full shadow-md group-hover:shadow-lg flex items-center justify-center mb-6 text-blue-900 transition duration-300">
                     {/* Icon Placeholder: Pediatrics */}
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2">소아진료</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                   소아진료<br/>
                   영유아 구강검진<br/>
                   학생 구강검진<br/>
                   불소도포<br/>
                   성장검사<br/>
                   웃음가스치료<br/>
                   의식하진정법
                </p>
            </div>
            <div className="group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full shadow-md group-hover:shadow-lg flex items-center justify-center mb-6 text-blue-900 transition duration-300">
                    {/* Icon Placeholder: Dentures */}
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2">틀니치료</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                   틀니치료<br/>
                   전체 틀니<br/>
                   부분 틀니
                </p>
            </div>
             <div className="group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full shadow-md group-hover:shadow-lg flex items-center justify-center mb-6 text-blue-900 transition duration-300">
                    {/* Icon Placeholder: Esthetic */}
                   <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2">심미치료</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                   심미치료<br/>
                   미백치료<br/>
                   라미네이트<br/>
                   레진치료<br/>
                   앞니 재치료<br/>
                   잇몸 성형
                </p>
            </div>
             <div className="group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full shadow-md group-hover:shadow-lg flex items-center justify-center mb-6 text-blue-900 transition duration-300">
                     {/* Icon Placeholder: General */}
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                </div>
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2">일반진료</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                   일반진료<br/>
                   구강검진<br/>
                   스케일링<br/>
                   MTA 근관치료<br/>
                   충치치료
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
