"use client";

import Link from 'next/link';

const FloatingMenu = () => {
  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-40 flex flex-col gap-2">
      <Link href="https://naver.me/FXwxJG1P" target="_blank" className="w-12 h-12 md:w-14 md:h-14 bg-[#03C75A] rounded-full shadow-lg flex items-center justify-center text-white font-bold hover:scale-110 transition duration-300" aria-label="Naver Booking">
        <span className="text-xs md:text-sm">N</span>
      </Link>
      <Link href="https://pf.kakao.com/_SGCwn" target="_blank" className="w-12 h-12 md:w-14 md:h-14 bg-[#FEE500] rounded-full shadow-lg flex items-center justify-center text-[#3C1E1E] font-bold hover:scale-110 transition duration-300" aria-label="Kakao Chat">
         <span className="text-xs md:text-sm">Kakao</span>
      </Link>
       <Link href="tel:031-863-7522" className="w-12 h-12 md:w-14 md:h-14 bg-blue-900 rounded-full shadow-lg flex items-center justify-center text-white font-bold hover:scale-110 transition duration-300 md:hidden" aria-label="Call">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      </Link>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:scale-110 transition duration-300" aria-label="Scroll to Top">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
      </button>
    </div>
  );
};

export default FloatingMenu;
