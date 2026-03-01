import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText("#title", { type: "lines" });
    const paragraphSplit = new SplitText("#subtitle", { type: "lines" });

    gsap.from(heroSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.8,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.4,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.from("#buttons", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "expo.out",
      delay: 1.2,
    });
  });

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      <img
        src="/images/hero.webp"
        alt="Hero Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />\{" "}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-white">
        <div className="max-w-4xl">
          <h1
            id="title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            TREINE COMO UM <br className="hidden sm:block" />
            CAMPEÃO
          </h1>

          <p
            id="subtitle"
            className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-left md:text-justify"
          >
            O objetivo do nosso programa de artes marciais é ajudar você a
            desenvolver habilidades. Este é o lugar onde você aprende a se
            tornar forte com o seu corpo e a se proteger contra qualquer coisa.
          </p>

          <div id="buttons" className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-5 py-2.5 text-sm font-semibold rounded-md hover:scale-105 transition">
              Matricule-se Agora
            </button>

            <button className="border border-white px-5 py-2.5 text-sm rounded-md hover:bg-white hover:text-black transition">
              Ver Aulas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
