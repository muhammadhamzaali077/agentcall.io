import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Server, AlertTriangle } from "lucide-react"

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-slate-100">
      <section className="px-4 py-20 bg-gradient-to-b from-black to-slate-900 dark:from-slate-200 dark:to-slate-100">
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-5xl">
            Security
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-slate-300 dark:text-slate-700">
            We take the security of your data seriously. Learn about our security practices and how we protect your
            information.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 bg-slate-900 dark:bg-slate-100">
        <div className="container max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-slate-800 dark:bg-slate-200">
              <Shield className="w-12 h-12 mb-4 text-cyan-400 dark:text-cyan-600" />
              <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">Data Protection</h2>
              <p className="text-slate-300 dark:text-slate-700">
                We implement industry-standard encryption protocols to protect your data both in transit and at rest.
                All sensitive information is encrypted using AES-256 encryption.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800 dark:bg-slate-200">
              <Lock className="w-12 h-12 mb-4 text-purple-400 dark:text-purple-600" />
              <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">Access Controls</h2>
              <p className="text-slate-300 dark:text-slate-700">
                We maintain strict access controls to ensure that only authorized personnel can access your data. All
                access is logged and regularly audited.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800 dark:bg-slate-200">
              <Server className="w-12 h-12 mb-4 text-emerald-400 dark:text-emerald-600" />
              <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">Infrastructure Security</h2>
              <p className="text-slate-300 dark:text-slate-700">
                Our infrastructure is hosted in secure data centers with 24/7 monitoring, redundant power, and physical
                security measures. We regularly update and patch our systems to protect against vulnerabilities.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800 dark:bg-slate-200">
              <AlertTriangle className="w-12 h-12 mb-4 text-amber-400 dark:text-amber-600" />
              <h2 className="mb-4 text-2xl font-bold text-white dark:text-slate-900">Incident Response</h2>
              <p className="text-slate-300 dark:text-slate-700">
                We have a comprehensive incident response plan in place to quickly address any security incidents. Our
                team is trained to detect, respond to, and mitigate potential threats.
              </p>
            </div>
          </div>

          <div className="p-8 mt-12 rounded-lg bg-slate-800 dark:bg-slate-200">
            <h2 className="mb-6 text-2xl font-bold text-white dark:text-slate-900">Security Practices</h2>
            <div className="space-y-6 text-slate-300 dark:text-slate-700">
              <div>
                <h3 className="mb-2 text-xl font-bold text-white dark:text-slate-900">Regular Security Audits</h3>
                <p>
                  We conduct regular security audits and vulnerability assessments to identify and address potential
                  security issues before they can be exploited.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-white dark:text-slate-900">Employee Training</h3>
                <p>
                  All employees receive comprehensive security training to ensure they understand and follow our
                  security policies and best practices. We maintain a security-first culture throughout our
                  organization.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-white dark:text-slate-900">Compliance</h3>
                <p>
                  We comply with relevant industry standards and regulations to ensure the highest level of security for
                  your data. Our practices are regularly reviewed to maintain compliance with evolving security
                  requirements.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-white dark:text-slate-900">Data Backups</h3>
                <p>
                  We maintain regular backups of all data to ensure business continuity and disaster recovery
                  capabilities. Backups are encrypted and stored securely in geographically diverse locations.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-slate-400 dark:text-slate-600">
                If you have any security concerns or questions, please contact us immediately.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Contact Security Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
