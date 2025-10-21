"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
  {
    title: "Freelance Mobile & Web Developer",
    company: "Rheel Estate Limited",
    period: "February 2025 – Present",
    description:
      "Led the end-to-end development of Rheel Estate’s mobile app and web platform. Built responsive interfaces, integrated APIs, and improved performance by 35%. Delivered a unified property experience for thousands of users.",
    technologies: ["Flutter", "React", "TypeScript", "Node.js", "TailwindCSS", "Framer Motion"],
    linear: "from-rose-400 to-orange-400",
  },
  {
    title: "Lead Mobile Developer",
    company: "Sharp Drop (P2P Trading Platform)",
    period: "November 2024 – March 2025",
    description:
      "Built and led development of a P2P trading platform for crypto and gift cards. Designed seamless onboarding, integrated live trade updates, and optimized performance. Reached 1,000+ downloads within the first month.",
    technologies: ["Flutter (Dart)", "Node.js", "Firebase", "REST APIs", "GetX"],
    linear: "from-orange-400 to-lime-400",
  },
  {
    title: "Frontend Developer",
    company: "Symbiotic Invest Limited",
    period: "June 2024 – September 2024",
    description:
      "Collaborated on a high-performance investment platform with an admin dashboard. Built reusable components, real-time data views, and smooth animations. Reduced UI build time by 40% and improved responsiveness.",
    technologies: ["React.js", "JavaScript", "TailwindCSS", "GitHub Actions", "REST APIs", "Framer Motion"],
    linear: "from-lime-400 to-rose-400",
  },
  {
    title: "Product Designer & UI Engineer",
    company: "Freelance / Independent Projects",
    period: "2022 – Present",
    description:
      "Designed and built web and mobile products from concept to launch. Created design systems and prototypes, translating them into production-ready code. Delivered scalable, visually consistent digital experiences.",
    technologies: ["Figma", "Flutter", "React", "Next.js", "Node.js"],
    linear: "from-rose-400 to-lime-400",
  },
  {
    title: "Independent Product Builder & Consultant",
    company: "",
    period: "2021 – Present",
    description:
      "Build and test independent product ideas and MVPs for real-world validation. Research UX trends and modern frameworks to refine product design systems. Advise startups on stack choices and deployment strategies.",
    technologies: [],
    linear: "from-orange-400 to-rose-400",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated Nebula Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-linear(circle at 10% 90%, rgba(251, 113, 133, 0.1) 0%, transparent 70%)",
              "radial-linear(circle at 90% 10%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
              "radial-linear(circle at 60% 60%, rgba(163, 230, 53, 0.08) 0%, transparent 70%)",
              "radial-linear(circle at 10% 90%, rgba(251, 113, 133, 0.1) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-40 left-20 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime-500/4 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto" ref={ref}>
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-extrabold mb-6 bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              className="h-1.5 w-32 mx-auto bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 rounded-full origin-left"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline line with linear */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-rose-400 via-orange-400 to-lime-400"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 80 }}
                  className="relative flex items-start group perspective-1000"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10 shrink-0"
                    whileHover={{ 
                      scale: 1.3,
                      rotateY: 20
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className={`w-8 h-8 md:w-12 md:h-12 bg-linear-to-br ${exp.linear} rounded-full flex items-center justify-center border-4 border-neutral-900 group-hover:border-neutral-800 transition-all duration-400 shadow-lg group-hover:shadow-rose-500/30`}>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div
                    className="ml-6 md:ml-8 flex-1"
                    whileHover={{ 
                      y: -8,
                      rotateY: 5,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <Card className="group-hover:shadow-2xl cursor-pointer group-hover:shadow-rose-500/20 border-neutral-700/60 bg-neutral-900/80 backdrop-blur-xl hover:border-neutral-600/80 transition-all duration-500 transform-gpu preserve-3d">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                          <div className="flex-1">
                            <CardTitle className="text-2xl text-white group-hover:text-rose-300 transition-colors duration-300">
                              {exp.title}
                            </CardTitle>
                            {exp.company && (
                              <CardDescription className="text-xl text-gray-300 font-semibold mt-1.5">
                                {exp.company}
                              </CardDescription>
                            )}
                          </div>
                          <Badge 
                            variant="outline" 
                            className="self-start bg-rose-500/10 border-rose-400/40 text-rose-300 px-4 py-1.5 text-base font-medium rounded-full"
                          >
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-300 mb-6 leading-relaxed text-base">
                          {exp.description}
                        </p>
                        {exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2.5">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="secondary"
                                className="bg-neutral-800/70 hover:bg-neutral-700/80 text-gray-200 px-3.5 py-1.5 text-sm font-medium transition-all duration-300 border border-neutral-600/50 hover:border-neutral-500/70"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}