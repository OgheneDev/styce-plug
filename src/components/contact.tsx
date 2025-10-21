"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    { Icon: Mail, text: "styceplug@gmail.com", href: "mailto:styceplug@gmail.com" },
    { Icon: Phone, text: "+234 806 700 0178", href: "tel:+2348067000178" },
    { Icon: FaWhatsapp, text: "+234 802 359 0291", href: "https://wa.me/2348023590291" },
    { Icon: MapPin, text: "Abuja, Nigeria", href: "#" },
  ]

  return (
    <section id="contact" className="py-24 bg-linear-to-t from-neutral-950 to-neutral-800 relative overflow-hidden">
      {/* Animated Nebula Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              "radial-linear(circle at 15% 85%, rgba(251, 113, 133, 0.12) 0%, transparent 60%)",
              "radial-linear(circle at 85% 15%, rgba(251, 146, 60, 0.12) 0%, transparent 60%)",
              "radial-linear(circle at 50% 50%, rgba(163, 230, 53, 0.1) 0%, transparent 60%)",
              "radial-linear(circle at 15% 85%, rgba(251, 113, 133, 0.12) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-32 left-16 w-96 h-96 bg-rose-500/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto" ref={ref}>
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              className="h-1.5 w-32 mx-auto bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 rounded-full origin-left"
            />
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 8,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <Link href={item.href} target={item.Icon === FaWhatsapp ? "_blank" : undefined} rel={item.Icon === FaWhatsapp ? "noopener noreferrer" : undefined}>
                  <Card className="h-full bg-neutral-900/80 backdrop-blur-xl border-neutral-700/60 hover:border-neutral-600/80 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/20 transform-gpu preserve-3d cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className="p-3 rounded-xl bg-linear-to-br from-rose-500 to-orange-500 shadow-lg"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <item.Icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors duration-300">
                          {item.Icon === Mail && "Email"}
                          {item.Icon === Phone && "Phone"}
                          {item.Icon === FaWhatsapp && "WhatsApp"}
                          {item.Icon === MapPin && "Location"}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Optional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="text-center mt-16"
          >
            <p className="text-gray-300 text-lg mb-8 font-medium max-w-2xl mx-auto">
              I'm always excited to collaborate on meaningful projects. Whether it's building a product, consulting on design, or just connecting — reach out!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="mailto:styceplug@gmail.com">
                <button className="px-10 py-4 bg-linear-to-r text-sm from-rose-500 via-orange-500 to-lime-500 hover:from-rose-600 hover:via-orange-600 hover:to-lime-600 text-white font-bold cursor-pointer rounded-xl shadow-2xl shadow-rose-500/40 transition-all duration-400">
                  Start a Conversation
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}