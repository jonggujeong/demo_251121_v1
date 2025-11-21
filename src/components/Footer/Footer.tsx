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
                <a href="https://naver.me/FXwxJG1P" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#03C75A] transition text-white" aria-label="Naver Booking">N</a>
                <a href="https://pf.kakao.com/_SGCwn" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FEE500] hover:text-[#3C1E1E] transition text-white" aria-label="Kakao Chat">K</a>
                <a href="https://www.instagram.com/re_on_dentalclinic/" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition text-white" aria-label="Instagram">I</a>
                <a href="https://m.blog.naver.com/reondc" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#03C75A] transition text-white" aria-label="Blog">B</a>
             </div>
             <Link href="https://naver.me/FXwxJG1P" target="_blank" className="block w-full py-3 border border-gray-700 rounded-lg text-sm hover:border-gray-500 transition mb-2 text-center text-white">
                 오시는 길 &rarr;
             </Link>
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
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.0990902166543!2d127.0486003!3d37.8111003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cce8105555555%3A0x8555555555555555!2z6rK96riw64-EIOyWkeyjvOyLnCDrjZXqs4TrrowgMTMwIDTsuLggNDAxLTQwOedL!5e0!3m2!1sko!2skr!4v1635750000000!5m2!1sko!2skr"
                 width="100%"
                 height="200"
                 style={{ border: 0, borderRadius: '0.75rem', filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                 allowFullScreen
                 loading="lazy"
                 title="Map"
               ></iframe>
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
