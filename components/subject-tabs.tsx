"use client"

import { getFontSizes } from "@/lib/utils"

interface SubjectTabsProps {
  subjects: string[]
  activeSubject: string
  setActiveSubject: (subject: string) => void
  windowWidth: number
}

export default function SubjectTabs({ subjects, activeSubject, setActiveSubject, windowWidth }: SubjectTabsProps) {
  const fontSizes = getFontSizes(windowWidth)

  return (
    <section className="mb-3 md:mb-4 sticky top-12 md:top-16 z-10 bg-gradient-to-b from-sky-50 via-sky-50/90 to-sky-50/0 pt-2 pb-2">
      <div className="flex space-x-1 md:space-x-2 overflow-x-auto px-3 md:px-4 text-sm font-medium text-gray-600 pb-1 no-scrollbar">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setActiveSubject(subject)}
            className={`whitespace-nowrap px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all duration-200 ${
              activeSubject === subject
                ? "bg-sky-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            } ${fontSizes.small}`}
          >
            {subject}
          </button>
        ))}
      </div>
    </section>
  )
}
