import Image from 'next/image';

const doctors = [
  {
    name: '박재우 대표원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 사랑니발치, 신경치료, 일반진료, 턱관절치료',
    career: ['보건복지부 인증 구강악안면외과 전문의', '보건복지부 인증 통합치의학과 전문의', '단국대학교 치의학과 졸업']
  },
  {
    name: '기혜림 대표원장',
    specialty: '치과교정과 전문의',
    description: '투명교정, 성장기교정, 성인교정, 부분교정',
    career: ['보건복지부 인증 치과교정과 전문의', '단국대학교 치의학과 수석 졸업', '인비절라인 투명교정 인증 치과의사']
  },
  {
    name: '배지수 원장',
    specialty: '소아치과 전문의',
    description: '영유아구강검진, 충치치료, 소아교정, 웃음가스치료',
    career: ['보건복지부 인증 소아치과 전문의', '연세대학교 치과대학 졸업', '대한소아치과학회 정회원']
  },
  {
    name: '구철홍 원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 틀니치료, 사랑니발치, 일반진료',
    career: ['보건복지부 인증 구강악안면외과 전문의 (전국 수석)', '보건복지부 인증 통합치의학과 전문의', '단국대학교 치의학과 졸업']
  },
  {
    name: '송지은 원장',
    specialty: '치과보철과 전문의',
    description: '임플란트, 틀니치료, 심미치료, 충치치료',
    career: ['보건복지부 인증 치과보철과 전문의', '전남대학교 치의학전문대학원 석사/박사', '대한치과보철학회 인정의']
  }
];

const MedicalTeam = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
           <h3 className="text-blue-900 font-bold tracking-widest uppercase mb-3">Medical Team</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            리온치과 의료진 소개
          </h2>
          <p className="text-gray-600 text-lg">
            각 분과별 협진 진료 시스템,<br/>분과별 전문 의료진들이 함께합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
              <div className="h-80 bg-gray-200 relative overflow-hidden">
                {/* Placeholder for Doctor Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-4xl opacity-20">Doctor {index + 1}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-end mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 mr-2">{doctor.name}</h3>
                </div>
                <p className="text-blue-900 font-medium mb-4 min-h-[3rem]">{doctor.specialty}</p>
                <div className="w-10 h-1 bg-blue-900 mb-4"></div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{doctor.description}</p>

                <div className="border-t border-gray-100 pt-4">
                    <ul className="text-xs text-gray-500 space-y-1">
                        {doctor.career.slice(0, 2).map((c, i) => (
                            <li key={i}>• {c}</li>
                        ))}
                    </ul>
                </div>

                <button className="mt-6 w-full py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition flex items-center justify-center">
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
