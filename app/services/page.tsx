import { Monitor, HardDrive, Cpu, Wrench, Laptop, Smartphone, Headphones } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { PageHeader } from "@/components/page-header"

export default function ServicesPage() {
  const services = [
    {
      icon: <Monitor className="size-6 text-primary" />,
      title: "Diagnostic des performances de votre ordinateur",
      description:
        "Analyse complète des performances de votre ordinateur pour identifier les problèmes et optimiser son fonctionnement.",
      price: "10€",
    },
    {
      icon: <Cpu className="size-6 text-primary" />,
      title: "Conseils et montage de PC personnalisé",
      description:
        "Recommandations sur les composants et assemblage d'un PC sur mesure selon vos besoins et votre budget.",
      price: "15€",
    },
    {
      icon: <Smartphone className="size-6 text-primary" />,
      title: "Remplacement d'écran, de connecteur de charge ou de batterie pour téléphone",
      description: "Réparation professionnelle de votre smartphone avec des pièces de qualité.",
      price: "25€",
    },
    {
      icon: <Laptop className="size-6 text-primary" />,
      title: "Réinitialisation d'ordinateurs et installation de logiciels",
      description:
        "Remise à zéro de votre système et installation des logiciels essentiels pour un fonctionnement optimal.",
      price: "20€",
    },
    {
      icon: <Wrench className="size-6 text-primary" />,
      title: "Nettoyage approfondi et optimisation des systèmes",
      description:
        "Élimination des fichiers inutiles, optimisation des performances et maintenance complète de votre système.",
      price: "15€",
    },
    {
      icon: <HardDrive className="size-6 text-primary" />,
      title: "Tentative de récupération de données sur clé USB endommagée",
      description: "Récupération de vos fichiers importants sur des supports de stockage endommagés ou corrompus.",
      price: "15€",
    },
    {
      icon: <Headphones className="size-6 text-primary" />,
      title: "Formation / Hotline",
      description: "Assistance et formation personnalisée pour vous aider à maîtriser vos outils informatiques.",
      price: "Nous consulter",
    },
  ]

  return (
    <main className="flex-1">
      <PageHeader title="Nos Services" description="Découvrez notre gamme complète de services informatiques" />

      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.05} className="group">
                <div className="relative p-6 bg-white rounded-lg border border-primary/10 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 glow-on-hover">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-primary">{service.title}</h3>
                  <p className="text-sm text-primary/70 mb-4">{service.description}</p>
                  <p className="text-sm font-medium text-primary">{service.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <FadeIn className="max-w-[800px] mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
              Besoin d'un service spécifique ?
            </h2>
            <p className="text-primary/80 md:text-lg">
              Nous proposons également des solutions sur mesure adaptées à vos besoins spécifiques. N'hésitez pas à nous
              contacter pour discuter de votre projet.
            </p>
            <p className="text-primary/80 md:text-lg">
              <strong>Disponibilité :</strong> Mardi et Jeudi de 12h à 14h au campus de Nermont
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

