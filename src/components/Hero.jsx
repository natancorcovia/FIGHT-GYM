const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-screen h-screen overflow-hidden left-1/2 -translate-x-1/2 flex items-center"
    >
      <img
        src="/images/hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white max-w-3xl px-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-left">
          TREINE COMO UM CAMPEÃO
        </h1>

        <p className="mt-5 text-lg md:text-xl text-left">
          O objetivo do nosso programa de artes marciais é ajudar você a
          desenvolver habilidades. Este é o lugar onde você aprende a se tornar
          forte com o seu corpo e a se proteger contra qualquer coisa.
        </p>

        <div className="buttons mt-10 flex gap-6 flex-wrap ml-2">
          <button className="cursor-pointer bg-white text-black px-8 py-3 font-semibold rounded-md hover:opacity-60 transition">
            Matricule-se Agora
          </button>

          <button className="cursor-pointer border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition">
            Ver Aulas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
