import Image from 'next/image';

const doctors = [
  {
    name: '박재우 대표원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 사랑니발치, 신경치료, 일반진료, 턱관절치료',
    career: [
        '보건복지부 인증 구강악안면외과 전문의',
        '보건복지부 인증 통합치의학과 전문의',
        '단국대학교 치의학과 졸업',
        '단국대학교 치의학대학원 구강악안면외과학 석사',
        '단국대학교 치의학대학원 구강악안면외과학 박사수료',
        '단국대학교 치과대학병원 인턴 수료',
        '단국대학교 치과대학병원 구강악안면외과 레지던트 수료',
        '대한민국 육군훈련소 논산 지구병원 치과 부장 (자랑스러운 연무인 상 수상)',
        '단국대학교 죽전치과병원 구강악안면외과 조교수',
        '前 서울쿤스트치과 부원장',
        '前 노블치과의원 원장',
        '대한악안면성형재건외과학회 인정의',
        '대한악안면성형재건외과학회 정회원',
        '대한구강악안면외과학회 정회원',
        '전국 구강악안면외과 전공의 대표 역임',
        '서울성모병원 구강암 연구소 카데바 연수회 수료',
        '국제두개안면골유합학회(AOCMF) Course - Management of Facial Trauma 수료',
        '미세현미경 연수회 수료',
        'IMPLANT MASTER CLASS(IMC) fellow',
        'Dentsply Sirona CEREC Basic Course'
    ]
  },
  {
    name: '기혜림 대표원장',
    specialty: '치과교정과 전문의',
    description: '투명교정, 성장기교정, 성인교정, 부분교정',
    career: [
        '보건복지부 인증 치과교정과 전문의',
        '단국대학교 치의학과 수석 졸업',
        '단국대학교 치의학대학원 치과교정학 석사',
        '서울대학교 치의학대학원 교육연수원 고급치의학 과정 수료',
        '단국대학교 치과대학병원 인턴 수료',
        '단국대학교 치과대학병원 치과교정과 레지던트 수료',
        '단국대학교 치과대학병원 치과교정과 전임의',
        '단국대학교 죽전치과병원 치과교정과 조교수',
        '前 대한치과교정학회 전속지도전문의',
        '대한치과교정학회(KAO) 정회원, 인정의',
        '세계치과교정연맹(WFO) Fellow',
        '미국교정학회(AAO) International member',
        '인비절라인(Invisalign) 투명교정 인증 치과의사'
    ]
  },
  {
    name: '배지수 원장',
    specialty: '소아치과 전문의',
    description: '영유아구강검진, 충치치료, 소아교정, 웃음가스치료, 의식하진정치료',
    career: [
        '보건복지부 인증 소아치과 전문의',
        '연세대학교 치과대학 졸업',
        '연세대학교 치의학대학원 졸업',
        '연세대학교 치의학대학원 소아치과학 석사',
        '연세대학교 치과대학병원 인턴 수료',
        '연세대학교 치과대학병원 소아치과 레지던트 수료',
        '前 필립포스치과',
        '前 강남365치과의원 송도글로벌점',
        '前 서울쿤스트치과',
        '대한소아치과학회 정회원',
        '대한치과마취과학회 정회원',
        '대한장애인치과학회 정회원',
        '미국심장협회 BLS(기본응급구조) provider',
        'Columbia University College of Dental Medicine externship',
        '인비절라인(Invisalign) 투명교정 인증 치과의사'
    ]
  },
  {
    name: '구철홍 원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 틀니치료, 사랑니발치, 일반진료, 턱관절치료',
    career: [
        '보건복지부 인증 구강악안면외과 전문의 (전국 수석)',
        '보건복지부 인증 통합치의학과 전문의',
        '단국대학교 치의학과 졸업',
        '단국대학교 치의학대학원 구강악안면외과학 석사',
        '단국대학교 치과대학병원 인턴 수료',
        '단국대학교 치과대학병원 구강악안면외과 레지던트 수료',
        '청와대 부속 서울지구병원 구강악안면외과장',
        '제 19대 대통령 치과 자문의 및 의료진 역임',
        '前 닥터굿플란트치과 원장',
        '前 온아치과 강북점 원장',
        '前 연세세브란스치과 의정부점 원장',
        '대한악안면성형재건외과학회 인정의',
        '대한악안면성형재건외과학회 정회원',
        '대한구강악안면외과학회 정회원',
        '서울성모병원 구강암 연구소 카데바 연수회 수료',
        '국제두개안면골유합학회(AOCMF) Course - Management of Facial Trauma 수료',
        '미세현미경 연수회 수료'
    ]
  },
  {
    name: '송지은 원장',
    specialty: '치과보철과 전문의',
    description: '임플란트, 틀니치료, 심미치료, 충치치료, 일반진료',
    career: [
        '보건복지부 인증 보철과 전문의',
        '전남대학교 치의학전문대학원 석사',
        '전남대학교 치의학전문대학원 치과보철학 박사',
        '전남대학교 치과대학병원 인턴 수료',
        '전남대학교 치과대학병원 치과보철과 레지던트 수료',
        '대한치과보철학회 인정의',
        '대한치과보철학회 정회원',
        '대한턱관절교합학회 정회원'
    ]
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
                    <ul className="text-xs text-gray-500 space-y-1 h-24 overflow-hidden relative">
                        {doctor.career.map((c, i) => (
                            <li key={i}>• {c}</li>
                        ))}
                        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
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
