import { motion } from 'framer-motion'
import drying from '../assets/gallery/drying.jpg'
import grant from '../assets/gallery/grant.jpg'
import packing from '../assets/gallery/packing.jpg'
import partners from '../assets/gallery/partners.png'
import plants from '../assets/gallery/plants.jpg'
import shell from '../assets/gallery/shell.jpg'

const photos = [
  {
    url: partners,
    caption: 'Встреча с партнёрами',
    desc: 'Переговоры с кофейней «Бублик» о партнёрстве и регулярном сборе жмыха',
  },
  {
    url: drying,
    caption: 'Сушка жмыха',
    desc: 'Первый этап переработки — равномерная просушка кофейного жмыха перед компостированием',
  },
  {
    url: shell,
    caption: 'Измельчение скорлупы',
    desc: 'Яичная скорлупа измельчается и подготавливается для смешивания в пропорции 1:2',
  },
  {
    url: packing,
    caption: 'Фасовка удобрения',
    desc: 'Готовый продукт расфасовывается в пакеты по 100г и 5кг',
    tall: true,
  },
  {
    url: plants,
    caption: 'Растения с EcoBrew',
    desc: 'Результат эксперимента: растения с удобрением EcoBrew значительно обогнали контрольную группу',
    contain: true,
  },
  {
    url: grant,
    caption: 'Грант на хакатоне',
    desc: 'Победа в хакатоне мэрии Бишкека — получение гранта и признание проекта',
    contain: true,
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-eco-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Фотоотчёт</span>

          <h2 className="section-title">
            EcoBrew в действии
          </h2>

          <div className="section-divider" />

          <p className="section-subtitle">
            Наш путь от первого сбора жмыха до победы на хакатоне мэрии Бишкека
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map(({ url, caption, desc, contain, tall }, index) => (
            <motion.div
              key={caption}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <motion.div
                className="overflow-hidden bg-white"
                whileHover={{
                  scale: 1.02,
                }}
              >
                <img
                  src={url}
                  alt={caption}
                  className={
                    contain
                      ? 'w-full h-72 object-contain bg-white group-hover:scale-105 transition-all duration-700'
                      : tall
                        ? 'w-full h-72 object-cover group-hover:scale-110 transition-all duration-700'
                        : 'w-full h-48 object-cover group-hover:scale-110 transition-all duration-700'
                  }
                />
              </motion.div>

              <div className="p-5">
                <motion.h3
                  className="font-heading font-bold text-eco-dark text-lg mb-2"
                  whileHover={{
                    x: 5,
                  }}
                >
                  {caption}
                </motion.h3>

                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}