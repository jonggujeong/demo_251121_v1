"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center z-50 relative">
            <Image
              src="https://reondc.com/images/common/logo.svg"
              alt="RE:ON Dental Clinic"
              width={140}
              height={46}
              className="h-10 md:h-12 w-auto"
            />
        </Link>

        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          <Link href="#philosophy" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">진료철학</Link>
          <Link href="#team" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">의료진소개</Link>
          <Link href="#special" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">특화진료</Link>
          <Link href="#subjects" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">진료과목</Link>
          <Link href="#cases" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">임상사례</Link>
          <Link href="#equipment" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">장비소개</Link>
          <Link href="#interior" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">둘러보기</Link>
          <Link href="#info" className="text-gray-800 hover:text-blue-900 font-semibold text-base transition">진료안내</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
             <Link href="tel:031-863-7522" className="flex items-center text-gray-600 hover:text-blue-900 font-bold mr-2">
                <span className="mr-1 text-xs">예약문의</span>
                <span className="text-lg">031.863.7522</span>
            </Link>
            <Link href="https://naver.me/FXwxJG1P" target="_blank" className="px-5 py-2.5 bg-[#03C75A] text-white rounded-full text-sm font-bold hover:bg-[#02b351] transition shadow-md flex items-center">
               <span className="mr-1">N</span> 네이버 예약
            </Link>
        </div>

         {/* Mobile Menu Button */}
         <div className="lg:hidden z-50 flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none p-2">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col`}>
             <div className="pt-24 px-6 pb-8 flex-1 overflow-y-auto">
                <nav className="flex flex-col space-y-6">
                    <Link href="#philosophy" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">진료철학</Link>
                    <Link href="#team" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">의료진소개</Link>
                    <Link href="#special" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">특화진료</Link>
                    <Link href="#subjects" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">진료과목</Link>
                    <Link href="#cases" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">임상사례</Link>
                    <Link href="#equipment" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">장비소개</Link>
                    <Link href="#interior" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">둘러보기</Link>
                    <Link href="#info" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-3">진료안내</Link>
                </nav>

                <div className="mt-8 space-y-4">
                    <Link href="https://naver.me/FXwxJG1P" target="_blank" className="flex items-center justify-center w-full py-3 bg-[#03C75A] text-white rounded-lg font-bold text-lg shadow-sm">
                        <span className="mr-2">N</span> 네이버 예약
                    </Link>
                     <Link href="tel:031-863-7522" className="flex items-center justify-center w-full py-3 bg-blue-900 text-white rounded-lg font-bold text-lg shadow-sm">
                        전화문의 031.863.7522
                    </Link>
                </div>
             </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
