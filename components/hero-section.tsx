"use client"

import { useState, useEffect, useRef } from "react"
import { getFontSizes } from "@/lib/utils"
import { mathIconPool, scienceIconPool, generalIconPool } from "@/lib/data"

interface HeroSectionProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  windowWidth: number
  updateWindowWidth: (width: number) => void
}

// Define positions for the icons with improved positioning
const leftPositions = [
  { position: "top-8 left-6", animationName: "floatTopLeftToCenter" },
  { position: "bottom-20 left-6", animationName: "floatBottomLeftToCenter" },
  { position: "top-1/2 left-6", animationName: "floatMiddleLeftToCenter" },
]

const rightPositions = [
  { position: "top-8 right-6", animationName: "floatTopRightToCenter" },
  { position: "bottom-20 right-6", animationName: "floatBottomRightToCenter" },
  { position: "top-1/2 right-6", animationName: "floatMiddleRightToCenter" },
]

export default function HeroSection({ activeTab, setActiveTab, windowWidth, updateWindowWidth }: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [iconSets, setIconSets] = useState({
    left: generateIconSet(leftPositions, [mathIconPool, scienceIconPool, generalIconPool]),
    right: generateIconSet(rightPositions, [mathIconPool, scienceIconPool, mathIconPool]),
  })

  // Define the rotating hero texts
  const heroTexts = [
    "Master Anything Faster with AI",
    "Learn smarter, not harder.",
    "The future of learning is here.",
    "Empower your journey with AI-driven learning.",
  ]

  // Generate a set of icons with positions and animations
  function generateIconSet(positions: typeof leftPositions, iconPools: (typeof mathIconPool)[]) {
    return positions.map((pos, idx) => {
      // Select a random icon from the corresponding pool
      const pool = iconPools[idx % iconPools.length]
      const randomIndex = Math.floor(Math.random() * pool.length)
      const Icon = pool[randomIndex]

      return {
        ...pos,
        icon: Icon,
        delay: `${idx * 0.75}s`,
        id: Math.random().toString(36).substring(2, 9), // Unique ID for keying
      }
    })
  }

  // Regenerate icon sets
  const regenerateIconSets = () => {
    setIconSets({
      left: generateIconSet(leftPositions, [mathIconPool, scienceIconPool, generalIconPool]),
      right: generateIconSet(rightPositions, [mathIconPool, scienceIconPool, mathIconPool]),
    })
  }

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      updateWindowWidth(window.innerWidth)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [updateWindowWidth])

  // Initialize animations after component mounts
  useEffect(() => {
    // Short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Auto-scroll hero text and reset icon animations
  useEffect(() => {
    // Clear any existing interval
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current)
    }

    // Set up new interval for text rotation and icon regeneration
    animationIntervalRef.current = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)

      // Every second text change, regenerate the icons
      if (currentTextIndex % 2 === 0) {
        regenerateIconSets()
      }
    }, 3000) // Change text every 3 seconds

    // Cleanup on unmount
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current)
      }
    }
  }, [currentTextIndex, heroTexts.length])

  const fontSizes = getFontSizes(windowWidth)

  return (
    <section className="text-center px-3 md:px-4 pt-4 md:pt-6 pb-4 md:pb-5 mx-3 md:mx-4 mt-3 md:mt-4 mb-6 md:mb-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg relative border-2 border-white animate-border">
      {/* Animated Icons - Left Side */}
      {isVisible &&
        iconSets.left.map(({ icon: Icon, position, animationName, delay, id }) => (
          <div
            key={`left-icon-${id}`}
            className={`absolute ${position} opacity-0 z-10`}
            style={{
              animation: `${animationName} 3s ${delay} infinite`,
            }}
          >
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
        ))}

      {/* Animated Icons - Right Side */}
      {isVisible &&
        iconSets.right.map(({ icon: Icon, position, animationName, delay, id }) => (
          <div
            key={`right-icon-${id}`}
            className={`absolute ${position} opacity-0 z-10`}
            style={{
              animation: `${animationName} 3s ${delay} infinite`,
            }}
          >
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
        ))}

      {/* Auto-scrolling text container */}
      <div className="relative h-8 md:h-10 mb-3 md:mb-4 overflow-hidden z-10">
        {heroTexts.map((text, index) => (
          <h2
            key={index}
            className={`${fontSizes.heading} font-semibold absolute w-full transition-all duration-500 ease-in-out ${
              currentTextIndex === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2"
            }`}
          >
            {text}
          </h2>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center space-x-1.5 mb-3 md:mb-4 z-10 relative">
        {heroTexts.map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${
              currentTextIndex === index ? "w-2 h-2 bg-white" : "w-1.5 h-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Fixed Buttons Container */}
      <div className="flex justify-center -mb-6 md:-mb-10 relative z-10">
        <div className="bg-white rounded-full p-1 shadow-md flex w-full max-w-xs justify-between">
          {["Grammar", "AI Solver", "Dictionary"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${fontSizes.small} font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full transition-all duration-300 outline-none flex-1 mx-0.5 md:mx-1
                ${
                  activeTab === tab
                    ? "bg-sky-700 text-white shadow-sm"
                    : "bg-sky-100 text-sky-700 hover:bg-sky-200 hover:shadow-sm"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
