import { MessageSquare, User, Phone, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "call",
    message: "New customer call received",
    time: "2 minutes ago",
    icon: <Phone className="w-4 h-4 text-cyan-400" />,
  },
  {
    id: 2,
    type: "message",
    message: "Support ticket #1234 resolved",
    time: "15 minutes ago",
    icon: <MessageSquare className="w-4 h-4 text-purple-400" />,
  },
  {
    id: 3,
    type: "user",
    message: "New user registered",
    time: "1 hour ago",
    icon: <User className="w-4 h-4 text-emerald-400" />,
  },
  {
    id: 4,
    type: "system",
    message: "System maintenance completed",
    time: "3 hours ago",
    icon: <Clock className="w-4 h-4 text-amber-400" />,
  },
]

export default function ActivityLog() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3">
          <div className="p-2 rounded-full bg-slate-700">{activity.icon}</div>
          <div>
            <p className="text-sm text-slate-300">{activity.message}</p>
            <p className="text-xs text-slate-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
