import { FaMoneyBillWave, FaUniversity, FaStore, FaHandshake, FaBuilding, FaCheckCircle } from 'react-icons/fa'

export default function BusinessModel() {
  return (
    <>
      {/* Business Model */}
      <section id="business" className="py-24 bg-eco-dark relative overflow-hidden grain">
        <div className="absolute inset-0 opacity-5 bg-texture" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-eco-light border border-eco-light/30 px-3 py-1 rounded-full bg-eco-light/10 mb-3">
              Бизнес-модель
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4">
              Как работает EcoBrew
            </h2>
            <div className="w-16 h-1 bg-eco-light rounded-full mx-auto" />
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 mb-16">
            {[
              { label: 'Кофейни & Кондитерские', sub: 'бесплатное сырьё', icon: '☕', color: 'bg-amber-800/80' },
              { label: '→', sub: null, icon: null, color: null },
              { label: 'EcoBrew', sub: 'производство', icon: '⚙️', color: 'bg-eco-mid' },
              { label: '→', sub: null, icon: null, color: null },
              { label: 'B2C продажи', sub: '(розница)', icon: '🛒', color: 'bg-eco-main' },
              { label: '+', sub: null, icon: null, color: null },
              { label: 'B2B продажи', sub: '(оптом)', icon: '🏭', color: 'bg-eco-dark border border-white/20' },
              { label: '→', sub: null, icon: null, color: null },
              { label: 'Реинвестирование', sub: 'рост и масштаб', icon: '📈', color: 'bg-teal-700' },
            ].map(({ label, sub, icon, color }, idx) => (
              icon ? (
                <div key={idx} className={`${color} rounded-2xl p-5 text-white text-center flex-1 min-w-[120px] max-w-[160px]`}>
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-body font-semibold text-sm">{label}</div>
                  {sub && <div className="font-mono text-xs text-white/60 mt-1">{sub}</div>}
                </div>
              ) : (
                <div key={idx} className="font-heading text-2xl font-bold text-eco-light self-center hidden md:block">{label}</div>
              )
            ))}
          </div>

          {/* Revenue streams */}
          <h3 className="font-heading font-bold text-xl text-white text-center mb-6">Источники дохода</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: FaStore, title: 'Розница и опт', desc: 'Продажа удобрений физлицам и бизнесу' },
              { icon: FaHandshake, title: 'Контракты с кофейнями', desc: 'Платный или субсидированный забор отходов' },
              { icon: FaBuilding, title: 'Поставки фермам', desc: 'Оптовые контракты с теплицами и агропредприятиями' },
              { icon: FaUniversity, title: 'Экогранты', desc: 'Гранты, субсидии и экологические программы поддержки' },
              { icon: FaMoneyBillWave, title: 'Корп. проекты', desc: 'Корпоративные экологические инициативы и партнёрства' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                <Icon className="text-eco-light text-xl mb-3" />
                <h4 className="font-body font-semibold text-white text-sm mb-2">{title}</h4>
                <p className="font-body text-white/60 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section id="financial" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Финансы</span>
            <h2 className="section-title">Финансовая модель</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                weight: '100 г',
                cost: '43 сома',
                price: '80 сомов',
                profit: '37 сомов',
                margin: '46%',
                label: 'Домашняя упаковка',
                color: 'bg-eco-pale/40 border-eco-main/30',
                profitColor: 'text-eco-main',
              },
              {
                weight: '5 кг',
                cost: '128 сомов',
                price: '150 сомов',
                profit: '22 сома',
                margin: '14%',
                label: 'Профессиональная упаковка',
                color: 'bg-eco-cream/60 border-eco-brown/20',
                profitColor: 'text-eco-brown',
              },
            ].map(({ weight, cost, price, profit, margin, label, color, profitColor }) => (
              <div key={weight} className={`rounded-2xl p-8 border-2 ${color}`}>
                <div className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{label}</div>
                <div className="font-heading text-5xl font-black text-eco-dark mb-6">{weight}</div>
                <div className="space-y-3">
                  {[
                    { label: 'Себестоимость', value: cost, sub: true },
                    { label: 'Цена продажи', value: price, sub: false },
                    { label: 'Прибыль', value: profit, highlight: profitColor },
                    { label: 'Маржа', value: margin, highlight: profitColor },
                  ].map(({ label, value, sub, highlight }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className={`font-body text-sm ${sub ? 'text-gray-400' : 'text-gray-700'}`}>{label}</span>
                      <span className={`font-mono font-bold text-sm ${highlight || (sub ? 'text-gray-500' : 'text-eco-dark')}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-eco-cream/60 rounded-2xl p-6 text-center">
            <p className="font-body text-gray-700">
              Бесплатное сырьё (отходы кофеен) — ключевой фактор конкурентоспособности.
              Низкая себестоимость позволяет предлагать рыночные цены при здоровой марже.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 bg-eco-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Устойчивость</span>
            <h2 className="section-title">Почему проект жизнеспособен</h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🆓',
                title: 'Бесплатное сырьё',
                desc: 'Кофейный жмых — отход, который кофейни отдают бесплатно. Нулевые затраты на сырьё обеспечивают конкурентоспособность.',
              },
              {
                icon: '🔬',
                title: 'Индикатор качества',
                desc: 'Разработан собственный показатель качества продукции, позволяющий контролировать состав и свойства на каждом этапе производства.',
              },
              {
                icon: '📊',
                title: 'Подтверждённый спрос',
                desc: 'Данные опросов (73.2% садоводов), первые продажи (350 пачек за 2 месяца) и партнёрства подтверждают реальный рыночный спрос.',
              },
              {
                icon: '💰',
                title: 'Доступные цены',
                desc: 'Низкая себестоимость позволяет устанавливать конкурентные цены — от 80 сом за 100г, что в разы дешевле аналогов на рынке.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-heading font-bold text-eco-dark text-xl mb-3">{title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
