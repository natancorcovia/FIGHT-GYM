import { classesData } from "../../constants";

const Classes = () => {
  return (
    <section id="aulas" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            NOSSAS AULAS
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Escolha sua luta favorita e comece seu treinamento!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {classesData.map((item) => (
            <div
              key={item.title}
              className="relative group overflow-hidden rounded-xl h-[380px] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition duration-300"></div>
              <div className="absolute top-6 left-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                  {item.title}
                </h3>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
