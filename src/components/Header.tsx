"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">RE:ON</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 left-0 md:top-0 md:left-auto bg-white md:bg-transparent w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><a href="#main01" className="text-gray-600 hover:text-blue-500 transition-colors">진료철학</a></li>
            <li><a href="#maindr" className="text-gray-600 hover:text-blue-500 transition-colors">의료진소개</a></li>
            <li><a href="#main02" className="text-gray-600 hover:text-blue-500 transition-colors">특화진료</a></li>
            <li><a href="#main03" className="text-gray-600 hover:text-blue-500 transition-colors">진료과목</a></li>
            <li><a href="#main05" className="text-gray-600 hover:text-blue-500 transition-colors">임상사례</a></li>
            <li><a href="#main10" className="text-gray-600 hover:text-blue-500 transition-colors">장비소개</a></li>
            <li><a href="#main06" className="text-gray-600 hover:text-blue-500 transition-colors">둘러보기</a></li>
            <li><a href="#footer" className="text-gray-600 hover:text-blue-500 transition-colors">진료안내</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
