import Link from "next/link"
import { Code2, Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: "Sobre", href: "#about" },
      { name: "Experiência", href: "#experience" },
      { name: "Serviços", href: "#services" },
      { name: "Projetos", href: "#projects" },
      { name: "Contato", href: "#contact" },
    ],
    services: [
      { name: "Desenvolvimento Web", href: "#services" },
      { name: "Front-end Development", href: "#services" },
      { name: "Backend Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Responsive Design", href: "#services" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/MatheusClaubert", icon: Github },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/matheus-claubert/", icon: Linkedin },
      { name: "Instagram", href: "https://www.instagram.com/dart.siders_", icon: Instagram },
      { name: "Email", href: "mailto:mattheus.hisashi@gmail.com", icon: Mail },
    ],
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2">
              <Code2 className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
              <span className="text-lg md:text-xl font-bold text-white">Matheus Claubert</span>
            </Link>
            <p className="text-gray-300 text-sm md:text-base">
              Desenvolvedor Full Stack no Grupo Educa, especializado em criar soluções web modernas e funcionais.
            </p>
            <p className="text-gray-400 text-xs md:text-sm">📍 Caxias, Maranhão - Brasil</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {footerLinks.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3 md:mb-4 text-white text-sm md:text-base">Navegação</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-xs md:text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3 md:mb-4 text-white text-sm md:text-base">Serviços</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-xs md:text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3 md:mb-4 text-white text-sm md:text-base">Contato</h3>
            <div className="space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm">
              <p className="break-all">mattheus.hisashi@gmail.com</p>
              <p>GitHub: MatheusClaubert</p>
              <p>☕ Vai um café aí?</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © {currentYear} Matheus Claubert. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs md:text-sm">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs md:text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
