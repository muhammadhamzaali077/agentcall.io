"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail, Phone, Send } from "lucide-react"
import BackgroundAnimation from "@/components/background-animation"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting form data:", formData)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log("Response from server:", data)

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      toast.success("Message sent successfully! We'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Detailed error:", error)
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again later."
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
        <BackgroundAnimation />
        <div className="container relative z-10 max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:text-5xl">
            Get in Touch
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300">
            Ready to transform your customer support experience? Contact us today to learn how our AI Call Agent can
            help your business deliver exceptional service 24/7.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-16 bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">Contact Information</h2>
              <p className="mb-6 text-slate-300">
                Please reach out to us to discuss how our AI-powered solutions can help your business. Our team is ready
                to provide you with a personalized demonstration and answer any questions you may have about our
                services.
              </p>
              <div className="space-y-6">
                <Card className="flex items-center p-4 border-0 bg-slate-800">
                  <Mail className="w-6 h-6 mr-4 text-white" />
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-slate-200">m.qasim077@gmail.com</p>
                  </div>
                </Card>
                <Card className="flex items-center p-4 border-0 bg-slate-800">
                  <Phone className="w-6 h-6 mr-4 text-white" />
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-slate-200">+923152968211</p>
                  </div>
                </Card>
              </div>

              <h2 className="mt-12 mb-6 text-2xl font-bold text-white">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/sirqasim/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-slate-700 text-black hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-slate-700 text-black hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://github.com/EnggQasim" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-slate-700 text-black hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-slate-700 bg-slate-800 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-slate-700 bg-slate-800 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-slate-700 bg-slate-800 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-slate-700 bg-slate-800 text-slate-200 focus:border-cyan-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
