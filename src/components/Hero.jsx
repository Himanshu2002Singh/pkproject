import GlobeIcon from './icons/GlobeIcon'
import HexIcon from './icons/HexIcon'
import img1 from '../img/hero.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark text-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-[#0f2318cc] to-[#0f23180d]" />
      <img
        src={img1}
        alt="GIFT IFSC Financial District"
        className="absolute right-0 top-0 h-full w-[58%] object-cover object-top"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-24 pb-40">
        <div className="max-w-2xl">
          <p className="mb-2 text-base font-serif text-slate-200">India's Premier</p>
          <h1 className="text-[clamp(52px,7vw,88px)] font-serif font-bold leading-none text-white">
            <span className="block text-gold">IFSC &amp; SEZ</span>
          </h1>
          <h2 className="mb-8 text-[clamp(30px,4vw,48px)] font-serif font-normal leading-tight text-slate-200">
            Consulting &amp; Advisory Firm
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-7 text-slate-300">
            Empowering businesses with strategic advisory across GIFT IFSC, Special Economic Zones, regulatory compliance, corporate governance, fund structuring, licensing, and cross-border transactions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#whatwedo" className="inline-flex rounded-full bg-gold px-8 py-3 text-sm font-semibold text-dark transition hover:bg-gold/90">
              Our Expertise →
            </a>
            <a href="#contact" className="inline-flex rounded-full border border-slate-500/60 bg-transparent px-8 py-3 text-sm font-medium text-slate-200 transition hover:border-gold hover:text-gold">
              Get in Touch →
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto border-t border-gold/30 bg-[#0a1a10e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold">
              <GlobeIcon size={32} color="#c9a84c" />
            </div>
            <div>
              <p className="text-lg font-serif font-semibold text-slate-100">IFSC</p>
              <p className="text-sm leading-6 text-slate-300">International Financial<br />Services Centre</p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-gold/30 sm:block" />
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold">
              <HexIcon size={32} color="#c9a84c" />
            </div>
            <div>
              <p className="text-lg font-serif font-semibold text-slate-100">SEZ</p>
              <p className="text-sm leading-6 text-slate-300">Special Economic<br />Zone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
