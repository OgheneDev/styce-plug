"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion, useInView, Variants } from "framer-motion"
import { useRef, useState } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("app")

  const appProjects = [
    {
      title: "Rheel Estate",
      description: "Modern property discovery platform for home hunting. Responsive apps for iOS, Android, and web using Flutter and React. Features: explore listings, book inspections, connect with agents; ensures brand consistency and efficient backend.",
      technologies: ["Flutter", "React", "TypeScript", "Node.js", "TailwindCSS", "Framer Motion"],
      links: [
        { url: "https://rheel.ng/", label: "Website" },
        { url: "https://apps.apple.com/ng/app/rheel/id6467382726", label: "App Store" },
        { url: "https://play.google.com/store/apps/details?id=rheel.easy.property.search", label: "Play Store" }
      ]
    },
    {
      title: "Sharp Drop",
      description: "Secure platform for trading gift cards and cryptocurrency. Built with Flutter for mobile; offers real-time updates, secure transactions, intuitive navigation. Deployed on App Store and Play Store for reliable digital services.",
      technologies: ["Flutter (Dart)", "Node.js", "Firebase", "REST APIs", "GetX"],
      links: [
        { url: "https://apps.apple.com/ng/app/sharp-drop-digital-services/id6746059389", label: "App Store" },
        { url: "https://play.google.com/store/apps/details?id=com.project.p2psharpdrop.p2p_sharpdrop", label: "Play Store" }
      ]
    },
    {
      title: "Fyndr",
      description: "Multi-service marketplace connecting users to merchants in auto, beauty, home services. Includes job-matching for professionals and freelancers. Built with Flutter, Node.js, Firebase for efficient, user-friendly interactions.",
      technologies: ["Flutter", "Node.js", "Firebase"],
      links: []
    },
    {
      title: "IoT Alarm System",
      description: "IoT-based app with hardware integration for motion detection and alerts. Enhances security via real-time monitoring and push notifications. Developed using Flutter, Firebase, and IoT hardware.",
      technologies: ["Flutter", "Firebase", "IoT Hardware"],
      links: []
    },
    {
      title: "MateRound",
      description: "Smart matchmaking app redefining digital connections. Features: personalized suggestions, real-time messaging, advanced privacy, intuitive UI. Built with Flutter, Dart, and Firebase.",
      technologies: ["Flutter", "Dart", "Firebase"],
      links: []
    }
  ]

  const webProjects = [
    {
      title: "Rheel Estate Website",
      description: "Seamless real estate exploration platform for browsing and filtering listings. Focuses on speed, responsiveness, SEO, and intuitive UI. Frontend developed with React.js, TailwindCSS, REST APIs.",
      technologies: ["React.js", "TailwindCSS", "REST APIs"],
      links: []
    },
    {
      title: "Burn & Co.",
      description: "Elegant jewelry e-commerce site for exploring collections and real-time chat. Highlights: dynamic galleries, fluid animations, reusable components. Built with React.js, Firebase, TailwindCSS.",
      technologies: ["React.js", "Firebase", "TailwindCSS"],
      links: []
    },
  ]

  const uiProjects = [
    {
      title: "Rheel Estate",
      description: "UI/UX for real estate platform with clean landing page. Emphasizes navigation, responsive layouts, visual hierarchy. Highlights: modern typography, animations, accessible colors; in Figma/Adobe XD.",
      technologies: ["Figma", "Adobe XD"],
      links: [{ url: "https://www.behance.net/gallery/217541495/Rheel-Estate-Landing-Page", label: "View on Behance" }]
    },
    {
      title: "Burn and Co",
      description: "UI/UX for jewelry e-commerce with elegant landing page. Prioritizes luxurious visuals, smooth interactions, seamless browsing. Highlights: galleries, chat integration, responsive design; in Figma/Adobe XD.",
      technologies: ["Figma", "Adobe XD"],
      links: [{ url: "https://www.behance.net/gallery/215845431/Burn-and-Co-Landing-Page-(Jewellery-Store)", label: "View on Behance" }]
    },
    {
      title: "Reciept Editor",
      description: "UI/UX for mobile receipt app with simple interface. Focuses on minimalism, quick actions, intuitive tools. Highlights: clean forms, gesture editing, dark mode; designed in Figma/Adobe XD.",
      technologies: ["Figma", "Adobe XD"],
      links: [{ url: "https://www.behance.net/gallery/215845079/Receipt-Editor-Mobile-App-UI-Design", label: "View on Behance" }]
    },
    {
      title: "Skarsky Volt",
      description: "UI/UX for electrical company site with professional landing page. Emphasizes clarity, service showcases, easy contacts. Highlights: informative layouts, interactive elements, brand aesthetics; in Figma/Adobe XD.",
      technologies: ["Figma", "Adobe XD"],
      links: [{ url: "https://www.behance.net/gallery/205322145/Electrical-Electronic-Company-Landing-Page-UI-Ux-Design", label: "View on Behance" }]
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const getProjects = () => {
    switch (activeTab) {
      case "app": return appProjects
      case "web": return webProjects
      case "ui": return uiProjects
      default: return []
    }
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-linear-to-t from-neutral-950 to-neutral-800">
      {/* Animated Nebula Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-linear(circle at 20% 80%, rgba(251, 113, 133, 0.15) 0%, transparent 50%)",
              "radial-linear(circle at 80% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
              "radial-linear(circle at 50% 50%, rgba(163, 230, 53, 0.12) 0%, transparent 50%)",
              "radial-linear(circle at 20% 80%, rgba(251, 113, 133, 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-32 left-10 w-96 h-96 bg-rose-500/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-6 bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12 space-x-4">
            <Button
              onClick={() => setActiveTab("app")}
              className={`px-6 py-3 font-bold rounded-xl cursor-pointer transition-all duration-300 ${
                activeTab === "app"
                  ? "bg-linear-to-r from-rose-500 to-orange-500 text-white shadow-lg"
                  : "bg-neutral-800/50 text-gray-300 hover:bg-neutral-700/50"
              }`}
            >
              App
            </Button>
            <Button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-3 cursor-pointer font-bold rounded-xl transition-all duration-300 ${
                activeTab === "web"
                  ? "bg-linear-to-r from-orange-500 to-lime-500 text-white shadow-lg"
                  : "bg-neutral-800/50 text-gray-300 hover:bg-neutral-700/50"
              }`}
            >
              Web
            </Button>
            <Button
              onClick={() => setActiveTab("ui")}
              className={`px-6 py-3 font-bold cursor-pointer rounded-xl transition-all duration-300 ${
                activeTab === "ui"
                  ? "bg-linear-to-r from-lime-500 to-rose-500 text-white shadow-lg"
                  : "bg-neutral-800/50 text-gray-300 hover:bg-neutral-700/50"
              }`}
            >
              UI
            </Button>
          </div>

          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getProjects().map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden h-full cursor-pointer bg-neutral-900/80 backdrop-blur-xl border-neutral-700/60 hover:border-neutral-600/80 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-rose-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-wrap">
                      {project.description}
                    </p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-neutral-800/70 hover:bg-neutral-700/80 text-gray-200 px-3 py-1 text-sm font-medium transition-all duration-300 border border-neutral-600/50 hover:border-neutral-500/70"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            size="sm"
                            className="bg-linear-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold"
                          >
                            <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {link.label}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}