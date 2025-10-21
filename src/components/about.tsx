"use client"

import { Card, CardContent } from "./ui/card"
import { Code, Palette, Zap, Heart, Coffee, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Variants } from "framer-motion"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows best practices.",
      accentColor: "text-rose-400",
      bglinear: "from-rose-500/10 to-rose-900/10",
      hoverGlow: "hover:shadow-rose-500/20"
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Creating consistent and reusable component libraries that scale across projects.",
      accentColor: "text-orange-400",
      bglinear: "from-orange-500/10 to-orange-900/10",
      hoverGlow: "hover:shadow-orange-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and excellent user experience.",
      accentColor: "text-lime-400",
      bglinear: "from-lime-500/10 to-lime-900/10",
      hoverGlow: "hover:shadow-lime-500/20"
    }
  ]

  const stats = [
    { icon: Heart, value: "10+", label: "Happy Clients", color: "text-red-400" },
    { icon: Code, value: "25+", label: "Technologies", color: "text-blue-400" },
    { icon: Coffee, value: "100+", label: "Cups of Coffee", color: "text-yellow-400" },
    { icon: Users, value: "10+", label: "Team Projects", color: "text-green-400" }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  }

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  const featureVariants: Variants = {
    hidden: { opacity: 0, rotate: 90, y: 100 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        bounce: 0.4
      }
    }
  }

  const statVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "backOut"
      }
    })
  }

  return (
    <section id="about" className="py-24 bg-linear-to-t from-neutral-950 to-neutral-800 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_50%)] opacity-50"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[conic-linear(from_0deg_at_50%_50%,rgba(255,165,0,0.05)_0%,transparent_50%,rgba(0,255,0,0.05)_100%)] opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto" ref={ref}>
          {/* Centered Title with Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, type: "spring" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-extrabold mb-6 bg-linear-to-l from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="h-1.5 w-32 mx-auto bg-linear-to-r from-rose-400 to-lime-400 rounded-full animate-pulse"
            />
          </motion.div>

          {/* Narrative Paragraphs in Stacked Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 mb-20"
          >
            <motion.div variants={paragraphVariants}>
              <Card className="bg-neutral-900/80 backdrop-blur-lg border-neutral-700/40 shadow-2xl">
                <CardContent className="p-8 pt-6">
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-5"
                    whileHover={{ scale: 1.02, color: "#FB7185" }}
                  >
                    Hi there! 👋
                  </motion.h3>
                  <p className="text-base text-gray-200 leading-loose">
                    I'm a <span className="text-rose-400 font-semibold">Product Designer</span> & <span className="text-orange-400 font-semibold">Full-Stack Developer </span>
                    who blends creativity with technical precision. Over the past few years, I’ve helped startups and businesses bring their ideas to life, from early sketches to App Store-ready releases.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={paragraphVariants}>
              <Card className="bg-neutral-900/80 backdrop-blur-lg border-neutral-700/40 shadow-2xl">
                <CardContent className="p-8 pt-6">
                  <p className="text-base text-gray-200 leading-loose">
                    My core languages are <span className="text-lime-400 font-bold">Dart</span> and <span className="text-rose-400 font-bold">JavaScript</span>, and I work primarily with Flutter, React, and Node.js. I love building products that don’t just work, but feel right, products that solve problems, delight users, and leave a lasting impression.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={paragraphVariants}>
              <Card className="bg-neutral-900/80 backdrop-blur-lg border-neutral-700/40 shadow-2xl">
                <CardContent className="p-8 pt-6">
                  <p className="text-base text-gray-200 leading-loose">
                    I believe good products are born at the intersection of <span className="font-bold text-orange-400">design clarity</span> and <span className="font-bold text-lime-400">technical depth</span>, and that’s exactly where I thrive.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Horizontal Features Carousel-like */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: -2 + index * 2,
                    transition: { type: "spring", stiffness: 200 }
                  }}
                  className="flex-1 max-w-sm"
                >
                  <Card className={`bg-linear-to-br ${feature.bglinear} border-none rounded-3xl cursor-pointer overflow-hidden ${feature.hoverGlow} transition-all duration-500`}>
                    <CardContent className="p-10 pt-5 text-center">
                      <motion.div
                        className="mb-6 inline-block"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.8 }}
                      >
                        <feature.icon className={`h-12 w-12 ${feature.accentColor} mx-auto`} />
                      </motion.div>
                      <h3 className={`text-2xl font-bold ${feature.accentColor} mb-4`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats as Inline Badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={statVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4)"
                }}
                className="px-8 py-4 bg-neutral-900/70 backdrop-blur-md rounded-full border border-neutral-600/50 flex md:gap-3 flex-col md:flex-row items-center space-x-4 cursor-pointer"
              >
                <stat.icon className={`h-8 w-8 mx-auto md:mx-0 ${stat.color}`} />
                <div>
                  <div className={`text-2xl font-bold text-center md:text-start ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm text-center md:text-start">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}