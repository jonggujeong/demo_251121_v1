const Equipment = () => {
  const equipments = [
    { name: "3D CT (Eco-X)", desc: "저선량 고해상도 3차원 영상 제공" },
    { name: "iTero 구강스캐너", desc: "3D 치아 이미지 구현, 인비절라인 최적화" },
    { name: "Prime 구강스캐너", desc: "정교한 보철물 제작을 위한 스캔" },
    { name: "무통마취기", desc: "통증 완화를 위한 자동 마취 시스템" },
    { name: "턱관절 물리치료기", desc: "통증 감소 및 염증 완화" },
    { name: "미백치료기", desc: "저자극 고효율 치아 미백" },
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div>
             <h3 className="text-blue-400 font-semibold tracking-widest uppercase mb-2">Digital Optimum</h3>
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
               디지털 치료 중심<br />최적의 진료 제공
             </h2>
             <p className="text-gray-400">
               진단부터 진료까지, 디지털 장비로 오차를 줄인 최적화 된 진료가 가능합니다.
             </p>
          </div>
          <button className="hidden md:block px-6 py-2 border border-gray-600 rounded-full hover:bg-white hover:text-gray-900 transition mt-4 md:mt-0">
              장비 더보기 +
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {equipments.map((item, index) => (
             <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 group">
               <div className="aspect-square bg-gray-600 rounded-md mb-3 relative overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gray-500 group-hover:scale-105 transition"></div>
               </div>
               <h4 className="text-sm font-bold mb-1">{item.name}</h4>
               <p className="text-xs text-gray-400 line-clamp-2">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
