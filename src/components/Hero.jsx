import { motion } from 'framer-motion'
import { FaLeaf, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-eco-dark grain">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-eco-main/20 translate-x-1/3 -translate-y-1/3 blur-xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-eco-light/10 -translate-x-1/3 translate-y-1/3 blur-xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

      {/* Floating leaves */}
      <div className="absolute top-20 left-10 text-eco-light/20 text-6xl animate-leaf-sway">🌿</div>
      <div className="absolute top-40 right-20 text-eco-light/15 text-4xl animate-leaf-sway" style={{ animationDelay: '1s' }}>🍃</div>
      <div className="absolute bottom-40 left-1/4 text-eco-light/10 text-5xl animate-leaf-sway" style={{ animationDelay: '0.5s' }}>🌱</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-eco-pale border border-white/20 rounded-full px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase mb-8">
            <FaLeaf className="text-eco-light animate-pulse-slow" />
            Экологический стартап · Бишкек, Кыргызстан · 2026
          </div>

          {/* Main heading */}
          <motion.h1
            className="font-heading text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Eco
            <motion.span
              className="text-eco-light italic inline-block"
              whileHover={{
                scale: 1.05
              }}
            >
              Brew
            </motion.span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            className="font-heading text-xl sm:text-2xl lg:text-3xl text-eco-cream font-normal italic mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            «Превращаем органический мусор<br className="hidden sm:block" /> в экологическое удобрение»
          </motion.p>

          {/* Subtext */}
          <p className="font-body text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
            То, что большинство видят как мусор, мы видим как возможность. 
            Кофейный жмых и яичная скорлупа — сырьё для будущего урожая.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-eco-light text-eco-dark font-body font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-all duration-200 shadow-xl hover:shadow-eco-light/40 hover:-translate-y-1"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(129,199,132,0.6)'
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              <FaLeaf />
              О проекте
            </motion.a>
            <motion.a
              href="https://www.instagram.com/eco_brew.ec"
              id="partner"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 hover:border-white transition-all duration-200"
              whileHover={{
                scale: 1.05,
                y: -3
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              Стать партнёром
            </motion.a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/10">
            {[
              { num: '600+', label: 'кофеен в Бишкеке' },
              { num: '2 т/день', label: 'кофейного жмыха' },
              { num: '35 кг', label: 'уже продано' },
              { num: '24 560', label: 'сом выручки' },
            ].map(stat => (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -8,
                  scale: 1.05
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300
                }}
              >
                <div className="font-heading text-2xl sm:text-3xl font-black text-white drop-shadow-lg">{stat.num}
                </div>
                <div className="font-body text-xs text-white/50 mt-0.5 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <FaArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}