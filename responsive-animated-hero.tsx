"use client"

import { useState, useEffect } from "react"
import { Code, Database, Globe, Shield, Cpu, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResponsiveAnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Handle window resize and initial animation trigger
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Trigger animations after component mounts
    setIsVisible(true)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Adjust icon positions based on screen size
  const getIconPositions = () => {
    // Default positions for larger screens
    const positions = {
      leftTop: "left-8 top-16",
      leftMiddle: "left-10 top-1/2",
      leftBottom: "left-8 bottom-16",
      rightTop: "right-8 top-16",
      rightMiddle: "right-10 top-1/2",
      rightBottom: "right-8 bottom-16",
    }

    // Adjust for smaller screens
    if (windowWidth < 768) {
      return {
        leftTop: "left-4 top-12",
        leftMiddle: "left-5 top-1/2",
        leftBottom: "left-4 bottom-12",
        rightTop: "right-4 top-12",
        rightMiddle: "right-5 top-1/2",
        rightBottom: "right-4 bottom-12",
      }
    }

    return positions
  }

  const positions = getIconPositions()

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white py-16 px-4 sm:px-6 md:py-24 lg:py-32">
      {/* Left side icons */}
      <div
        className={`absolute ${positions.leftTop} transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-path-left-top`}
        style={{
          animationDelay: "0.2s",
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <Code className="w-6 h-6 md:w-8 md:h-8 text-teal-300" />
      </div>

      <div
        className={`absolute ${positions.leftMiddle} transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-path-left-middle`}
        style={{
          animationDelay: "0.5s",
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <Database className="w-8 h-8 md:w-10 md:h-10 text-emerald-300" />
      </div>

      <div
        className={`absolute ${positions.leftBottom} transform translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-path-left-bottom`}
        style={{
          animationDelay: "0.8s",
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <Globe className="w-6 h-6 md:w-8 md:h-8 text-cyan-300" />
      </div>

      {/* Right side icons */}
      <div
        className={`absolute ${positions.rightTop} transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-path-right-top`}
        style={{
          animationDelay: "0.3s",
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-300" />
      </div>

      <div
        className={`absolute ${positions.rightMiddle} transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-path-right-middle`}
        style={{
          animationDelay: "0.6s",
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <Cpu className="w-8 h-8 md:w-10 md:h-10 text-teal-300" />
      </div>

      <div
        className={`absolute ${positions.rightBottom} transform translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-path-right-bottom`}
        style={{
          animationDelay: "0.9s",
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <Cloud className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
      </div>

      {/* Hero content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            Cloud Solutions for the Future
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-teal-100">
            Scalable, secure, and sustainable cloud infrastructure for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 border-0 text-white"
            >
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-teal-300 text-white hover:bg-teal-800/20">
              View Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-teal-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/20 rounded-full filter blur-3xl"></div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes path-left-top {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          40% { transform: translate(20px, 15px); }
          70% { transform: translate(40px, 25px); }
          90% { opacity: 0.8; }
          100% { transform: translate(60px, 30px); opacity: 0; }
        }
        
        @keyframes path-left-middle {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          40% { transform: translate(25px, 0); }
          70% { transform: translate(50px, 0); }
          90% { opacity: 0.8; }
          100% { transform: translate(75px, 0); opacity: 0; }
        }
        
        @keyframes path-left-bottom {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          40% { transform: translate(20px, -15px); }
          70% { transform: translate(40px, -25px); }
          90% { opacity: 0.8; }
          100% { transform: translate(60px, -30px); opacity: 0; }
        }
        
        @keyframes path-right-top {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          40% { transform: translate(-20px, 15px); }
          70% { transform: translate(-40px, 25px); }
          90% { opacity: 0.8; }
          100% { transform: translate(-60px, 30px); opacity: 0; }
        }
        
        @keyframes path-right-middle {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          40% { transform: translate(-25px, 0); }
          70% { transform: translate(-50px, 0); }
          90% { opacity: 0.8; }
          100% { transform: translate(-75px, 0); opacity: 0; }
        }
        
        @keyframes path-right-bottom {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          40% { transform: translate(-20px, -15px); }
          70% { transform: translate(-40px, -25px); }
          90% { opacity: 0.8; }
          100% { transform: translate(-60px, -30px); opacity: 0; }
        }
        
        .animate-path-left-top {
          animation: path-left-top 8s ease-in-out infinite;
        }
        
        .animate-path-left-middle {
          animation: path-left-middle 8s ease-in-out infinite;
        }
        
        .animate-path-left-bottom {
          animation: path-left-bottom 8s ease-in-out infinite;
        }
        
        .animate-path-right-top {
          animation: path-right-top 8s ease-in-out infinite;
        }
        
        .animate-path-right-middle {
          animation: path-right-middle 8s ease-in-out infinite;
        }
        
        .animate-path-right-bottom {
          animation: path-right-bottom 8s ease-in-out infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-path-left-top, .animate-path-left-middle, .animate-path-left-bottom,
          .animate-path-right-top, .animate-path-right-middle, .animate-path-right-bottom {
            animation-duration: 6s; /* Slightly faster on mobile */
          }
        }
      `}</style>
    </section>
  )
}
