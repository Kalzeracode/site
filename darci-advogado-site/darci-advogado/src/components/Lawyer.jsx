import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react'
import { getImageUrl } from '../config/supabase'

const Lawyer = () => {
  return (
    <section id="advogado" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advogado Criminal
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dr. Darci
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Advogado criminalista com vasta experiência em direito penal e processual penal, 
                dedicado à defesa estratégica e especializada de seus clientes. Atua com foco na 
                excelência jurídica e no atendimento personalizado.
              </p>

              <div className="grid gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-xl">
                      <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                      Formação Acadêmica
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Graduação em Direito</li>
                      <li>• Especialização em Direito Penal e Processual Penal</li>
                      <li>• Pós-graduação em Ciências Criminais</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-xl">
                      <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                      Experiência Profissional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Mais de 10 anos de experiência em direito criminal</li>
                      <li>• Atuação em casos de alta complexidade</li>
                      <li>• Especialista em defesa criminal estratégica</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-xl">
                      <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                      Áreas de Especialização
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Crimes contra a pessoa</li>
                      <li>• Crimes contra o patrimônio</li>
                      <li>• Crimes econômicos e financeiros</li>
                      <li>• Execução penal e recursos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {/* Lawyer profile photo from Supabase */}
              <div className="relative">
                <div 
                  className="bg-cover bg-center w-full h-[600px] rounded-2xl shadow-2xl"
                  style={{
                    backgroundImage: `url('${getImageUrl('darciProfile', 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80')}')`
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lawyer

