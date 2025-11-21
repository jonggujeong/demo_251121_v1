const Treatments = () => {
  return (
    <section id="special" className="py-20 bg-white">
       {/* Signature Treatments */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h3 className="text-blue-900 font-semibold tracking-widest uppercase mb-2">RE:ON Signature</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            치료가 까다로운 고난이도 케이스도 가능
          </h2>
          <p className="text-gray-600">
            우리는 결과로 전문성을 입증하는 리온치과 입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Implant */}
           <div className="group relative overflow-hidden rounded-xl h-96 bg-gray-100">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition z-10"></div>
             {/* Image Placeholder */}
             <div className="absolute inset-0 bg-gray-300"></div>
             <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
               <h3 className="text-2xl font-bold mb-2">RE:ON 임플란트</h3>
               <p className="mb-4 text-sm opacity-90">
                 구강악안면외과, 통합치의학과, 치과보철과 전문의 협진으로 고난이도 임플란트도 효과적으로
               </p>
               <span className="text-sm border-b border-white pb-1 inline-block cursor-pointer">READ MORE</span>
             </div>
           </div>

           {/* Orthodontics */}
           <div className="group relative overflow-hidden rounded-xl h-96 bg-gray-100">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition z-10"></div>
             <div className="absolute inset-0 bg-gray-400"></div>
             <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
               <h3 className="text-2xl font-bold mb-2">RE:ON 치아교정</h3>
               <p className="mb-4 text-sm opacity-90">
                 초진 상담부터 유지장치까지 치과교정과 전문의가 책임지고 꼼꼼하게 진료
               </p>
               <span className="text-sm border-b border-white pb-1 inline-block cursor-pointer">READ MORE</span>
             </div>
           </div>

           {/* Pediatrics */}
           <div className="group relative overflow-hidden rounded-xl h-96 bg-gray-100">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition z-10"></div>
             <div className="absolute inset-0 bg-gray-500"></div>
             <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
               <h3 className="text-2xl font-bold mb-2">RE:ON 소아진료</h3>
               <p className="mb-4 text-sm opacity-90">
                 아이들의 심리적 안정까지 고려해 설계된 독립된 소아진료실에서
               </p>
               <span className="text-sm border-b border-white pb-1 inline-block cursor-pointer">READ MORE</span>
             </div>
           </div>
        </div>
      </div>

      {/* Treatment Subjects */}
      <div id="subjects" className="container mx-auto px-4 bg-gray-50 rounded-3xl py-16">
        <div className="text-center mb-12">
             <h3 className="text-blue-900 font-semibold tracking-widest uppercase mb-2">RE:ON Your Smile</h3>
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                체계적인 정기검진 시스템
             </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-center">
            <div>
                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-blue-900">
                    {/* Icon */}
                    <span className="font-bold text-xl">01</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">임플란트</h4>
                <p className="text-xs text-gray-500">내비게이션<br/>뼈이식/재수술</p>
            </div>
             <div>
                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-blue-900">
                    <span className="font-bold text-xl">02</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">교정치료</h4>
                <p className="text-xs text-gray-500">투명교정<br/>클리피씨/부분</p>
            </div>
             <div>
                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-blue-900">
                    <span className="font-bold text-xl">03</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">소아진료</h4>
                <p className="text-xs text-gray-500">영유아검진<br/>웃음가스치료</p>
            </div>
             <div>
                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-blue-900">
                    <span className="font-bold text-xl">04</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">심미치료</h4>
                <p className="text-xs text-gray-500">라미네이트<br/>미백/잇몸성형</p>
            </div>
             <div>
                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-blue-900">
                    <span className="font-bold text-xl">05</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">일반진료</h4>
                <p className="text-xs text-gray-500">충치/신경치료<br/>사랑니발치</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
