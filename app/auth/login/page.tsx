"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle login here
    console.log("Login submitted:", loginData)
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle registration here
    console.log("Registration submitted:", registerData)
  }

  return (
    <main className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-b from-black to-slate-900">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Welcome to AI Call Agent
          </h1>
          <p className="mt-2 text-slate-300">Sign in to access your dashboard and manage your AI agents</p>
        </div>

        <Card className="p-6 border-0 shadow-lg bg-slate-800">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                    className="border-slate-700 bg-slate-900 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-300">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                    className="border-slate-700 bg-slate-900 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="w-4 h-4 border-slate-700 rounded text-cyan-500 focus:ring-cyan-500"
                    />
                    <label htmlFor="remember-me" className="block ml-2 text-sm text-slate-300">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link href="/auth/forgot-password" className="text-cyan-400 hover:text-cyan-300">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full border-slate-700" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-slate-400 bg-slate-800">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-700">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-700">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-700">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={registerData.name}
                    onChange={handleRegisterChange}
                    required
                    className="border-slate-700 bg-slate-900 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="register-email" className="block mb-2 text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                    className="border-slate-700 bg-slate-900 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="register-password" className="block mb-2 text-sm font-medium text-slate-300">
                    Password
                  </label>
                  <Input
                    id="register-password"
                    name="password"
                    type="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                    className="border-slate-700 bg-slate-900 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-slate-300">
                    Confirm Password
                  </label>
                  <Input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                    className="border-slate-700 bg-slate-900 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  Create Account
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full border-slate-700" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-slate-400 bg-slate-800">Or register with</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-700">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-700">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-700">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <p className="mt-6 text-sm text-center text-slate-400">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </main>
  )
}
