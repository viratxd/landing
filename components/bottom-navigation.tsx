"use client"

import { Home, Search, BarChart2, Clock, User } from "lucide-react"
import { getFontSizes } from "@/lib/utils"

interface BottomNavigationProps {
  activeNav: string
  setActiveNav: (nav: string) => void
  windowWidth: number
}

export default function BottomNavigation({ activeNav, setActiveNav, windowWidth }: BottomNavigationProps) {
  const fontSizes = getFontSizes(windowWidth)

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Search", icon: Search },
    { name: "Analytics", icon: BarChart2 },
    { name: "History", icon: Clock },
    { name: "Profile", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-100 shadow-md flex justify-around py-1 md:py-2 z-20 rounded-t-xl mx-1 md:mx-2">
      {navItems.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => setActiveNav(name)}
          className={`flex flex-col items-center w-14 md:w-16 p-1 rounded-lg transition-colors duration-200 ${
            activeNav === name ? "text-sky-600" : "text-gray-500 hover:bg-gray-100 hover:text-sky-500"
          }`}
          aria-label={name}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5 mb-0.5" />
          <span className={`${fontSizes.small} font-medium`}>{name}</span>
        </button>
      ))}
    </nav>
  )
}
