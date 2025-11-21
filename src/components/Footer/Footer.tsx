const Footer = () => {
  return (
    <footer id="info" className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
           {/* Brand */}
           <div>
             <h2 className="text-2xl font-bold text-white mb-6">RE:ON DENTAL</h2>
             <p className="text-sm mb-4">환한 웃음을 되찾는 곳,<br/>여기는 리온치과 입니다.</p>
             <div className="flex space-x-3">
                {/* SNS Icons */}
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
             </div>
           </div>

           {/* Contact */}
           <div>
             <h3 className="text-white font-bold mb-4">CONTACT US</h3>
             <p className="text-2xl text-white font-bold mb-2">031.863.7522</p>
             <p className="text-sm">경기도 양주시 덕계로 130, 4층<br/>(덕계동, 부경타워)</p>
           </div>

           {/* Hours */}
           <div>
             <h3 className="text-white font-bold mb-4">진료시간</h3>
             <ul className="text-sm space-y-2">
               <li className="flex justify-between">
                 <span>월 · 수 (야간)</span>
                 <span>09:30 ~ 20:30</span>
               </li>
               <li className="flex justify-between">
                 <span>화 · 목 · 금</span>
                 <span>09:30 ~ 18:30</span>
               </li>
               <li className="flex justify-between">
                 <span>점심시간</span>
                 <span>13:00 ~ 14:00</span>
               </li>
                <li className="flex justify-between text-white font-medium">
                 <span>토 · 일 (주말)</span>
                 <span>09:30 ~ 14:00</span>
               </li>
             </ul>
             <p className="text-xs mt-2 text-gray-500">* 주말 점심시간 없음 / 매월 마지막주 일요일, 공휴일 휴진</p>
           </div>

           {/* Map Placeholder */}
           <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
               <span>Map Area</span>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>상호 : 리온치과의원 | 대표자 : 기혜림 | 사업자등록번호 : 202-01-55258</p>
            <p>주소 : 경기도 양주시 덕계로 130, 4층 401-409호(덕계동, 부경타워)</p>
            <p className="mt-2">COPYRIGHT © RE:ON DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:text-white">이용약관</span>
            <span className="cursor-pointer hover:text-white">개인정보처리방침</span>
            <span className="cursor-pointer hover:text-white">비급여진료비안내</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
