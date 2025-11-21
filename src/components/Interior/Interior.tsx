const Interior = () => {
  const spaces = [
    "데스크", "대기실", "상담실", "예진실", "통합진료실",
    "교정진료실", "소아진료실", "임플란트실", "3D CT실", "회복실"
  ];

  return (
    <section id="interior" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h3 className="text-blue-900 font-semibold tracking-widest uppercase mb-2">RE:ON Dental Clinic</h3>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             쾌적한 진료환경
           </h2>
           <p className="text-gray-600">
             여러분의 건강한 치아를 위해 쾌적하고 안전한 진료환경을 유지하고 있습니다.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {spaces.map((space, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg aspect-video cursor-pointer">
                    <div className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition duration-500"></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                        <span className="text-white font-medium text-sm md:text-base">{space}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Interior;
