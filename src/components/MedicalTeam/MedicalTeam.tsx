import Image from 'next/image';

const doctors = [
  {
    name: '박재우 대표원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 사랑니발치, 신경치료, 일반진료, 턱관절치료'
  },
  {
    name: '기혜림 대표원장',
    specialty: '치과교정과 전문의',
    description: '투명교정, 성장기교정, 성인교정, 부분교정'
  },
  {
    name: '배지수 원장',
    specialty: '소아치과 전문의',
    description: '영유아구강검진, 충치치료, 소아교정, 웃음가스치료'
  },
  {
    name: '구철홍 원장',
    specialty: '구강악안면외과 전문의, 통합치의학과 전문의',
    description: '임플란트, 틀니치료, 사랑니발치, 일반진료'
  },
  {
    name: '송지은 원장',
    specialty: '치과보철과 전문의',
    description: '임플란트, 틀니치료, 심미치료, 충치치료'
  }
];

const MedicalTeam = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h3 className="text-blue-900 font-semibold tracking-widest uppercase mb-2">Medical Team</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            리온치과 의료진 소개
          </h2>
          <p className="text-gray-600">
            각 분과별 협진 진료 시스템, 분과별 전문 의료진들이 함께합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Doctor Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-900 text-sm font-semibold mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm">{doctor.description}</p>
                <button className="mt-4 text-sm text-gray-500 hover:text-blue-900 flex items-center">
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
