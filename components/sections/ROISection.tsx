export default function ROISection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-sinhala-display leading-tight mb-2">
            HDB ස්වයංක්‍රීය යන්ත්‍රයක් හරහා<br className="hidden sm:block" /> ඔබේ ව්‍යාපාරේ ආදායම් වැඩිකරන්නේ මෙහෙමයි
          </h2>
          <p className="text-orange font-bold text-lg font-sinhala-body">(Income Potential)</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calculation card */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🧮</span>
              <span className="font-bold text-navy text-sm font-sinhala-body">උදාහරණ ගණනය (Example Calculation)</span>
            </div>

            <div className="space-y-3 mb-5">
              {[
                { icon: '📦', label: 'දිනකට පැකට්', value: '2,000' },
                { icon: '💰', label: 'පැකට් එකක ලාභය', value: 'රු. 10' },
                { icon: '📅', label: 'දිනක ආදායම', value: 'රු. 20,000' },
              ].map(row => (
                <div key={row.label} className="flex items-center justify-between py-2 border-b border-blue-200 last:border-0">
                  <span className="text-gray-600 text-sm font-sinhala-body flex items-center gap-2">
                    <span>{row.icon}</span>{row.label}
                  </span>
                  <span className="font-bold text-navy text-sm">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Big stat */}
            <div className="bg-navy rounded-xl p-4 text-center">
              <p className="text-blue-300 text-xs font-sinhala-body mb-1">මාසික ගුළු ආදායම</p>
              <p className="text-white font-extrabold text-3xl leading-none">රු. 600,000</p>
              <p className="text-orange font-bold text-sm mt-1 font-sinhala-body">දක්වා!</p>
            </div>

            {/* Disclaimer */}
            <p className="text-gray-400 text-xs mt-3 leading-relaxed font-sinhala-body">
              ⚠️ මෙය දළ විශ්ලේෂණයක් පමණක් වන අතර, ඔබේ නිෂ්පාදනය සහ වෙළඳපොළ අනූව ආදායම් තත්ත්වය වෙනස් විය හැක.
            </p>
          </div>

          {/* Strategy box */}
          <div className="flex flex-col gap-4">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm mb-2 font-sinhala-body">ඔබේ වෙළඳපොළ ජය ගන්න:</p>
                  <p className="text-gray-700 text-sm font-sinhala-body leading-relaxed">
                    ඔබේ වෙළඳපොළට අලුත් දෙයක් හදුන්වාදී වඩාත් ඉහළ ලාභයක් ලැබිය හැකිය.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit icons */}
            <div className="grid grid-cols-2 gap-3">
              {[
                ['📉', 'Production Cost', 'අඩු වේ'],
                ['👷', 'Labour Cost', 'අඩු වේ'],
                ['⚡', 'Time Saving', 'ඉහළ යයි'],
                ['✅', 'Quality', '100% නිරවද්‍ය'],
                ['💹', 'Profit', 'වැඩි වේ'],
              ].map(([icon, en, si]) => (
                <div key={en} className="bg-ice rounded-xl p-3 flex items-center gap-2">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className="text-xs font-bold text-navy">{en}</p>
                    <p className="text-xs text-gray-500 font-sinhala-body">{si}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
