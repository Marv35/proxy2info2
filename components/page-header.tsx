import { FadeIn } from "@/components/fade-in"

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary/10 border-b border-primary/10">
      <div className="container px-4 md:px-6">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{title}</h1>
          {description && <p className="mt-4 text-primary/80 md:text-xl">{description}</p>}
        </FadeIn>
      </div>
    </section>
  )
}

