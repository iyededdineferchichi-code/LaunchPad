"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Target, TrendingUp, Video, Sparkles, Users, Clock, ArrowRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useInView } from "@/hooks/use-in-view"
import { VideoPlayer } from "@/components/video-player"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [videoRef, setVideoRef] = useState(null)

  const { ref: valueRef, isInView: valueInView } = useInView()
  const { ref: servicesRef, isInView: servicesInView } = useInView()
  const { ref: processRef, isInView: processInView } = useInView()
  const { ref: aboutRef, isInView: aboutInView } = useInView()
  const { ref: ctaRef, isInView: ctaInView } = useInView()

  const whatsappLink =
    "https://wa.me/21628119128?text=Bonjour%2C%20je%20souhaite%20discuter%20avec%20vous%20de%20ma%20stratégie%20de%20contenu."

  const calendlyLink = "https://calendly.com/iyedferchichi394/30min"

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "portfolio", "process", "about", "video"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {isLoading && <LoadingSpinner />}

      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-zinc-950/40 backdrop-blur-2xl border border-zinc-800/40 rounded-full shadow-2xl">
        <div className="container mx-auto px-6 lg:px-8 py-1.5 flex items-center justify-between gap-6">
          {/* Logo and Branding - Left */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo-new.jpg" alt="Content Craft" className="h-8 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold text-white tracking-wide">CONTENT CRAFT</span>
              <span className="text-[9px] text-zinc-400 tracking-wider">
                VIDEO <span className="text-cyan-400">•</span> EDITING
              </span>
            </div>
          </div>

          {/* Navigation Menu - Center (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center px-4">
            {[
              { id: "hero", label: "Accueil" },
              { id: "services", label: "Offre" },
              { id: "portfolio", label: "Portefeuille", href: "/portfolio" },
              { id: "process", label: "Démarche" },
              { id: "about", label: "À propos" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.href) {
                    window.location.href = item.href
                  } else {
                    scrollToSection(item.id)
                  }
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-zinc-800/80 text-zinc-50 shadow-lg shadow-zinc-950/50"
                    : "text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* CTA Button - Right (Desktop) */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden lg:block">
            <Button
              size="default"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white hover:text-white hover:scale-105 transition-all shadow-lg shadow-cyan-500/20 font-semibold flex-shrink-0 rounded-full px-6 py-2"
            >
              Contactez-Nous
            </Button>
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/60 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col py-4">
              {[
                { id: "hero", label: "Accueil" },
                { id: "services", label: "Offre" },
                { id: "portfolio", label: "Portefeuille", href: "/portfolio" },
                { id: "process", label: "Démarche" },
                { id: "about", label: "À propos" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.href) {
                      window.location.href = item.href
                    } else {
                      scrollToSection(item.id)
                    }
                    setMobileMenuOpen(false)
                  }}
                  className={`px-6 py-3 text-left text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-zinc-800/60 text-zinc-50"
                      : "text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-4 pb-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    size="default"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-full px-6 py-2"
                  >
                    Contactez-Nous
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website%20for-MeEQbNKLwaB1PeiPRHsQ12nEHGIr5Y.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/65 to-zinc-950/70" />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center py-12 sm:py-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-8 text-balance">
              Renforcez Votre Marque, <span className="text-zinc-50">Faire Bouger Votre Business</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-zinc-200 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4 font-semibold">
              Prêt à exploser vos résultats grâce à un contenu qui convertit vraiment ?
            </p>
            <p className="text-base sm:text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-medium">
              Voyons ensemble comment en faire une vraie force pour votre marque.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="animate-ring bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-5 md:px-8 py-2.5 sm:py-3 md:py-4 hover:scale-105 hover:shadow-2xl transition-all font-bold group w-full sm:w-auto rounded-full"
                >
                  Contactez-Nous
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="flex flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-zinc-100 font-medium px-2">
                <Clock className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 flex-shrink-0" />
                <span className="text-left whitespace-nowrap">Seulement 6 places par mois - passez à l'action !</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section ref={valueRef} className="py-8 sm:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/professional-video-editing-example-.jpg"
            alt="Professional video editing"
            className="w-full h-full object-cover opacity-[0.02]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-16">
            <h2
              className={`text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 text-balance text-zinc-50 transition-all duration-1000 ${valueInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Pourquoi la vidéo est essentielle
            </h2>
            <p
              className={`text-sm sm:text-lg text-zinc-400 text-pretty leading-relaxed transition-all duration-1000 ${valueInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              Dans un monde où l'attention est rare, vos vidéos sont la clé pour capter, engager et convertir votre
              audience en clients fidèles.
            </p>
          </div>

          <div className="mt-4 sm:mt-6">
            <div className="mb-3 sm:mb-6 text-center">
              <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-white">
                Présentation du LaunchPad
              </h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="relative group flex-shrink-0 w-[120px] sm:w-[240px] md:w-[300px] lg:w-[360px]">
                <div className="aspect-[9/16] overflow-hidden rounded-xl border-2 border-zinc-800 bg-zinc-950 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:border-cyan-500/50">
                  <VideoPlayer src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LaunchPad-KVCWZBjZ9e2wy32ckPvigit0vWPiAw.mp4" />
                </div>
              </div>

              {/* Stats on the right - optimized for mobile */}
              <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 max-w-[180px] sm:max-w-xs md:max-w-md">
                <div className="flex items-start gap-1 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-[10px] sm:text-base md:text-lg">1</span>
                  </div>
                  <div>
                    <h5 className="text-[9px] sm:text-sm md:text-lg font-bold text-zinc-100 mb-0.5 sm:mb-1">
                      Engagement explosif
                    </h5>
                    <p className="text-[7px] sm:text-xs md:text-sm text-zinc-400 leading-tight">
                      Les vidéos sont partagées 12× plus que les textes ou images.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-1 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-[10px] sm:text-base md:text-lg">2</span>
                  </div>
                  <div>
                    <h5 className="text-[9px] sm:text-sm md:text-lg font-bold text-zinc-100 mb-0.5 sm:mb-1">
                      Conversion directe
                    </h5>
                    <p className="text-[7px] sm:text-xs md:text-sm text-zinc-400 leading-tight">
                      Une vidéo peut augmenter vos ventes jusqu'à 80 %.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-1 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-[10px] sm:text-base md:text-lg">3</span>
                  </div>
                  <div>
                    <h5 className="text-[9px] sm:text-sm md:text-lg font-bold text-zinc-100 mb-0.5 sm:mb-1">
                      Crédibilité instantanée
                    </h5>
                    <p className="text-[7px] sm:text-xs md:text-sm text-zinc-400 leading-tight">
                      Les spectateurs retiennent 95 % du message en vidéo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Visibilité & Crédibilité",
                description:
                  "Gagnez en autorité et en reconnaissance dans votre secteur avec un contenu qui reflète votre expertise.",
                delay: 200,
              },
              {
                icon: Target,
                title: "Connexion Authentique",
                description:
                  "Créez un lien plus fort avec votre communauté grâce à un storytelling clair et aligné avec votre marque.",
                delay: 300,
              },
              {
                icon: Zap,
                title: "Plus d'Engagement",
                description:
                  "Générez plus de portée et d'interactions avec moins de charge mentale grâce à un partenaire fiable.",
                delay: 400,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`p-4 sm:p-6 md:p-8 bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group transform ${valueInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: valueInView ? `${item.delay}ms` : "0ms" }}
              >
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-zinc-50" />
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-zinc-50 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        ref={servicesRef}
        className="py-8 sm:py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/video-editing-software-interface-timeline.jpg"
            alt="Video editing interface"
            className="w-full h-full object-cover opacity-[0.02]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-16">
            <h2
              className={`text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 text-balance text-zinc-50 transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Notre Offre Stratégique
            </h2>
            <p
              className={`text-sm sm:text-lg text-zinc-400 text-pretty transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              Une offre complète et flexible qui s'adapte à vos besoins.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 items-stretch">
              {[
                {
                  icon: Sparkles,
                  badge: "INCLUS GRATUITEMENT",
                  title: "Options Gratuites Offertes",
                  description: "Services complémentaires pour maximiser l'impact de vos vidéos.",
                  items: [
                    "Thumbnails personnalisées",
                    "Planning de publication",
                    "Révisions gratuites",
                    "Support prioritaire",
                  ],
                  delay: 0,
                },
                {
                  icon: Video,
                  badge: "SERVICE PRINCIPAL",
                  title: "Montage Vidéo Professionnel",
                  description: "Transformer vos vidéos en contenu engageant et stratégique.",
                  items: [
                    "Reels & Shorts optimisés",
                    "Scripts et idées de contenu",
                    "Vidéographie professionnelle",
                    "Livraison en 6-7 jours",
                  ],
                  delay: 0,
                },
                {
                  icon: Users,
                  badge: "OFFRE STRATÉGIQUE",
                  title: "Pack Mensuel",
                  description: "L'offre complète pour une présence régulière et impactante.",
                  items: [
                    "6 à 10 vidéos par mois",
                    "Stratégie de contenu incluse",
                    "Révisions illimitées",
                    "Tarif préférentiel",
                  ],
                  delay: 400,
                  highlight: true,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: service.highlight ? `${service.delay}ms` : "0ms" }}
                >
                  <Card
                    className={`p-4 sm:p-8 relative overflow-visible group h-full ${
                      service.highlight
                        ? "bg-gradient-to-br from-zinc-300 to-zinc-400 text-zinc-950 border-zinc-300 hover:scale-[1.02] hover:shadow-2xl hover:border-zinc-700 transition-all duration-300"
                        : "bg-zinc-900 border-zinc-800"
                    }`}
                  >
                    {service.highlight && (
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-20">
                        <div className="bg-zinc-400 text-black px-2 py-1 sm:px-3 sm:py-1.5 rounded-md shadow-lg font-bold text-[9px] sm:text-xs">
                          Maintenant Populaire
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div
                        className={`w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform ${service.highlight ? "bg-zinc-950/10" : "bg-gradient-to-br from-zinc-800 to-zinc-900"}`}
                      >
                        <service.icon
                          className={`w-6 sm:w-8 h-6 sm:h-8 ${service.highlight ? "text-zinc-950" : "text-zinc-50"}`}
                        />
                      </div>
                      <div
                        className={`inline-block text-[8px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full mb-3 sm:mb-4 ${service.highlight ? "bg-zinc-950 text-zinc-50" : "bg-zinc-800 text-zinc-50"}`}
                      >
                        {service.badge}
                      </div>
                      <h3
                        className={`text-sm sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight ${service.highlight ? "text-zinc-950" : "text-zinc-50"}`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-[10px] sm:text-sm md:text-base mb-3 sm:mb-6 leading-relaxed ${service.highlight ? "text-zinc-950/70" : "text-zinc-400"}`}
                      >
                        {service.description}
                      </p>
                      <div className="space-y-2 sm:space-y-3">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle2
                              className={`w-4 sm:w-5 h-4 sm:h-5 mt-0.5 flex-shrink-0 ${service.highlight ? "text-zinc-950" : "text-zinc-400"}`}
                            />
                            <span
                              className={`text-[9px] sm:text-sm leading-snug ${service.highlight ? "font-medium text-zinc-950" : "text-zinc-300"}`}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      {service.highlight && (
                        <Button
                          size="lg"
                          className="w-full bg-zinc-950 text-zinc-50 hover:bg-zinc-800 hover:scale-105 transition-all font-bold shadow-lg text-xs sm:text-base mt-4 sm:mt-8 rounded-full py-2 sm:py-3"
                        >
                          Commencer Maintenant
                        </Button>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" ref={processRef} className="py-8 sm:py-24 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/workflow-diagram-creative-process.jpg"
            alt="Creative workflow"
            className="w-full h-full object-cover opacity-[0.02]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-16">
            <h2
              className={`text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 text-balance text-zinc-50 transition-all duration-1000 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Notre Démarche
            </h2>
            <p
              className={`text-sm sm:text-lg text-zinc-400 text-pretty leading-relaxed transition-all duration-1000 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              Une collaboration simple et efficace, pensée pour vous faire gagner du temps.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
              {[
                {
                  number: "01",
                  title: "Découverte",
                  description:
                    "Comprendre votre marque, vos objectifs et votre audience pour créer du contenu aligné avec votre vision.",
                  delay: 200,
                },
                {
                  number: "02",
                  title: "Idéation et Montage",
                  description:
                    "Transformer vos idées et vidéos en contenu percutant qui capte l'attention et raconte votre histoire.",
                  delay: 300,
                },
                {
                  number: "03",
                  title: "Révision",
                  description:
                    "Ajustements selon vos retours pour garantir que chaque détail correspond à vos attentes.",
                  delay: 400,
                },
                {
                  number: "04",
                  title: "Livraison",
                  description: "Vidéos finalisées, optimisées et prêtes à être publiées sur vos plateformes.",
                  delay: 500,
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className={`p-4 sm:p-8 bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 group transform ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: processInView ? `${step.delay}ms` : "0ms" }}
                >
                  <div className="flex gap-3 sm:gap-6 items-start">
                    <div className="text-2xl sm:text-5xl font-bold text-zinc-50 flex-shrink-0 group-hover:text-zinc-200 transition-colors">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3 text-zinc-50">{step.title}</h3>
                      <p className="text-xs sm:text-base text-zinc-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        ref={aboutRef}
        className="py-8 sm:py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/professional-video-editor-workspace-tools.jpg"
            alt="Video editing workspace"
            className="w-full h-full object-cover opacity-[0.02]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-12">
              <h2
                className={`text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8 text-balance text-zinc-50 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                À propos
              </h2>
              <div className="space-y-3 sm:space-y-6 text-sm sm:text-lg leading-relaxed">
                <p
                  className={`text-pretty text-zinc-300 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: aboutInView ? "100ms" : "0ms" }}
                >
                  Nous combinons créativité et méthode pour produire des vidéos claires, fluides et alignées avec votre
                  message. Chaque montage est pensé pour capter l'attention, renforcer votre identité et créer de
                  l'impact.
                </p>
                <p
                  className={`text-pretty text-zinc-400 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: aboutInView ? "200ms" : "0ms" }}
                >
                  Notre approche repose sur trois piliers : la <strong className="text-zinc-50">clarté</strong> dans la
                  communication, la <strong className="text-zinc-50">fiabilité</strong> dans les délais, et l'
                  <strong className="text-zinc-50">impact</strong> dans chaque frame. Nous ne nous contentons pas de
                  monter des vidéos — nous construisons des outils de croissance pour votre marque.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              {[
                {
                  title: "Clarté",
                  description: "Un message limpide qui résonne avec votre audience.",
                  delay: 300,
                },
                {
                  title: "Fiabilité",
                  description: "Des délais respectés et une communication transparente.",
                  delay: 400,
                },
                {
                  title: "Impact",
                  description: "Du contenu qui génère des résultats mesurables.",
                  delay: 500,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`p-3 sm:p-8 bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group transform ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: aboutInView ? `${item.delay}ms` : "0ms" }}
                >
                  <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-zinc-50">{item.title}</h3>
                  <p className="text-[10px] sm:text-base text-zinc-400">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-32 bg-zinc-950 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,256,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-6 text-balance text-zinc-50 transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Prêt à transformer votre contenu ?
            </h2>
            <p
              className={`text-sm sm:text-xl text-zinc-400 mb-4 sm:mb-10 text-pretty leading-relaxed transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: ctaInView ? "100ms" : "0ms" }}
            >
              Si vous cherchez un partenaire fiable pour booster votre image de marque et d'accroître vos parts de
              marché, cet appel est le point de départ.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 items-center">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-block transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: ctaInView ? "200ms" : "0ms" }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white hover:text-white hover:scale-105 transition-all shadow-lg shadow-cyan-500/20 font-bold group w-full sm:w-auto rounded-full text-sm sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5"
                >
                  Discutons Votre Projet !
                </Button>
              </a>
              <a
                href="/portfolio"
                className={`w-full sm:w-auto inline-block transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: ctaInView ? "300ms" : "0ms" }}
              >
                <Button
                  size="sm"
                  className="bg-black hover:bg-zinc-900 text-white text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all font-bold shadow-lg group rounded-full w-full sm:w-auto"
                >
                  Découvrir Notre Portefeuille
                </Button>
              </a>
            </div>
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
                  VIDEO <span className="text-cyan-400">•</span> EDITING
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
