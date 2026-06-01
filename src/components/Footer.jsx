import { motion } from 'framer-motion'
import { FaLeaf, FaExternalLinkAlt } from 'react-icons/fa'
import logo from '../assets/logo.png'

const styles = `
  @keyframes footerGlow {
    0%,100% {
      box-shadow: 0 0 0 rgba(76,175,80,0);
    }
    50% {
      box-shadow: 0 0 20px rgba(76,175,80,.25);
    }
  }
`

const sources = [
  { label: 'Кофе как удобрение — ogorod.ru', url: 'https://www.ogorod.ru/ru/now/soil/11255/kofe-kak-udobrenie.htm' },
  { label: 'Кофе как удобрение — rosselhoscenter.ru', url: 'https://rosselhoscenter.ru/ob-uchrezhdenii/filialy/sibirskiy/omskaya-oblast/kofe-kak-udobrenie/' },
  { label: 'Использование кофейного жмыха — kupo-vending.com.ua', url: 'https://kupo-vending.com.ua/blog/kak-mozhno-ispolzovat-zhmyh-ot-kofe/' },
  { label: 'Кофейный жмых — ecowiki.ru', url: 'https://ecowiki.ru/questions/1737/' },
  { label: 'Яичная скорлупа как удобрение — rosselhoscenter.ru', url: 'https://rosselhoscenter.ru/ob-uchrezhdenii/filialy/privolzhskiy/ulyanovskaya-oblast/kak-primenyat-yaichnuyu-skorlupu-na-uchastke/' },
  { label: 'Растения и яичная скорлупа — geoglass.ru', url: 'https://geoglass.ru/poleznoe/kakie-rastenija-ljubjat-jaichnuju-skorlupu/' },
  { label: 'Скорлупа на огороде — ogorod.ru', url: 'https://www.ogorod.ru/ru/now/soil/19585/Polza-yaichnoj-skorlupy-na-dache-pravda-ili-babushkiny-skazki.htm' },
  { label: 'Удобрение из скорлупы — ivd.ru', url: 'https://www.ivd.ru/dacha-i-sad/dacnyj-ucastok/yaichnaya-skorlupa-dlya-ogoroda-4-prichiny-ee-ispolzovat-kak-sdelat-udobrenie-iz-nee-i-hranit-126732' },
  { label: 'Кофейный жмых VK', url: 'https://vk.com/wall-165101755_1988414' },
  { label: 'Кофейный жмых — yuga.ru', url: 'https://www.yuga.ru/polza/2947/' },
  { label: 'Coffee grounds for plants — gardendesign.com', url: 'https://www-gardendesign-com.translate.goog/how-to/coffee-grounds-for-plants.html?_x_tr_sl=en&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=sge' },
  { label: 'Метан и климат — globalmethane.org (PDF)', url: 'https://www.globalmethane.org/documents/methane_analysis_fs_rus.pdf' },
  { label: 'Короткоживущие климатические загрязнители — ccacoalition.org', url: 'https://www.ccacoalition.org/ru/short-lived-climate-pollutants/methane' },
  { label: 'Метан и изменение климата — unep.org', url: 'https://www.unep.org/news-and-stories/story/methane-emissions-are-driving-climate-change-heres-how-reduce-them' },
  { label: 'Метан опаснее CO₂ — sher.media', url: 'https://sher.media/parnikovyj-gaz-v-87-raz-opasnee-so2-otkuda-beretsya-metan-i-kak-s-nim-borotsya/' },
  { label: 'Кофеин и вредители растений — gemini.ua', url: 'https://gemini.ua/ru/kofein-kak-evolyuczionnyj-metod-zashhity-kofe-ot-vreditelej/' },
  { label: 'Кофейная гуща и вредители — atlaspestandwildlife', url: 'https://atlaspestandwildlife-com.translate.goog/do-coffee-grounds-attract-pests/?_x_tr_sl=en&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=sge' },
  { label: 'Остатки кофейной гущи — inlavka.ru', url: 'https://inlavka.ru/news/poryadok-i-uborka/sovety-po-uborke/chto-delat-s-ostatkami-kofeynoy-gushchi-ekonomnye-i-ekologichnye-sposoby-ispolzovaniya-v-domashnikh-.html' },
  { label: 'Кофейный жмых для растений — geoglass.ru', url: 'https://geoglass.ru/poleznoe/kofejnyj-zhmyh-dlja-komnatnyh-rastenij-kak-udobrenie/' },
]

export default function Footer() {
  return (
    <>
      <style>{styles}</style>
      <footer id="footer" className="bg-eco-dark text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row */}
          <div className="grid md:grid-cols-3 gap-10 mb-12 border-b border-white/10 pb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
  <motion.div
    className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
    animate={{
      rotate: [0, 8, -8, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity
    }}
    style={{
      animation: 'footerGlow 3s infinite'
    }}
  >
    <img
      src={logo}
      alt="EcoBrew"
      className="w-12 h-12 object-contain"
    />
  </motion.div>

  <span className="font-heading font-bold text-2xl">
    EcoBrew
  </span>
</div>
              <p className="font-body text-white/60 text-sm leading-relaxed mb-4">
                Превращаем органический мусор в экологическое удобрение. 
                Бишкек, Кыргызстан.
              </p>
              <p className="font-body text-white/40 text-xs">
                Стартап в области циклической экономики и органического земледелия
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4 text-eco-light">Навигация</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['О проекте', '#about'],
                  ['Проблема', '#problem'],
                  ['Исследование', '#research'],
                  ['Решение', '#solution'],
                  ['Продукт', '#product'],
                  ['Конкуренты', '#competitors'],
                  ['Преимущества', '#advantages'],
                  ['Бизнес-модель', '#business'],
                  ['Финансы', '#financial'],
                  ['Достижения', '#achievements'],
                  ['Галерея', '#gallery'],
                  ['ЦУР', '#sdg'],
                ].map(([label, href]) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{
                      x: 5
                    }}
                    transition={{
                      duration: 0.2
                    }}
                    className="font-body text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4 text-eco-light">Контакты</h4>
              <p className="font-body text-white/60 text-sm mb-2">📍 Бишкек, Кыргызстан</p>
              <p className="font-body text-white/60 text-sm mb-4">📧 enactus@college.edu.kg</p>
              <motion.div
                className="bg-white/5 border border-white/10 rounded-xl p-4"
                whileHover={{
                  scale: 1.03
                }}
              >
                <p className="font-body text-white/70 text-xs leading-relaxed">
                  Если вы владелец кофейни— мы готовы 
                  бесплатно забирать ваш кофейный жмых. Станьте частью замкнутого цикла!
                </p>
              </motion.div>
            </div>
          </div>

          {/* Sources */}
          <div className="mb-10">
            <h4 className="font-heading font-bold text-lg mb-6 text-eco-light">
              Список использованных источников
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {sources.map(({ label, url }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 4
                  }}
                  className="flex items-center gap-2 font-body text-xs text-white/40 hover:text-eco-light transition-colors group py-1"
                >
                  <FaExternalLinkAlt className="flex-shrink-0 text-eco-main/50 group-hover:text-eco-light text-[10px]" />
                  <span className="truncate">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <motion.div
            className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-mono text-xs text-white/30">© EcoBrew 2026. Все права защищены.</p>
            <p className="font-mono text-xs text-white/20">
              Made with ♻️ in Bishkek, KG
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}