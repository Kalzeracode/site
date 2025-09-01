import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Clock, Shield } from 'lucide-react'
import { getImageUrl } from '../config/supabase'

const About = () => {
  return (
    <section id="escritorio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título e introdução */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Defesa Criminal com Experiência e Compromisso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Escritório de advocacia dedicado à defesa criminal, com atuação
              estratégica, ágil e personalizada. Nosso compromisso é garantir
              segurança jurídica e resultados consistentes para cada cliente.
            </p>
          </div>

          {/* Missão + Foto */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Atuar com excelência na defesa dos direitos de nossos clientes,
                unindo estratégia, dedicação integral e profundo conhecimento
                jurídico. Garantimos acompanhamento próximo em cada etapa do
                processo, desde a fase investigativa até os tribunais
                superiores.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nosso foco é oferecer tranquilidade e confiança, com sigilo
                absoluto e soluções jurídicas que preservem o que é mais
                importante: a liberdade e a dignidade do cliente.
              </p>
            </div>

            <div className="relative">
              {/* Foto do Darci */}
              <img
                src={getImageUrl(
                  'darciPhoto',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
                )}
                alt="Dr. Darci Advogado Criminalista"
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover object-top rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Cards de diferenciais */}
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Atendimento Personalizado
                </h4>
                <p className="text-gray-600">
                  Cada caso é tratado de forma única, com estratégia sob medida.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Experiência Comprovada
                </h4>
                <p className="text-gray-600">
                  Atuação sólida em Direito Penal e Processual Penal.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Agilidade
                </h4>
                <p className="text-gray-600">
                  Respostas rápidas e eficazes em situações urgentes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Sigilo Absoluto
                </h4>
                <p className="text-gray-600">
                  Discrição e confidencialidade em todos os atendimentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
