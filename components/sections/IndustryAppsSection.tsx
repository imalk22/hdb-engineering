const APPS = [
  { emoji: '🧊', label: 'අයිස් පොප් (Ice Pop / Ice Pail) නිෂ්පාදකයින්' },
  { emoji: '🍊', label: 'පළතුරු ජූස්, සිරප් සහ කොඩියල්' },
  { emoji: '🫙', label: 'පොල්තෙල් සහ ආහාරයට ගත හැකි වෙනත් තෙල් වර්ග' },
  { emoji: '🥛', label: 'කිරි පැකට් සහ යෝගට් දියර' },
]

export default function IndustryAppsSection() {
  return (
    <section className="bg-ice py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-navy/10 text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            🏭 Industry Applications
          </span>
          <h2 className="text-sm sm:text-4xl font-extrabold text-navy font-sinhala-display leading-tight">
            මෙම යන්ත්‍රය මගින් ඔබට පහසුවෙන්<br className="hidden sm:block" /> ඇසුරුම් කළ හැකි දෑ:
          </h2>
        </div>

        {/* Apps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {APPS.map(app => (
            <div key={app.label} className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-3 border border-gray-100">
              <span className="text-3xl flex-shrink-0">{app.emoji}</span>
              <div>
                <span className="text-whatsapp font-bold text-sm">✅</span>
                <p className="text-gray-800 text-sm font-sinhala-body leading-relaxed mt-0.5">{app.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
