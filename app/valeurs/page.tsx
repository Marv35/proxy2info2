import { Lightbulb, Shield, Clock, Users } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { PageHeader } from "@/components/page-header"

export default function ValeursPage() {
  const values = [
    {
      icon: <Users className="size-10 text-primary" />,
      title: "Service de proximité",
      description: "Conseils personnalisés adaptés à vos besoins spécifiques.",
    },
    {
      icon: <Shield className="size-10 text-primary" />,
      title: "Réparations efficaces",
      description: "Solutions rapides et professionnelles pour tous vos problèmes informatiques.",
    },
    {
      icon: <Lightbulb className="size-10 text-primary" />,
      title: "Garantie sur interventions",
      description: "Nous nous engageons sur la qualité de notre travail.",
    },
    {
      icon: <Clock className="size-10 text-primary" />,
      title: "Disponibilité",
      description: "Une équipe réactive, même en cas d'urgence informatique.",
    },
  ]

  return (
    <main className="flex-1">
      <PageHeader
        title="Nos Valeurs et Engagements"
        description="Pourquoi les clients devraient choisir Proxy Info ?"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1} className="group">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-primary/10 shadow-sm transition-all duration-200 hover:shadow-md glow-on-hover">
                  <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-primary">{value.title}</h3>
                  <p className="text-primary/70">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <FadeIn className="max-w-[800px] mx-auto space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center text-primary">
              Notre engagement envers vous
            </h2>
            <p className="text-primary/80 md:text-lg text-center">
              Chez Proxy Info, nous nous engageons à offrir des services informatiques de qualité, accessibles à tous.
              Fondée par des étudiants en 1ère année de BTS CIEL, notre entreprise allie expertise technique et approche
              pédagogique.
            </p>
            <p className="text-primary/80 md:text-lg text-center">
              Nous croyons en la transparence, l'honnêteté et le professionnalisme. Chaque intervention est réalisée
              avec soin et précision, en veillant à répondre parfaitement à vos attentes.
            </p>
            <p className="text-primary/80 md:text-lg text-center">
              Notre objectif est de démystifier l'informatique et de vous accompagner dans votre quotidien numérique, en
              vous proposant des solutions adaptées et en vous transmettant notre savoir-faire.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

