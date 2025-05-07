import Link from "next/link"
import { ArrowRight, Bot, Clock, Zap, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import BackgroundAnimation from "@/components/background_animation"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 overflow-hidden bg-gradient-to-b from-black to-slate-900 md:py-32">
        <BackgroundAnimation />
        <div className="container relative z-10 flex flex-col items-center max-w-5xl gap-8 text-center">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-slate-800 text-cyan-400">
            <Bot className="w-4 h-4 mr-2" />
            <span>AI-Powered Customer Support</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:text-6xl">
            Revolutionizing Customer Support with AI
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Our AI Call Agent replaces traditional call centers with intelligent, conversational AI that understands
            context, solves problems, and delivers exceptional customer experiences 24/7.
          </p>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                View Pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border border-slate-600"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white md:text-4xl">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-cyan-400" />}
              title="24/7 Availability"
              description="Always available to assist customers, no matter the time zone or holiday schedule."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-purple-400" />}
              title="Seamless Integration"
              description="Easily integrates with your existing systems, CRM, and communication channels."
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10 text-emerald-400" />}
              title="Cost-Effective Solutions"
              description="Reduce operational costs by up to 70% compared to traditional call centers."
            />
          </div>
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-slate-800">
                Explore All Features
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        <BackgroundAnimation />
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Transform Your Customer Support?</h2>
          <p className="mb-8 text-slate-300">
            Join hundreds of businesses that have already upgraded their customer experience with our AI Call Agent.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border border-slate-600"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
