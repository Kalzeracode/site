import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Clock, Shield } from 'lucide-react'
import { getImageUrl } from '../config/supabase'

const About = () => {
  return (
    <section id="escritorio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Darci Advogado Criminalista
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escritório de advocacia criminal com o compromisso de oferecer defesa estratégica e 
              especializada na área criminal. Nosso foco é a agilidade e exclusividade no atendimento, 
              com experiência qualificada para atuar em todas as áreas do Direito Penal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Garantir a melhor defesa para cada cliente através de uma atuação consultiva, 
                preventiva e contenciosa, sempre com foco na excelência jurídica e no 
                atendimento personalizado.
              </p>
              <p className="text-lg text-gray-600">
                Atuamos com dedicação integral em cada caso, oferecendo suporte jurídico 
                completo desde a fase investigativa até os recursos em tribunais superiores.
              </p>
            </div>
            <div className="relative">
              {/* Lawyer photo from Supabase */}
              <div 
                className="bg-cover bg-center w-full h-96 rounded-lg shadow-xl"
                style={{
                  backgroundImage: `url('${getImageUrl('darciPhoto', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80')}')`
                }}
              ></div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Atendimento Personalizado</h4>
                <p className="text-gray-600">Foco individual em cada caso com estratégia personalizada</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Experiência Comprovada</h4>
                <p className="text-gray-600">Anos de experiência em direito criminal e processual penal</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Agilidade</h4>
                <p className="text-gray-600">Resposta rápida e eficiente em situações urgentes</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sigilo Absoluto</h4>
                <p className="text-gray-600">Confidencialidade e discrição em todos os casos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

