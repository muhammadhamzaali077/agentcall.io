import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavbarWrapper from "@/components/navbar-wrapper"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "agentcall.io - Revolutionizing Customer Support",
  description:
    "AI-powered call center solution that provides 24/7 customer support with natural language understanding and seamless integration.",
  keywords: "AI, call center, customer support, automation, artificial intelligence, voice assistant",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-slate-900 text-slate-50">
        <div className="flex flex-col min-h-screen">
          <NavbarWrapper />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
