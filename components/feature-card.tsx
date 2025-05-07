import type React from "react"
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 transition-all duration-300 border-0 shadow-lg bg-slate-800 hover:bg-slate-800/80 hover:translate-y-[-5px] dark:bg-slate-200 dark:hover:bg-slate-200/80">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-white dark:text-slate-900">{title}</h3>
      <p className="text-slate-300 dark:text-slate-700">{description}</p>
    </Card>
  )
}
