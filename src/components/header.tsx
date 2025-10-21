"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Variants } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  }

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 30, rotateY: -20 },
    open: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
  }

  const handleResumeClick = () => {
    const link = document.createElement("a")
    link.href = "/assets/oluwaferanmi-resume.pdf"
    link.download = "oluwaferanmi-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/60 shadow-2xl shadow-rose-500/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="relative group">
          <motion.div
            className="text-3xl font-black bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent"
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0 0 20px rgba(251, 113, 133, 0.6))"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Oluwaferanmi
          </motion.div>
          <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-rose-400 to-lime-400 rounded-full"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.href} 
                className="text-gray-300 text-sm font-medium hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-rose-400 to-lime-400 rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              className="bg-linear-to-r text-sm cursor-pointer from-rose-500 via-orange-500 to-lime-500 hover:from-rose-600 hover:via-orange-600 hover:to-lime-600 text-white font-bold shadow-lg shadow-rose-500/30 px-6 py-2.5 rounded-xl transition-all duration-300"
              onClick={handleResumeClick}
            >
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </motion.div>
        </Button>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 min-h-screen bg-linear-to-br from-neutral-950 via-rose-950/20 to-lime-950/20 backdrop-blur-2xl z-100 overflow-hidden"
            >
              <div className="h-dvh flex flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-5 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-black bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent"
                  >
                    Oluwaferanmi
                  </motion.div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white"
                  >
                    <X className="h-7 w-7" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <motion.div 
                  className="flex-1 overflow-y-auto py-10 px-6 hide-scrollbar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        custom={index}
                        className="border-b border-neutral-800/40 last:border-0"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-5 text-2xl font-semibold text-gray-200 hover:text-white transition-all duration-300"
                        >
                          <motion.div
                            whileHover={{ x: 16, color: "#f43f5e" }}
                            className="flex items-center justify-between"
                          >
                            <span>{item.label}</span>
                            <motion.span
                              initial={{ opacity: 0, x: -15 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="text-rose-400 text-3xl font-light"
                            >
                              →
                            </motion.span>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div 
                  variants={itemVariants}
                  className="p-6 border-t border-neutral-800/60 bg-neutral-950/80 backdrop-blur-xl"
                >
                  <Button
                    className="w-full bg-linear-to-r cursor-pointer from-rose-500 via-orange-500 to-lime-500 hover:from-rose-600 hover:via-orange-600 hover:to-lime-600 text-white font-bold text-lg py-7 rounded-2xl shadow-2xl shadow-rose-500/40 transition-all duration-400"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleResumeClick()
                    }}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}