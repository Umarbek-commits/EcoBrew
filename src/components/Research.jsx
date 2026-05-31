import { FaChartLine, FaUsers, FaSeedling, FaCoffee } from 'react-icons/fa'

const stats = [
  {
    icon: FaUsers,
    num: '500+',
    label: 'респондентов',
    desc: 'Опрошено жителей Бишкека в рамках исследования рынка',
  },
  {
    icon: FaCoffee,
    num: '70%',
    label: 'активных кофеманов',
    desc: 'Регулярно потребляют кофе среди опрошенных',
  },
  {
    icon: FaChartLine,
    num: '10%',
    label: 'рост кофеен в год',
    desc: 'Ежегодный прирост числа кофеен в Бишкеке — рынок сырья растёт',
  },
  {
    icon: FaUsers,
    num: '57.3%',
    label: 'поддерживают переработку',
    desc: 'Готовы активно поддержать переработку кофейных отходов',
  },
  {
    icon: FaSeedling,
    num: '73.2%',
    label: 'садоводов «за»',
    desc: 'Садоводов заинтересованы в применении кофейного удобрения',
  },
]

export default function Research() {
  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Исследование</span>
          <h2 className="section-title">Мы провели опрос — цифры говорят</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Более 500 жителей Бишкека ответили на наши вопросы. 
            Результаты подтвердили: спрос на органические удобрения существует.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map(({ icon: Icon, num, label, desc }) => (
            <div key={label} className="card p-6 text-center border border-eco-pale/60 hover:border-eco-main/30">
              <div className="w-12 h-12 bg-eco-pale/40 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="text-eco-main text-xl" />
              </div>
              <div className="font-heading text-4xl font-black text-eco-main mb-1">{num}</div>
              <div className="font-body font-semibold text-eco-dark text-sm mb-2">{label}</div>
              <p className="font-body text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bar chart visual */}
        <div className="mt-12 bg-eco-cream/50 rounded-3xl p-8">
          <h3 className="font-heading font-bold text-xl text-eco-dark mb-6 text-center">
            Ключевые показатели исследования
          </h3>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Потребители кофе среди опрошенных', pct: 70, color: 'bg-eco-main' },
              { label: 'Интерес садоводов к удобрению', pct: 73.2, color: 'bg-eco-light' },
              { label: 'Готовы поддержать переработку', pct: 57.3, color: 'bg-eco-mid' },
            ].map(({ label, pct, color }) => (
              <div key={label}>
                <div className="flex justify-between mb-1">
                  <span className="font-body text-sm text-gray-700">{label}</span>
                  <span className="font-mono text-sm font-bold text-eco-dark">{pct}%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-full ${color} rounded-full`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
