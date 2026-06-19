const TESTIMONIALS = [
  {
    name: 'Chaminda Perera',
    role: 'Juice & Beverage Producer',
    location: 'Kandy',
    avatar: 'CP',
    avatarBg: 'bg-royal',
    rating: 5,
    text: 'We purchased the Automatic Liquid Filling Machine and it completely transformed our production line. Output went from 200 to 1,200 bags per day. Installation was done in one day and the training was excellent.',
  },
  {
    name: 'Nirosha Jayasinghe',
    role: 'Food Processing Business',
    location: 'Gampaha',
    avatar: 'NJ',
    avatarBg: 'bg-electric',
    rating: 5,
    text: 'The 24-tray dehydrator is perfect for our dried mango business. Uniform drying, easy to control temperature. HDB team were very professional — they delivered on time and set everything up. Highly recommended.',
  },
  {
    name: 'Sunil Rathnayake',
    role: 'Spice Manufacturing',
    location: 'Dambulla',
    avatar: 'SR',
    avatarBg: 'bg-orange',
    rating: 5,
    text: 'Bought the grinding mill for our spice factory. The machine handles large batches with no issues. After-sales support is exceptional — one call and the technician was at our facility the same day.',
  },
  {
    name: 'Priyanka Fernando',
    role: 'Ice Pop & Dessert Brand',
    location: 'Colombo',
    avatar: 'PF',
    avatarBg: 'bg-whatsapp',
    rating: 5,
    text: 'We were skeptical at first but the liquid packing machine exceeded every expectation. Clean sealing, consistent fill weight, zero spillage. Our packaging looks completely professional now. Worth every rupee.',
  },
  {
    name: 'Kasun Wickramasinghe',
    role: 'Poultry Feed Producer',
    location: 'Kurunegala',
    avatar: 'KW',
    avatarBg: 'bg-violet-600',
    rating: 5,
    text: 'The feed pellet machine has doubled our production capacity. Great build quality and the team provided thorough operator training. Legal agreement gave us full confidence to proceed with the purchase.',
  },
  {
    name: 'Malini Silva',
    role: 'Tea Processing SME',
    location: 'Nuwara Eliya',
    avatar: 'MS',
    avatarBg: 'bg-amber-600',
    rating: 5,
    text: 'Ordered the roaster machine for our small tea processing business. It arrived within 35 days and was installed professionally. The 1-year warranty gave us peace of mind. Sales team was very responsive on WhatsApp.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-ice">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-royal/8 text-royal text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-dark tracking-tight mb-4">
            Real Results from<br className="hidden sm:block" /> Real Business Owners
          </h2>
          <p className="text-slate text-base max-w-lg mx-auto">
            Hear from entrepreneurs across Sri Lanka who transformed their production with HDB machines.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-royal/20 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="text-slate text-sm leading-relaxed mt-4 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-100 my-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.avatarBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-slate-dark text-sm font-bold">{t.name}</p>
                  <p className="text-slate text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust indicator */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex -space-x-2">
            {['bg-royal', 'bg-electric', 'bg-orange', 'bg-whatsapp', 'bg-violet-600'].map((bg, i) => (
              <div key={i} className={`w-9 h-9 ${bg} rounded-full border-2 border-white flex items-center justify-center`}>
                <span className="text-white text-[10px] font-bold">{['CP','NJ','SR','PF','KW'][i]}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-center sm:justify-start gap-0.5 mb-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-slate text-sm"><span className="font-bold text-slate-dark">4.9/5</span> from 500+ verified business customers</p>
          </div>
        </div>

      </div>
    </section>
  )
}
