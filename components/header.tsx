import { MoreVertical } from "lucide-react"
import { getFontSizes } from "@/lib/utils"

interface HeaderProps {
  windowWidth: number
}

export default function Header({ windowWidth }: HeaderProps) {
  const fontSizes = getFontSizes(windowWidth)

  return (
    <header className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md sticky top-0 z-20 rounded-b-xl">
      <h1 className={`${fontSizes.title} font-bold`}>EXAMALLY</h1>
      <div className="flex items-center space-x-2 md:space-x-3">
        <button
          className={`${fontSizes.small} font-semibold bg-cyan-600 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full hover:bg-cyan-700 transition-colors duration-150 shadow-sm`}
        >
          UPGRADE
        </button>
        <button
          aria-label="More options"
          className="p-1 md:p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
        >
          <MoreVertical className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </header>
  )
}
