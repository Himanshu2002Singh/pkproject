function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8.5" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <path d="M12 12a3 3 0 016 0v4" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const quickLinks = ['About Us', 'Practice Areas', 'Insights', 'Resources', 'Careers', 'Contact Us']
const practiceAreas = [
  'IFSC Advisory',
  'Fund Formation',
  'Capital Markets',
  'SEZ Advisory',
  'FEMA Advisory',
  'AIF & Fund Structuring',
  'Corporate Law & Structuring',
  'Tax & Regulatory Incentives',
]
const locations = ['GIFT IFSC, Gandhinagar', 'Mumbai', 'New Delhi', 'Bengaluru']

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="border-t border-gold/20 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[280px_1fr_1fr_1fr_220px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-gold">
                <span className="font-serif text-lg font-semibold text-gold">E</span>
              </div>
              <div>
                <p className="font-serif text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-slate-100">ECLECTIC LEGAL</p>
                <p className="text-[0.65rem] uppercase tracking-[0.05em] text-gold">IFSC & SEZ Specialists</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              India's only law firm exclusively focused on IFSC and SEZ. End-to-end legal, regulatory and advisory solutions for the IFSC & SEZ ecosystem.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded border border-slate-700 text-slate-400 hover:border-gold hover:text-gold">
                <LinkedInIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded border border-slate-700 text-slate-400 hover:border-gold hover:text-gold">
                <TwitterIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded border border-slate-700 text-slate-400 hover:border-gold hover:text-gold">
                <YoutubeIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded border border-slate-700 text-slate-400 hover:border-gold hover:text-gold">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-100">Quick Links</p>
            {quickLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-slate-400 transition hover:text-gold">{link}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-100">Practice Areas</p>
            {practiceAreas.map((link) => (
              <a key={link} href="#" className="text-sm text-slate-400 transition hover:text-gold">{link}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-100">Key Locations</p>
            {locations.map((location) => (
              <p key={location} className="text-sm text-slate-400">{location}</p>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-100">Stay Updated</p>
            <p className="text-sm leading-7 text-slate-400">Stay updated with the latest insights on IFSC and SEZ.</p>
            <div className="flex gap-0 rounded-full border border-slate-700 bg-slate-900 pr-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500"
              />
              <button className="rounded-full bg-gold px-5 text-sm font-semibold text-dark">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Eclectic Legal. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-500">
            <a href="#" className="transition hover:text-gold">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="transition hover:text-gold">Terms of Use</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="transition hover:text-gold">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
