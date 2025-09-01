import { Button } from '@/components/ui/button'
import { Shield, Clock, Lock, Target } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { getImageUrl } from '../config/supabase'

const Hero = () => {
  const scrollToSection = useScrollToSection()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${getImageUrl(
            'justiceBackground',
            'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
          )}')`,
        }}
      ></div>

      {/* Overlay com gradiente escuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-gray-900/60"></div>

      {/* Conteúdo */}
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            DARCI ADVOGADO CRIMINALISTA
            <span className="block text-2xl md:text-3xl text-blue-400 mt-3">
              Defesa Jurídica Especializada com Confiança e Experiência
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
            Atuação estratégica, atendimento imediato e defesa completa em casos
            criminais. Compromisso com sigilo, dedicação integral e resultados
            consistentes para proteger sua liberdade.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="text-center md:text-left">
              <Clock className="w-10 h-10 text-blue-400 mx-auto md:mx-0 mb-3" />
              <p className="text-white font-medium">Atendimento Imediato</p>
            </div>
            <div className="text-center md:text-left">
              <Shield className="w-10 h-10 text-blue-400 mx-auto md:mx-0 mb-3" />
              <p className="text-white font-medium">
                Especialista em Direito Penal
              </p>
            </div>
            <div className="text-center md:text-left">
              <Lock className="w-10 h-10 text-blue-400 mx-auto md:mx-0 mb-3" />
              <p className="text-white font-medium">Sigilo Absoluto</p>
            </div>
            <div className="text-center md:text-left">
              <Target className="w-10 h-10 text-blue-400 mx-auto md:mx-0 mb-3" />
              <p className="text-white font-medium">Defesa Estratégica</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              onClick={() => scrollToSection('#contato')}
            >
              CONSULTAR AGORA
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('#escritorio')}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
