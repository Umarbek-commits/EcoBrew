import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBug, FaClock, FaSeedling, FaRecycle, FaLeaf, FaChartLine, FaShieldAlt } from 'react-icons/fa'
import beforePlant from '../assets/gallery/before.png'
import afterPlant from '../assets/gallery/after.png'

const advantages = [
  {
    icon: FaBug,
    title: 'Барьер от вредителей',
    desc: 'Яичная скорлупа создаёт острый барьер против слизней и улиток. Кофеин в жмыхе отпугивает муравьёв, тлю и плодовых мушек — они не переносят этого вещества.',
    sources: 'gemini.ua, atlaspestandwildlife',
  },
  {
    icon: FaShieldAlt,
    title: 'Безопасно для природы',
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
  const [slider, setSlider] = useState(50)

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
          {advantages.map(({ icon: Icon, title, desc, sources }, index) => (
            <motion.div
              key={index}
              className="card p-6 border border-eco-pale/60 hover:border-eco-main/30 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1
                }}
                className="w-14 h-14 bg-eco-pale/40 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-eco-pale transition-colors"
              >
                <Icon className="text-eco-main text-2xl" />
              </motion.div>
              <h3 className="font-heading font-bold text-eco-dark text-lg mb-3">{title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
              {sources && <p className="font-mono text-xs text-gray-400">Источники: {sources}</p>}
            </motion.div>
          ))}
        </div>

        {/* Innovations */}
        <motion.div
          className="bg-gradient-to-br from-eco-main to-eco-dark rounded-3xl p-8 md:p-12 text-white mb-24 relative overflow-hidden grain"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
            ].map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                className="bg-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2
                }}
              >
                <Icon className="text-eco-light text-2xl mb-3" />
                <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results - Before/After Slider */}
        <div id="results">
          <div className="text-center mb-12">
            <span className="section-label">Эксперимент</span>
            <h2 className="section-title">Результаты: До и После</h2>
            <div className="section-divider" />
          </div>

          {/* Interactive Slider */}
          <motion.div
            className="relative overflow-hidden rounded-[32px] bg-black border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative h-[600px] group"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                let newValue = (x / rect.width) * 100
                newValue = Math.min(100, Math.max(0, newValue))
                setSlider(newValue)
              }}
            >
              {/* ДО */}
              <img
                src={beforePlant}
                alt="До EcoBrew"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0"
              />

              {/* ПОСЛЕ */}
              <img
                src={afterPlant}
                alt="После EcoBrew"
                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700"
                style={{
                  clipPath: `polygon(${slider}% 0%, 100% 0%, 100% 100%, ${slider}% 100%)`
                }}
              />

              {/* Линия */}
              <div
                className="absolute top-0 w-[3px] h-full bg-lime-400 shadow-[0_0_20px_#84cc16]"
                style={{ left: `${slider}%` }}
              />

              {/* Кнопка - исправленное позиционирование */}
              <div
                className="absolute top-1/2 w-14 h-14 rounded-full bg-lime-400 border-4 border-black flex items-center justify-center shadow-2xl z-30"
                style={{
                  left: `calc(${slider}% - 28px)`,
                  transform: 'translateY(-50%)'
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2
                  }}
                  className="font-bold text-black text-xl"
                >
                  ↔
                </motion.div>
              </div>

              {/* До */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-bold backdrop-blur-md">
                ДО
              </div>

              {/* После */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-lime-400 text-black text-sm font-bold">
                ПОСЛЕ
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl font-black text-eco-main">+40%</div>
              <p className="text-gray-600 mt-2">больше зелёной массы</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl font-black text-eco-main">+35%</div>
              <p className="text-gray-600 mt-2">удержание влаги</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl font-black text-eco-main">-80%</div>
              <p className="text-gray-600 mt-2">вредителей</p>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 bg-eco-cream/60 rounded-2xl p-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-body text-gray-700 text-lg">
              Растения с удобрением EcoBrew были <strong className="text-eco-main">зеленее, росли быстрее</strong> и 
              показали <strong className="text-eco-main">лучшую стойкость к стрессам</strong> по сравнению с контрольной группой.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}