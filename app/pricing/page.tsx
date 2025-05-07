import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300">
            Choose the plan that fits your business needs. All plans include our core AI Call Agent technology.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-16 bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <Card className="relative overflow-hidden border-0 bg-slate-800">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Starter</h3>
                <p className="mb-6 text-slate-400">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <Link href="/contact">
                  <Button className="w-full mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                    Get Started
                  </Button>
                </Link>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Up to 500 calls per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Email support</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-2 text-slate-600 shrink-0" />
                    <span className="text-slate-500">Custom AI training</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-2 text-slate-600 shrink-0" />
                    <span className="text-slate-500">API access</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Professional Plan */}
            <Card className="relative overflow-hidden border-0 bg-slate-800 ring-2 ring-cyan-500">
              <div className="absolute top-0 w-full py-1 text-xs font-medium text-center text-white bg-cyan-500">
                MOST POPULAR
              </div>
              <div className="p-6 pt-8">
                <h3 className="mb-2 text-xl font-bold text-white">Professional</h3>
                <p className="mb-6 text-slate-400">For growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$299</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <Link href="/contact">
                  <Button className="w-full mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                    Get Started
                  </Button>
                </Link>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Up to 2,000 calls per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Priority email & chat support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Basic custom AI training</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-2 text-slate-600 shrink-0" />
                    <span className="text-slate-500">API access</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative overflow-hidden border-0 bg-slate-800">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Enterprise</h3>
                <p className="mb-6 text-slate-400">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$999</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <Link href="/contact">
                  <Button className="w-full mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                    Contact Sales
                  </Button>
                </Link>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Unlimited calls</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Full analytics suite</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">24/7 phone & priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Advanced custom AI training</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">Full API access</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-black">
        <div className="container max-w-4xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6 border-0 bg-slate-800">
              <h3 className="mb-2 text-lg font-medium text-white">Can I change plans later?</h3>
              <p className="text-slate-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-slate-800">
              <h3 className="mb-2 text-lg font-medium text-white">Is there a free trial?</h3>
              <p className="text-slate-300">
                We offer a 14-day free trial on all plans so you can test our AI Call Agent before committing.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-slate-800">
              <h3 className="mb-2 text-lg font-medium text-white">What happens if I exceed my call limit?</h3>
              <p className="text-slate-300">
                If you exceed your monthly call limit, additional calls will be billed at a per-call rate. We'll notify
                you when you're approaching your limit.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-slate-800">
              <h3 className="mb-2 text-lg font-medium text-white">Do you offer custom plans?</h3>
              <p className="text-slate-300">
                Yes, we can create custom plans for businesses with specific needs. Contact our sales team to discuss
                your requirements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Ready to Transform Your Customer Support?</h2>
          <p className="mb-8 text-slate-300">Start your 14-day free trial today. No credit card required.</p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
