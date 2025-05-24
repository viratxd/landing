"use client"

import { useState, useEffect, useMemo } from "react"
import {
  Home,
  Search,
  Clock,
  User,
  BarChart2,
  MoreVertical,
  Mic,
  FileText,
  Youtube,
  ImageIcon,
  Circle,
  Sparkles,
  SigmaSquare,
  LineChart,
  Triangle,
  Map,
  Target,
  Mountain,
  Pencil,
  Compass,
  Box,
  BarChartHorizontalBig,
  Dice5,
  Calculator,
  Atom,
  Brain,
  FlaskRoundIcon as Flask,
  PiSquare,
  Microscope,
  BookOpen,
  Beaker,
  Dna,
  Sigma,
  Infinity,
  Lightbulb,
  Rocket,
  Zap,
  Telescope,
} from "lucide-react"

// Define the Math topics with specified icons
const mathTopics = [
  { title: "Real Numbers", icon: Calculator },
  { title: "Polynomials", icon: Sparkles },
  { title: "Pair of Linear Equations in Two Variables", icon: SigmaSquare },
  { title: "Quadratic Equations", icon: BarChart2 },
  { title: "Arithmetic Progressions", icon: LineChart },
  { title: "Triangles", icon: Triangle },
  { title: "Coordinate Geometry", icon: Map },
  { title: "Introduction to Trigonometry", icon: Target },
  { title: "Some Applications of Trigonometry", icon: Mountain },
  { title: "Circles", icon: Circle, color: "text-red-500" },
  { title: "Constructions", icon: Pencil },
  { title: "Areas Related to Circles", icon: Compass },
  { title: "Surface Areas and Volumes", icon: Box },
  { title: "Statistics", icon: BarChartHorizontalBig },
  { title: "Probability", icon: Dice5 },
]

// Mock data for subjects
const subjectData = {
  English: [],
  Math: mathTopics,
  Science: [],
  History: [],
  Geography: [],
  Hindi: [],
}

// Define subject types
const subjects = ["English", "Math", "Science", "History", "Geography", "Hindi"]

// Define icon pools for shuffling
const mathIconPool = [Calculator, PiSquare, Sigma, Infinity, Compass, Triangle, SigmaSquare, LineChart]
const scienceIconPool = [Atom, Flask, Microscope, Beaker, Dna, Telescope, Brain, Rocket]
const generalIconPool = [Lightbulb, BookOpen, Zap, Sparkles]

// Define positions for the icons
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

export default function EducationalApp() {
  const [activeSubject, setActiveSubject] = useState("Math")
  const [activeNav, setActiveNav] = useState("Analytics")
  const [activeTab, setActiveTab] = useState("AI Solver")
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const [iconSetIndex, setIconSetIndex] = useState(0)

  // Define the rotating hero texts
  const heroTexts = [
    "Master Anything Faster with AI",
    "Learn smarter, not harder.",
    "The future of learning is here.",
    "Empower your journey with AI-driven learning.",
  ]

  // Generate shuffled icons for each animation cycle
  const { leftIcons, rightIcons } = useMemo(() => {
    // Shuffle and select icons from pools
    const shuffleMath = [...mathIconPool].sort(() => Math.random() - 0.5).slice(0, 3)
    const shuffleScience = [...scienceIconPool].sort(() => Math.random() - 0.5).slice(0, 2)
    const shuffleGeneral = [...generalIconPool].sort(() => Math.random() - 0.5).slice(0, 1)

    // Combine icons for left side
    const leftIconSet = leftPositions.map((pos, idx) => {
      let Icon
      if (idx === 0) Icon = shuffleMath[0]
      else if (idx === 1) Icon = shuffleScience[0]
      else Icon = shuffleGeneral[0]

      return {
        ...pos,
        icon: Icon,
        delay: `${idx * 0.75}s`,
      }
    })

    // Combine icons for right side
    const rightIconSet = rightPositions.map((pos, idx) => {
      let Icon
      if (idx === 0) Icon = shuffleMath[1]
      else if (idx === 1) Icon = shuffleScience[1]
      else Icon = shuffleMath[2]

      return {
        ...pos,
        icon: Icon,
        delay: `${idx * 0.75 + 0.375}s`,
      }
    })

    return { leftIcons: leftIconSet, rightIcons: rightIconSet }
  }, [iconSetIndex])

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Auto-scroll hero text and reset icon animations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length)
      // Reset animation key to restart animations in sync with text change
      setAnimationKey((prev) => prev + 1)
      // Shuffle icons every second text change
      if (currentTextIndex % 2 === 0) {
        setIconSetIndex((prev) => prev + 1)
      }
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [currentTextIndex])

  // Determine font sizes based on screen width
  const getFontSizes = () => {
    if (windowWidth < 360) {
      return {
        title: "text-lg",
        heading: "text-base",
        subheading: "text-sm",
        normal: "text-xs",
        small: "text-xs",
      }
    } else if (windowWidth < 640) {
      return {
        title: "text-xl",
        heading: "text-lg",
        subheading: "text-base",
        normal: "text-sm",
        small: "text-xs",
      }
    } else {
      return {
        title: "text-2xl",
        heading: "text-xl",
        subheading: "text-lg",
        normal: "text-base",
        small: "text-sm",
      }
    }
  }

  const fontSizes = getFontSizes()
  const currentSubjectContent = subjectData[activeSubject] || []

  // Determine grid columns based on screen width
  const getGridCols = () => {
    if (windowWidth < 360) return "grid-cols-2"
    if (windowWidth < 640) return "grid-cols-4"
    return "grid-cols-4"
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 text-gray-800 font-sans">
      {/* Header Section */}
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

      {/* Main Content Area with rounded corners */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-24 rounded-xl mx-1 md:mx-2 mt-1 md:mt-2">
        {/* Hero Section */}
        <section className="text-center px-3 md:px-4 pt-4 md:pt-6 pb-4 md:pb-5 mx-3 md:mx-4 mt-3 md:mt-4 mb-6 md:mb-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg relative border-2 border-white animate-border">
          {/* Animated Icons - Left Side */}
          {leftIcons.map(({ icon: Icon, position, animationName, delay }, index) => (
            <div
              key={`left-icon-${index}-${animationKey}-${iconSetIndex}`}
              className={`absolute ${position} opacity-0 transition-all duration-3000 ease-in-out`}
              style={{
                animation: `${animationName} 3s ${delay} forwards`,
              }}
            >
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          ))}

          {/* Animated Icons - Right Side */}
          {rightIcons.map(({ icon: Icon, position, animationName, delay }, index) => (
            <div
              key={`right-icon-${index}-${animationKey}-${iconSetIndex}`}
              className={`absolute ${position} opacity-0 transition-all duration-3000 ease-in-out`}
              style={{
                animation: `${animationName} 3s ${delay} forwards`,
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
                  currentTextIndex === index
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform -translate-y-2"
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

        <div>
          {/* AI Smarter Tools Section */}
          <section className="mx-3 md:mx-4 my-6 md:my-8 bg-white rounded-xl p-3 md:p-4 shadow-sm">
            <h3 className={`${fontSizes.small} font-semibold text-gray-500 mb-2 md:mb-3 px-1`}>AI Smarter Tools</h3>
            <div className={`grid ${getGridCols()} gap-2 md:gap-3 text-center`}>
              {[
                { icon: Mic, label: "Audio Notes" },
                { icon: FileText, label: "My Notes" },
                { icon: Youtube, label: "YT Notes" },
                { icon: ImageIcon, label: "Canva Notes" },
              ].map(({ icon: Icon, label }, index) => (
                <button key={index} className="flex flex-col items-center">
                  <div className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
                    <span className={`${fontSizes.small} text-gray-600 font-medium`}>{label}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Subject Tabs Section */}
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

          {/* Subject Content Section */}
          <section className="px-3 md:px-4 space-y-2 md:space-y-2.5">
            <h3 className={`${fontSizes.normal} font-semibold text-gray-700 mb-2 md:mb-3 px-1`}>
              {activeSubject} Topics
            </h3>
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
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-100 shadow-md flex justify-around py-1 md:py-2 z-20 rounded-t-xl mx-1 md:mx-2">
        {[
          { name: "Home", icon: Home },
          { name: "Search", icon: Search },
          { name: "Analytics", icon: BarChart2 },
          { name: "History", icon: Clock },
          { name: "Profile", icon: User },
        ].map(({ name, icon: Icon }) => (
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

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes borderPulse {
          0% {
            border-color: rgba(255, 255, 255, 0.7);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            border-color: rgba(255, 255, 255, 1);
            box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.7);
          }
          100% {
            border-color: rgba(255, 255, 255, 0.7);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
        }

        .animate-border {
          animation: borderPulse 3s infinite;
        }

        /* Top left icon animation */
        @keyframes floatTopLeftToCenter {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          20% {
            opacity: 0.5;
            transform: translate(20px, 15px);
          }
          80% {
            opacity: 0.5;
            transform: translate(40px, 30px);
          }
          100% {
            opacity: 0;
            transform: translate(60px, 45px);
          }
        }

        /* Bottom left icon animation */
        @keyframes floatBottomLeftToCenter {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          20% {
            opacity: 0.5;
            transform: translate(20px, -15px);
          }
          80% {
            opacity: 0.5;
            transform: translate(40px, -30px);
          }
          100% {
            opacity: 0;
            transform: translate(60px, -45px);
          }
        }

        /* Middle left icon animation */
        @keyframes floatMiddleLeftToCenter {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          20% {
            opacity: 0.5;
            transform: translateX(20px);
          }
          80% {
            opacity: 0.5;
            transform: translateX(40px);
          }
          100% {
            opacity: 0;
            transform: translateX(60px);
          }
        }

        /* Top right icon animation */
        @keyframes floatTopRightToCenter {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          20% {
            opacity: 0.5;
            transform: translate(-20px, 15px);
          }
          80% {
            opacity: 0.5;
            transform: translate(-40px, 30px);
          }
          100% {
            opacity: 0;
            transform: translate(-60px, 45px);
          }
        }

        /* Bottom right icon animation */
        @keyframes floatBottomRightToCenter {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          20% {
            opacity: 0.5;
            transform: translate(-20px, -15px);
          }
          80% {
            opacity: 0.5;
            transform: translate(-40px, -30px);
          }
          100% {
            opacity: 0;
            transform: translate(-60px, -45px);
          }
        }

        /* Middle right icon animation */
        @keyframes floatMiddleRightToCenter {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          20% {
            opacity: 0.5;
            transform: translateX(-20px);
          }
          80% {
            opacity: 0.5;
            transform: translateX(-40px);
          }
          100% {
            opacity: 0;
            transform: translateX(-60px);
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
