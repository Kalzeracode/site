import { Button } from '@/components/ui/button'
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

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-gray-900/70"></div>

      {/* Conteúdo */}
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Está sendo investigado ou preso?
            <span className="block text-3xl md:text-4xl text-[#D4AF37] mt-3 italic">
              Defesa criminal com atendimento imediato.
            </span>
          </h1>

          <p className="font-['Inter'] text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
            Atuação ética e estratégica em todas as fases do processo penal.
            Atendimento ágil, sigiloso e comprometido com os direitos do cliente.
          </p>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-xl font-semibold shadow-lg"
              onClick={() => scrollToSection('#contato')}
            >
              CONSULTAR AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
