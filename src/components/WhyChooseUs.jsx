function PeopleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="14" cy="12" r="5" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="26" cy="12" r="5" stroke="#c9a84c" strokeWidth="1.5" />
      <path d="M4 32c0-6 4.5-10 10-10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 32c0-6-4.5-10-10-10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="6" width="24" height="28" stroke="#c9a84c" strokeWidth="1.5" />
      <rect x="8" y="6" width="10" height="16" stroke="#c9a84c" strokeWidth="1.2" />
      <line x1="12" y1="10" x2="12" y2="22" stroke="#c9a84c" strokeWidth="1" />
      <line x1="8" y1="14" x2="18" y2="14" stroke="#c9a84c" strokeWidth="1" />
      <line x1="8" y1="18" x2="18" y2="18" stroke="#c9a84c" strokeWidth="1" />
      <rect x="16" y="26" width="8" height="8" stroke="#c9a84c" strokeWidth="1.2" />
      <line x1="22" y1="12" x2="30" y2="12" stroke="#c9a84c" strokeWidth="1" />
      <line x1="22" y1="16" x2="30" y2="16" stroke="#c9a84c" strokeWidth="1" />
      <line x1="22" y1="20" x2="30" y2="20" stroke="#c9a84c" strokeWidth="1" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <polyline points="6,30 14,18 22,24 30,10 36,16" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 10l6 0M36 10v6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="34" x2="36" y2="34" stroke="#c9a84c" strokeWidth="1.3" />
    </svg>
  )
}

function GlobeSmIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" stroke="#c9a84c" strokeWidth="1.5" />
      <ellipse cx="20" cy="20" rx="7" ry="14" stroke="#c9a84c" strokeWidth="1.3" />
      <line x1="6" y1="14" x2="34" y2="14" stroke="#c9a84c" strokeWidth="1.2" />
      <line x1="6" y1="26" x2="34" y2="26" stroke="#c9a84c" strokeWidth="1.2" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="8" stroke="#c9a84c" strokeWidth="1.3" />
      <circle cx="20" cy="20" r="3" stroke="#c9a84c" strokeWidth="1.3" />
      <line x1="20" y1="6" x2="20" y2="12" stroke="#c9a84c" strokeWidth="1.2" />
      <line x1="20" y1="28" x2="20" y2="34" stroke="#c9a84c" strokeWidth="1.2" />
      <line x1="6" y1="20" x2="12" y2="20" stroke="#c9a84c" strokeWidth="1.2" />
      <line x1="28" y1="20" x2="34" y2="20" stroke="#c9a84c" strokeWidth="1.2" />
    </svg>
  )
}

const stats = [
  {
    Icon: PeopleIcon,
    value: '100+ Years',
    label: 'Combined Professional Experience',
    desc: 'Across corporate advisory, governance, regulatory compliance, and financial services.',
  },
  {
    Icon: BuildingIcon,
    value: 'Specialist Team',
    label: 'Industry & Regulatory Expertise',
    desc: 'Led by experienced Company Secretaries and advisors with deep regulatory knowledge.',
  },
  {
    Icon: ChartIcon,
    value: 'End-to-End',
    label: 'Advisory',
    desc: 'From setup and approvals to governance, compliance, restructuring, and regulatory defence.',
  },
  {
    Icon: GlobeSmIcon,
    value: 'Research-Driven',
    label: 'Approach',
    desc: 'Knowledge that creates value through continuous policy and regulatory analysis.',
  },
  {
    Icon: TargetIcon,
    value: 'Focused Practice',
    label: 'Dedicated to GIFT IFSC & SEZ',
    desc: 'Purpose-built for the unique compliance and governance requirements of the ecosystem.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-dark-green px-6 py-20 text-slate-100 sm:py-28">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center sm:mb-20">
          <p className="mb-3 inline-block rounded-full bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
            Why Clients Choose Us
          </p>
          <h2 className="mx-auto mb-4 max-w-2xl font-serif text-[clamp(32px,7vw,52px)] font-bold leading-tight text-slate-100 sm:mb-6">
            Specialized Expertise.
            <span className="block text-gold">Practical Insight.</span>
            Trusted Advice.
          </h2>
          <p className="mx-auto max-w-2xl text-[13px] leading-6 text-slate-300 sm:text-sm sm:leading-7">
            We are a specialist consulting and advisory firm dedicated to GIFT IFSC, Special Economic Zones, and India's evolving cross-border regulatory ecosystem. Our strength lies in combining deep technical knowledge with practical commercial solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              style={{
                animationDelay: `${idx * 50}ms`,
              }}
              className="group relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-[#15251f] to-[#0f1a15] p-6 transition duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 sm:p-7 lg:p-6"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative flex flex-col gap-4">
                {/* Icon */}
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition duration-300 group-hover:border-gold/60 group-hover:bg-gold/10">
                  <s.Icon />
                </div>

                {/* Value */}
                <div className="flex flex-col gap-2">
                  <p className="font-serif text-2xl font-bold text-gold sm:text-2xl">{s.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-200 sm:text-sm">{s.label}</p>
                </div>

                {/* Description */}
                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-[13px] sm:leading-6">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-6 py-3 text-sm font-medium text-gold transition duration-300 hover:border-gold hover:bg-gold/15 sm:px-8 sm:py-4 sm:text-base"
          >
            Learn More About Our Approach
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
