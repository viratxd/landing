"use client"

import { useState, useEffect } from "react"
import { Rocket, Star, Zap, Sparkles, Lightbulb, Atom } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations after component mounts
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white py-20 px-4 sm:px-6 md:py-28 lg:py-32">
      {/* Left side icons */}
      <div
        className="absolute left-6 top-12 transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-float-slow"
        style={{
          animationDelay: "0.2s",
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <Star className="w-8 h-8 text-yellow-300" />
      </div>

      <div
        className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-pulse-slow"
        style={{
          animationDelay: "0.5s",
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <Lightbulb className="w-10 h-10 text-amber-300" />
      </div>

      <div
        className="absolute left-6 bottom-12 transform translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-spin-slow"
        style={{
          animationDelay: "0.8s",
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <Atom className="w-8 h-8 text-cyan-300" />
      </div>

      {/* Right side icons */}
      <div
        className="absolute right-6 top-12 transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-bounce-slow"
        style={{
          animationDelay: "0.3s",
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <Rocket className="w-8 h-8 text-red-300" />
      </div>

      <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-float-slow"
        style={{
          animationDelay: "0.6s",
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <Zap className="w-10 h-10 text-yellow-300" />
      </div>

      <div
        className="absolute right-6 bottom-12 transform translate-y-1/2 opacity-0 transition-all duration-1000 ease-out animate-pulse-slow"
        style={{
          animationDelay: "0.9s",
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <Sparkles className="w-8 h-8 text-pink-300" />
      </div>

      {/* Hero content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Bring Your Ideas to Life</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-purple-100">
            Create stunning digital experiences with our powerful and intuitive platform. Start building today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 border-0 text-white"
            >
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-white hover:bg-purple-800/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl"></div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse-slow {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-float-slow, .animate-pulse-slow, .animate-spin-slow, .animate-bounce-slow {
            animation-duration: 4s; /* Slightly faster on mobile */
          }
        }
      `}</style>
    </section>
  )
}
