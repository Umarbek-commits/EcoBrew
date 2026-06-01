import { motion } from 'framer-motion'
import { FaTruck, FaFilter, FaCog, FaBox, FaLeaf } from 'react-icons/fa'

const steps = [
  {
    icon: FaTruck,
    num: '01',
    title: 'Сбор',
    desc: 'Партнёрство с кофейнями, ресторанами, бизнес-центрами и университетами. Бесплатно забираем использованный кофейный жмых — это выгодно партнёрам, ведь им не нужно платить за вывоз отходов.',
  },
  {
    icon: FaFilter,
    num: '02',
    title: 'Сортировка',
    desc: 'Очистка сырья от пластика, упаковки и посторонних примесей. На этом этапе отбирается только качественный органический материал, пригодный для дальнейшей переработки.',
  },
  {
    icon: FaCog,
    num: '03',
    title: 'Переработка',
    desc: 'Смешивание кофейного жмыха с другими органическими компонентами — прежде всего с яичной скорлупой. Пропорция: 2 части жмыха + 1 часть скорлупы. Компостирование или ферментация.',
  },
  {
    icon: FaBox,
    num: '04',
    title: 'Готовый продукт',
    desc: 'Фасовка в упаковки разного формата — от 100 г для дома и балкона до мешков по 5 кг для садовых центров, теплиц и фермерских хозяйств.',
  },
]

const composition = [
  { element: 'Азот (N)', benefit: 'Питание и рост', icon: '🌱' },
  { element: 'Калий (K)', benefit: 'Здоровье корней', icon: '🌿' },
  { element: 'Фосфор (P)', benefit: 'Цветение', icon: '🌸' },
  { element: 'Кальций (Ca)', benefit: 'Крепость стеблей', icon: '💪' },
  { element: 'Влага', benefit: 'Удержание воды', icon: '💧' },
  { element: 'Аэрация', benefit: 'Рыхлость почвы', icon: '🌬️' },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Технология</span>
          <h2 className="section-title">Как мы перерабатываем отходы</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Четыре шага превращают кофейный жмых в высококачественное органическое удобрение
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map(({ icon: Icon, num, title, desc }, index) => (
            <motion.div
              key={num}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{
                y: -10
              }}
              whileTap={{
                scale: 0.97
              }}
            >
              {/* Connector line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-eco-pale -z-0 last:hidden" style={{ width: 'calc(100% - 2rem)' }} />
              <div className="card p-6 border border-eco-pale/60 hover:border-eco-main/30 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="font-mono text-xs font-bold text-eco-light tracking-wider">{num}</div>
                  <div className="flex-1 h-px bg-eco-pale" />
                  <motion.div
                    className="w-10 h-10 bg-eco-pale/50 rounded-xl flex items-center justify-center"
                    whileHover={{
                      rotate: 15,
                      scale: 1.15
                    }}
                  >
                    <Icon className="text-eco-main" />
                  </motion.div>
                </div>
                <h3 className="font-heading font-bold text-eco-dark text-xl mb-3">{title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formula */}
        <motion.div
          className="bg-eco-cream/60 rounded-3xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-6">
            <h3 className="font-heading font-bold text-2xl text-eco-dark">Наша формула</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <motion.div
              className="bg-white rounded-2xl px-8 py-6 shadow-md"
              whileHover={{
                y: -8,
                scale: 1.05
              }}
            >
              <div className="font-heading text-4xl font-black text-eco-brown mb-1">2 части</div>
              <div className="font-body text-sm text-gray-600">Кофейный жмых</div>
              <div className="text-2xl mt-2">☕</div>
            </motion.div>
            
            <motion.div
              className="font-heading text-3xl font-bold text-eco-main"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              +
            </motion.div>
            
            <motion.div
              className="bg-white rounded-2xl px-8 py-6 shadow-md"
              whileHover={{
                y: -8,
                scale: 1.05
              }}
            >
              <div className="font-heading text-4xl font-black text-yellow-600 mb-1">1 часть</div>
              <div className="font-body text-sm text-gray-600">Яичная скорлупа</div>
              <div className="text-2xl mt-2">🥚</div>
            </motion.div>
            
            <motion.div
              className="font-heading text-3xl font-bold text-eco-main"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              =
            </motion.div>
            
            <motion.div
              className="bg-eco-main rounded-2xl px-8 py-6 shadow-md text-white"
              whileHover={{
                y: -8,
                scale: 1.08
              }}
            >
              <div className="font-heading text-2xl font-black mb-1">EcoBrew</div>
              <div className="font-body text-sm text-eco-pale">Органическое удобрение</div>
              <div className="text-2xl mt-2">🌱</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Composition grid */}
        <div>
          <h3 className="font-heading font-bold text-xl text-eco-dark text-center mb-6">
            Состав и свойства
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {composition.map(({ element, benefit, icon }, index) => (
              <motion.div
                key={element}
                className="bg-eco-pale/30 rounded-2xl p-4 text-center hover:bg-eco-pale/60 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.97
                }}
              >
                <motion.div
                  className="text-3xl mb-2"
                  whileHover={{
                    rotate: 10,
                    scale: 1.2
                  }}
                >
                  {icon}
                </motion.div>
                <div className="font-mono text-xs font-bold text-eco-dark mb-1">{element}</div>
                <div className="font-body text-xs text-gray-500">{benefit}</div>
              </motion.div>
            ))}
          </div>
          <p className="font-body text-xs text-gray-400 text-center mt-4">
            Источники: yuga.ru, gardendesign.com, ogorod.ru, rosselhoscenter.ru, kupo-vending.com.ua, ecowiki.ru
          </p>
        </div>
      </div>
    </section>
  )
}