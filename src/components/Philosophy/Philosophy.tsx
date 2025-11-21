const Philosophy = () => {
  const philosophies = [
    {
      title: "5인 전문의 분과별 협진 진료",
      subtitle: "치료의 완성도를 높이는",
      desc: "우리집 가까운 곳에서도 수준 높은 진료를 받으실 수 있습니다.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "리온 디지털 원내기공소",
      subtitle: "고퀄리티의 정교한 보철 제작",
      desc: "리온치과의 모든 보철물은 전문의와 베테랑 기공사가 디자인 부터 제작까지 밀접하게 소통하여 디지털 기공장비로 빠르고 정확하게 퀄리티 높은 보철물을 제작합니다.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "재생 임플란트 클리닉",
      subtitle: "구강악안면외과 전문의 직접 진료",
      desc: "임플란트 진행 시 염증 회복, 잇몸뼈 및 손상된 조직의 재생에 효과적인 PDRN 치료를 도입하여 치료 효율을 극대화합니다.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "리온 심미보철 클리닉",
      subtitle: "나에게 딱 맞는 미소를 디자인하는",
      desc: "자연스럽고 조화로운 '미소 디자인'을 위한 전문 심미치료 클리닉으로 라미네이트를 중심으로 치료합니다.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "200평, 덕계역 대형치과",
      subtitle: "덕계역 대형규모 치과!",
      desc: "대형규모 치과로 편안한 진료를 위해 임플란트 수술실, 교정치료실, 소아진료실, 회복실을 별도로 분리해 운영",
      icon: (
         <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
         </svg>
      )
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h3 className="text-blue-900 font-bold tracking-widest uppercase mb-3">RE:ON Philosophy</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            건강한 치아와 바른 치열<br />
            나의 환한 미소를 되찾는 곳
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
              어떤 치료를 하는지 쉽게 설명하고 충분히 설명 드리겠습니다.<br/>
              환자 한 분 한 분, 내 가족처럼 치료하는 리온치과입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
             <div key={index} className="bg-gray-50 p-10 rounded-2xl hover:shadow-xl transition duration-300 group">
                <div className="mb-6 text-blue-900 group-hover:scale-110 transition duration-300">
                    {item.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-200 group-hover:text-blue-100 transition">0{index + 1}</span>
                </div>
                <p className="text-blue-900 font-medium mb-2 text-sm">{item.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 break-keep">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base break-keep">
                  {item.desc}
                </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
