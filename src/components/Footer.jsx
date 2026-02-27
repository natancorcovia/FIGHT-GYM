import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 pt-20 mb-0 pb-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-wide text-left">
            FIGHT-BOX
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed text-justify">
            A FIGHT-BOX é uma academia de artes marciais dedicada a oferecer
            treinamento de alta qualidade para todas as idades e níveis de
            habilidade. Nossa missão é promover a saúde, o bem-estar e a
            autoconfiança por meio da prática de artes marciais, criando um
            ambiente acolhedor e motivador para nossos alunos.
          </p>
        </div>

        <div className="space-y-8 md:justify-self-end">
          <h3 className="text-2xl font-semibold">Quick Links</h3>

          <ul className="space-y-6 text-gray-300">
            <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
              <ChevronRight size={18} />
              Home
            </li>

            <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
              <ChevronRight size={18} />
              Aulas
            </li>

            <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
              <ChevronRight size={18} />
              Professores
            </li>

            <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
              <ChevronRight size={18} />
              Contato
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
