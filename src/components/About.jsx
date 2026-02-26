const About = () => {
  return (
    <section
      id="about"
      className="flex gap-30 w-full flex-col md:flex-row items-start py-60"
    >
      <div id="about-text" className="w-full md:w-1/2">
        <h1 className="font-extrabold text-4xl leading-tight text-left">
          SOBRE NÓS
        </h1>
        <div className="text-lg mt-8 text-justify space-y-6">
          <p>
            A Fight-Gym é uma academia de artes marciais que oferece diversas
            opções de aulas e estilos de artes marciais que podem ser praticados
            por todas as idades e gêneros.
          </p>
          <p>
            Oferecemos serviços de inscrição on-line que podem ser acessados por
            meio deste site. E você pode se tornar nosso aluno imediatamente.
          </p>
          <p>
            A Fight-Gym também conta com diversos instrutores especialistas em
            suas respectivas áreas ou estilos de defesa pessoal, para que você
            ganhe experiência praticando com um profissional.
          </p>
        </div>
      </div>

      <div className="h-103 w-full md:w-1/2 flex">
        <img
          src="/images/about.jpg"
          alt="Fight-Gym"
          className="object-cover rounded-lg shadow-lg w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;
