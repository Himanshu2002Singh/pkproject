const areas = [
  {
    title: 'GIFT IFSC Advisory',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <circle cx="19" cy="19" r="15" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="19" cy="19" rx="7" ry="15" stroke="currentColor" strokeWidth="1.3" />
        <line x1="4" y1="13" x2="34" y2="13" stroke="currentColor" strokeWidth="1.2" />
        <line x1="4" y1="25" x2="34" y2="25" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'SEZ Advisory',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <path d="M19 3L33 11V27L19 35L5 27V11L19 3Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 10L27 15V23L19 28L11 23V15L19 10Z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Fund Formation & Asset Management',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <rect x="6" y="14" width="26" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14v-3a9 9 0 0118 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="22" r="3" stroke="currentColor" strokeWidth="1.3" />
        <line x1="19" y1="22" x2="22" y2="22" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Compliance & Governance',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <path d="M19 4L35 12v12c0 9-7 16-16 18C10 40 4 33 4 24V12L19 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 20l4 4 9-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Licensing & Approvals',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <path d="M6 20c0-2 1.5-4 4-5l6-3 6 3 6-3 6 3c2.5 1 4 3 4 5v4c0 2-1.5 4-4 5l-6 3-6-3-6 3-6-3C7.5 28 6 26 6 24v-4z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M15 22l4 4 10-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Corporate Structuring & Cross-Border Advisory',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <rect x="6" y="22" width="26" height="10" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="14" width="7" height="8" stroke="currentColor" strokeWidth="1.3" />
        <rect x="21" y="14" width="7" height="8" stroke="currentColor" strokeWidth="1.3" />
        <rect x="14" y="5" width="10" height="9" stroke="currentColor" strokeWidth="1.3" />
        <path d="M13.5 14v-1h11v1" stroke="currentColor" strokeWidth="1.1" />
        <line x1="19" y1="5" x2="19" y2="13" stroke="currentColor" strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    title: 'Capital Markets & Financial Services',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <polyline points="4,30 10,18 18,24 26,10 34,16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="33" x2="34" y2="33" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'IFSCA Enforcement & Regulatory Defence',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-gold">
        <rect x="5" y="5" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="14" x2="33" y2="14" stroke="currentColor" strokeWidth="1.3" />
        <line x1="14" y1="5" x2="14" y2="33" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 20l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 22h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M20 26h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function PracticeAreas() {
  return (
    <section id="practice" className="border-t border-slate-200 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">Our Practice Areas</p>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-semibold text-slate-900">Focused expertise across the GIFT IFSC &amp; SEZ ecosystem</h2>
          </div>
          <a href="#" className="text-sm font-medium text-gold">View all practice areas →</a>
        </div>

        <p className="mb-10 max-w-3xl text-sm leading-7 text-slate-600">
          Supporting businesses across the GIFT IFSC &amp; SEZ ecosystem with specialist advise for financial institutions, asset managers, family offices, multinational corporations, fintech companies, aircraft leasing companies, SEZ developers and units, and investment funds.
        </p>

        <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {areas.map((area) => (
            <a
              key={area.title}
              href="#"
              className="flex flex-col items-center gap-4 border border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-900 transition hover:bg-slate-50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 text-gold">
                {area.icon}
              </div>
              <p className="font-medium">{area.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
