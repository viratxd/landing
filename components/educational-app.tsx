"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AIToolsSection from "@/components/ai-tools-section"
import SubjectTabs from "@/components/subject-tabs"
import TopicsSection from "@/components/topics-section"
import BottomNavigation from "@/components/bottom-navigation"
import { subjectData, subjects } from "@/lib/data"

export default function EducationalApp() {
  const [activeSubject, setActiveSubject] = useState("Math")
  const [activeNav, setActiveNav] = useState("Analytics")
  const [activeTab, setActiveTab] = useState("AI Solver")
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  // Function to update window width - will be passed to components that need it
  const updateWindowWidth = (width: number) => {
    setWindowWidth(width)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 text-gray-800 font-sans">
      <Header windowWidth={windowWidth} />

      <main className="flex-1 overflow-y-auto pb-20 md:pb-24 rounded-xl mx-1 md:mx-2 mt-1 md:mt-2">
        <HeroSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          windowWidth={windowWidth}
          updateWindowWidth={updateWindowWidth}
        />

        <div>
          <AIToolsSection windowWidth={windowWidth} />

          <SubjectTabs
            subjects={subjects}
            activeSubject={activeSubject}
            setActiveSubject={setActiveSubject}
            windowWidth={windowWidth}
          />

          <TopicsSection activeSubject={activeSubject} subjectData={subjectData} windowWidth={windowWidth} />
        </div>
      </main>

      <BottomNavigation activeNav={activeNav} setActiveNav={setActiveNav} windowWidth={windowWidth} />
    </div>
  )
}
