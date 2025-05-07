import { Button } from "@/components/ui/button"
import CreatorCard from "@/components/creator-card"
import Link from "next/link"
import BackgroundAnimation from "@/components/background-animation"

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
        <BackgroundAnimation />
        <div className="container relative z-10 max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:text-5xl">
            Meet Our Creator
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300">
            The brilliant mind behind agentcall.io, combining expertise in artificial intelligence, natural language
            processing, and customer experience.
          </p>
        </div>
      </section>

      {/* Creator Section */}
      <section className="px-4 py-16 bg-slate-900">
        <div className="container max-w-4xl mx-auto">
          <div className="flex justify-center">
            <CreatorCard
              name="Muhammad Qasim"
              role="Founder of agentcall.io"
              image="/images/founder.png"
              bio="Muhammad Qasim is the founder of agentcall.io, a platform specializing in AI-powered voice bots for business communications. With extensive experience in data science and AI, he also works as a Senior Data Consultant at 10Pearls. His expertise spans across VoiceBot development, Conversational Agents, and AI Sales solutions. Muhammad is passionate about leveraging artificial intelligence to transform customer support and business communications."
              linkedin="https://www.linkedin.com/in/sirqasim/"
              twitter="#"
              github="https://github.com/EnggQasim"
              email="m.qasim077@gmail.com"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        <BackgroundAnimation />
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mb-8 text-slate-300">
            Transform your customer support experience with our AI Call Agent technology.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
