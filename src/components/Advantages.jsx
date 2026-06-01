import { FaBug, FaClock, FaSeedling, FaRecycle, FaLeaf, FaChartLine, FaShieldAlt } from 'react-icons/fa'

const advantages = [
  {
    icon: FaBug,
    title: 'Барьер от вредителей',
    desc: 'Яичная скорлупа создаёт острый барьер против слизней и улиток. Кофеин в жмыхе отпугивает муравьёв, тлю и плодовых мушек — они не переносят этого вещества.',
    sources: 'gemini.ua, atlaspestandwildlife',
  },
  {
    icon: FaShieldAlt,
    title: 'Безопасно для природы', // ✅ Добавлен заголовок
    desc: 'В отличие от большинства инсектицидов, EcoBrew не вредит пчёлам и другим полезным опылителям. Ваш сад остаётся экологически здоровым.',
    sources: 'inlavka.ru, geoglass.ru',
  },
  {
    icon: FaClock,
    title: 'Длительное действие',
    desc: 'Одно внесение удобрения действует до 6 месяцев. Не нужно постоянно подкармливать растения — EcoBrew медленно высвобождает питательные вещества.',
    sources: 'ecowiki.ru',
  },
  {
    icon: FaSeedling,
    title: 'Лёгкость применения',
    desc: 'Просто рассыпьте вокруг растений. Не требует растворения или специального оборудования. Подходит для новичков и опытных садоводов.',
    sources: '',
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Advantages */}
        <div className="text-center mb-16">
          <span className="section-label">Преимущества</span>
          <h2 className="section-title">Почему EcoBrew лучше</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {advantages.map(({ icon: Icon, title, desc, sources }, index) => ( // ✅ Используем index как key
            <div key={index} className="card p-6 border border-eco-pale/60 hover:border-eco-main/30 group">
              <div className="w-14 h-14 bg-eco-pale/40 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-eco-pale transition-colors">
                <Icon className="text-eco-main text-2xl" />
              </div>
              <h3 className="font-heading font-bold text-eco-dark text-lg mb-3">{title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
              {sources && <p className="font-mono text-xs text-gray-400">Источники: {sources}</p>}
            </div>
          ))}
        </div>

        {/* Innovations */}
        <div className="bg-gradient-to-br from-eco-main to-eco-dark rounded-3xl p-8 md:p-12 text-white mb-24 relative overflow-hidden grain">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-eco-light border border-eco-light/30 px-3 py-1 rounded-full bg-eco-light/10 mb-4">
            Инновации
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
            Удобрение нового поколения
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FaRecycle,
                title: 'Двойная польза',
                desc: 'EcoBrew одновременно решает две задачи: перерабатывает органические отходы и улучшает качество почвы. Один продукт — два экологических результата.',
              },
              {
                icon: FaLeaf,
                title: 'Уникальный состав',
                desc: 'Сочетание кофейного жмыха и яичной скорлупы в пропорции 2:1 — наша оригинальная формула, которой нет у конкурентов на рынке Бишкека.',
              },
              {
                icon: FaChartLine,
                title: 'Циклическая экономика',
                desc: 'Поддерживаем принципы circular economy: ресурсы не сжигаются и не гниют на свалке, а возвращаются в почву и производство пищи.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-6">
                <Icon className="text-eco-light text-2xl mb-3" />
                <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div id="results">
          <div className="text-center mb-12">
            <span className="section-label">Эксперимент</span>
            <h2 className="section-title">Результаты: До и После</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-heading font-bold text-2xl text-gray-600 mb-4">До применения</h3>
              <ul className="font-body text-gray-500 text-sm space-y-2">
                <li>— Медленный рост</li>
                <li>— Бледная листва</li>
                <li>— Сухая, уплотнённая почва</li>
                <li>— Следы вредителей</li>
                <li>— Частый полив необходим</li>
              </ul>
            </div>
            <div className="bg-eco-pale/30 border-2 border-eco-main/30 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-heading font-bold text-2xl text-eco-dark mb-4">После EcoBrew</h3>
              <ul className="font-body text-eco-dark text-sm space-y-2">
                <li>✓ Заметный прирост зелёной массы</li>
                <li>✓ Насыщенный зелёный цвет листвы</li>
                <li>✓ Рыхлая, влажная почва</li>
                <li>✓ Отсутствие вредителей</li>
                <li>✓ Влага удерживается дольше</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-eco-cream/60 rounded-2xl p-6 text-center">
            <p className="font-body text-gray-700 text-lg">
              Растения с удобрением EcoBrew были <strong className="text-eco-main">зеленее, росли быстрее</strong> и 
              показали <strong className="text-eco-main">лучшую стойкость к стрессам</strong> по сравнению с контрольной группой.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}