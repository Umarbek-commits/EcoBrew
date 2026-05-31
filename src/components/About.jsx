import { FaLeaf, FaSeedling, FaRecycle } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="section-label">О проекте</span>
            <h2 className="section-title">Что такое EcoBrew?</h2>
            <div className="section-divider !mx-0" />
            <p className="font-body text-gray-700 text-lg leading-relaxed mb-6">
              <strong className="text-eco-dark">EcoBrew</strong> — экологический стартап, который собирает 
              использованную кофейную гущу из кофеен, ресторанов, офисов и университетов 
              и перерабатывает её в <strong className="text-eco-main">органическое удобрение</strong>.
            </p>
            <p className="font-body text-gray-700 text-lg leading-relaxed mb-6">
              Главная цель — уменьшить количество органических отходов на свалках 
              и превратить их в полезный продукт для дома, садоводства и сельского хозяйства.
            </p>
            <p className="font-body text-gray-700 text-lg leading-relaxed mb-8">
              Мы создаём <strong className="text-eco-dark">замкнутый цикл</strong>: то, что вчера было 
              отходом кофейни, завтра становится питанием для ваших растений.
            </p>

            {/* Key points */}
            <div className="flex flex-col gap-4">
              {[
                { icon: FaLeaf, text: 'Натуральное сырьё — кофейный жмых и яичная скорлупа' },
                { icon: FaRecycle, text: 'Уменьшаем нагрузку на свалки города Бишкека' },
                { icon: FaSeedling, text: 'Безопасный продукт для дома, сада, огорода и фермы' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-eco-pale rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="text-eco-main text-sm" />
                  </div>
                  <p className="font-body text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: big graphic card */}
          <div className="relative">
            <div className="bg-eco-dark rounded-3xl p-8 text-white overflow-hidden grain relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-eco-main/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="relative z-10">
                <div className="font-heading text-6xl font-black text-eco-light mb-2">600+</div>
                <p className="font-body text-white/70 mb-6 text-sm uppercase tracking-wider">кофеен в Бишкеке</p>

                <div className="flex items-end gap-4 mb-8">
                  <div>
                    <div className="font-heading text-4xl font-black text-white">~3 кг</div>
                    <p className="font-body text-white/60 text-xs">жмыха в день<br />с одной кофейни</p>
                  </div>
                  <div className="text-white/30 text-2xl mb-3">×</div>
                  <div>
                    <div className="font-heading text-4xl font-black text-eco-light">600</div>
                    <p className="font-body text-white/60 text-xs">кофеен<br />в городе</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="font-heading text-5xl font-black text-eco-light">2 тонны</div>
                  <p className="font-body text-white/70">кофейного жмыха<br />выбрасывается каждый день</p>
                </div>

                <div className="mt-6 bg-white/10 rounded-2xl p-4">
                  <p className="font-body text-white/80 text-sm italic">
                    «То, что большинство видят как мусор, мы видим как возможность»
                  </p>
                  <p className="font-mono text-eco-light text-xs mt-2">— EcoBrew</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-eco-pale rounded-xl flex items-center justify-center">
                <FaSeedling className="text-eco-main text-lg" />
              </div>
              <div>
                <div className="font-heading font-bold text-eco-dark text-sm">Грант мэрии</div>
                <div className="font-mono text-xs text-eco-main font-bold">10 000 сом ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
