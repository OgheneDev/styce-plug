"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Variants } from "framer-motion"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Hi, I'm Oluwaferanmi"
  const typingSpeed = 100

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const codeSnippet = `// Hello, I'm Oluwaferanmi
const developer = {
  name: 'Oluwaferanmi',
  role: 'Product Designer & Full-Stack Developer',
  experience: 5,
  skills: [
    'React', 'Next.js', 'Node.js',
    'TypeScript', 'Express', 'TailwindCSS', 'GitHub Actions'
  ],
};

function createAmazingApps() {
  return developer.skills.map(magic) => {
    // Building something amazing...
  })
}`

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18
      }
    }
  }

  const cursorVariants: Variants = {
    blink: {
      opacity: [1, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center text-sm justify-center pt-16 relative overflow-hidden">
      {/* Animated Nebula Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
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
        <div className="absolute top-20 left-10 w-80 h-80 bg-rose-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-lime-500/6 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Typing Header */}
            <motion.div variants={itemVariants} className="h-24 flex items-center text-sm">
              <h1 className="text-5xl font-black bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
                {displayedText}
                <motion.span
                  variants={cursorVariants}
                  animate="blink"
                  className="inline-block w-1.5 h-16 bg-linear-to-b from-rose-400 to-lime-400 ml-2 rounded-full"
                />
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-5">
                I design, build, and scale digital products.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed max-w-xl">
                I craft elegant, high-performance{" "}
                <span className="text-rose-400 font-semibold">mobile</span> and{" "}
                <span className="text-orange-400 font-semibold">web experiences</span> that bridge{" "}
                <span className="text-lime-400 font-semibold">design and technology</span>. With a deep focus on user experience and solid technical execution, I turn ideas into polished, scalable products for startups and modern businesses.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-gray-400 font-semibold">What I can help you with:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center text-sm">
                  <div className="w-2.5 h-2.5 bg-rose-400 rounded-full mr-3 animate-pulse" />
                  Building smooth, beautiful apps for Android and iOS with Flutter — fast, reliable, and ready for scale.
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2.5 h-2.5 bg-orange-400 rounded-full mr-3 animate-pulse delay-200" />
                  Creating responsive and high-performing websites using React, Next.js, and the latest web technologies.
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2.5 h-2.5 bg-rose-400 rounded-full mr-3 animate-pulse delay-400" />
                  Designing intuitive, human-centered interfaces in Figma, where functionality meets aesthetics.
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2.5 h-2.5 bg-orange-400 rounded-full mr-3 animate-pulse delay-600" />
                  From concept to launch — I manage sprints, define product goals, and ensure design and engineering move in sync.
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="bg-linear-to-r from-rose-500 to-orange-500 text-sm hover:from-rose-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-rose-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-lime-400 text-lime-400 text-sm hover:bg-lime-400 hover:text-gray-900 font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Link href="#contact" className="flex items-center text-sm">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-8 mb-7">
              <Link href="https://github.com/OgheneDev" className="group">
                <Github className="h-7 w-7 text-gray-400 group-hover:text-rose-400 transition-all duration-300 group-hover:scale-125" />
              </Link>
              <Link href="https://www.linkedin.com/in/Oluwaferanmi-oghene-0242182ab" className="group">
                <Linkedin className="h-7 w-7 text-gray-400 group-hover:text-orange-400 transition-all duration-300 group-hover:scale-125" />
              </Link>
              <Link href="mailto:Oluwaferanmioghene72@gmail.com" className="group">
                <Mail className="h-7 w-7 text-gray-400 group-hover:text-lime-400 transition-all duration-300 group-hover:scale-125" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1.2, type: "spring", stiffness: 80 }}
            className="flex justify-center perspective-1000"
          >
            <motion.div
              className="relative group"
              whileHover={{ 
                scale: 1.03,
                rotateY: 8,
                rotateX: 5,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              {/* Code Editor Card */}
              <div className="bg-neutral-900/90 backdrop-blur-xl rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden w-[590px] transform-gpu">
                {/* Title Bar */}
                <div className="bg-neutral-800/80 px-5 py-4 flex items-center text-sm justify-between border-b border-neutral-700">
                  <div className="flex space-x-3">
                    <div className="w-3.5 h-3.5 bg-rose-500 rounded-full shadow-lg shadow-rose-500/50" />
                    <div className="w-3.5 h-3.5 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50" />
                    <div className="w-3.5 h-3.5 bg-lime-500 rounded-full shadow-lg shadow-lime-500/50" />
                  </div>
                  <span className="text-neutral-400 font-mono text-sm tracking-wider">portfolio.tsx</span>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <pre className="text-gray-300">
                    <code>
                      <span className="text-gray-500">// Hello, I'm Oluwaferanmi</span>{'\n'}
                      <span className="text-rose-400">const</span> <span className="text-orange-300">developer</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>{'\n'}
                      {'  '}<span className="text-rose-400">name</span><span className="text-white">:</span> <span className="text-lime-400">'Oluwaferanmi'</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-rose-400">role</span><span className="text-white">:</span> <span className="text-lime-400">'Product Designer & Full-Stack Developer'</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-rose-400">experience</span><span className="text-white">:</span> <span className="text-orange-400">5</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-rose-400">skills</span><span className="text-white">:</span> <span className="text-white">[</span>{'\n'}
                      {'    '}<span className="text-lime-400">'React'</span><span className="text-white">,</span> <span className="text-lime-400">'Next.js'</span><span className="text-white">,</span> <span className="text-lime-400">'Node.js'</span>{'\n'}
                      {'    '}<span className="text-lime-400">'TypeScript'</span><span className="text-white">,</span> <span className="text-lime-400">'Express'</span>{'\n'}
                      {'  '}<span className="text-white">],</span>{'\n'}
                      <span className="text-white">{'};'}</span>{'\n\n'}
                      <span className="text-rose-400">function</span> <span className="text-orange-300">createAmazingApps</span><span className="text-white">() {'{'}</span>{'\n'}
                      {'  '}<span className="text-rose-400">return</span> <span className="text-orange-300">developer</span><span className="text-white">.</span><span className="text-orange-300">skills</span><span className="text-white">.</span><span className="text-rose-400">map</span><span className="text-white">(</span><span className="text-orange-300">magic</span><span className="text-white">) =&gt; {'{'}</span>{'\n'}
                      {'    '}<span className="text-gray-500">// Building something amazing...</span>{'\n'}
                      {'  '}<span className="text-white">{'});'}</span>{'\n'}
                      <span className="text-white">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating Orbs */}
              <motion.div
                className="absolute -top-4 -right-4 w-5 h-5 bg-rose-400 rounded-full shadow-lg shadow-rose-500/50"
                animate={{ y: [-8, 8, -8], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-5 -left-5 w-7 h-7 bg-orange-400 rounded-full shadow-lg shadow-orange-500/50"
                animate={{ x: [-5, 5, -5], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tablet & Mobile Layouts - Updated with new theme */}
        <div className="md:hidden max-w-4xl mt-10 mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 px-4"
          >
            <motion.div variants={itemVariants} className="h-20 flex items-center text-sm justify-center">
              <h1 className="text-4xl font-black bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
                {displayedText}
                <motion.span
                  variants={cursorVariants}
                  animate="blink"
                  className="inline-block w-1 h-12 bg-linear-to-b from-rose-400 to-lime-400 ml-2 rounded-full"
                />
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white">I design, build, and scale digital products.</h2>
              <p className="text-gray-300 mt-3">
                I craft elegant, high-performance mobile and web experiences that bridge design and technology.
With a deep focus on user experience and solid technical execution, I turn ideas into polished, scalable products for startups and modern businesses.

              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-5 shadow-2xl">
              <div className="bg-neutral-800/80 px-4 py-3 flex items-center text-sm justify-between border-b border-neutral-700 rounded-t-xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-rose-500 rounded-full" />
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <div className="w-3 h-3 bg-lime-500 rounded-full" />
                </div>
                <span className="text-neutral-400 text-xs font-mono">portfolio.tsx</span>
              </div>
              <div className="p-4 font-mono text-xs text-left">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-gray-500">// Hello, I'm Oluwaferanmi</span>{'\n'}
                    <span className="text-rose-400">const</span> <span className="text-orange-300">developer</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>{'\n'}
                    {'  '}<span className="text-rose-400">name</span><span className="text-white">:</span> 
                    {'  '}<span className="text-rose-400">role</span>: <span className="text-lime-400">'Product Designer & <br /> Full-Stack Developer'</span>,{'\n'}
        {'  '}<span className="text-rose-400">experience</span>: <span className="text-orange-400">5</span>,{'\n'}
        {'  '}<span className="text-rose-400">skills</span>: [{'\n'}
        {'    '}<span className="text-lime-400">'React'</span>, <span className="text-lime-400">'Next.js'</span>, <span className="text-lime-400">'Node.js'</span>,{'\n'}
        {'    '}<span className="text-lime-400">'TypeScript'</span>, <br /> <span className="text-lime-400">'Express'</span>, <span className="text-lime-400">'TailwindCSS'</span>,{'\n'}
        {'    '}<span className="text-lime-400">'GitHub Actions'</span>{'\n'}
        {'  '}],{'\n'}
        {'};'}{'\n\n'}
        <span className="text-rose-400">function</span> <span className="text-orange-300">createAmazingApps</span>() {'{'}{'\n'}
        {'  '}<span className="text-rose-400">return</span> developer.skills.map(<span className="text-orange-300">magic</span>) =&gt; {'{'}{'\n'}
        {'    '}<span className="text-gray-500">// Building something amazing...</span>{'\n'}
        {'  '}{'});'}{'\n'}
        {'}'}
                  </code>
                </pre>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <Button className="bg-linear-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-gray-900">
                <Link href="#contact" className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4" /> Get In Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center space-x-8 pt-4 mb-10">
              <Link href="https://github.com/OgheneDev" className="group">
                <Github className="h-7 w-7 text-gray-400 group-hover:text-rose-400 transition-all group-hover:scale-125" />
              </Link>
              <Link href="https://www.linkedin.com/in/Oluwaferanmi-oghene-0242182ab" className="group">
                <Linkedin className="h-7 w-7 text-gray-400 group-hover:text-orange-400 transition-all group-hover:scale-125" />
              </Link>
              <Link href="mailto:Oluwaferanmioghene72@gmail.com" className="group">
                <Mail className="h-7 w-7 text-gray-400 group-hover:text-lime-400 transition-all group-hover:scale-125" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}