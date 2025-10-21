import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-linear-to-t from-neutral-950 relative to-neutral-800 py-15">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="http://github.com/styceplug" className="text-gray-400 hover:text-lime-400 transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://ng.linkedin.com/in/uibystyce" className="text-gray-400 hover:text-rose-400 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:styceplug@gmail.com" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Olotu Oluwaferanmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
