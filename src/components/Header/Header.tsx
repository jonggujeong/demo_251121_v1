"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center z-50">
            {/* Placeholder for Logo if not available, or text */}
            <span className="text-2xl font-bold text-blue-900">RE:ON</span>
        </Link>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="#philosophy" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">진료철학</Link>
          <Link href="#team" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">의료진소개</Link>
          <Link href="#special" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">특화진료</Link>
          <Link href="#subjects" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">진료과목</Link>
          <Link href="#cases" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">임상사례</Link>
          <Link href="#equipment" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">장비소개</Link>
          <Link href="#interior" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">둘러보기</Link>
          <Link href="#info" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">진료안내</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-2">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition">
                온라인 예약
            </button>
        </div>

         {/* Mobile Menu Button */}
         <div className="md:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
             <div className="fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 md:hidden">
                <nav className="flex flex-col space-y-6 text-lg font-medium">
                    <Link href="#philosophy" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">진료철학</Link>
                    <Link href="#team" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">의료진소개</Link>
                    <Link href="#special" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">특화진료</Link>
                    <Link href="#subjects" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">진료과목</Link>
                    <Link href="#cases" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">임상사례</Link>
                    <Link href="#equipment" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">장비소개</Link>
                    <Link href="#interior" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">둘러보기</Link>
                    <Link href="#info" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-900 border-b border-gray-100 pb-2">진료안내</Link>
                </nav>
             </div>
        )}
      </div>
    </header>
  );
};

export default Header;
