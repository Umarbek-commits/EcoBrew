import { FaLeaf, FaMoneyBillWave, FaUsers, FaRecycle, FaHandHoldingHeart, FaHome, FaSeedling } from 'react-icons/fa'

const blocks = [
  {
    icon: FaLeaf,
    title: 'Экологическая польза',
    color: 'bg-eco-main',
    items: [
      'Уменьшаем количество пищевых отходов',
      'Снижаем нагрузку на городские свалки',
      'Сокращаем выброс метана и загрязнение воздуха',
      'Поддерживаем принципы циклической экономики',
    ],
  },
  {
    icon: FaMoneyBillWave,
    title: 'Экономическая польза',
    color: 'bg-eco-brown',
    items: [
      'Создаём новый продукт из того, что стоит ноль',
      'Помогаем кофейням сокращать расходы на утилизацию',
      'Обеспечиваем доступ к недорогим органическим удобрениям',
      'Создаём рабочие места в секторе переработки',
    ],
  },
  {
    icon: FaUsers,
    title: 'Социальная польза',
    color: 'bg-teal-700',
    items: [
      'Повышаем экологическую осведомлённость населения',
      'Формируем культуру раздельного сбора и переработки',
      'Вовлекаем молодёжь в экологические инициативы',
      'Поддерживаем устойчивое городское сельское хозяйство',
    ],
  },
]

export default function SocietyHelp() {
  return (
    <>
      {/* Society Help */}
      <section id="society" className="py-24 bg-eco-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Общество</span>
            <h2 className="section-title">Как мы помогаем миру</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blocks.map(({ icon: Icon, title, color, items }) => (
              <div key={title} className="card overflow-hidden">
                <div className={`${color} p-6 text-white`}>
                  <Icon className="text-3xl mb-3 opacity-90" />
                  <h3 className="font-heading font-bold text-xl">{title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-gray-700">
                        <span className="text-eco-main mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uniqueness */}
      <section id="uniqueness" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Уникальность</span>
            <h2 className="section-title">Замкнутый цикл EcoBrew</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Большинство кофеен просто выбрасывают гущу. Мы создали систему,
              где отходы одного становятся ресурсом для другого.
            </p>
          </div>

          {/* Cycle diagram */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 flex-wrap">
              {[
                { label: 'Кофе', emoji: '☕', color: 'bg-eco-brown' },
                { label: '→', emoji: null, color: null },
                { label: 'Отходы', emoji: '🗑️', color: 'bg-gray-500' },
                { label: '→', emoji: null, color: null },
                { label: 'Переработка', emoji: '⚙️', color: 'bg-eco-mid' },
                { label: '→', emoji: null, color: null },
                { label: 'Удобрение', emoji: '🌿', color: 'bg-eco-main' },
                { label: '→', emoji: null, color: null },
                { label: 'Растения', emoji: '🌱', color: 'bg-eco-light' },
              ].map(({ label, emoji, color }, idx) => (
                emoji ? (
                  <div key={idx} className={`${color} text-white rounded-2xl px-6 py-4 text-center shadow-md min-w-[100px]`}>
                    <div className="text-2xl mb-1">{emoji}</div>
                    <div className="font-body font-semibold text-sm">{label}</div>
                  </div>
                ) : (
                  <div key={idx} className="font-heading text-2xl font-bold text-eco-light hidden md:block">→</div>
                )
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
                Этот цикл — основа нашей бизнес-модели и экологической миссии. 
                Каждая чашка кофе, выпитая в Бишкеке, может стать питанием для городских садов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-24 bg-eco-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Целевая аудитория</span>
            <h2 className="section-title">Кто наш покупатель</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2C */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-eco-pale/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-eco-pale/50 rounded-xl flex items-center justify-center">
                  <FaHome className="text-eco-main text-xl" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-eco-main uppercase tracking-wider">B2C</div>
                  <h3 className="font-heading font-bold text-xl text-eco-dark">Частные покупатели</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🌺', label: 'Владельцы домашних растений' },
                  { emoji: '🌻', label: 'Садоводы и дачники' },
                  { emoji: '🥗', label: 'Любители огорода' },
                  { emoji: '♻️', label: 'Эко-образ жизни' },
                ].map(({ emoji, label }) => (
                  <div key={label} className="bg-eco-cream/60 rounded-xl p-3 text-center">
                    <div className="text-xl mb-1">{emoji}</div>
                    <div className="font-body text-xs text-gray-700">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B */}
            <div className="bg-eco-dark rounded-3xl p-8 shadow-md text-white relative overflow-hidden grain">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <FaSeedling className="text-eco-light text-xl" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-eco-light uppercase tracking-wider">B2B</div>
                  <h3 className="font-heading font-bold text-xl text-white">Бизнес-партнёры</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {[
                  { emoji: '🏡', label: 'Фермерские хозяйства' },
                  { emoji: '🏗️', label: 'Теплицы' },
                  { emoji: '🌳', label: 'Ландшафтные компании' },
                  { emoji: '🌿', label: 'Питомники растений' },
                  { emoji: '🛒', label: 'Агро-магазины' },
                  { emoji: '🏢', label: 'Садовые центры' },
                ].map(({ emoji, label }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-xl mb-1">{emoji}</div>
                    <div className="font-body text-xs text-white/80">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
