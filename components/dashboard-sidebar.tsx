"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, BarChart, Users, MessageSquare, Settings, HelpCircle, LogOut, Menu, X } from "lucide-react"

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-slate-800 border-r border-slate-700 transition-all duration-300 h-screen sticky top-0 flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {!collapsed && <span className="text-lg font-bold text-white">AI Call Agent</span>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-slate-400 hover:text-white">
          {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className={`w-full justify-start text-slate-200 hover:text-white hover:bg-slate-700 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            {!collapsed && <span>Dashboard</span>}
          </Button>
        </Link>
        <Link href="/dashboard/analytics">
          <Button
            variant="ghost"
            className={`w-full justify-start text-slate-200 hover:text-white hover:bg-slate-700 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <BarChart className="w-5 h-5 mr-2" />
            {!collapsed && <span>Analytics</span>}
          </Button>
        </Link>
        <Link href="/dashboard/users">
          <Button
            variant="ghost"
            className={`w-full justify-start text-slate-200 hover:text-white hover:bg-slate-700 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <Users className="w-5 h-5 mr-2" />
            {!collapsed && <span>Users</span>}
          </Button>
        </Link>
        <Link href="/dashboard/conversations">
          <Button
            variant="ghost"
            className={`w-full justify-start text-slate-200 hover:text-white hover:bg-slate-700 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            {!collapsed && <span>Conversations</span>}
          </Button>
        </Link>
        <Link href="/dashboard/settings">
          <Button
            variant="ghost"
            className={`w-full justify-start text-slate-200 hover:text-white hover:bg-slate-700 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <Settings className="w-5 h-5 mr-2" />
            {!collapsed && <span>Settings</span>}
          </Button>
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <Link href="/dashboard/help">
          <Button
            variant="ghost"
            className={`w-full justify-start text-slate-200 hover:text-white hover:bg-slate-700 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            {!collapsed && <span>Help & Support</span>}
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button
            variant="ghost"
            className={`w-full justify-start text-slate-200 hover:text-white hover:bg-slate-700 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <LogOut className="w-5 h-5 mr-2" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </Link>
      </div>
    </div>
  )
}
