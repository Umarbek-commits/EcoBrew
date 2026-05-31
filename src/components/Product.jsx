import { FaLeaf, FaWater, FaBug, FaGlobe, FaCheckCircle } from 'react-icons/fa'

const features = [
  {
    icon: FaLeaf,
    title: 'Натуральный состав',
    desc: 'Без химии, без синтетических добавок. Только органика: кофейный жмых и яичная скорлупа.',
  },
  {
    icon: FaWater,
    title: 'Удерживает влагу',
    desc: 'Улучшает структуру почвы и её способность сохранять воду — особенно важно летом.',
  },
  {
    icon: FaBug,
    title: 'Поддерживает микрофлору',
    desc: 'Кормит полезные почвенные микроорганизмы, создавая здоровую экосистему корнеобитаемого слоя.',
  },
  {
    icon: FaGlobe,
    title: 'Экологически безопасен',
    desc: 'Не загрязняет грунтовые воды, не накапливается в плодах. Идеален для органического земледелия.',
  },
]

export default function Product() {
  return (
    <section id="product" className="py-24 bg-eco-dark relative overflow-hidden grain">
      {/* bg decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eco-main/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eco-light/10 -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-eco-light border border-eco-light/30 px-3 py-1 rounded-full bg-eco-light/10 mb-3">
            Продукт
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4">
            EcoBrew Organic Fertilizer
          </h2>
          <div className="w-16 h-1 bg-eco-light rounded-full mx-auto mb-6" />
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Органическое удобрение нового поколения для дома, сада, огорода, 
            теплиц и фермерских хозяйств
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-eco-light/20 rounded-xl flex items-center justify-center mb-4">
                <Icon className="text-eco-light text-xl" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-2">{title}</h3>
              <p className="font-body text-white/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Product variants */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-eco-cream rounded-3xl p-8 text-eco-dark relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-eco-main text-white text-xs font-mono font-bold px-2 py-1 rounded-full">HOME</div>
            <div className="font-heading text-6xl font-black text-eco-brown mb-2">100г</div>
            <h3 className="font-heading font-bold text-2xl mb-2">Для дома и балкона</h3>
            <p className="font-body text-gray-600 text-sm mb-4">Идеально для комнатных растений, балконных ящиков и небольших грядок. Удобна в хранении и применении.</p>
            <ul className="space-y-2">
              {['Горшечные растения', 'Балконный огород', 'Зелень и травы', 'Цветники'].map(i => (
                <li key={i} className="flex items-center gap-2 font-body text-sm text-gray-700">
                  <FaCheckCircle className="text-eco-main flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-eco-main rounded-3xl p-8 text-white relative overflow-hidden grain">
            <div className="absolute top-4 right-4 bg-white text-eco-main text-xs font-mono font-bold px-2 py-1 rounded-full">PRO</div>
            <div className="font-heading text-6xl font-black text-eco-light mb-2">5кг</div>
            <h3 className="font-heading font-bold text-2xl mb-2">Для сада и фермы</h3>
            <p className="font-body text-white/70 text-sm mb-4">Оптовый формат для дачников, садовых центров, теплиц, ландшафтных компаний и агропредприятий.</p>
            <ul className="space-y-2">
              {['Теплицы и фермы', 'Садовые центры', 'Огороды и дачи', 'Питомники'].map(i => (
                <li key={i} className="flex items-center gap-2 font-body text-sm text-white/80">
                  <FaCheckCircle className="text-eco-light flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
