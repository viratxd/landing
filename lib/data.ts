import {
  Calculator,
  Sparkles,
  SigmaSquare,
  BarChart2,
  LineChart,
  Triangle,
  Map,
  Target,
  Mountain,
  Circle,
  Pencil,
  Compass,
  Box,
  BarChartHorizontalBig,
  Dice5,
  PiSquare,
  Sigma,
  Infinity,
  Atom,
  FlaskRoundIcon as Flask,
  Microscope,
  Beaker,
  Dna,
  Telescope,
  Brain,
  Rocket,
  Lightbulb,
  BookOpen,
  Zap,
} from "lucide-react"
import type { SubjectDataType } from "./types"

// Define the Math topics with specified icons
export const mathTopics = [
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
export const subjectData: SubjectDataType = {
  English: [],
  Math: mathTopics,
  Science: [],
  History: [],
  Geography: [],
  Hindi: [],
}

// Define subject types
export const subjects = ["English", "Math", "Science", "History", "Geography", "Hindi"]

// Define icon pools for shuffling
export const mathIconPool = [Calculator, PiSquare, Sigma, Infinity, Compass, Triangle, SigmaSquare, LineChart]
export const scienceIconPool = [Atom, Flask, Microscope, Beaker, Dna, Telescope, Brain, Rocket]
export const generalIconPool = [Lightbulb, BookOpen, Zap, Sparkles]
