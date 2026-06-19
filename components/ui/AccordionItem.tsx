'use client'

import { useState, type ReactNode } from 'react'

export default function AccordionItem({
  question,
  children,
  index,
}: {
  question: string
  children: ReactNode
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mt-0.5">
            {String(index).padStart(2, '0')}
          </span>
          <span className="font-semibold text-navy text-base font-sinhala-body leading-snug">
            {question}
          </span>
        </div>
        <span className={`flex-shrink-0 text-navy transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-2 bg-white border-t border-gray-100">
          <div className="pl-10 text-gray-700 font-sinhala-body leading-relaxed text-sm">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
