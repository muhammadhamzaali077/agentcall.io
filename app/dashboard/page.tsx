"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Users, MessageSquare, Clock, ArrowUpRight, Settings, Bell } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import StatsCard from "@/components/stats-card"
import ActivityLog from "@/components/activity-log"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-slate-900">
      <DashboardSidebar />

      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400">Welcome back to your AI Call Agent dashboard</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="bg-slate-800 border border-slate-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Calls"
                value="1,284"
                change="+12.5%"
                icon={<MessageSquare className="w-5 h-5 text-cyan-400" />}
              />
              <StatsCard
                title="Active Users"
                value="342"
                change="+8.2%"
                icon={<Users className="w-5 h-5 text-purple-400" />}
              />
              <StatsCard
                title="Avg. Call Duration"
                value="4m 32s"
                change="-2.1%"
                icon={<Clock className="w-5 h-5 text-emerald-400" />}
              />
              <StatsCard
                title="Resolution Rate"
                value="94.2%"
                change="+3.7%"
                icon={<BarChart className="w-5 h-5 text-amber-400" />}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="col-span-2 p-6 border-0 bg-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Call Volume</h3>
                  <Button variant="ghost" className="h-8 text-xs text-slate-400 hover:text-white">
                    View Report
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
                <div className="h-64 bg-slate-700/50 rounded-md flex items-center justify-center">
                  <p className="text-slate-400">Call Volume Chart</p>
                </div>
              </Card>

              <Card className="p-6 border-0 bg-slate-800">
                <h3 className="mb-4 text-lg font-medium text-white">Recent Activity</h3>
                <ActivityLog />
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card className="p-6 border-0 bg-slate-800">
              <h3 className="mb-4 text-lg font-medium text-white">Analytics Content</h3>
              <p className="text-slate-400">Detailed analytics will be displayed here.</p>
            </Card>
          </TabsContent>

          <TabsContent value="agents" className="space-y-4">
            <Card className="p-6 border-0 bg-slate-800">
              <h3 className="mb-4 text-lg font-medium text-white">AI Agents</h3>
              <p className="text-slate-400">Manage your AI agents and their configurations.</p>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card className="p-6 border-0 bg-slate-800">
              <h3 className="mb-4 text-lg font-medium text-white">Account Settings</h3>
              <p className="text-slate-400">Manage your account settings and preferences.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
