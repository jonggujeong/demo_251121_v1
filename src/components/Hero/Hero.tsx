import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://reondc.com/images/main2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-4 flex flex-col justify-center h-full">
        <div className="max-w-3xl mt-20 md:mt-0">
            <h2 className="text-lg md:text-3xl text-blue-900 font-medium mb-3 md:mb-4 animate-fade-in-up">
            환한 웃음을 되찾는 곳,
            </h2>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-in-up delay-100 leading-tight tracking-tight">
            여기는 <span className="text-blue-900">리온치과</span> 입니다
            </h1>
            <p className="text-base md:text-2xl text-gray-600 mb-8 md:mb-10 max-w-2xl animate-fade-in-up delay-200 leading-relaxed break-keep">
            보건복지부 인증 전문의 진료, 수준 높은 협진 시스템.<br />
            가족을 치료하는 마음으로 정성을 다해 진료합니다.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 animate-fade-in-up delay-300 mt-2 md:mt-8 w-full md:w-auto">
            {/* Feature Badges */}
            <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-900 w-full md:min-w-[200px] transform transition hover:-translate-y-1 duration-300">
                <p className="font-bold text-gray-800 text-lg md:text-xl">보건복지부인증</p>
                <p className="text-sm text-gray-600 mt-1">치과 전문의 진료</p>
            </div>
             <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-900 w-full md:min-w-[200px] transform transition hover:-translate-y-1 duration-300">
                <p className="font-bold text-gray-800 text-lg md:text-xl">전문의 5인</p>
                <p className="text-sm text-gray-600 mt-1">분과별 협진 진료</p>
            </div>
             <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-900 w-full md:min-w-[200px] transform transition hover:-translate-y-1 duration-300">
                <p className="font-bold text-gray-800 text-lg md:text-xl">200평 대형규모</p>
                <p className="text-sm text-gray-600 mt-1">대학병원급 시설</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
