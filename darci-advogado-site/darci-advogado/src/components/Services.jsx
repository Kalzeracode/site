import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building, Scale, FileText, Gavel } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Delegacia de Polícia",
      items: [
        "Registro de boletim de ocorrência",
        "Instauração de Inquérito Policial",
        "Defesa em Inquérito Policial",
        "Acompanhamento em Delegacias",
        "Acompanhamento prisão em flagrante / Prisão temporária"
      ]
    },
    {
      icon: Scale,
      title: "Processo Penal",
      items: [
        "Resposta à acusação",
        "Defesas processuais",
        "Audiência de instrução e julgamento",
        "Relaxamento de prisão",
        "Pedido Liberdade Provisória",
        "Impetração de Habeas Corpus"
      ]
    },
    {
      icon: FileText,
      title: "Recursos",
      items: [
        "Apelação",
        "Recurso em Sentido Estrito",
        "Recurso Especial - STJ",
        "Recurso Extraordinário STF"
      ]
    },
    {
      icon: Gavel,
      title: "Execução Penal",
      items: [
        "Progressão ao regime aberto",
        "Progressão ao regime semiaberto",
        "Saída temporária",
        "Livramento condicional",
        "Indulto"
      ]
    }
  ]

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A fim de atender satisfatoriamente os clientes, possuímos especialização 
              em direito criminal com ampla atuação na área penal. Atuamos de maneira 
              consultiva, preventiva e contenciosa nas seguintes fases:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Como podemos ajudar você?
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contar com um advogado criminalista experiente faz toda a diferença na defesa dos seus direitos. 
              Atuamos de forma ágil e estratégica para garantir o melhor resultado em cada caso.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Defesa criminal estratégica</h4>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Atuação em tribunais superiores</h4>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Suporte jurídico em inquéritos</h4>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Acompanhamento em flagrantes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

