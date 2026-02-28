import { teachersData } from "../../constants/index";

const Teachers = () => {
  return (
    <section id="professores" className="pb-20 pt-68 px-44">
      <div className="text-left space-y-4">
        <h2 className="text-4xl font-extrabold leading-tight">PROFESSORES</h2>
        <p className="text-lg">
          Aprenda com as maiores autoridades do mundo das artes marciais!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 justify-items-center">
        {" "}
        {teachersData.map((item) => (
          <div
            key={item.title}
            className="relative group overflow-hidden h-[500px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-200"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-100 cursor-pointer"></div>

            <div className="absolute top-6 left-6 text-white">
              <h2 className="text-2xl font-bold tracking-wide">{item.title}</h2>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-sm text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
