const STATS = [
  {
    value: '500+',
    label: 'Businesses Served',
    sub: 'Across Sri Lanka',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    value: '12+',
    label: 'Machine Categories',
    sub: 'From filling to grinding',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    value: '5+',
    label: 'Years of Experience',
    sub: 'In industrial machinery',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Satisfaction Rate',
    sub: 'Guaranteed quality',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
  },
]

const TRUST_BADGES = [
  'Island-wide Delivery',
  'Free Installation',
  'Free Training',
  '1 Year Warranty',
  'Legal Agreement',
  'Secure Bank Payments',
  'After Sales Support',
  'Physical Showroom',
  'Licensed & Registered',
  'Expert Technicians',
]

export default function TrustBrandsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-royal/8 text-royal text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Why Businesses Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-dark tracking-tight">
            Sri Lanka&apos;s Most Reliable<br className="hidden sm:block" /> Industrial Machinery Partner
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STATS.map(stat => (
            <div
              key={stat.label}
              className="group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-royal/8 text-royal rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <p className="text-3xl font-extrabold text-slate-dark">{stat.value}</p>
              <p className="text-sm font-bold text-slate-dark mt-1">{stat.label}</p>
              <p className="text-xs text-slate mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-slate text-sm font-medium whitespace-nowrap">Everything you need, in one place</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Trust badge pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {TRUST_BADGES.map(badge => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 bg-ice border border-gray-200 text-slate text-sm font-medium px-4 py-2 rounded-full"
            >
              <svg className="w-3.5 h-3.5 text-whatsapp flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
