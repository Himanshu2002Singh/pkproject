function AdvisoryIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="6" y="4" width="28" height="36" rx="1" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="12" y1="14" x2="32" y2="14" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="12" y1="20" x2="32" y2="20" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="12" y1="26" x2="24" y2="26" stroke="#c9a84c" strokeWidth="1.5" />
      <path d="M26 30l4-4 4 4-4 4-4-4z" stroke="#c9a84c" strokeWidth="1.3" fill="none" />
      <path d="M30 26v-4" stroke="#c9a84c" strokeWidth="1.3" />
    </svg>
  )
}

function StructuringIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="4" y="28" width="36" height="12" rx="0" stroke="#c9a84c" strokeWidth="1.5" />
      <rect x="10" y="18" width="8" height="10" stroke="#c9a84c" strokeWidth="1.5" />
      <rect x="26" y="18" width="8" height="10" stroke="#c9a84c" strokeWidth="1.5" />
      <rect x="16" y="6" width="12" height="12" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="14" y1="18" x2="14" y2="16" stroke="#c9a84c" strokeWidth="1.2" />
      <line x1="30" y1="18" x2="30" y2="16" stroke="#c9a84c" strokeWidth="1.2" />
      <path d="M14 16H22M30 16H22M22 6V18" stroke="#c9a84c" strokeWidth="1.2" />
    </svg>
  )
}

function ComplianceIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M22 4L6 10v12c0 10 7 18 16 20C31 40 38 32 38 22V10L22 4z" stroke="#c9a84c" strokeWidth="1.5" />
      <path d="M14 22l5 5 11-11" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ApprovalsIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M6 20c0-2 1.5-4 4-5l6-3 6 3 6-3 6 3c2.5 1 4 3 4 5v4c0 2-1.5 4-4 5l-6 3-6-3-6 3-6-3C7.5 28 6 26 6 24v-4z" stroke="#c9a84c" strokeWidth="1.4" />
      <path d="M15 22l4 4 10-10" stroke="#c9a84c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DisputeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M10 8h24" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 8v12l8 4 8-4V8" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="22" y1="24" x2="22" y2="36" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="14" y1="36" x2="30" y2="36" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const services = [
  {
    Icon: AdvisoryIcon,
    title: 'IFSC & SEZ Advisory',
    desc: 'Strategic advisory on regulatory frameworks, business establishment, licensing, governance, and cross-border operations in GIFT IFSC and Special Economic Zones.',
  },
  {
    Icon: StructuringIcon,
    title: 'IFSC & SEZ Structuring',
    desc: 'Designing efficient structures for financial institutions, funds, fintechs, holding companies, investment vehicles, and international business operations.',
  },
  {
    Icon: ComplianceIcon,
    title: 'Compliance & Governance',
    desc: 'Comprehensive compliance management, corporate governance, secretarial support, regulatory filings, and ongoing compliance advisory.',
  },
  {
    Icon: ApprovalsIcon,
    title: 'Regulatory Approvals & Licensing',
    desc: 'End-to-end assistance with registrations, licensing, regulatory approvals, authorisations, and interactions with regulatory authorities.',
  },
  {
    Icon: DisputeIcon,
    title: 'Enforcement & Regulatory Defence',
    desc: 'Specialised representation and strategic defence in regulatory inspections, investigations, show cause notices, enforcement proceedings, and adjudication before IFSCA.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="block h-px w-12 bg-gold" />
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">What we do</span>
          <span className="block h-px w-12 bg-gold" />
        </div>

        <h2 className="mx-auto mb-4 max-w-3xl text-center font-serif text-[clamp(28px,4vw,42px)] font-semibold text-slate-900">
          Specialists in IFSC, SEZ &amp; Cross-Border Advisory
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-sm leading-7 text-slate-600">
          Deep domain expertise. Practical solutions. Measurable outcomes. We are a specialised consulting and advisory firm focused exclusively on GIFT IFSC, Special Economic Zones, and global business ecosystems—helping businesses establish, operate, and grow with confidence.
        </p>

        <div className="grid grid-cols-1 gap-px border border-slate-200 sm:grid-cols-2 xl:grid-cols-5">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col gap-4 border-b border-slate-200 bg-white px-8 py-10 last:border-b-0 xl:border-r xl:last:border-r-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200">
                <s.Icon />
              </div>
              <h3 className="font-serif text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{s.desc}</p>
              <a href="#" className="mt-auto inline-flex items-center text-sm font-medium text-gold">
                Explore Services →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
