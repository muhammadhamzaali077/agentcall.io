import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import TimelineItem from "@/components/timeline-item"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-black to-slate-900 dark:from-slate-200 dark:to-slate-100">
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-5xl">
            About AI Call Agent
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300 dark:text-slate-700">
            We're on a mission to revolutionize customer support through advanced AI technology, making exceptional
            service accessible to businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-4 py-16 bg-slate-900 dark:bg-slate-100">
        <div className="container max-w-6xl mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white dark:text-slate-900">Our Vision</h2>
              <p className="mb-4 text-slate-300 dark:text-slate-700">
                We envision a world where customer support is no longer a pain point for businesses or their customers.
                Our AI Call Agent technology bridges the gap between automated efficiency and human-like understanding.
              </p>
              <p className="text-slate-300 dark:text-slate-700">
                Founded in 2024 by a team of AI researchers and customer experience experts, we've quickly grown to
                become an emerging leader in AI-powered customer support solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800 dark:bg-slate-200">
              <h3 className="mb-4 text-xl font-bold text-cyan-400 dark:text-cyan-600">Our Mission</h3>
              <p className="mb-4 text-slate-300 dark:text-slate-700">
                To transform customer support by making AI technology accessible, affordable, and effective for
                businesses of all sizes.
              </p>
              <p className="text-slate-300 dark:text-slate-700">
                We believe that exceptional customer service should be available to everyone, and our AI Call Agent
                makes that possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 py-16 bg-black dark:bg-slate-200">
        <div className="container max-w-5xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white dark:text-slate-900">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 transform -translate-x-1/2"></div>
            <div className="space-y-16">
              <TimelineItem
                year="2024"
                title="The Beginning"
                description="Founded by a team of AI researchers and CX experts with a vision to transform customer support."
                side="left"
              />
              <TimelineItem
                year="2024"
                title="First Major Release"
                description="Launched our core AI Call Agent platform with natural language processing capabilities."
                side="right"
              />
              <TimelineItem
                year="2024"
                title="Initial Funding"
                description="Secured seed funding to expand our team and enhance our AI technology."
                side="left"
              />
              <TimelineItem
                year="2025"
                title="Global Expansion"
                description="Planning to expand to serve clients across North America, Europe, and Asia with multilingual support."
                side="right"
              />
              <TimelineItem
                year="2025"
                title="The Future"
                description="Continuing to innovate with advanced emotion recognition and predictive analytics."
                side="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 bg-slate-900 dark:bg-slate-100">
        <div className="container max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white dark:text-slate-900">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 border-0 bg-slate-800 dark:bg-slate-200">
              <h3 className="mb-3 text-xl font-bold text-cyan-400 dark:text-cyan-600">Innovation</h3>
              <p className="text-slate-300 dark:text-slate-700">
                We constantly push the boundaries of what's possible with AI technology.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-slate-800 dark:bg-slate-200">
              <h3 className="mb-3 text-xl font-bold text-purple-400 dark:text-purple-600">Customer-Centric</h3>
              <p className="text-slate-300 dark:text-slate-700">
                Everything we build is designed to improve the customer experience.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-slate-800 dark:bg-slate-200">
              <h3 className="mb-3 text-xl font-bold text-emerald-400 dark:text-emerald-600">Ethical AI</h3>
              <p className="text-slate-300 dark:text-slate-700">
                We develop AI responsibly, with transparency and fairness at our core.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-200 dark:to-slate-300">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white dark:text-slate-900">Join Our Journey</h2>
          <p className="mb-8 text-slate-300 dark:text-slate-700">
            Be part of the revolution in customer support technology.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
