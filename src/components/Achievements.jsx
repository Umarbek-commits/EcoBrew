import { FaTrophy, FaHandshake, FaStore, FaUniversity, FaLeaf } from 'react-icons/fa'

export default function Achievements() {
  return (
    <>
      {/* Achievements */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Достижения</span>
            <h2 className="section-title">Первые результаты</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-eco-main rounded-3xl p-8 text-white relative overflow-hidden grain col-span-full md:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
              <FaTrophy className="text-yellow-300 text-4xl mb-4 relative z-10" />
              <div className="font-heading text-6xl font-black text-eco-light mb-1 relative z-10">35 кг</div>
              <div className="font-body text-white/70 mb-3 relative z-10">удобрения продано</div>
              <div className="font-heading text-2xl font-bold text-white relative z-10">= 350 пачек</div>
              <div className="font-body text-white/60 text-sm relative z-10">за 2 месяца работы</div>
            </div>

            <div className="card p-8 border border-eco-pale/60 flex flex-col justify-center">
              <div className="font-mono text-xs font-bold text-eco-main uppercase tracking-wider mb-2">Выручка</div>
              <div className="stat-number mb-1">24 560</div>
              <div className="font-body text-gray-500 text-sm">сом заработано</div>
              <div className="mt-4 bg-eco-pale/30 rounded-xl p-3">
                <p className="font-body text-sm text-gray-700">
                  С нуля, без стартового капитала, только на органических отходах и партнёрстве с кофейнями.
                </p>
              </div>
            </div>

            <div className="card p-8 border border-yellow-200 bg-yellow-50 flex flex-col justify-center">
              <div className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">Грант</div>
              <div className="font-heading text-5xl font-black text-yellow-600 mb-1">10 000</div>
              <div className="font-body text-gray-500 text-sm">сом · мэрия Бишкека</div>
              <div className="mt-4 flex items-center gap-2">
                <FaTrophy className="text-yellow-400 text-lg" />
                <span className="font-body text-sm text-gray-700 font-medium">Победители хакатона мэрии</span>
              </div>
              <p className="font-body text-xs text-gray-500 mt-2">
                Грант подтвердил жизнеспособность и социальную ценность проекта на городском уровне.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling */}
      <section id="scaling" className="py-24 bg-eco-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Масштабирование</span>
            <h2 className="section-title">Планы роста</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: FaHandshake,
                title: 'Партнёрство с кофейнями',
                desc: 'Заключение договоров с крупными сетями кофеен на систематический сбор жмыха. Пример первого партнёра — кофейня «Бублик».',
                color: 'bg-eco-main',
              },
              {
                step: '02',
                icon: FaStore,
                title: 'Агро-магазины',
                desc: 'Выход на полки специализированных магазинов товаров для сада и огорода. Ретейл-каналы как основа B2C стратегии.',
                color: 'bg-eco-mid',
              },
              {
                step: '03',
                icon: FaLeaf,
                title: 'B2B оптом',
                desc: 'Оптовые поставки теплицам, садовым центрам, агропредприятиям. Контрактное производство под нужды крупных клиентов.',
                color: 'bg-eco-dark',
              },
            ].map(({ step, icon: Icon, title, desc, color }) => (
              <div key={step} className="card overflow-hidden">
                <div className={`${color} p-6 text-white flex items-center gap-4`}>
                  <span className="font-mono text-4xl font-black opacity-30">{step}</span>
                  <div>
                    <Icon className="text-2xl mb-1" />
                    <h3 className="font-heading font-bold text-xl">{title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-eco-dark relative overflow-hidden grain">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-eco-main/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-eco-light/10 translate-x-1/2 translate-y-1/2 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-eco-light border border-eco-light/30 px-3 py-1 rounded-full bg-eco-light/10 mb-3">
              Миссия и Видение
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4">
              Куда мы идём
            </h2>
            <div className="w-16 h-1 bg-eco-light rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="font-mono text-xs font-bold text-eco-light uppercase tracking-wider mb-4">🎯 Миссия</div>
              <p className="font-heading text-xl text-white leading-relaxed">
                Создать устойчивую систему переработки кофейных отходов, которая помогает 
                сохранять окружающую среду, уменьшать мусор и обеспечивать людей 
                экологически безопасными удобрениями.
              </p>
            </div>
            <div className="bg-eco-main/20 backdrop-blur-sm border border-eco-light/20 rounded-3xl p-8">
              <div className="font-mono text-xs font-bold text-eco-light uppercase tracking-wider mb-4">🔭 Видение</div>
              <p className="font-heading text-xl text-white leading-relaxed">
                Стать ведущей компанией по переработке кофейных отходов в Кыргызстане 
                и Центральной Азии, превращая тысячи тонн органического мусора в полезные 
                продукты для сельского хозяйства и озеленения городов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
