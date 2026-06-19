const BENEFITS = [
  {
    title: '1-Year Warranty',
    desc: 'Every machine comes with a full 12-month warranty covering parts and labour. We stand behind our products.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    accent: 'bg-royal/8 text-royal',
  },
  {
    title: 'Certified Quality',
    desc: 'All machines are food-grade stainless steel certified, built to international standards for safe commercial use.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    accent: 'bg-whatsapp/8 text-whatsapp',
  },
  {
    title: 'Expert Support',
    desc: 'Our trained technicians provide free installation, operator training, and fast after-sales service island-wide.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
    accent: 'bg-electric/8 text-electric',
  },
  {
    title: 'Island-wide Delivery',
    desc: 'Fast, free delivery to your doorstep anywhere in Sri Lanka within 30–45 days. Fully insured shipping.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M1 3h15v13H1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>
        <path d="M16 8h4l3 3v5h-7V8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>
        <circle cx="5.5" cy="18.5" r="2.5" strokeWidth={1.8}/>
        <circle cx="18.5" cy="18.5" r="2.5" strokeWidth={1.8}/>
      </svg>
    ),
    accent: 'bg-orange/8 text-orange',
  },
  {
    title: 'Physical Showroom',
    desc: 'Visit our Dambulla showroom to see machines in action before you buy. No online guesswork needed.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    accent: 'bg-violet-100 text-violet-600',
  },
  {
    title: 'Secure Payments',
    desc: 'Pay via bank transfer with a legal purchase agreement. Transparent pricing, no hidden fees, ever.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    accent: 'bg-amber-50 text-amber-600',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-navy/6 text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Why HDB Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-dark tracking-tight mb-4">
            Built for Business Owners<br className="hidden sm:block" /> Who Demand the Best
          </h2>
          <p className="text-slate text-base max-w-xl mx-auto leading-relaxed">
            We don&apos;t just sell machines — we partner with you from purchase through operation with full ongoing support.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className={`w-14 h-14 ${benefit.accent} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-dark mb-2 group-hover:text-royal transition-colors duration-200">
                {benefit.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
