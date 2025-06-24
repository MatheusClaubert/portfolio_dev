import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Briefcase, GraduationCap, Zap } from "lucide-react"

export function About() {
  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎸" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "SCSS", icon: "💅" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "SQL Server", icon: "🗄️" },
    { name: "Firebase", icon: "🔥" },
    { name: "Git", icon: "📝" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Figma", icon: "🎨" },
    { name: "REST APIs", icon: "🔌" },
  ]

  const highlights = [
    {
      icon: GraduationCap,
      title: "Formado",
      description: "Ciência da Computação",
    },
    {
      icon: Briefcase,
      title: "Desenvolvedor",
      description: "Full Stack",
    },
    {
      icon: Zap,
      title: "2+ Anos",
      description: "experiência profissional",
    },
    {
      icon: Code,
      title: "26+",
      description: "projetos no GitHub",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Sobre <span className="text-purple-400">mim</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Desenvolvedor Full Stack especializado em React, Node.js, TypeScript e tecnologias modernas. Formado em
            Ciência da Computação com experiência em desenvolvimento web e cloud computing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white">Minha jornada profissional</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Formado em Ciência da Computação pelo IFMA, iniciei minha carreira como estagiário em desenvolvimento,
                onde descobri minha paixão por criar soluções digitais inovadoras.
              </p>
              <p>
                Atualmente trabalho como Desenvolvedor Full Stack, criando aplicações web modernas com React, Nextjs, Node.js,
                Python e Django. Tenho experiência com bancos de dados SQL Server e integração com serviços cloud.
              </p>
              <p>
                Estou constantemente aprendendo novas tecnologias e atualmente focado em Cloud Computing com AWS,
                buscando as certificações Cloud Practitioner e Associate Developer.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-gray-300 pt-2">
              <span>☕ Vai um café aí? Sempre aberto para networking!</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center p-4 md:p-6 bg-gray-800 border-gray-700">
                <CardContent className="space-y-2">
                  <item.icon className="h-6 w-6 md:h-8 md:w-8 text-purple-400 mx-auto" />
                  <h4 className="text-lg md:text-2xl font-bold text-white">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">Stack Tecnológica</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm bg-gray-800 text-gray-200 border-gray-700 hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>{skill.icon}</span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
