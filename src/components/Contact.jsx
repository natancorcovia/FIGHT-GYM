import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="pt-24 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 max-w-md">
          <h2 className="text-3xl md:text-4xl font-extrabold">Fale Conosco</h2>

          <p className="text-gray-300 leading-relaxed">
            Se você tiver alguma dúvida ou quiser saber mais sobre nossos
            serviços, entre em contato conosco. Estamos à disposição para
            atender você da melhor forma possível.
          </p>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-gray-100" />
              <span className="text-gray-300">(011) 9 9999-9999</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={20} className="text-gray-100" />
              <span className="text-gray-300">
                Av. Paulista, 1000 - São Paulo, SP
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail size={20} className="text-gray-100" />
              <span className="text-gray-300">contato@fightgym.com.br</span>
            </div>
          </div>
        </div>

        <form className="space-y-6 w-full max-w-md mt-12">
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full bg-transparent border border-gray-300/40 rounded-lg px-5 py-3 outline-none focus:border-gray-100 transition"
          />

          <input
            type="email"
            placeholder="Seu Email"
            className="w-full bg-transparent border border-gray-300/40 rounded-lg px-5 py-3 outline-none focus:border-gray-100 transition"
          />

          <textarea
            placeholder="Sua Mensagem"
            rows="5"
            className="w-full bg-transparent border border-gray-300/40 rounded-lg px-5 py-3 outline-none resize-none focus:border-gray-100 transition"
          />

          <button
            type="submit"
            className="w-full bg-gray-100 text-dark-900 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
