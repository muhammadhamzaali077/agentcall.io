import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ExternalLink, Mail } from "lucide-react"

interface CreatorCardProps {
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
  twitter?: string
  github?: string
  portfolio?: string
  email?: string
}

export default function CreatorCard({
  name,
  role,
  image,
  bio,
  linkedin,
  twitter,
  github,
  portfolio,
  email,
}: CreatorCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-slate-800 max-w-md w-full">
      <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="overflow-hidden bg-slate-800">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="object-cover w-full h-64"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-2xl font-bold text-white">{name}</h3>
        <p className="mb-4 text-cyan-400">{role}</p>
        <p className="mb-6 text-slate-300">{bio}</p>
        {email && (
          <p className="mb-6 text-slate-300">
            <Mail className="inline w-4 h-4 mr-2 text-white" />
            {email}
          </p>
        )}
        <div className="flex space-x-2">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="border-slate-700 text-slate-900 hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="border-slate-700 text-slate-900 hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="border-slate-700 text-slate-900 hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Button>
            </a>
          )}
          {portfolio && (
            <a href={portfolio} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="border-slate-700 text-slate-900 hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
