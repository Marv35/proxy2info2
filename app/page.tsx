import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Monitor, Cpu, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                <AnimatedText text="Bienvenue chez Proxy Info" />
              </h1>
              <p className="max-w-[600px] text-primary/80 md:text-xl">
                Votre partenaire informatique de confiance au campus de Nermont. Fondé par des étudiants passionnés en
                1ère année de BTS CIEL, nous proposons des solutions informatiques adaptées à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group bg-primary hover:bg-primary/90">
                  <Link href="/services">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image src="/images/logo.png" alt="Proxy Info Services" fill className="object-contain" priority />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary">
              Nos services principaux
            </h2>
            <p className="mt-4 text-primary/80 md:text-lg">
              Des solutions informatiques complètes pour tous vos besoins
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <FadeIn delay={0.1} className="group">
              <div className="relative p-6 bg-white rounded-lg border border-primary/10 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 glow-on-hover">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Monitor className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-primary">Diagnostic des performances</h3>
                <p className="text-sm text-primary/70 mb-4">Analyse complète des performances de votre ordinateur</p>
                <p className="text-sm font-medium text-primary">10€</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="group">
              <div className="relative p-6 bg-white rounded-lg border border-primary/10 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 glow-on-hover">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Cpu className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-primary">Montage PC personnalisé</h3>
                <p className="text-sm text-primary/70 mb-4">Conseils et montage de PC selon vos besoins</p>
                <p className="text-sm font-medium text-primary">15€</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="group">
              <div className="relative p-6 bg-white rounded-lg border border-primary/10 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 glow-on-hover">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-primary">Réparation téléphone</h3>
                <p className="text-sm text-primary/70 mb-4">Remplacement d'écran, connecteur ou batterie</p>
                <p className="text-sm font-medium text-primary">25€</p>
              </div>
            </FadeIn>
          </div>
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary text-primary hover:bg-primary/10"
            >
              <Link href="/services">
                Voir tous nos services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn className="order-2 lg:order-1 relative h-[300px] sm:h-[400px]">
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/campus.png" alt="Campus de Nermont" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2 space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary">
                Qui sommes-nous ?
              </h2>
              <p className="text-primary/80 md:text-lg">
                Proxy Info est né de la passion d'étudiants en 1ère année de BTS CIEL déterminés à offrir des services
                informatiques de qualité à des prix abordables au campus de Nermont.
              </p>
              <p className="text-primary/80 md:text-lg">
                Notre équipe jeune et dynamique combine expertise technique et approche pédagogique pour vous
                accompagner dans tous vos projets informatiques.
              </p>
              <div>
                <Button asChild variant="outline" className="group border-primary text-primary hover:bg-primary/10">
                  <Link href="/valeurs">
                    Découvrir nos valeurs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn className="max-w-[800px] mx-auto space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Besoin d'assistance informatique ?
            </h2>
            <p className="text-white/90 md:text-lg">
              Notre équipe est prête à vous aider. Contactez-nous dès aujourd'hui pour discuter de vos besoins.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" variant="outline" className="group border-white text-white hover:bg-white/10">
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

