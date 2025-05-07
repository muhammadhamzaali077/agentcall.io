import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeadphonesIcon, UserPlus, BarChart, MessageSquare, Clock, Globe, ShieldCheck, Zap } from "lucide-react"
import ServiceCard from "@/components/service-card"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-5xl">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300">
            Discover how our AI Call Agent can transform your customer support operations and drive business growth.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="px-4 py-16 bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <ServiceCard
              icon={<HeadphonesIcon className="w-12 h-12 text-cyan-400" />}
              title="Customer Support Automation"
              description="Replace traditional call centers with our AI agent that handles customer inquiries 24/7 with natural, human-like conversations."
              features={[
                "Natural language understanding",
                "Context-aware responses",
                "Seamless escalation to human agents when needed",
                "Multi-language support",
              ]}
            />

            <ServiceCard
              icon={<UserPlus className="w-12 h-12 text-purple-400" />}
              title="Lead Generation"
              description="Convert website visitors into qualified leads with intelligent conversations that understand customer needs and capture information."
              features={[
                "Personalized engagement",
                "Qualification questions",
                "Appointment scheduling",
                "CRM integration",
              ]}
            />

            <ServiceCard
              icon={<BarChart className="w-12 h-12 text-emerald-400" />}
              title="Feedback Analysis"
              description="Gather and analyze customer feedback at scale to identify trends, sentiment, and opportunities for improvement."
              features={["Sentiment analysis", "Trend identification", "Actionable insights", "Customizable reports"]}
            />

            <ServiceCard
              icon={<MessageSquare className="w-12 h-12 text-amber-400" />}
              title="Omnichannel Support"
              description="Provide consistent customer experiences across phone, chat, email, and social media with our unified AI platform."
              features={[
                "Unified customer profiles",
                "Consistent messaging",
                "Channel-specific optimization",
                "Seamless transitions between channels",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 bg-black">
        <div className="container max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">Why Choose Our AI Call Agent?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center border-0 bg-slate-800">
              <Clock className="w-10 h-10 mx-auto mb-4 text-cyan-400" />
              <h3 className="mb-2 text-xl font-bold text-white">24/7 Availability</h3>
              <p className="text-slate-300">Never miss a customer inquiry, regardless of time zone or holidays.</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-slate-800">
              <Zap className="w-10 h-10 mx-auto mb-4 text-purple-400" />
              <h3 className="mb-2 text-xl font-bold text-white">Instant Responses</h3>
              <p className="text-slate-300">
                Eliminate wait times with immediate, accurate responses to customer questions.
              </p>
            </Card>

            <Card className="p-6 text-center border-0 bg-slate-800">
              <Globe className="w-10 h-10 mx-auto mb-4 text-emerald-400" />
              <h3 className="mb-2 text-xl font-bold text-white">Multilingual</h3>
              <p className="text-slate-300">Support customers in over 50 languages with native-level understanding.</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-slate-800">
              <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-amber-400" />
              <h3 className="mb-2 text-xl font-bold text-white">Secure & Compliant</h3>
              <p className="text-slate-300">Enterprise-grade security with GDPR and CCPA compliance built-in.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-200 dark:to-slate-300">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white dark:text-slate-900">Ready to Get Started?</h2>
          <p className="mb-8 text-slate-300 dark:text-slate-700">
            Choose a plan that fits your business needs and transform your customer support today.
          </p>
          <Link href="/pricing">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              View Pricing Plans
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
