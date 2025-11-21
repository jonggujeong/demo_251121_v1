import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="info" className="bg-[#111] text-gray-400 py-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
           {/* Brand & SNS */}
           <div className="lg:col-span-3">
             <Link href="/" className="block mb-6">
                <Image src="https://reondc.com/images/common/logo.svg" alt="RE:ON" width={140} height={46} className="h-12 w-auto brightness-0 invert" />
             </Link>
             <div className="flex space-x-3 mb-8">
                <a href="https://naver.me/FXwxJG1P" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#03C75A] transition group overflow-hidden">
                    <Image src="https://reondc.com/images/common/sns1.png" alt="Naver" width={40} height={40} className="w-full h-full object-cover opacity-70 group-hover:opacity-100" />
                </a>
                <a href="https://pf.kakao.com/_SGCwn" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FEE500] transition group overflow-hidden">
                    <Image src="https://reondc.com/images/common/sns2.png" alt="Kakao" width={40} height={40} className="w-full h-full object-cover opacity-70 group-hover:opacity-100" />
                </a>
                <a href="https://www.instagram.com/re_on_dentalclinic/" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E4405F] transition group overflow-hidden">
                    <Image src="https://reondc.com/images/common/sns4.png" alt="Instagram" width={40} height={40} className="w-full h-full object-cover opacity-70 group-hover:opacity-100" />
                </a>
                <a href="https://m.blog.naver.com/reondc?tab=1" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#03C75A] transition group overflow-hidden">
                    <Image src="https://reondc.com/images/common/sns5.png" alt="Blog" width={40} height={40} className="w-full h-full object-cover opacity-70 group-hover:opacity-100" />
                </a>
             </div>
             <Link href="https://naver.me/FXwxJG1P" target="_blank" className="block w-full py-3 border border-gray-700 rounded-lg text-sm hover:border-gray-500 hover:bg-gray-800 transition mb-2 text-center">
                 오시는 길 &rarr;
             </Link>
           </div>

           {/* Contact Info */}
           <div className="lg:col-span-3">
             <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">Contact Us</h3>
             <p className="text-3xl text-white font-bold mb-4 font-mono">031.863.7522</p>
             <address className="not-italic text-sm leading-relaxed text-gray-500">
               경기도 양주시 덕계로 130, 4층<br/>
               401-409호 (덕계동, 부경타워)
             </address>
           </div>

           {/* Hours */}
           <div className="lg:col-span-3">
             <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">진료시간</h3>
             <ul className="text-sm space-y-3">
               <li className="flex justify-between border-b border-gray-800 pb-2 border-dashed">
                 <span className="text-white font-medium">월 · 수 (야간)</span>
                 <span className="text-gray-300">09:30 ~ 20:30</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2 border-dashed">
                 <span className="text-white font-medium">화 · 목 · 금</span>
                 <span className="text-gray-300">09:30 ~ 18:30</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2 border-dashed">
                 <span className="text-gray-500">점심시간</span>
                 <span className="text-gray-500">13:00 ~ 14:00</span>
               </li>
                <li className="flex justify-between text-white font-medium">
                 <span className="text-blue-400">토 · 일 (주말)</span>
                 <span className="text-blue-400">09:30 ~ 14:00</span>
               </li>
             </ul>
             <p className="text-xs mt-3 text-gray-500">* 주말 점심시간 없음 / 매월 마지막주 일요일, 공휴일 휴진</p>
           </div>

           {/* Map/Extra */}
           <div className="lg:col-span-3">
               <div className="bg-gray-800 rounded-xl h-full min-h-[200px] flex items-center justify-center text-gray-600 text-sm overflow-hidden relative group cursor-pointer">
                   {/* Since we can't use an interactive map easily without an API key, we'll use a placeholder or a static image if available.
                       The text dump mentioned a map area. We'll try to use a map image if one was found, otherwise a stylized placeholder. */}
                   <div className="absolute inset-0 bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition">
                        <svg className="w-12 h-12 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                   <span className="relative z-10 font-medium text-gray-400">MAP VIEW</span>
               </div>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-gray-600 leading-relaxed">
            <p className="mb-1">
                <span className="mr-4">상호 : 리온치과의원</span>
                <span className="mr-4">대표자 : 기혜림</span>
                <span>사업자등록번호 : 202-01-55258</span>
            </p>
            <p>주소 : 경기도 양주시 덕계로 130, 4층 401-409호(덕계동, 부경타워)</p>
            <p className="mt-4 font-medium text-gray-500">COPYRIGHT © RE:ON DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex space-x-6 text-xs">
            <a href="#" className="text-gray-500 hover:text-white transition">이용약관</a>
            <a href="#" className="text-gray-500 hover:text-white transition font-bold">개인정보처리방침</a>
            <a href="#" className="text-gray-500 hover:text-white transition">비급여진료비안내</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
