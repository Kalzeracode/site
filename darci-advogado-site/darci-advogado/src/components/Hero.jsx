import { Button } from '@/components/ui/button'
import { Shield, Clock, Lock, Target } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { getImageUrl } from '../config/supabase'

const Hero = () => {
  const scrollToSection = useScrollToSection()

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Background image from Supabase */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${getImageUrl('justiceBackground', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')}')`
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            DARCI ADVOGADO CRIMINALISTA
            <span className="block text-3xl md:text-4xl text-blue-400 mt-2">
              Defesa Jurídica Especializada
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Atuação estratégica e defesa jurídica completa para casos criminais com experiência e dedicação.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">Atendimento Imediato</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">Especialista em Direito Penal</p>
            </div>
            <div className="text-center">
              <Lock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">Sigilo e Discrição Absoluta</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">Defesa Estratégica</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('#contato')}
            >
              CONSULTAR AGORA UM ADVOGADO CRIMINALISTA
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

