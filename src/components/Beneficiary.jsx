import { FaHeart, FaLeaf, FaWater, FaBug, FaFlask } from 'react-icons/fa'

export default function Beneficiary() {
  return (
    <section id="beneficiary" className="py-24 bg-eco-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Наш клиент</span>
          <h2 className="section-title">Знакомьтесь — Юлия</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-eco-pale/30 rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-eco-pale rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                  🌺
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-eco-dark">Мисс Юлия</h3>
                  <p className="font-body text-gray-500 text-sm">Любительница домашних растений</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Юлия — типичный представитель нашей целевой аудитории. У неё дома 
                несколько десятков горшечных растений, небольшой балконный огород и 
                большая любовь к природе.
              </p>

              <div className="space-y-3">
                <h4 className="font-heading font-bold text-eco-dark">Её проблемы:</h4>
                {[
                  { icon: FaBug, text: 'Вредители — замедляют рост растений', bad: true },
                  { icon: FaFlask, text: 'Нехватка минералов в почве', bad: true },
                  { icon: FaWater, text: 'Неправильный полив — почва не удерживает влагу', bad: true },
                  { icon: FaLeaf, text: 'Не хочет использовать химию — ищет натуральные решения', bad: false },
                ].map(({ icon: Icon, text, bad }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${bad ? 'bg-red-50' : 'bg-eco-pale'}`}>
                      <Icon className={`text-xs ${bad ? 'text-red-500' : 'text-eco-main'}`} />
                    </div>
                    <p className={`font-body text-sm ${bad ? 'text-gray-600' : 'text-eco-dark font-medium'}`}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution for her */}
          <div>
            <div className="bg-eco-main rounded-3xl p-8 text-white mb-6 relative overflow-hidden grain">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
              <FaHeart className="text-eco-light text-3xl mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">EcoBrew — её решение</h3>
              <p className="font-body text-white/80 leading-relaxed">
                Наше удобрение из кофейного жмыха и яичной скорлупы решает все три проблемы 
                Юлии одновременно: отпугивает вредителей, насыщает почву минералами и 
                улучшает удержание влаги. Всё это — без единого грамма химии.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { emoji: '🐛', label: 'Без вредителей', sub: 'кофеин и скорлупа' },
                { emoji: '🌿', label: 'Богатая почва', sub: 'NPK + кальций' },
                { emoji: '💧', label: 'Влага дольше', sub: 'до 6 месяцев' },
              ].map(({ emoji, label, sub }) => (
                <div key={label} className="bg-white rounded-2xl p-4 text-center shadow-md">
                  <div className="text-3xl mb-2">{emoji}</div>
                  <div className="font-body font-semibold text-eco-dark text-sm">{label}</div>
                  <div className="font-mono text-xs text-gray-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
