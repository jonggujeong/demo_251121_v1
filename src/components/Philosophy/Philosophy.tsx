const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-blue-900 font-semibold tracking-widest uppercase mb-2">RE:ON Philosophy</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            건강한 치아와 바른 치열<br />
            나의 환한 미소를 되찾는 곳
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
            <div className="mb-6 text-blue-900">
               {/* Icon placeholder */}
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5인 전문의 협진</h3>
            <p className="text-gray-600 leading-relaxed">
              치료의 완성도를 높이는 5인 전문의 분과별 협진 진료.
              우리집 가까운 곳에서도 수준 높은 진료를 받으실 수 있습니다.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
             <div className="mb-6 text-blue-900">
               {/* Icon placeholder */}
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">자체 디지털 기공소</h3>
            <p className="text-gray-600 leading-relaxed">
              리온 디지털 원내기공소 운영.
              전문의와 베테랑 기공사가 소통하여 빠르고 정확하게 퀄리티 높은 보철물을 제작합니다.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
             <div className="mb-6 text-blue-900">
               {/* Icon placeholder */}
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">전문 클리닉 운영</h3>
            <p className="text-gray-600 leading-relaxed">
              재생 임플란트 클리닉, 심미보철 클리닉.
              자연스럽고 조화로운 결과를 위해 각 분야 전문의가 책임 진료합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
