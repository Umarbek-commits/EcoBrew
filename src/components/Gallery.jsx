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
  },
  {
    url: plants,
    caption: 'Растения с EcoBrew',
    desc: 'Результат эксперимента: растения с удобрением EcoBrew значительно обогнали контрольную группу',
  },
  {
    url: grant,
    caption: 'Грант на хакатоне',
    desc: 'Победа в хакатоне мэрии Бишкека — получение гранта и признание проекта',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-eco-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Фотоотчёт</span>
          <h2 className="section-title">EcoBrew в действии</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Наш путь от первого сбора жмыха до победы на хакатоне мэрии Бишкека
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map(({ url, caption, desc }) => (
            <div key={caption} className="card group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={url}
                  alt={caption}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-eco-dark text-lg mb-2">
                  {caption}
                </h3>

                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}