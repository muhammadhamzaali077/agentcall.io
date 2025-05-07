import Link from "next/link"
import { Bot, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-slate-800">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">agentcall.io</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Revolutionizing customer support with AI-powered call agents that deliver exceptional experiences 24/7.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:m.qasim077@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-slate-300">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/creators" className="text-sm text-slate-400">
                  Our Creator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-slate-300">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-slate-400">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400">
                  Feedback Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400">
                  Omnichannel Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-slate-300">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-slate-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-slate-400">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-slate-400">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-slate-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} agentcall.io. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-xs text-slate-500">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-slate-500">
                Terms
              </Link>
              <Link href="/cookies" className="text-xs text-slate-500">
                Cookies
              </Link>
              <Link href="/security" className="text-xs text-slate-500">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
