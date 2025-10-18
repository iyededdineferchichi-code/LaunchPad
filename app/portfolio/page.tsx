"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VideoPlayer } from "@/components/video-player"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { ref: heroRef, isInView: heroInView } = useInView()
  const { ref: gridRef, isInView: gridInView } = useInView()
  const { ref: ctaRef, isInView: ctaInView } = useInView()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const whatsappLink =
    "https://wa.me/21628119128?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20vidéo"

  const portfolioVideos = [
    {
      title: "Vidéo 1",
      src: "/video-2.mp4",
      description: "Montage professionnel avec transitions fluides",
    },
    {
      title: "Leads Video 2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leads%20Video%202-PjvP77k1pcHWxJIHLFZBLEEkFUYkBF.mp4",
      description: "Contenu optimisé pour la conversion",
    },
    {
      title: "Focus",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Focus-C2qjtoVwtNPg7gKr0vGnFrobbLasYd.mp4",
      description: "Storytelling captivant et engageant",
    },
    {
      title: "Joy",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Joy-BaG0JuX0AMblwrUguUWCaaPwbZCRE0.mp4",
      description: "Émotion et authenticité au cœur du message",
    },
    {
      title: "Projet 5",
      src: "/professional-video-editing-example-.jpg",
      description: "Édition vidéo professionnelle de haut niveau",
    },
    {
      title: "Projet 6",
      src: "/professional-video-editing-example-.jpg",
      description: "Montage créatif et innovant",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {isLoading && <LoadingSpinner />}

      <nav className="fixed top-4 left-4 right-4 z-50 bg-zinc-950/40 backdrop-blur-2xl border border-zinc-800/40 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Retour</span>
          </Link>

          <h1 className="text-base sm:text-xl font-bold flex-1 text-center px-2 truncate">Portefeuille</h1>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm hover:scale-110 transition-all">
              <span className="hidden sm:inline">Contactez-Nous</span>
              <span className="sm:hidden">Contact</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-12 sm:pb-24 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/creative-video-production-studio.jpg"
            alt="Video production studio"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance text-zinc-50">
              Aperçu de Notre Portefeuille
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 text-pretty leading-relaxed">
              Découvrez tous les projets vidéo que nous avons réalisés. Chaque vidéo représente notre engagement envers
              la qualité, la créativité et l'impact.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={gridRef} className="py-12 sm:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/workflow-diagram-creative-process.jpg"
            alt="Creative workflow"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {portfolioVideos.map((video, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-zinc-900 border-2 border-zinc-800 hover:border-cyan-500 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transform ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: gridInView ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="aspect-[9/16] overflow-hidden bg-zinc-950 w-full">
                  {video.src.endsWith(".mp4") ? (
                    <VideoPlayer src={video.src} title={video.title} description={video.description} />
                  ) : (
                    <img
                      src={video.src || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="py-16 sm:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/last-1tLy85a0O9aFCR9SEIGXD3YGKboxop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/80 to-zinc-950" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance text-zinc-50 transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Prêt à transformer votre contenu ?
            </h2>
            <p
              className={`text-base sm:text-xl text-zinc-400 mb-6 sm:mb-10 text-pretty leading-relaxed transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: ctaInView ? "100ms" : "0ms" }}
            >
              Parlons de votre projet et découvrez comment nous pouvons créer des vidéos qui captent l'attention et
              génèrent des résultats.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: ctaInView ? "200ms" : "0ms" }}
            >
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 hover:scale-105 transition-all font-bold shadow-2xl">
                Discutons Votre Projet !
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo-new.jpg" alt="Content Craft" className="h-8 w-auto" />
              <div className="flex flex-col leading-none">
                <div className="flex flex-row items-baseline gap-1">
                  <div className="text-xs font-black text-white">CONTENT</div>
                  <div className="text-xs font-bold text-zinc-100">CRAFT</div>
                </div>
                <div className="text-[10px] text-zinc-400 tracking-wider">
                  VIDEO <span className="text-cyan-500">•</span> EDITING
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400">© 2025 Content Craft. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
