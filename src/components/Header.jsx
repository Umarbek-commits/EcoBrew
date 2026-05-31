import { useState, useEffect } from 'react'
import { FaLeaf } from 'react-icons/fa'

const navLinks = [
  { label: 'О проекте', href: '#about' },
  { label: 'Проблема', href: '#problem' },
  { label: 'Решение', href: '#solution' },
  { label: 'Продукт', href: '#product' },
  { label: 'Результаты', href: '#results' },
  { label: 'Бизнес', href: '#business' },
  { label: 'Контакт', href: '#footer' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-eco-main rounded-xl flex items-center justify-center shadow-md group-hover:bg-eco-dark transition-colors">
              <FaLeaf className="text-white text-lg" />
            </div>
            <span className="font-heading font-bold text-xl text-eco-dark tracking-tight">EcoBrew</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/eco_brew.ec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
              Стать партнёром
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-eco-pale/30"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-eco-dark transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-eco-dark transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-eco-dark transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link py-2 border-b border-gray-50 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#partner" className="btn-primary text-sm mt-2 text-center justify-center" onClick={() => setMenuOpen(false)}>
            Стать партнёром
          </a>
        </div>
      )}
    </header>
  )
}
