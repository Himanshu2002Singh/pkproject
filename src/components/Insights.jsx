const articles = [
  {
    tag: 'LEGAL UPDATE',
    tagColor: '#2e6b3e',
    title: 'IFSCA (Finance Company) Regulations, 2024 – Key Highlights',
    date: 'May 10, 2024',
    img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    tag: 'ARTICLE',
    tagColor: '#1a3a6b',
    title: 'SEZ Reforms in India – What Businesses Need to Know',
    date: 'April 28, 2024',
    img: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    tag: 'INSIGHT',
    tagColor: '#3a2a6b',
    title: 'Setting Up in GIFT IFSC – Opportunities and Key Considerations',
    date: 'April 15, 2024',
    img: 'https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="bg-white border-t border-slate-200 px-6 py-18">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-semibold text-slate-900">Insights &amp; Updates</h2>
          <a href="#" className="text-sm font-medium text-gold">View all insights →</a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((a) => (
            <a key={a.title} href="#" className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative h-52 overflow-hidden">
                <img src={a.img} alt={a.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white" style={{ backgroundColor: a.tagColor }}>
                  {a.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="mb-3 font-serif text-lg font-semibold text-slate-900">{a.title}</p>
                <p className="text-sm text-slate-500">{a.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
