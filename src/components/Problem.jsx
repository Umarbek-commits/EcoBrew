import { motion } from 'framer-motion'
import { FaExclamationTriangle, FaIndustry, FaGlobe, FaFire } from 'react-icons/fa'

const problems = [
  {
    icon: FaIndustry,
    number: '600',
    unit: 'кофеен',
    title: 'В Бишкеке',
    desc: 'Каждая выбрасывает примерно 3 кг кофейного жмыха в день. В сумме — это около 2 тонн органических отходов ежедневно, которые просто попадают на свалку.',
    color: 'bg-amber-50 border-amber-200',
    numColor: 'text-amber-600',
  },
  {
    icon: FaIndustry,
    number: '1 т/день',
    unit: '',
    title: 'Яичная скорлупа',
    desc: 'Одна кондитерская может производить до 1 тонны яичной скорлупы в день (данные KULIKOV). Этот ценный источник кальция уходит на мусоровоз.',
    color: 'bg-orange-50 border-orange-200',
    numColor: 'text-orange-600',
  },
  {
    icon: FaFire,
    number: '86×',
    unit: 'опаснее CO₂',
    title: 'Метан от свалок',
    desc: 'Органика на свалках выделяет метан, который в 86 раз опаснее CO₂. Метан ответственен за 30% глобального потепления (UNEP/CCAC, FAO, Global Methane Pledge).',
    color: 'bg-red-50 border-red-200',
    numColor: 'text-red-600',
  },
  {
    icon: FaGlobe,
    number: '30%',
    unit: 'потепления',
    title: 'Вклад метана',
    desc: 'Органические отходы занимают место, создают нагрузку на утилизацию и не используются повторно, хотя содержат азот, калий, фосфор — ценнейшие удобрения.',
    color: 'bg-rose-50 border-rose-200',
    numColor: 'text-rose-600',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-eco-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Проблема</span>
          <h2 className="section-title">Горы органики, которые никому не нужны</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Ежедневно тысячи килограммов ценного органического сырья уходят на свалки Бишкека, 
            загрязняя атмосферу и занимая территорию.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map(({ icon: Icon, number, unit, title, desc, color, numColor }, index) => (
            <motion.div
              key={title}
              className={`card border ${color} p-6`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              whileTap={{
                scale: 0.97
              }}
            >
              <motion.div
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm"
                whileHover={{
                  rotate: 8,
                  scale: 1.15
                }}
              >
                <Icon className={`text-xl ${numColor}`} />
              </motion.div>
              <motion.div
                className={`font-heading text-3xl font-black ${numColor} leading-none mb-1`}
                whileHover={{
                  scale: 1.15
                }}
              >
                {number}
              </motion.div>
              {unit && <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">{unit}</div>}
              <h3 className="font-heading font-bold text-gray-800 text-lg mb-2">{title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Big callout */}
        <motion.div
          className="bg-eco-dark rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden grain"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
          <div className="relative z-10">
            <motion.div
              animate={{
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <FaExclamationTriangle className="text-yellow-400 text-4xl mx-auto mb-4" />
            </motion.div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Органические отходы выделяют метан —<br />
              газ, который в <span className="text-yellow-400">86 раз опаснее CO₂</span>
            </p>
            <p className="font-body text-white/70 max-w-2xl mx-auto">
              По данным UNEP, CCAC и Global Methane Pledge, метан ответственен за 30% глобального 
              потепления. При этом кофейный жмых содержит азот, калий и фосфор — 
              именно то, что нужно вашим растениям. Просто выбрасывать его — расточительство.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}