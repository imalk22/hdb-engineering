'use client'

import { useState } from 'react'
import { CONTACT } from '@/lib/constants'

export default function ContactForm({ locale }: { locale: string }) {
  const si = locale === 'si'
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`)
    window.open(`${CONTACT.whatsappUrl}?text=${text}`, '_blank')
  }

  return (
    <section className="py-14 px-4 bg-ice">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy text-center mb-2 font-sinhala-display">
          {si ? 'අප හා සම්බන්ධ වන්න' : 'Get in Touch'}
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8 font-sinhala-body">
          {si ? 'ඔබේ ප්‍රශ්නය WhatsApp හරහා ලැබේ' : 'We\'ll reply via WhatsApp'}
        </p>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 font-sinhala-body">
              {si ? 'ඔබේ නම' : 'Your Name'}
            </label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
              placeholder={si ? 'නම ලියන්න' : 'Enter your name'}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              {si ? 'දුරකතන අංකය' : 'Phone Number'}
            </label>
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              type="tel"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
              placeholder="07X XXX XXXX"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 font-sinhala-body">
              {si ? 'ඔබේ ප්‍රශ්නය' : 'Your Message'}
            </label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 resize-none font-sinhala-body"
              placeholder={si ? 'ප්‍රශ්නය ලියන්න...' : 'Type your message...'}
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-500 text-white font-bold py-3.5 rounded-xl transition-colors"
          >
            WhatsApp {si ? 'හරහා යවන්න' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}
