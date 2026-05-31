const photos = [
  {
    url: 'https://placehold.co/600x400/2E7D32/FFFFFF?text=Встреча+с+партнёрами',
    caption: 'Встреча с партнёрами',
    desc: 'Переговоры с кофейней «Бублик» о партнёрстве и регулярном сборе жмыха',
  },
  {
    url: 'https://placehold.co/600x400/5D4037/FFFFFF?text=Сушка+жмыха',
    caption: 'Сушка жмыха',
    desc: 'Первый этап переработки — равномерная просушка кофейного жмыха перед компостированием',
  },
  {
    url: 'https://placehold.co/600x400/F5F5DC/2E7D32?text=Измельчение+скорлупы',
    caption: 'Измельчение скорлупы',
    desc: 'Яичная скорлупа измельчается и подготавливается для смешивания в пропорции 1:2',
  },
  {
    url: 'https://placehold.co/600x400/388E3C/FFFFFF?text=Фасовка+удобрения',
    caption: 'Фасовка удобрения',
    desc: 'Готовый продукт расфасовывается в пакеты по 100г и 5кг для разных категорий покупателей',
  },
  {
    url: 'https://placehold.co/600x400/4CAF50/FFFFFF?text=Растения+с+EcoBrew',
    caption: 'Растения с EcoBrew',
    desc: 'Результат эксперимента: растения с удобрением EcoBrew значительно обогнали контрольную группу',
  },
  {
    url: 'https://placehold.co/600x400/1B5E20/F5F5DC?text=Грант+на+хакатоне',
    caption: 'Выдача гранта на хакатоне',
    desc: 'Победа в хакатоне мэрии Бишкека — получение гранта 10 000 сомов, признание проекта',
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
                <h3 className="font-heading font-bold text-eco-dark text-lg mb-2">{caption}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
