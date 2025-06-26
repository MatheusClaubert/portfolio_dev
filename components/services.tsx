"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Cloud, Download } from "lucide-react"

export function Services() {
  const handleDownloadCV = () => {
    // Criar um link temporário para download direto
    const link = document.createElement("a")
    link.href = "/CV_Matheus_Claubert.pdf"
    link.download = "CV_Matheus_Claubert.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Full Stack",
      description: "Desenvolvimento completo de aplicações web, desde o front-end até o back-end e banco de dados.",
      features: ["React/Next.js", "Node.js/Python", "SQL Server/Firebase", "Deploy e DevOps"],
    },
    {
      icon: Code,
      title: "Front-end Moderno",
      description: "Criação de interfaces modernas, responsivas e performáticas com as melhores práticas.",
      features: ["React/TypeScript", "Tailwind CSS", "Component Design", "Performance Optimization"],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Desenvolvimento de APIs robustas e integração com bancos de dados. Área em constante aprendizado.",
      features: ["REST APIs", "Django/Node.js", "SQL Server", "Integração de Sistemas"],
    },
    {
      icon: Cloud,
      title: "Cloud Computing AWS",
      description: "Conhecimentos em cloud computing com foco na plataforma AWS e suas principais soluções.",
      features: ["AWS Cloud Practitioner ✅", "Associate Developer 📚", "Infraestrutura Cloud", "Serverless"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meus <span className="text-purple-400">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Como desenvolvedor full stack, ofereço soluções completas em desenvolvimento web, sempre aplicando as
            melhores práticas e tecnologias modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border-gray-700"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <service.icon className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={handleDownloadCV}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Download className="h-5 w-5 mr-2" />
            Baixar Currículo
          </Button>
        </div>
      </div>
    </section>
  )
}
