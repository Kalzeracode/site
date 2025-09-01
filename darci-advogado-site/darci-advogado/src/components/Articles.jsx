import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import { getImageUrl } from '../config/supabase'

const Articles = () => {
  const articles = [
    {
      title: "Direitos do acusado durante o interrogatório policial",
      date: "15 de agosto de 2025",
      excerpt: "Entenda quais são os direitos fundamentais que todo acusado possui durante o interrogatório policial e como exercê-los adequadamente para garantir uma defesa eficaz.",
      image: getImageUrl('article1', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')
    },
    {
      title: "Como funciona o processo de liberdade provisória",
      date: "8 de agosto de 2025", 
      excerpt: "A liberdade provisória é um direito fundamental. Saiba como funciona o processo, quais os requisitos necessários e quando é possível obter esse benefício.",
      image: getImageUrl('article2', 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')
    },
    {
      title: "Diferenças entre prisão em flagrante e prisão preventiva",
      date: "1 de agosto de 2025",
      excerpt: "Compreenda as principais diferenças entre prisão em flagrante e prisão preventiva, seus requisitos legais e as possibilidades de defesa em cada situação.",
      image: getImageUrl('article3', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')
    }
  ]

  return (
    <section id="artigos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Artigos Jurídicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantenha-se informado com nossos artigos sobre direito criminal, 
              processual penal e temas relevantes da advocacia criminalista.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${article.image}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 font-semibold">
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              FAQ - Perguntas Frequentes
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">O que faz um advogado criminalista?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    O advogado criminalista é um profissional do direito especializado em questões 
                    relacionadas ao direito penal. Ele defende pessoas ou entidades acusadas de crimes, 
                    buscando garantir seus direitos e garantir que tenham um julgamento justo. As funções 
                    incluem consultoria, investigação e defesa.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Quando devo procurar um advogado criminalista?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Deve procurar um advogado criminalista assim que souber que está sendo investigado, 
                    foi indiciado ou acusado de algum crime. Quanto mais cedo a defesa começar, 
                    melhores são as chances de um resultado favorável.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Como escolher um bom advogado criminalista?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Procure um profissional com experiência comprovada em direito criminal, 
                    especialização na área, boas referências de clientes anteriores e que 
                    demonstre conhecimento atualizado da legislação penal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles

