import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText("#title", { type: "lines" });
    const paragraphSplit = new SplitText("#subtitle", { type: "lines" });
    const buttonsSplit = new SplitText("#buttons", { type: "lines" });

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
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.8,
    });

    gsap.from(buttonsSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1.2,
    });
  });

  return (
    <section
      id="home"
      className="relative w-screen h-screen overflow-hidden left-1/2 -translate-x-1/2 flex items-center"
    >
      <img
        src="/images/hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white max-w-3xl px-10">
        <h1
          id="title"
          className="text-5xl md:text-7xl font-bold leading-tight text-left"
        >
          TREINE COMO UM CAMPEÃO
        </h1>

        <p id="subtitle" className="mt-5 text-lg md:text-xl text-left">
          O objetivo do nosso programa de artes marciais é ajudar você a
          desenvolver habilidades. Este é o lugar onde você aprende a se tornar
          forte com o seu corpo e a se proteger contra qualquer coisa.
        </p>

        <div id="buttons" className="mt-10 flex gap-6 ml-2">
          <div className="inline-block mr-6">
            <button className="cursor-pointer bg-white text-black px-8 py-3 font-semibold rounded-md hover:opacity-60 transition">
              Matricule-se Agora
            </button>
          </div>
          <div className="inline-block">
            <button className="cursor-pointer border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition">
              Ver Aulas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
