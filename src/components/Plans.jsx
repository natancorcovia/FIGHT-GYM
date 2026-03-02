const pricingPlans = [
  {
    title: "START",
    price: 99.9,
    features: [
      "2 aulas por semana",
      "Avaliação física inicial gratuita",
      "Acesso à comunidade online",
    ],
  },
  {
    title: "PRO",
    price: 119.9,
    features: [
      "3 aulas por semana",
      "Participação no sparring",
      "Acesso à comunidade online",
      "3 Avaliações físicas gratuitas",
    ],
  },
  {
    title: "ELITE",
    price: 149.9,
    features: [
      "Aulas ilimitadas",
      "Treinos personalizados",
      "Preparação para campeonatos",
      "Acesso à comunidade online",
      "Acompanhamento individual",
    ],
  },
];

const Plans = () => {
  return (
    <section className="text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
          Nossos Planos
        </h2>
        <p id="planos" className="text-gray-400 mt-3 text-base sm:text-lg">
          Escolha o plano ideal para você
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:scale-105 transition duration-300"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                {plan.title}
              </h3>

              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold">
                  R${plan.price}
                </span>
                <span className="text-gray-400 text-base sm:text-lg">/mês</span>
              </div>

              <div className="h-[1px] bg-gray-700 mb-8"></div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300 text-sm sm:text-base"
                  >
                    <span className="text-white text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition cursor-pointer">
              Assinar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
