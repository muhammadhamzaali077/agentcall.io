import type React from "react"
import { Card } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}

export default function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <Card className="p-6 border-0 bg-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-400">{title}</span>
        {icon}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="flex items-center mt-2">
        {isPositive ? (
          <ArrowUp className="w-3 h-3 mr-1 text-emerald-400" />
        ) : (
          <ArrowDown className="w-3 h-3 mr-1 text-red-400" />
        )}
        <span className={`text-xs font-medium ${isPositive ? "text-emerald-400" : "text-red-400"}`}>{change}</span>
        <span className="ml-1 text-xs text-slate-500">from last month</span>
      </div>
    </Card>
  )
}
