import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { GoogleMap } from "@/components/google-map"

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 bg-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image src="/images/logo.png" alt="Proxy Info Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-primary">Proxy Info</span>
            </div>
            <p className="text-sm text-primary/80">
              Fondé par des étudiants en 1ère année de BTS CIEL, Proxy Info est là pour résoudre vos problèmes
              informatiques au campus de Nermont.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-primary">Contact</h3>
            <div className="space-y-2 text-sm text-primary/80">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <span>proxy.info@nermont.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <span>07 49 12 86 28</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                <span>Mardi et Jeudi : 12h à 14h</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <span>2 Rte de Mondoucet, 28200 La Chapelle-du-Noyer</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-primary">Localisation</h3>
            <GoogleMap />
          </div>

          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-primary">Liens rapides</h3>
                  <nav className="flex flex-col gap-2 mt-2">
                    <Link href="/" className="text-sm text-primary/80 hover:text-primary transition-colors">
                      Accueil
                    </Link>
                    <Link href="/services" className="text-sm text-primary/80 hover:text-primary transition-colors">
                      Services
                    </Link>
                    <Link href="/valeurs" className="text-sm text-primary/80 hover:text-primary transition-colors">
                      Nos valeurs
                    </Link>
                    <Link href="/contact" className="text-sm text-primary/80 hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </nav>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-primary">Nos valeurs</h3>
                  <div className="space-y-2 mt-2 text-sm text-primary/80">
                    <p>Service de proximité</p>
                    <p>Réparations efficaces</p>
                    <p>Garantie sur interventions</p>
                    <p>Disponibilité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary/70">&copy; {new Date().getFullYear()} Proxy Info. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

