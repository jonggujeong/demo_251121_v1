import Image from 'next/image';

const doctors = [
  {
    name: '박재우 대표원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 사랑니발치, 신경치료, 일반진료, 턱관절치료',
    career: ['보건복지부 인증 구강악안면외과 전문의', '보건복지부 인증 통합치의학과 전문의', '단국대학교 치의학과 졸업', '단국대학교 치의학대학원 구강악안면외과학 석사/박사수료', '대한악안면성형재건외과학회 인정의/정회원'],
    image: 'https://reondc.com/filedata/md_medical_team/20250420150619_jDywus6W_dr01.jpg'
  },
  {
    name: '기혜림 대표원장',
    specialty: '치과교정과 전문의',
    description: '투명교정, 성장기교정, 성인교정, 부분교정',
    career: ['보건복지부 인증 치과교정과 전문의', '단국대학교 치의학과 수석 졸업', '단국대학교 치의학대학원 치과교정학 석사', '인비절라인 투명교정 인증 치과의사', '대한치과교정학회(KAO) 정회원, 인정의'],
    image: 'https://reondc.com/filedata/md_medical_team/20250420154428_lXa2c1g7_dr2.jpg'
  },
  {
    name: '배지수 원장',
    specialty: '소아치과 전문의',
    description: '영유아구강검진, 충치치료, 소아교정, 웃음가스치료',
    career: ['보건복지부 인증 소아치과 전문의', '연세대학교 치과대학 졸업/치의학대학원 석사', '대한소아치과학회 정회원', '미국심장협회 BLS provider', '인비절라인 투명교정 인증 치과의사'],
    image: 'https://reondc.com/filedata/md_medical_team/20250420154603_t4psEWoc_dr3.jpg'
  },
  {
    name: '구철홍 원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 틀니치료, 사랑니발치, 일반진료',
    career: ['보건복지부 인증 구강악안면외과 전문의 (전국 수석)', '보건복지부 인증 통합치의학과 전문의', '단국대학교 치의학과 졸업/석사', '청와대 부속 서울지구병원 구강악안면외과장', '제 19대 대통령 치과 자문의 및 의료진 역임'],
    image: 'https://reondc.com/filedata/md_medical_team/20250420154724_AZCMuPUT_dr4.jpg'
  },
  {
    name: '송지은 원장',
    specialty: '치과보철과 전문의',
    description: '임플란트, 틀니치료, 심미치료, 충치치료',
    career: ['보건복지부 인증 치과보철과 전문의', '전남대학교 치의학전문대학원 석사/박사', '대한치과보철학회 인정의/정회원', '대한턱관절교합학회 정회원', '2024년 대한턱관절교합학회 구연 최우수상'],
    image: 'https://reondc.com/filedata/md_medical_team/20250420154905_QcyzIPti_dr5.jpg'
  }
];

const MedicalTeam = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
           <h3 className="text-blue-900 font-bold tracking-[0.2em] uppercase mb-3 animate-fade-in-up">Medical Team</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-100">
            리온치과 의료진 소개
          </h2>
          <p className="text-gray-600 text-lg animate-fade-in-up delay-200">
            각 분과별 협진 진료 시스템,<br/>분과별 전문 의료진들이 함께합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group border border-gray-100">
              <div className="h-96 bg-gray-100 relative overflow-hidden">
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <div className="p-8 relative">
                <div className="flex items-end mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 mr-2">{doctor.name}</h3>
                </div>
                <p className="text-blue-900 font-medium mb-4 min-h-[3rem] text-sm md:text-base">{doctor.specialty}</p>
                <div className="w-12 h-1 bg-blue-900 mb-5"></div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed font-medium">{doctor.description}</p>

                <div className="border-t border-gray-100 pt-4 mb-4">
                    <ul className="text-xs text-gray-500 space-y-1.5">
                        {doctor.career.slice(0, 3).map((c, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-1.5">•</span>
                                <span>{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="w-full py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition flex items-center justify-center group-hover:bg-gray-50 group-hover:text-blue-900">
                  약력보기 +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
