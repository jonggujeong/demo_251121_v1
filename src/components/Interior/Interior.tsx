const Interior = () => {
  const spaces = [
    { name: "데스크", en: "Desk" },
    { name: "대기실", en: "Waiting Room" },
    { name: "상담실", en: "Consulting Room" },
    { name: "예진실", en: "Preliminary Exam Room" },
    { name: "통합진료실", en: "General Clinic" },
    { name: "교정진료실", en: "Orthodontic Clinic" },
    { name: "소아진료실", en: "Pediatric Clinic" },
    { name: "임플란트실", en: "Implant Center" },
    { name: "3D CT", en: "Digital X-Ray" },
    { name: "복도", en: "Corridor" },
    { name: "파우더룸", en: "Powder Room" },
    { name: "회복실", en: "Recovery Room" },
    { name: "사진실", en: "Photo Studio" },
    { name: "외관", en: "Exterior" },
  ];

  return (
    <section id="interior" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
           <h3 className="text-blue-900 font-bold tracking-widest uppercase mb-3">RE:ON Dental Clinic</h3>
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
             여러분의 건강한 치아를 위해<br/>쾌적한 진료환경을 유지하고 있습니다.
           </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {spaces.map((space, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                    <div className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition duration-700 ease-out">
                         {/* Placeholder for Interior Image */}
                         <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                            <span className="text-white font-bold text-lg md:text-xl block mb-1">{space.name}</span>
                            <span className="text-gray-300 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300 delay-100">{space.en}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Interior;
