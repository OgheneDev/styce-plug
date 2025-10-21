"use client"

import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Code2, Smartphone, Server, Palette } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Variants } from "framer-motion"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Dart", "JavaScript", "HTML5", "Tailwind CSS", "TypeScript"],
      icon: Code2,
      linear: "from-rose-400 to-orange-400",
      glow: "shadow-rose-500/20"
    },
    {
      title: "Frontend / Mobile",
      skills: ["Flutter", "React", "Next.js", "Tailwind CSS"],
      icon: Smartphone,
      linear: "from-orange-400 to-lime-400",
      glow: "shadow-orange-500/20"
    },
    {
      title: "Backend / DevOps",
      skills: ["Node.js", "Express", "Firebase", "MongoDB", "REST APIs", "Vercel", "GitHub Actions"],
      icon: Server,
      linear: "from-lime-400 to-rose-400",
      glow: "shadow-lime-500/20"
    },
    {
      title: "Design & Product",
      skills: ["Figma", "Notion", "Trello", "Miro"],
      icon: Palette,
      linear: "from-rose-400 to-lime-400",
      glow: "shadow-rose-500/20"
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.85,
      rotateX: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.8
      }
    }
  }

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    })
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Nebula Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-linear(circle at 15% 70%, rgba(251, 113, 133, 0.12) 0%, transparent 60%)",
              "radial-linear(circle at 85% 30%, rgba(251, 146, 60, 0.12) 0%, transparent 60%)",
              "radial-linear(circle at 50% 50%, rgba(163, 230, 53, 0.1) 0%, transparent 60%)",
              "radial-linear(circle at 15% 70%, rgba(251, 113, 133, 0.12) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-32 left-10 w-96 h-96 bg-rose-500/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-extrabold mb-6 bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              className="h-1.5 w-32 mx-auto bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 rounded-full origin-left"
            />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  rotateY: 6,
                  transition: { type: "spring", stiffness: 200 }
                }}
                className="group perspective-1000"
              >
                <Card className={`h-full bg-neutral-900/80 backdrop-blur-xl cursor-pointer border-neutral-700/60 hover:border-neutral-600/80 transition-all duration-500 hover:shadow-2xl ${category.glow} transform-gpu preserve-3d`}>
                  <CardHeader className="pb-5">
                    <div className="flex items-center space-x-4 mb-3">
                      <motion.div 
                        className={`p-3 rounded-xl bg-linear-to-br ${category.linear} shadow-lg`}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <category.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <CardTitle className={`text-xl font-bold bg-linear-to-r ${category.linear} bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-200 transition-all duration-400`}>
                        {category.title}
                      </CardTitle>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "70px" } : {}}
                      transition={{ delay: 0.7 + index * 0.15, duration: 0.7 }}
                      className={`h-1 bg-linear-to-r ${category.linear} rounded-full`}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          custom={skillIndex}
                          variants={badgeVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          whileHover={{ 
                            scale: 1.1,
                            y: -3,
                            rotate: 2,
                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="bg-neutral-800/70 backdrop-blur-sm cursor-pointer text-gray-200 border border-neutral-600/50 hover:border-neutral-500/70 hover:bg-neutral-700/80 text-sm font-medium px-3 py-1.5 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "25+", label: "Technologies", color: "text-rose-400" },
              { number: "3+", label: "Years Experience", color: "text-orange-400" },
              { number: "15+", label: "Projects Completed", color: "text-lime-400" },
              { number: "100%", label: "Client Satisfaction", color: "text-rose-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ 
                  delay: 1.4 + index * 0.12, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotate: 3,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4)"
                }}
                className="text-center p-6 rounded-2xl bg-neutral-900/70 backdrop-blur-md border border-neutral-700/50 hover:border-neutral-600/70 transition-all duration-400 group cursor-default"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-2 group-hover:drop-shadow-lg transition-all`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-neutral-400 text-sm font-semibold tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="text-center mt-16"
          >
            <p className="text-gray-300 text-lg mb-8 font-medium">
              Ready to work together? Let's build something amazing!
            </p>
            <Link href="#contact">
              <motion.button
                whileHover={{ 
                  scale: 1.07,
                  boxShadow: "0 15px 35px rgba(251, 113, 133, 0.3)",
                  background: "linear-linear(to right, #f43f5e, #fb923c, #a3e635)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-linear-to-r text-sm cursor-pointer from-rose-500 via-orange-500 to-lime-500 text-white font-bold rounded-xl shadow-xl transition-all duration-400"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}