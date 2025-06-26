"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

export function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Oi Matheus! Vim pelo seu portfólio, vamos bater um papo? 😊")
    window.open(`https://wa.me/5599984612190?text=${message}`, "_blank")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mattheus.hisashi@gmail.com",
      href: "mailto:mattheus.hisashi@gmail.com",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "MatheusClaubert",
      href: "https://github.com/MatheusClaubert",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "matheus-claubert",
      href: "https://www.linkedin.com/in/matheus-claubert/",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Vamos trabalhar <span className="text-purple-400">juntos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Tem um projeto em mente ou quer trocar uma ideia sobre desenvolvimento? Vamos conversar! Estou sempre aberto
            a novas oportunidades e colaborações.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Entre em contato</h3>
              <p className="text-gray-300 mb-6 md:mb-8">
                Como desenvolvedor full stack no Grupo Educa, estou sempre interessado em discutir projetos,
                oportunidades de colaboração e networking. Não hesite em entrar em contato!
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors break-all"
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="pt-4 space-y-2">
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="pt-4 md:pt-8">
              <h4 className="font-semibold mb-4 text-white">Disponibilidade</h4>
              <div className="space-y-2 text-gray-300">
                <p>Disponível para projetos freelance e oportunidades de colaboração.</p>
                <p>Tempo de resposta: 24-48 horas.</p>
                <p>☕ Vai um café aí? Sempre aberto para networking!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 