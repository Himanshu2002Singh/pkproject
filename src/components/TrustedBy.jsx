const orgs = [
  { name: 'Financial Institutions', icon: 'bank' },
  { name: 'Fund Managers', icon: 'chart' },
  { name: 'Fintech Companies', icon: 'mobile' },
  { name: 'Multinational Corporations', icon: 'globe' },
  { name: 'Startup Companies', icon: 'rocket' },
  { name: 'Aircraft Leasing Companies', icon: 'airplane' },
  { name: 'SEZ Developers & Units', icon: 'factory' },
  { name: 'Investment Funds', icon: 'stack' },
]

function Icon({ type }) {
  switch (type) {
    case 'bank':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 10h20M6 10l8-6 8 6M6 10v10h16V10" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 18v-4M14 18v-4M18 18v-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'chart':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M5 23h18" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 18v5M15 13v10M21 8v15" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'mobile':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="9" y="4" width="10" height="20" rx="2" stroke="#c9a84c" strokeWidth="2" />
          <circle cx="14" cy="20" r="1" fill="#c9a84c" />
          <path d="M12 8h4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'globe':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="10" stroke="#c9a84c" strokeWidth="2" />
          <path d="M4 14h20M14 4v20" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 8c4 4 8 4 12 0M8 20c4-4 8-4 12 0" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'rocket':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M9 19.5L4.5 24 7 26.5 11 22" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16l6-6 3 3-6 6-3-3Z" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16L8 20l4 4 4-4-4-4Z" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'airplane':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 15l8-3 3-8 3 8 8 3-8 3-3 8-3-8-8-3Z" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 12h7" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'factory':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M5 18v5h18v-5H18l-4 3-4-3H5Z" stroke="#c9a84c" strokeWidth="2" strokeLinejoin="round" />
          <path d="M7 18V10l4 3 4-3 4 3 4-3v8" stroke="#c9a84c" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 20v3M13 20v3M17 20v3" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'stack':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="5" y="7" width="18" height="5" rx="1" stroke="#c9a84c" strokeWidth="2" />
          <rect x="7" y="13" width="14" height="5" rx="1" stroke="#c9a84c" strokeWidth="2" />
          <rect x="9" y="19" width="10" height="4" rx="1" stroke="#c9a84c" strokeWidth="2" />
        </svg>
      )
    default:
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="10" stroke="#c9a84c" strokeWidth="2" />
        </svg>
      )
  }
}

export default function TrustedBy() {
  return (
    <section id="trusted" className="bg-white border-t border-slate-200 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-14 text-center font-serif text-[clamp(24px,3.5vw,36px)] font-semibold text-slate-900">
          Supporting Businesses Across the GIFT IFSC &amp; SEZ Ecosystem
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {orgs.map((org) => (
            <div key={org.name} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                <Icon type={org.icon} />
              </div>
              <span className="text-sm font-medium text-slate-900">{org.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
