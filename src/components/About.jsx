import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  return (
    <section id="sobre" className="w-full py-30 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            SOBRE NÓS
          </h2>

          <div className="text-base md:text-md text-gray-300 leading-relaxed space-y-6">
            <p>
              A Fight-Gym é uma academia de artes marciais que oferece diversas
              opções de aulas e estilos que podem ser praticados por todas as
              idades e gêneros.
            </p>
            <p>
              Oferecemos serviços de inscrição on-line que podem ser acessados
              por meio deste site. Você pode se tornar nosso aluno
              imediatamente.
            </p>
            <p>
              Contamos com diversos instrutores especialistas em suas
              respectivas áreas para que você ganhe experiência praticando com
              um profissional.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="w-full h-[100px] md:h-[360px] rounded-xl"
          >
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item}>
                <img
                  src={`/images/about${item}.webp`}
                  alt={`Treino ${item}`}
                  loading="lazy"
                  className={`w-full h-full object-cover rounded-xl ${
                    item === 3 ? "object-[center_40%]" : "object-center"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
