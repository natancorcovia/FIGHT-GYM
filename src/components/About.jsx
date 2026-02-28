import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  return (
    <section
      id="sobre"
      className="flex gap-30 w-full flex-col md:flex-row items-start py-50 px-44"
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

      <div className="h-110 w-full md:w-1/2">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="w-full h-full rounded-lg"
        >
          <SwiperSlide>
            <img
              src="/images/about1.jpg"
              alt="Treino 1"
              className="object-cover w-full h-110 rounded-lg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/about2.jpg"
              alt="Treino 2"
              className="object-cover w-full h-170 rounded-lg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/about3.jpg"
              alt="Treino 3"
              className="object-cover w-full h-120 rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default About;
