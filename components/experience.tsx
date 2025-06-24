import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, TrendingUp } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Grupo Educa",
      position: "Desenvolvedor Full Stack",
      period: "Jun 2025 - Presente",
      location: "Remoto",
      type: "Tempo Integral",
      description:
        "Promovido de Suporte de TI para Desenvolvedor Full Stack. Trabalho com desenvolvimento de aplicações web e manutenção de sistemas internos da empresa.",
      achievements: [
        "Desenvolvimento de interfaces responsivas com React e TypeScript",
        "Criação e manutenção de APIs RESTful com Node.js",
        "Implementação de melhorias em sistemas legados",
        "Colaboração com equipe multidisciplinar de desenvolvimento",
        "Participação em code reviews e definição de padrões de código",
      ],
      technologies: ["React", "Node.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "PostgreSQL"],
      promotion: true,
    },
    {
      company: "Grupo Educa",
      position: "Auxiliar de Suporte em TI",
      period: "Fev 2025 - Jun 2025",
      location: "Remoto",
      type: "Tempo Integral",
      description:
        "Responsável pelo suporte técnico interno, resolução de problemas de sistemas e infraestrutura. Foi onde desenvolvi interesse pela programação e me preparei para a transição de carreira.",
      achievements: [
        "Suporte técnico para mais de 100 usuários internos",
        "Resolução de problemas complexos de sistemas e redes",
        "Documentação de processos e criação de manuais técnicos",
        "Automação de tarefas repetitivas com scripts",
        "Aprendizado autodidata de programação nas horas vagas",
      ],
      technologies: ["Windows Server", "Linux", "Redes", "PowerShell", "SQL", "Troubleshooting"],
      promotion: false,
    },
    {
      company: "Projetos Pessoais",
      position: "Desenvolvedor Front-end",
      period: "2022 - Presente",
      location: "Caxias, MA",
      type: "Projetos Próprios",
      description:
        "Desenvolvimento de projetos pessoais para aprendizado e prática das tecnologias web modernas. Foco em criar aplicações funcionais e responsivas.",
      achievements: [
        "Criação de mais de 20 projetos no GitHub",
        "Aprendizado prático de React, JavaScript e TypeScript",
        "Deploy de aplicações na Vercel e GitHub Pages",
        "Estudo contínuo de novas tecnologias e frameworks",
        "Participação ativa na comunidade de desenvolvedores",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Git", "Vercel"],
      promotion: false,
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Experiência <span className="text-purple-400">Profissional</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Minha trajetória profissional, focando em crescimento e aprendizado contínuo na área de desenvolvimento.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`bg-gray-800 border-gray-700 hover:shadow-lg transition-all duration-300 ${
                exp.promotion ? "border-l-4 border-l-purple-500" : ""
              }`}
            >
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <CardTitle className="text-lg md:text-xl text-white">{exp.position}</CardTitle>
                      {exp.promotion && (
                        <Badge className="bg-purple-600 text-white w-fit">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Promoção
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4 flex-shrink-0" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-1 text-purple-400">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-200 w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-300 mt-4">{exp.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Principais Atividades:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-200 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
