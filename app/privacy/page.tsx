import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-slate-100">
      <section className="px-4 py-20 bg-gradient-to-b from-black to-slate-900 dark:from-slate-200 dark:to-slate-100">
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300 dark:text-slate-700">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 bg-slate-900 dark:bg-slate-100">
        <div className="container max-w-4xl mx-auto">
          <div className="p-8 rounded-lg bg-slate-800 dark:bg-slate-200">
            <div className="space-y-8 text-slate-300 dark:text-slate-700">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, contact us, or
                  use our services. This may include your name, email address, phone number, and payment information.
                </p>
                <p className="mt-2">
                  We also automatically collect certain information when you use our services, including log data,
                  device information, and usage information.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">
                  2. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="mt-2 ml-6 list-disc">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, investigate, and prevent fraudulent or illegal activities</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">3. Sharing of Information</h2>
                <p>
                  We may share your information with third-party vendors, consultants, and other service providers who
                  need access to such information to carry out work on our behalf.
                </p>
                <p className="mt-2">
                  We may also share your information in response to a legal request, to comply with applicable laws, to
                  protect our rights, or in connection with a business transfer.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">4. Data Security</h2>
                <p>
                  We take reasonable measures to help protect your personal information from loss, theft, misuse, and
                  unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">5. Your Choices</h2>
                <p>
                  You may update, correct, or delete your account information at any time by logging into your account
                  or contacting us. You may also opt out of receiving promotional communications from us by following
                  the instructions in those communications.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">6. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on our website and updating the effective date.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">7. Contact Information</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at{" "}
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
