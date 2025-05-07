interface TimelineItemProps {
  year: string
  title: string
  description: string
  side: "left" | "right"
}

export default function TimelineItem({ year, title, description, side }: TimelineItemProps) {
  return (
    <div className={`relative flex ${side === "left" ? "justify-start" : "justify-end"}`}>
      <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-x-1/2"></div>
      <div className={`w-5/12 p-6 rounded-lg bg-slate-800 ${side === "right" && "ml-auto"}`}>
        <div className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-slate-700 text-cyan-400">
          {year}
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  )
}
