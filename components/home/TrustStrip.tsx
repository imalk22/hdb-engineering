export default function TrustStrip({ locale }: { locale: string }) {
  const si = locale === 'si'
  const items = [
    { icon: '🏭', en: '500+ Machines Installed',  si: 'යන්ත්‍ර 500+ක් ස්ථාපිත' },
    { icon: '🚚', en: 'Island-wide Delivery',       si: 'දිවයින පුරා බෙදාහැරීම' },
    { icon: '🛡', en: '1 Year Warranty',            si: 'වසරක වශීමිය' },
    { icon: '🔧', en: 'After-Sales Support',        si: 'After-Sales සේවාව' },
  ]
  return (
    <div className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {items.map(item => (
          <div key={item.en} className="text-white">
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="text-sm font-semibold font-sinhala-body">{si ? item.si : item.en}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
