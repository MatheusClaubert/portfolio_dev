"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download } from "lucide-react"

export function Hero() {
  const handleDownloadCV = () => {
    // Criar um link temporário para download
    const link = document.createElement("a")
    link.href = "/curriculo-matheus-claubert.pdf"
    link.download = "Curriculo-Matheus-Claubert.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-purple-400 font-medium text-sm md:text-base">👋 Falaaa Dev, Eu sou</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Matheus Claubert
                <span className="block text-purple-400">Full Stack Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
                Desenvolvedor Full Stack especializado em React, Node.js, TypeScript e tecnologias modernas. Transformo
                ideias em soluções digitais escaláveis.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm md:text-base">Caxias, Maranhão - Brasil</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                Ver meus projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-purple-400 border-purple-500 hover:bg-purple-500 hover:text-white w-full sm:w-auto"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-purple-400 text-gray-300" asChild>
                <a href="https://github.com/MatheusClaubert" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-purple-400 text-gray-300" asChild>
                <a href="https://www.linkedin.com/in/matheus-claubert/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-purple-400 text-gray-300" asChild>
                <a href="mailto:mattheus.hisashi@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative z-10 max-w-sm mx-auto lg:max-w-md">
              <img
                src="https://sjc.microlink.io/Hc20o7UhRonPSuTPnaUZGc06jNuB2fKsqBOH4v_TEr59m29RRnwDSnQGpM3IKaGL0TJH0lA29RHWqjpCazdt9Q.jpeg"
                alt="Matheus Claubert"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
