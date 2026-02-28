import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="w-full px-6 md:px-16 pt-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-4xl font-semibold text-left">Fale Conosco</h2>

          <p className="text-gray-400 leading-relaxed max-w-md text-left">
            Se você tiver alguma dúvida ou quiser saber mais sobre nossos
            serviços, entre em contato conosco. Estamos à disposição para
            atender você da melhor forma possível.
          </p>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-4">
              <Phone className="text-white" size={20} />
              <span className="text-gray-300">(011) 9 9999-9999</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-white" size={20} />
              <span className="text-gray-300">
                Av. Paulista, 1000 - São Paulo, SP
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-white" size={20} />
              <span className="text-gray-300">contato@fightgym.com.br</span>
            </div>
          </div>
        </div>

        <form className="space-y-6 w-full">
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full bg-transparent border border-white/70 rounded-xl px-6 py-4 outline-none focus:border-white transition"
          />

          <input
            type="email"
            placeholder="Seu Email"
            className="w-full bg-transparent border border-white/70 rounded-xl px-6 py-4 outline-none focus:border-white transition"
          />

          <textarea
            placeholder="Sua Mensagem"
            rows="6"
            className="w-full bg-transparent border border-white/70 rounded-xl px-6 py-4 outline-none resize-none focus:border-white transition"
          />

          <button
            type="submit"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
