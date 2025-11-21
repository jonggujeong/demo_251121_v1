import Image from 'next/image';

const Equipment = () => {
  const equipments = [
    { name: "3D CT (Eco-X)", desc: "저선량 고해상도 3차원 영상 제공. 방사선 피폭량을 획기적으로 줄이면서도 정밀한 진단 가능", image: "https://reondc.com/filedata/md_board/20250420153414_P2b6jTyL_Adobe_Express_-_file.png" },
    { name: "턱관절 물리치료기", desc: "턱관절 장애, 임플란트, 사랑니 발치 시 세포재생, 통증감소 및 염증완화에 효과적", image: "https://reondc.com/filedata/md_board/20250420152843_swRfB4cd_02.png" },
    { name: "iTero 구강스캐너", desc: "3D 치아 이미지 구현으로 인비절라인 치료에 효과적이며 편안한 인상 채득 가능", image: "https://reondc.com/filedata/md_board/20250420151912_Zup1WDkJ_03.png" },
    { name: "Prime 구강스캐너", desc: "굴곡진 부분, 가파른 부분의 정밀한 인상 채득이 가능해 정교한 보철물 제작", image: "https://reondc.com/filedata/md_board/20250420151642_vqYp73CH_04.png" },
    { name: "무통마취기", desc: "마취제 주입 속도와 압력을 전자동으로 조절해 보다 빠르고 효과적인 통증 완화", image: "https://reondc.com/filedata/md_board/20250420151256_VhyGPfTL_05.png" },
    { name: "산소포화도 측정기", desc: "수술 및 발치 시 환자의 혈액 내 산소 농도를 실시간으로 모니터링하여 안전 확보", image: "https://reondc.com/filedata/md_board/20250420151059_FXODfIWS_06.png" },
    { name: "집진기", desc: "치아 그라인딩 시 발생하는 미세 분진을 효과적으로 포집하여 쾌적한 환경 유지", image: "https://reondc.com/filedata/md_board/20250420150128_apbL84j9_07.png" },
    { name: "미백치료기", desc: "LED 광선을 이용하여 미백제의 활성화를 돕는 시술로 저자극 고효율 치아 미백", image: "https://reondc.com/filedata/md_board/20250420144518_wUauqOcF_08.png" },
    { name: "무선 광중합기", desc: "충치/심미치료 시 빠르고 균일한 조사로 재료의 강도와 모양을 정확하게 형성", image: "https://reondc.com/filedata/md_board/20250420143352_j38nQkTr_09.png" },
    { name: "고압증기멸균", desc: "모든 진료 도구와 기구에 대한 철저한 멸균소독을 통해 감염 걱정 없는 안전한 치료", image: "https://reondc.com/filedata/md_board/20250420145243_OK2hweXx_10.png" },
  ];

  return (
    <section id="equipment" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16">
          <div className="max-w-2xl">
             <h3 className="text-blue-400 font-bold tracking-widest uppercase mb-3">Digital Optimum</h3>
             <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
               디지털 치료 중심<br />장비기반의 최적의 진료 제공
             </h2>
             <p className="text-gray-400 text-lg">
               진단부터 진료까지, 디지털 장비로 오차를 줄인 최적화 된 진료가 가능합니다.
             </p>
          </div>
          <button className="hidden lg:block px-8 py-3 border border-gray-600 rounded-full hover:bg-white hover:text-gray-900 transition mt-8 lg:mt-0 font-medium">
              장비 더보기 +
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
           {equipments.map((item, index) => (
             <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300 group cursor-pointer">
               <div className="aspect-square bg-gray-700 rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 p-4 bg-white"
                  />
                  <div className="absolute bottom-2 right-2 text-gray-500 opacity-50">
                      <span className="text-2xl font-bold">{index + 1 < 10 ? `0${index+1}` : index+1}</span>
                  </div>
               </div>
               <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition">{item.name}</h4>
               <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{item.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-12 text-center lg:hidden">
            <button className="px-8 py-3 border border-gray-600 rounded-full hover:bg-white hover:text-gray-900 transition font-medium text-sm">
              장비 더보기 +
            </button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
