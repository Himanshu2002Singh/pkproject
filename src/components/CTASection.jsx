export default function CTASection() {
  return (
    <section className="border-t border-gold/20 bg-dark px-6 py-20 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M10 18L16 24L26 10" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-semibold leading-tight text-slate-100">
          Let's Build Something Extraordinary Together
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300">
          Partner with us to navigate regulations, seize opportunities and achieve your business goals across the GIFT IFSC &amp; SEZ ecosystem.
        </p>
        <a href="#" className="inline-flex rounded-full bg-gold px-10 py-3 text-sm font-semibold text-dark transition hover:bg-gold/90">
          Schedule a Consultation →
        </a>
      </div>
    </section>
  )
}
