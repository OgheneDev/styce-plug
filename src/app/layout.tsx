import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Olotu Oluwaferanmi - Product Designer & Full-Stack Developer",
  description:
    "Portfolio website of Olotu Oluwaferanmi, a Product Designer and Full-Stack Developer showcasing modern web design, product thinking, and development projects.",
  keywords:
    "Olotu Oluwaferanmi, product designer, full-stack developer, UI/UX design, web development, Next.js, React, TypeScript, portfolio",
  authors: [{ name: "Olotu Oluwaferanmi" }],
  openGraph: {
    title: "Olotu Oluwaferanmi - Product Designer & Full-Stack Developer",
    description:
      "Explore the portfolio of Olotu Oluwaferanmi — a creative product designer and full-stack developer passionate about building seamless digital experiences.",
    type: "website",
    url: "https://yourwebsite.com", // optional: replace with your actual URL
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // optional: replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Olotu Oluwaferanmi - Product Designer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olotu Oluwaferanmi - Product Designer & Full-Stack Developer",
    description:
      "Showcasing UI/UX design and full-stack development projects by Olotu Oluwaferanmi.",
    images: ["https://yourwebsite.com/og-image.jpg"], // optional: replace with your actual image
    creator: "@yourhandle", // optional: replace with your Twitter handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
