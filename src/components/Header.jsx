import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  {
    label: 'Practice Areas',
    href: '#practice',
    dropdown: [
      'IFSC Advisory',
      'Fund Formation & Management',
      'Capital Markets & Securities',
      'SEZ Advisory',
      'FEMA Advisory',
      'Corporate Law & Structuring',
      'AIF & Fund Structuring',
      'Tax & Regulatory Incentives',
    ],
  },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-dark border-b border-gold/20">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="flex h-11 w-11 items-center justify-center border-2 border-gold">
            <span className="font-serif text-xl font-semibold text-gold">E</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[0.8rem] font-semibold tracking-[0.08em] text-white">ECLECTIC LEGAL</span>
            <span className="text-[0.65rem] tracking-[0.06em] text-gold">IFSC & SEZ Specialists</span>
          </div>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {link.dropdown ? (
                <>
                  <a href={link.href} className="inline-flex items-center gap-1 rounded px-3 py-2 text-xs font-medium text-slate-200 transition hover:text-gold">
                    {link.label}
                    <ChevronDown size={14} className="opacity-80" />
                  </a>
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full z-20 mt-2 w-56 rounded border border-gold/30 bg-dark py-2 shadow-lg">
                      {link.dropdown.map((item) => (
                        <a key={item} href="#" className="block px-4 py-2 text-xs text-slate-200 transition hover:text-gold">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} className="inline-flex rounded px-3 py-2 text-xs font-medium text-slate-200 transition hover:text-gold">
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <a href="#" className="hidden rounded-full bg-gold px-5 py-2 text-xs font-semibold text-dark transition hover:bg-gold/90 lg:inline-flex">
          Get in Touch →
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded p-2 text-white lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${menuOpen ? 'flex' : 'hidden'} flex-col bg-dark border-t border-gold/20 py-2 lg:hidden`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 text-sm text-slate-200 transition hover:text-gold"
          >
            {link.label}
          </a>
        ))}
        <a href="#" className="mx-6 mt-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-dark text-center">
          Get in Touch
        </a>
      </div>
    </header>
  )
}
