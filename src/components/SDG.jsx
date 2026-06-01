import goal8 from '../assets/SDG/R-WEB-Goal-08.png'
import goal11 from '../assets/SDG/R-WEB-Goal-11.png'
import goal12 from '../assets/SDG/R-WEB-Goal-12.png'
import goal13 from '../assets/SDG/R-WEB-Goal-13.png'
import goal15 from '../assets/SDG/R-WEB-Goal-15.png'
import goal17 from '../assets/SDG/R-WEB-Goal-17.png'

export default function SDG() {
  const goals = [
    goal8,
    goal11,
    goal12,
    goal13,
    goal15,
    goal17,
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {goals.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`SDG ${index + 1}`}
                className="w-full rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}