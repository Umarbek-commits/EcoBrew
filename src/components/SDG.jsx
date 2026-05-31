export default function SDG() {
  const goals = [
    {
      num: '8',
      title: 'Достойная работа',
      desc: 'Создание новых рабочих мест в секторе переработки и экологических услуг',
      color: '#a21942',
    },
    {
      num: '11',
      title: 'Устойчивые города',
      desc: 'Снижение нагрузки на городские свалки Бишкека, создание зелёных пространств',
      color: '#fd9d24',
    },
    {
      num: '12',
      title: 'Ответственное потребление',
      desc: 'Превращение органических отходов в ценный ресурс; снижение количества мусора',
      color: '#bf8b2e',
    },
    {
      num: '13',
      title: 'Борьба с климатом',
      desc: 'Сокращение выбросов метана — газа, в 86 раз опаснее CO₂',
      color: '#3f7e44',
    },
    {
      num: '15',
      title: 'Экосистемы суши',
      desc: 'Восстановление плодородия почвы без химических удобрений',
      color: '#56c02b',
    },
    {
      num: '17',
      title: 'Партнёрство',
      desc: 'Сотрудничество с кофейнями, агробизнесом и государственными структурами',
      color: '#19486a',
    },
  ]

  return (
    <section id="sdg" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">ЦУР ООН</span>
          <h2 className="section-title">Цели устойчивого развития</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            EcoBrew вносит вклад в реализацию глобальных целей устойчивого развития ООН
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {goals.map(({ num, title, desc, color }) => (
            <div key={num} className="group cursor-default">
              <div
                className="rounded-2xl p-4 text-white text-center mb-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                style={{ backgroundColor: color }}
              >
                <div className="font-mono text-xs font-bold opacity-70 mb-1">ЦУР</div>
                <div className="font-heading text-4xl font-black">{num}</div>
              </div>
              <h3 className="font-body font-semibold text-sm text-eco-dark text-center mb-1">{title}</h3>
              <p className="font-body text-xs text-gray-500 text-center leading-relaxed hidden group-hover:block">
                {desc}
              </p>
              <p className="font-body text-xs text-gray-500 text-center leading-relaxed group-hover:hidden">
                {desc.substring(0, 50)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
