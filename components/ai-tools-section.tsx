import { Mic, FileText, Youtube, ImageIcon } from "lucide-react"
import { getFontSizes, getGridCols } from "@/lib/utils"

interface AIToolsSectionProps {
  windowWidth: number
}

export default function AIToolsSection({ windowWidth }: AIToolsSectionProps) {
  const fontSizes = getFontSizes(windowWidth)
  const gridCols = getGridCols(windowWidth)

  const tools = [
    { icon: Mic, label: "Audio Notes" },
    { icon: FileText, label: "My Notes" },
    { icon: Youtube, label: "YT Notes" },
    { icon: ImageIcon, label: "Canva Notes" },
  ]

  const getRandomColors = (index: number) => {
    const colorPairs = [
      { bg: "bg-red-500/20", text: "text-red-600" },
      { bg: "bg-blue-500/20", text: "text-blue-600" },
      { bg: "bg-green-500/20", text: "text-green-600" },
      { bg: "bg-purple-500/20", text: "text-purple-600" },
      { bg: "bg-yellow-500/20", text: "text-yellow-600" },
      { bg: "bg-pink-500/20", text: "text-pink-600" },
      { bg: "bg-indigo-500/20", text: "text-indigo-600" },
      { bg: "bg-orange-500/20", text: "text-orange-600" },
    ]
    return colorPairs[index % colorPairs.length]
  }

  return (
    <section className="mx-3 md:mx-4 my-6 md:my-8 bg-white rounded-xl p-3 md:p-4 shadow-sm">
      <h3 className={`${fontSizes.small} font-semibold text-gray-500 mb-2 md:mb-3 px-1`}>AI Smarter Tools</h3>
      <div className={`grid ${gridCols} gap-2 md:gap-3 text-center`}>
        {tools.map(({ icon: Icon, label }, index) => (
          <button key={index} className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <div className={`p-2 rounded-lg ${getRandomColors(index).bg}`}>
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${getRandomColors(index).text}`} />
              </div>
              <span className={`${fontSizes.small} text-gray-600 font-medium`}>{label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
