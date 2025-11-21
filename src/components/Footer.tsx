import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">RE:ON DENTAL CLINIC</h3>
            <p className="text-gray-400">경기도양주시덕계로130, 4층 401-409호(덕계동, 부경타워)</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <p className="text-gray-400">대표번호: 031.863.7522</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">진료시간</h3>
            <p className="text-gray-400">월·수 오전 09:30 ~ 오후 08:30 야간진료</p>
            <p className="text-gray-400">화·목·금 오전 09:30 ~ 오후 06:30</p>
            <p className="text-gray-400">점심시간 오후 01:00 ~ 오후 02:00</p>
            <p className="text-gray-400">토·일 오전 09:30 ~ 오후 02:00 점심시간 없음</p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>리온치과의원 대표 : 기혜림 | 사업자등록번호 : 202-01-55258 | 대표전화 : 031-863-7522</p>
          <p className="mt-2">주소 : 경기도 양주시 덕계로 130, 4층 401-409호(덕계동, 부경타워)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
