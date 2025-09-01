import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Testimonials = () => {
  const scrollToSection = useScrollToSection()

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente profissional, atento aos detalhes o que permite uma condução transparente e sem surpresas. Especialista na área de atuação. Recomendo seu trabalho com toda certeza! Obrigada Dr. Darci por toda sua dedicação!",
      rating: 5
    },
    {
      name: "João Santos",
      text: "O meu processo já tinha transitado em julgado e o Dr. Darci conseguiu reverter a decisão. Só tenho a agradecer.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Percebi só de conversar com o Dr. Darci que ele domina o processo penal. Gratidão por me ajudar.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      text: "Indico o escritório para todos. Cheguei desesperado e consegui resolver rápido. Ótimo advogado criminalista!",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      text: "Dr. Darci é um ótimo profissional! Muito bem capacitado e atencioso!",
      rating: 5
    },
    {
      name: "Roberto Souza",
      text: "Dr. Darci é um profissional exemplar e diferenciado. Excelente advogado, cuidadoso, atencioso, responsável, competente, educadíssimo, sempre pontua tudo de forma clara e sem deixar dúvidas. Recomendo sem pestanejar.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos clientes satisfeitos são a prova da qualidade do nosso escritório de advocacia. 
              Veja os resultados e depoimentos de quem confiou em nosso trabalho!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-blue-600" />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Cliente</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precisa de Ajuda Jurídica?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Não deixe para depois. Entre em contato agora e garante a melhor defesa para seu caso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('#contato')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
                >
                  Falar com Advogado
                </button>
                <a 
                  href="tel:+5511999999999"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

