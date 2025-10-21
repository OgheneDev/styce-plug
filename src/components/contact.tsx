"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Swal from "sweetalert2"


export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const contactInfo = [
    { Icon: Mail, text: "styceplug@gmail.com", href: "mailto:styceplug@gmail.com" },
    { Icon: Phone, text: "+234 806 700 0178", href: "tel:+2348067000178" },
    { Icon: FaWhatsapp, text: "+234 802 359 0291", href: "https://wa.me/2348023590291" },
    { Icon: MapPin, text: "Abuja, Nigeria", href: "#" },
  ]

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Reset form
      setFormData({ name: "", email: "", message: "" })
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    } catch (error) {
      console.error('Error:', error)
      Swal.fire({
        title: "Error!",
        text: "Failed to send your message. Please try again later.",
        icon: "error"
      });
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-linear-to-t from-neutral-950 to-neutral-800 relative overflow-hidden">
      {/* Animated Nebula Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              "radial-gradient(circle at 15% 85%, rgba(251, 113, 133, 0.12) 0%, transparent 60%)",
              "radial-gradient(circle at 85% 15%, rgba(251, 146, 60, 0.12) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(163, 230, 53, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 15% 85%, rgba(251, 113, 133, 0.12) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-32 left-16 w-96 h-96 bg-rose-500/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
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

          {/* Contact Info + Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info Grid */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Card className="bg-neutral-900/80 backdrop-blur-xl border-neutral-700/60 shadow-2xl shadow-rose-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold bg-linear-to-r from-rose-400 via-orange-400 to-lime-400 bg-clip-text text-transparent">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-300 font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-neutral-800/50 border-neutral-700 focus:border-rose-500 text-white placeholder:text-gray-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-300 font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-neutral-800/50 border-neutral-700 focus:border-orange-500 text-white placeholder:text-gray-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or idea..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-neutral-800/50 border-neutral-700 focus:border-lime-500 text-white placeholder:text-gray-500 resize-none transition-all duration-300"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-sm cursor-pointer bg-linear-to-r from-rose-500 via-orange-500 to-lime-500 hover:from-rose-600 hover:via-orange-600 hover:to-lime-600 text-white font-bold py-6 rounded-xl shadow-lg shadow-rose-500/30 transition-all duration-400 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="flex items-center gap-2"
                          >
                            <Send className="h-5 w-5" />
                            Sending...
                          </motion.div>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.div>

                    {submitStatus === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-400 text-center font-medium"
                      >
                        Message sent successfully! I'll get back to you soon.
                      </motion.p>
                    )}
                    {submitStatus === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-center font-medium"
                      >
                        Oops! Something went wrong. Please try again.
                      </motion.p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

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