import { motion } from 'framer-motion'
import { FaCheckCircle, FaTimesCircle, FaStar } from 'react-icons/fa'

const competitors = [
  {
    name: 'Теона & Со',
    prices: ['209 сом / 100г', '306 сом / 250г'],
    note: 'Свежий сушёный жмых (скраб / удобрение)',
    isSelf: false,
  },
  {
    name: 'V/AE',
    prices: ['352 сом / 250г', '648 сом / 500г'],
    note: 'Универсальное органическое удобрение',
    isSelf: false,
  },
  {
    name: 'Lipetsky Provence',
    prices: ['612 сом / 500г'],
    note: 'Мульча для растений',
    isSelf: false,
  },
  {
    name: 'EcoBrew',
    prices: ['80 сом / 100г', '150 сом / 5 кг'],
    note: 'Кофейный жмых + яичная скорлупа = комплексная формула',
    isSelf: true,
  },
]

export default function Competitors() {
  return (
    <section id="competitors" className="py-24 bg-eco-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Конкуренты</span>
          <h2 className="section-title">Анализ рынка</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            На рынке есть похожие продукты, но ни один из них не предлагает 
            нашей комбинации состава, цены и экологического воздействия
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {competitors.map(({ name, prices, note, isSelf }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{
                y: -10,
                scale: isSelf ? 1.08 : 1.04
              }}
              whileTap={{
                scale: 0.96
              }}
              animate={
                isSelf
                  ? {
                      boxShadow: [
                        '0 0 0 rgba(0,0,0,0)',
                        '0 0 30px rgba(120,200,120,0.4)',
                        '0 0 0 rgba(0,0,0,0)'
                      ]
                    }
                  : {}
              }
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className={`rounded-2xl p-6 border-2 ${
                isSelf
                  ? 'bg-eco-main text-white border-eco-dark shadow-xl scale-105'
                  : 'bg-white border-gray-100'
              }`}
            >
              {isSelf && (
                <div className="flex items-center gap-1 mb-3">
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    <FaStar className="text-yellow-300 text-xs" />
                  </motion.div>
                  <span className="font-mono text-xs text-eco-light font-bold uppercase tracking-wider">Наш продукт</span>
                </div>
              )}
              <h3 className={`font-heading font-bold text-xl mb-4 ${isSelf ? 'text-white' : 'text-eco-dark'}`}>{name}</h3>
              <div className="space-y-1 mb-4">
                {prices.map(p => (
                  <div key={p} className={`font-mono text-sm font-bold ${isSelf ? 'text-eco-light' : 'text-eco-main'}`}>{p}</div>
                ))}
              </div>
              <p className={`font-body text-sm leading-relaxed ${isSelf ? 'text-white/80' : 'text-gray-500'}`}>{note}</p>
            </motion.div>
          ))}
        </div>

        {/* Table for desktop */}
        <motion.div
          className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <table className="eco-table">
            <thead>
              <tr>
                <th>Бренд</th>
                <th>Цена / Вес</th>
                <th>Особенность</th>
                <th>Скорлупа в составе</th>
                <th>Защита от вредителей</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Теона & Со</td>
                <td>209 / 100г, 306 / 250г</td>
                <td>Сушёный жмых</td>
                <td><FaTimesCircle className="text-red-400" /></td>
                <td><FaTimesCircle className="text-red-400" /></td>
              </tr>
              <tr>
                <td className="font-medium">V/AE</td>
                <td>352 / 250г, 648 / 500г</td>
                <td>Органическое удобрение</td>
                <td><FaTimesCircle className="text-red-400" /></td>
                <td><FaTimesCircle className="text-red-400" /></td>
              </tr>
              <tr>
                <td className="font-medium">Lipetsky Provence</td>
                <td>612 / 500г</td>
                <td>Мульча для растений</td>
                <td><FaTimesCircle className="text-red-400" /></td>
                <td><FaTimesCircle className="text-red-400" /></td>
              </tr>
              <tr className="bg-eco-pale/30 font-medium">
                <td className="text-eco-dark font-bold">EcoBrew ✓</td>
                <td className="text-eco-main font-bold">80 / 100г, 150 / 5кг</td>
                <td>Жмых + Скорлупа</td>
                <td><FaCheckCircle className="text-eco-main" /></td>
                <td><FaCheckCircle className="text-eco-main" /></td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Warning about competitors */}
        <motion.div
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <FaTimesCircle className="text-amber-500 text-2xl flex-shrink-0 mt-0.5" />
          </motion.div>
          <div>
            <h4 className="font-heading font-bold text-amber-800 mb-1">Недостаток конкурентов</h4>
            <p className="font-body text-amber-700 text-sm">
              Большинство конкурентов продают просто сушёный жмых без каких-либо добавок. 
              Это опасно: чистый кофейный жмых при неправильном соотношении может <strong>окислить почву</strong>, 
              понизить pH и навредить растениям. EcoBrew решает эту проблему добавлением 
              яичной скорлупы — она нейтрализует кислотность и обогащает почву кальцием.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}