import { getFontSizes } from "@/lib/utils"
import type { SubjectDataType } from "@/lib/types"

interface TopicsSectionProps {
  activeSubject: string
  subjectData: SubjectDataType
  windowWidth: number
}

export default function TopicsSection({ activeSubject, subjectData, windowWidth }: TopicsSectionProps) {
  const fontSizes = getFontSizes(windowWidth)
  const currentSubjectContent = subjectData[activeSubject] || []

  return (
    <section className="px-3 md:px-4 space-y-2 md:space-y-2.5">
      <h3 className={`${fontSizes.normal} font-semibold text-gray-700 mb-2 md:mb-3 px-1`}>{activeSubject} Topics</h3>
      {activeSubject === "Math" && currentSubjectContent.length > 0 ? (
        currentSubjectContent.map(({ title, icon: Icon, color }, index) => (
          <div
            key={`${activeSubject}-${index}`}
            className="flex items-center space-x-3 md:space-x-4 p-3 md:p-3.5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-sky-100 transition-all duration-150 cursor-pointer"
          >
            <div className="bg-sky-50 p-2 md:p-2.5 rounded-lg">
              <Icon className={`w-4 h-4 md:w-5 md:h-5 ${color || "text-sky-600"}`} />
            </div>
            <span className={`${fontSizes.small} md:${fontSizes.normal} text-gray-800 font-medium flex-1`}>
              {title}
            </span>
          </div>
        ))
      ) : (
        <p className={`text-center text-gray-500 py-4 md:py-6 ${fontSizes.small}`}>
          {currentSubjectContent.length === 0 && activeSubject === "Math"
            ? `No topics found for ${activeSubject}.`
            : `Content for ${activeSubject} will appear here.`}
        </p>
      )}
    </section>
  )
}
