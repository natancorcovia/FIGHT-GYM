const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;
