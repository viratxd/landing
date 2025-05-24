import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Determine font sizes based on screen width
export function getFontSizes(windowWidth: number) {
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

// Determine grid columns based on screen width
export function getGridCols(windowWidth: number) {
  if (windowWidth < 360) return "grid-cols-2"
  if (windowWidth < 640) return "grid-cols-4"
  return "grid-cols-4"
}
