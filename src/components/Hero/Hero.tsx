import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Using a placeholder gradient to simulate the bright and clean medical environment */}
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center h-full">
        <div className="max-w-3xl">
            <h2 className="text-xl md:text-3xl text-blue-900 font-medium mb-4 animate-fade-in-up">
            환한 웃음을 되찾는 곳,
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-100 leading-tight">
            여기는 <span className="text-blue-900">리온치과</span> 입니다
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl animate-fade-in-up delay-200 leading-relaxed">
            보건복지부 인증 전문의 진료, 수준 높은 협진 시스템.<br />
            가족을 치료하는 마음으로 정성을 다해 진료합니다.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300 mt-8">
            {/* Feature Badges */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-blue-900 min-w-[200px]">
                <p className="font-bold text-gray-800 text-lg">보건복지부인증</p>
                <p className="text-sm text-gray-600 mt-1">치과 전문의 진료</p>
            </div>
             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-blue-900 min-w-[200px]">
                <p className="font-bold text-gray-800 text-lg">전문의 5인</p>
                <p className="text-sm text-gray-600 mt-1">분과별 협진 진료</p>
            </div>
             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-blue-900 min-w-[200px]">
                <p className="font-bold text-gray-800 text-lg">200평 대형규모</p>
                <p className="text-sm text-gray-600 mt-1">대학병원급 시설</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
