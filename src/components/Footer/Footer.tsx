import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="info" className="bg-[#1a1a1a] text-gray-400 py-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
           {/* Brand & SNS */}
           <div className="lg:col-span-3">
             <Link href="/" className="block mb-6">
                <span className="text-3xl font-bold text-white">RE:ON</span>
             </Link>
             <div className="flex space-x-3 mb-8">
                {/* SNS Icons with Placeholders */}
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition text-white">N</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition text-white">K</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition text-white">I</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition text-white">B</a>
             </div>
             <button className="w-full py-3 border border-gray-700 rounded-lg text-sm hover:border-gray-500 transition mb-2 text-center">
                 오시는 길 &rarr;
             </button>
           </div>

           {/* Contact Info */}
           <div className="lg:col-span-3">
             <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
             <p className="text-3xl text-white font-bold mb-4">031.863.7522</p>
             <address className="not-italic text-sm leading-relaxed">
               경기도 양주시 덕계로 130, 4층<br/>
               401-409호 (덕계동, 부경타워)
             </address>
           </div>

           {/* Hours */}
           <div className="lg:col-span-3">
             <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">진료시간</h3>
             <ul className="text-sm space-y-3">
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span className="text-white">월 · 수 (야간)</span>
                 <span>09:30 ~ 20:30</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span className="text-white">화 · 목 · 금</span>
                 <span>09:30 ~ 18:30</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>점심시간</span>
                 <span>13:00 ~ 14:00</span>
               </li>
                <li className="flex justify-between text-white font-medium">
                 <span>토 · 일 (주말)</span>
                 <span>09:30 ~ 14:00</span>
               </li>
             </ul>
             <p className="text-xs mt-3 text-gray-500">* 주말 점심시간 없음 / 매월 마지막주 일요일, 공휴일 휴진</p>
           </div>

           {/* Map/Extra */}
           <div className="lg:col-span-3">
               <div className="bg-gray-800 rounded-xl h-full min-h-[200px] flex items-center justify-center text-gray-600 text-sm">
                   {/* Map Placeholder */}
                   [지도 영역]
               </div>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-1">
                <span className="mr-4">상호 : 리온치과의원</span>
                <span className="mr-4">대표자 : 기혜림</span>
                <span>사업자등록번호 : 202-01-55258</span>
            </p>
            <p>주소 : 경기도 양주시 덕계로 130, 4층 401-409호(덕계동, 부경타워)</p>
            <p className="mt-4 font-medium text-gray-400">COPYRIGHT © RE:ON DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex space-x-6 text-xs">
            <a href="#" className="text-gray-400 hover:text-white transition">이용약관</a>
            <a href="#" className="text-gray-400 hover:text-white transition font-bold">개인정보처리방침</a>
            <a href="#" className="text-gray-400 hover:text-white transition">비급여진료비안내</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
