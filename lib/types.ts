import type { LucideIcon } from "lucide-react"

export interface TopicType {
  title: string
  icon: LucideIcon
  color?: string
}

export interface SubjectDataType {
  [key: string]: TopicType[]
}
