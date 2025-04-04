"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeIn } from "@/components/fade-in"
import { PageHeader } from "@/components/page-header"
import { useToast } from "@/hooks/use-toast"

export function GoogleMap() {
  return (
    <div className="map-container border shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.5758356380066!2d1.3234091!3d47.9271889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3c1f7d0cd8c65%3A0x9e1f42213e3ff544!2s2%20Rte%20de%20Mondoucet%2C%2028200%20La%20Chapelle-du-Noyer!5e0!3m2!1sfr!2sfr!4v1712151000000!5m2!1sfr!2sfr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Campus de Nermont"
        aria-label="Carte du Campus de Nermont"
      ></iframe>
    </div>
  )
}

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <main className="flex-1">
      <PageHeader
        title="Contact"
        description="Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou demande."
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Envoyez-nous un message</h2>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Nos coordonnées</h2>
                <p className="text-muted-foreground">
                  Vous préférez nous contacter directement ? Voici nos coordonnées.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="size-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-muted-foreground">2 Rte de Mondoucet, 28200 La Chapelle-du-Noyer</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="size-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">07 49 12 86 28</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="size-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">proxy.info@nermont.fr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="size-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horaires d'ouverture</h3>
                    <p className="text-muted-foreground">Mardi et Jeudi : 12h à 14h</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Où nous trouver</h3>
                <GoogleMap />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}

