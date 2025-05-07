import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-slate-100">
      <section className="px-4 py-20 bg-gradient-to-b from-black to-slate-900 dark:from-slate-200 dark:to-slate-100">
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-5xl">
            Terms of Service
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300 dark:text-slate-700">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 bg-slate-900 dark:bg-slate-100">
        <div className="container max-w-4xl mx-auto">
          <div className="p-8 rounded-lg bg-slate-800 dark:bg-slate-200">
            <div className="space-y-8 text-slate-300 dark:text-slate-700">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using AI Call Agent services, you agree to be bound by these Terms of Service. If you
                  do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">2. Description of Service</h2>
                <p>
                  AI Call Agent provides AI-powered customer support solutions. We reserve the right to modify, suspend,
                  or discontinue any aspect of our services at any time.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">3. User Accounts</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account information and for all
                  activities that occur under your account. You agree to notify us immediately of any unauthorized use
                  of your account.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">4. Pricing and Payment</h2>
                <p>
                  Subscription fees are charged in advance on a monthly or annual basis. All payments are
                  non-refundable. We reserve the right to change our pricing with 30 days notice.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">5. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by AI Call Agent and are protected
                  by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">6. Limitation of Liability</h2>
                <p>
                  AI Call Agent shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of or inability to use our services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">7. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to our services immediately, without prior notice,
                  for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third
                  parties.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will provide notice of
                  significant changes by posting the new Terms on our website.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                  which AI Call Agent is established, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">10. Contact Information</h2>
                <p>
                  For questions about these Terms, please contact us at{" "}
                  <a href="mailto:m.qasim077@gmail.com" className="text-cyan-400 hover:underline dark:text-cyan-600">
                    m.qasim077@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-slate-400 dark:text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
