import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Since I don't have the actual image assets locally, I'll use a placeholder color or a generic image from a public URL if allowed, but safe to stick to styling */}
        <div className="w-full h-full bg-gradient-to-r from-blue-100 to-white opacity-80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <h2 className="text-xl md:text-2xl text-blue-900 font-medium mb-4 animate-fade-in-up">
          환한 웃음을 되찾는 곳,
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-100">
          여기는 <span className="text-blue-900">리온치과</span> 입니다
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-200">
          보건복지부 인증 전문의 진료, 수준 높은 협진 시스템.<br className="hidden md:block" />
          가족을 치료하는 마음으로 정성을 다해 진료합니다.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            {/* Feature Badges */}
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-900">
                <p className="font-bold text-gray-800">보건복지부인증</p>
                <p className="text-sm text-gray-600">치과 전문의 진료</p>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-900">
                <p className="font-bold text-gray-800">전문의 5인</p>
                <p className="text-sm text-gray-600">분과별 협진 진료</p>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-900">
                <p className="font-bold text-gray-800">200평 대형규모</p>
                <p className="text-sm text-gray-600">대학병원급 시설</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
