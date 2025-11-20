"use client"

import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { LoadingSpinner } from "@/components/loading-spinner"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ArrowLeft } from "lucide-react"

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
    "https://wa.me/21628119128?text=Bonjour%2C%20je%20souhaite%20discuter%20avec%20vous%20de%20ma%20stratégie%20de%20contenu."

  const calendlyLink = "https://calendly.com/iyedferchichi394/30min"

  const videos = [
    {
      title: "Miro App",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miro%20App-Yh64lG4gLmb0PCyZPHBNcjakTixKCE.mp4",
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
      title: "Faculty hustle",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Faculty%20hustle-gc2AmNFj1O90wA5jsd4ioJhUss85B7.mp4",
      description: "Édition vidéo professionnelle de haut niveau",
    },
    {
      title: "Chris 1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chris%20Style%201-RlD0UIQpw2LSJsvIxVn3aW266rnp0B.mp4",
      description: "Montage créatif et innovant",
    },
    {
      title: "Wealth",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wealth-HCiwacfE5TuNElrXX12RTRZvPtOqY1.mp4",
      description: "Montage professionnel avec transitions fluides",
    },
    {
      title: "Indian Companies",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Indian%20Companies-kp0KtO3MQHhriGtDRWImv271nbkgeX.mp4",
      description: "Contenu optimisé pour la conversion",
    },
    {
      title: "School",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/School-vLtefRA2u5SRkhTQC9TGVEkNA0brTu.mp4",
      description: "Montage professionnel avec transitions fluides",
    },
    {
      title: "Iphone",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Iphone-zEs2I2dajug28TGeqPnSj7rbyVsY6a.mp4",
      description: "Montage professionnel avec transitions fluides",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {isLoading && <LoadingSpinner />}

      {/* Navigation Bar */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-zinc-950/40 backdrop-blur-2xl border border-zinc-800/40 rounded-full shadow-2xl">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-1 flex items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 text-white hover:text-cyan-400 transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-xs sm:text-sm md:text-sm font-semibold hidden sm:inline">Retour</span>
          </Link>

          <h1 className="text-sm sm:text-xl md:text-2xl font-bold flex-1 text-center px-2 truncate">Portefeuille</h1>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full px-2.5 sm:px-4 py-1 sm:py-1 text-[9px] sm:text-sm md:text-sm hover:scale-110 transition-all">
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contactez-Nous</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-24 sm:pt-28"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/creative-video-production-studio.jpg"
            alt="Video production studio"
            className="w-full h-full object-cover opacity-[0.13]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-balance text-zinc-50">
              Aperçu de Notre Portefeuille
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-zinc-400 text-pretty leading-relaxed px-4 sm:px-6 md:px-8">
              Découvrez quelques projets que nous avons réalisés. Chaque vidéo représente notre engagement envers la
              qualité, la créativité et l'impact.
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
            className="w-full h-full object-cover opacity-[0.02]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border-2 border-zinc-800 aspect-[9/16] transition-all duration-200 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:border-cyan-500/50 transform ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: gridInView ? `${index * 100}ms` : "0ms",
                }}
              >
                {video.src.endsWith(".mp4") ? (
                  <VideoPlayer src={video.src} title={video.title} description={video.description} />
                ) : (
                  <img src={video.src || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
                )}
              </div>
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
            className="w-full h-full object-cover opacity-[0.25]"
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
              className={`text-base sm:text-xl md:text-xl text-zinc-400 mb-6 sm:mb-10 text-pretty leading-relaxed transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: ctaInView ? "100ms" : "0ms" }}
            >
              Parlons de votre projet et découvrez comment nous pouvons créer des vidéos qui captent l'attention et
              génèrent des résultats.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: ctaInView ? "200ms" : "0ms" }}
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-base sm:text-lg md:text-lg px-6 sm:px-10 py-4 sm:py-6 hover:scale-105 transition-all font-bold shadow-2xl rounded-full">
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
                  <div className="text-xs sm:text-xs md:text-xs font-black text-white">CONTENT</div>
                  <div className="text-xs sm:text-xs md:text-xs font-bold text-zinc-100">CRAFT</div>
                </div>
                <div className="text-[10px] sm:text-[10px] md:text-[10px] text-zinc-400 tracking-wider">
                  VIDEO <span className="text-cyan-500">•</span> EDITING
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-sm text-zinc-400">© 2025 Content Craft. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
