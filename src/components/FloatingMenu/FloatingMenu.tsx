"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const FloatingMenu = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickMenu = [
    { name: '네이버 예약', image: 'https://reondc.com/images/common/rq1.png', link: 'https://naver.me/FXwxJG1P' },
    { name: '카톡 상담', image: 'https://reondc.com/images/common/rq2.png', link: 'https://pf.kakao.com/_SGCwn' },
    { name: '공식 블로그', image: 'https://reondc.com/images/common/rq3.png', link: 'https://blog.naver.com/reondc' },
    { name: '닥터 블로그', image: 'https://reondc.com/images/common/rq3.png', link: 'https://blog.naver.com/bagaza' },
    { name: '당근채널', image: 'https://reondc.com/images/common/rq4.png', link: 'https://www.daangn.com/kr/local-profile/리온치과-qcy5mxqtmuyo/' },
    { name: '전화상담', image: 'https://reondc.com/images/common/rq5.png', link: 'tel:031-863-7522' },
  ];

  return (
    <>
      {/* Desktop Floating Sidebar */}
      <div className="hidden lg:flex flex-col fixed right-0 top-[25%] z-50 bg-white shadow-lg rounded-l-xl overflow-hidden border border-gray-100">
        {quickMenu.map((item, index) => (
          <Link key={index} href={item.link} target={item.link.startsWith('tel') ? '_self' : '_blank'} className="block border-b border-gray-100 last:border-0 hover:bg-gray-50 transition group">
             <div className="p-3 flex flex-col items-center justify-center w-[85px] h-[85px]">
                <div className="w-9 h-9 relative mb-1">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="text-[11px] text-gray-600 font-medium group-hover:text-blue-900 transition text-center leading-tight">{item.name}</span>
             </div>
          </Link>
        ))}
      </div>

      {/* Mobile Floating Buttons (Simplified) */}
      <div className="lg:hidden fixed right-4 bottom-6 z-50 flex flex-col gap-3">
         <Link href="https://naver.me/FXwxJG1P" target="_blank" className="w-12 h-12 bg-[#03C75A] rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition">
             <Image src="https://reondc.com/images/common/rq1.png" alt="Booking" width={24} height={24} className="object-contain brightness-0 invert" />
         </Link>
         <Link href="https://pf.kakao.com/_SGCwn" target="_blank" className="w-12 h-12 bg-[#FEE500] rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition">
              <Image src="https://reondc.com/images/common/rq2.png" alt="Kakao" width={24} height={24} className="object-contain" />
         </Link>
         <Link href="tel:031-863-7522" className="w-12 h-12 bg-blue-900 rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition">
              <Image src="https://reondc.com/images/common/rq5.png" alt="Call" width={24} height={24} className="object-contain brightness-0 invert" />
         </Link>
      </div>

      {/* Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-4 bottom-44 lg:right-8 lg:bottom-8 z-40 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
         <div className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center bg-transparent hover:-translate-y-1 transition">
            <Image
                src="https://reondc.com/images/common/topbt.png"
                alt="Top"
                width={56}
                height={56}
                className="w-full h-full object-contain"
            />
         </div>
      </button>
    </>
  );
};

export default FloatingMenu;
