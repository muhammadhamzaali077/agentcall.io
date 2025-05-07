import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-slate-100">
      <section className="px-4 py-20 bg-gradient-to-b from-black to-slate-900 dark:from-slate-200 dark:to-slate-100">
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-5xl">
            Cookie Policy
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300 dark:text-slate-700">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 bg-slate-900 dark:bg-slate-100">
        <div className="container max-w-4xl mx-auto">
          <div className="p-8 rounded-lg bg-slate-800 dark:bg-slate-200">
            <div className="space-y-8 text-slate-300 dark:text-slate-700">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They are widely
                  used to make websites work more efficiently and provide information to the website owners.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">2. Types of Cookies We Use</h2>
                <p>We use the following types of cookies:</p>
                <ul className="mt-2 ml-6 list-disc">
                  <li>
                    <strong className="text-white dark:text-slate-900">Essential cookies:</strong> These are necessary
                    for the website to function properly and cannot be turned off.
                  </li>
                  <li>
                    <strong className="text-white dark:text-slate-900">Performance cookies:</strong> These help us
                    understand how visitors interact with our website by collecting and reporting information
                    anonymously.
                  </li>
                  <li>
                    <strong className="text-white dark:text-slate-900">Functionality cookies:</strong> These allow the
                    website to provide enhanced functionality and personalization.
                  </li>
                  <li>
                    <strong className="text-white dark:text-slate-900">Targeting cookies:</strong> These are set through
                    our site by our advertising partners to build a profile of your interests and show you relevant ads
                    on other sites.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">3. How We Use Cookies</h2>
                <p>We use cookies for various purposes, including:</p>
                <ul className="mt-2 ml-6 list-disc">
                  <li>To provide essential website functionality</li>
                  <li>To remember your preferences</li>
                  <li>To improve website performance and user experience</li>
                  <li>To analyze how our website is used</li>
                  <li>To personalize content and advertisements</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">4. Managing Cookies</h2>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can usually find these
                  settings in the "Options" or "Preferences" menu of your browser. You can delete existing cookies,
                  allow or block all cookies, or block cookies from particular sites.
                </p>
                <p className="mt-2">
                  Please note that if you choose to block cookies, some features of our website may not function
                  properly.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">5. Third-Party Cookies</h2>
                <p>
                  Some cookies are placed by third parties on our website. These third parties may include analytics
                  providers, advertising networks, and social media platforms. We do not control these third-party
                  cookies and recommend that you check the privacy policies of these third parties for information about
                  their cookies and how to manage them.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">6. Changes to This Policy</h2>
                <p>
                  We may update this cookie policy from time to time. We will notify you of any changes by posting the
                  new policy on our website and updating the effective date.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">7. Contact Information</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at{" "}
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
