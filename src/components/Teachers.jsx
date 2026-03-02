import { teachersData } from "../../constants/index";

const Teachers = () => {
  return (
    <section className="pt-24 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          PROFESSORES
        </h2>
        <p id="professores" className="text-md text-gray-300 max-w-2xl">
          Aprenda com as maiores autoridades do mundo das artes marciais!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
        {teachersData.map((item) => (
          <div
            key={item.title}
            className="relative group overflow-hidden rounded-xl h-[450px]"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300"></div>

            <div className="absolute top-6 left-6 text-white">
              <h3 className="text-2xl font-bold tracking-wide">{item.title}</h3>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
