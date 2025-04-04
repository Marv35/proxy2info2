"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, User, AtSign, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { GoogleMap } from "@/components/google-map"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Préparer le contenu de l'email
    const subject = "Nouveau message depuis le site Proxy Info"
    const body = `
Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `

    // Créer le lien mailto
    const mailtoLink = `mailto:message.proxyinfo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Ouvrir le client de messagerie par défaut
    window.location.href = mailtoLink

    // Simuler un délai pour l'animation de chargement
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message préparé !",
      description: "Votre client de messagerie a été ouvert avec le message préparé.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <MapPin className="size-6" />,
      title: "Adresse",
      content: "2 Rte de Mondoucet, 28200 La Chapelle-du-Noyer",
      delay: 0.1,
    },
    {
      icon: <Phone className="size-6" />,
      title: "Téléphone",
      content: "07 49 12 86 28",
      delay: 0.2,
    },
    {
      icon: <Mail className="size-6" />,
      title: "Email",
      content: "proxy.info@nermont.fr",
      delay: 0.3,
    },
    {
      icon: <Clock className="size-6" />,
      title: "Horaires d'ouverture",
      content: "Mardi et Jeudi : 12h à 14h",
      delay: 0.4,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-primary">
              Contactez-nous
            </h1>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou demande.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
                {/* Form Side */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold text-primary mb-6">
                    Envoyez-nous un message
                  </motion.h2>

                  <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          required
                          className="pl-12 py-6 bg-background/50 border-primary/20 focus:ring-2 focus:ring-primary/50"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                          <User className="size-5" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Votre email"
                          required
                          className="pl-12 py-6 bg-background/50 border-primary/20 focus:ring-2 focus:ring-primary/50"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                          <AtSign className="size-5" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Votre message"
                          rows={5}
                          required
                          className="pl-12 pt-6 bg-background/50 border-primary/20 focus:ring-2 focus:ring-primary/50"
                        />
                        <div className="absolute left-3 top-8 text-primary">
                          <MessageSquare className="size-5" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 bg-primary hover:bg-primary/90 transition-all"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Envoyer le message
                            <Send className="ml-2 size-5" />
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                </motion.div>

                {/* Info Side */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold text-primary mb-6">
                    Nos coordonnées
                  </motion.h2>

                  <motion.div variants={containerVariants} className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div key={index} variants={itemVariants} className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-primary mb-1">{item.title}</h3>
                          <p className="text-primary/70">{item.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-6">
                    <h3 className="font-medium text-primary mb-4">Où nous trouver</h3>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <GoogleMap />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

