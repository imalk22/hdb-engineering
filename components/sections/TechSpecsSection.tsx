const SPECS = [
  { si: 'Material',       value: 'Food-Grade Stainless Steel' },
  { si: 'Speed',         value: '10–25 packets/min · 10–18 bags/hour' },
  { si: 'Power',         value: '220V / 570W' },
  { si: 'Supply',        value: '220V / 50Hz' },
  { si: 'Film Width',    value: '5–20 cm' },
  { si: 'Bag Length',    value: '3–16 cm' },
  { si: 'Finished Bag Width', value: '2.5–10 cm' },
  { si: 'Filling Range', value: '3–200 ml · up to 1000ml/999g' },
  { si: 'Accuracy',      value: '±1 ml' },
  { si: 'Formers',       value: '60 mm and 86 mm' },
  { si: 'Net Weight',    value: '36 kg' },
  { si: 'Dimensions',    value: '48 × 45 × 145 cm' },
  { si: 'Custom Sizes',  value: '5cm(2")–18cm(7") · 2.5cm(1") / 3cm(1¼") / 4cm(1½")' },
]

export default function TechSpecsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-navy/10 text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            🔩 Technical Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-sinhala-display leading-tight">
            තාක්ෂණික විස්තර සහ වගකිම් සහකිය
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Specs table */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {SPECS.map((s, i) => (
                  <tr key={s.si} className={i % 2 === 0 ? 'bg-ice' : 'bg-white'}>
                    <td className="px-4 py-3 text-gray-600 font-sinhala-body text-xs w-1/2 border-r border-gray-200">{s.si}</td>
                    <td className="px-4 py-3 text-navy font-semibold text-xs">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Smart tech + warranty */}
          <div className="flex flex-col gap-4">
            {/* Smart technology */}
            <div className="bg-navy rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🤖</span>
                <span className="font-bold text-sm font-sinhala-body">ස්මාර්ට් තාක්ෂණය (Smart Technology)</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📅', name: '4-Line Date Coding', sub: 'BATCH/EXP/MFD/PRICE' },
                  { icon: '🎯', name: 'Color Mark Sensor', sub: 'Precision alignment' },
                ].map(t => (
                  <div key={t.name} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{t.icon}</div>
                    <p className="text-xs font-semibold leading-tight">{t.name}</p>
                    <p className="text-blue-300 text-xs mt-0.5">{t.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty cards */}
            <div className="space-y-3">
              {[
                { icon: '🛡', months: '12', label: 'යන්ත්‍රයේ බඳ සඳහා වශීමිය', sub: 'Machine Warranty' },
                { icon: '⚡', months: '6',  label: 'විද්‍යුත් උපාංග සඳහා', sub: 'Electrical Warranty' },
              ].map(w => (
                <div key={w.months} className="bg-whatsapp/10 border border-whatsapp/30 rounded-2xl p-4 flex items-center gap-3">
                  <div className="bg-whatsapp text-white rounded-full w-12 h-12 flex flex-col items-center justify-center text-center flex-shrink-0">
                    <span className="font-extrabold text-lg leading-none">{w.months}</span>
                    <span className="text-xs leading-none">Months</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm font-sinhala-body">{w.label}</p>
                    <p className="text-xs text-gray-500">{w.sub}</p>
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
