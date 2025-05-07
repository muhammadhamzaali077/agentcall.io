import type React from "react"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="p-6 transition-all duration-300 border-0 shadow-lg bg-slate-800 hover:bg-slate-800/80 hover:translate-y-[-5px]">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mb-6 text-slate-300">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
