"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Calendar, Eye, Zap, Globe } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  created_at: string
  size: number
  default_branch: string
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        // Buscar todos os repositórios (até 100)
        const response = await fetch("https://api.github.com/users/MatheusClaubert/repos?sort=updated&per_page=100")

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data = await response.json()

        // Filtrar apenas repositórios que não sejam o perfil pessoal
        const filteredRepos = data.filter(
          (repo: GitHubRepo) => !repo.name.toLowerCase().includes("matheusclaubert") && repo.size > 0,
        )

        setRepos(filteredRepos)
      } catch (error) {
        console.error("Error fetching repos:", error)
        setError("Erro ao carregar projetos do GitHub")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
      SCSS: "bg-pink-500",
      Dart: "bg-blue-600",
      Python: "bg-green-500",
      Java: "bg-red-500",
      React: "bg-cyan-500",
      "C++": "bg-blue-700",
      C: "bg-gray-600",
    }
    return colors[language || ""] || "bg-gray-500"
  }

  const isHosted = (repo: GitHubRepo) => {
    if (repo.homepage && repo.homepage.trim() !== "") {
      const url = repo.homepage.toLowerCase()
      return url.includes("vercel.app") || url.includes("github.io") || url.includes("netlify.app")
    }
    return false
  }

  const getHostingPlatform = (repo: GitHubRepo) => {
    if (!repo.homepage) return null
    const url = repo.homepage.toLowerCase()
    if (url.includes("vercel.app")) return "Vercel"
    if (url.includes("github.io")) return "GitHub Pages"
    if (url.includes("netlify.app")) return "Netlify"
    return "Hospedado"
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getProjectDescription = (repo: GitHubRepo) => {
    const name = repo.name.toLowerCase()
    const originalDesc = repo.description

    // Se já tem uma descrição boa, usar ela
    if (originalDesc && originalDesc.length > 20 && !originalDesc.includes("Add files via upload")) {
      return originalDesc
    }

    // Descrições baseadas no nome do projeto
    const descriptions: { [key: string]: string } = {
      "dartsiders-portfolio":
        "Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS, apresentando projetos e experiência profissional",
      "nlw-expert-notes":
        "Aplicação de notas desenvolvida durante o NLW Expert da Rocketseat, com funcionalidades de criação, edição e organização",
      "nlw-unite":
        "Sistema de gerenciamento de eventos criado no NLW Unite, permitindo cadastro de participantes e check-in",
      rocketseat: "Projetos e exercícios desenvolvidos durante os cursos e bootcamps da Rocketseat",
      ignite:
        "Aplicações desenvolvidas na trilha Ignite da Rocketseat, focando em React, Node.js e tecnologias modernas",
      todo: "Aplicação de lista de tarefas com funcionalidades de adicionar, marcar como concluída e remover itens",
      calculator: "Calculadora desenvolvida com JavaScript vanilla, implementando operações matemáticas básicas",
      weather: "Aplicação de previsão do tempo consumindo API externa, mostrando condições climáticas atuais",
      quiz: "Jogo de perguntas e respostas interativo desenvolvido com JavaScript e CSS",
      landing: "Landing page responsiva desenvolvida com HTML5, CSS3 e JavaScript",
      dashboard:
        "Dashboard administrativo com gráficos e métricas, desenvolvido com React e bibliotecas de visualização",
      ecommerce: "Plataforma de e-commerce com carrinho de compras, sistema de pagamento e gerenciamento de produtos",
      blog: "Blog pessoal ou sistema de publicação de artigos com interface moderna e responsiva",
      chat: "Aplicação de chat em tempo real utilizando WebSockets ou tecnologias similares",
      api: "API RESTful desenvolvida com Node.js, Express e banco de dados para servir aplicações front-end",
      mobile: "Aplicação mobile desenvolvida com React Native ou tecnologias híbridas",
      game: "Jogo desenvolvido com JavaScript, implementando lógica de gameplay e interações",
      clone: "Clone de aplicação popular, recriando funcionalidades e interface para fins de aprendizado",
      website: "Website institucional ou pessoal com design moderno e otimizado para SEO",
      app: "Aplicação web completa com autenticação, CRUD e funcionalidades avançadas",
    }

    // Procurar por palavras-chave no nome
    for (const [keyword, description] of Object.entries(descriptions)) {
      if (name.includes(keyword)) {
        return description
      }
    }

    // Descrições baseadas na linguagem principal
    if (repo.language) {
      const langDescriptions: { [key: string]: string } = {
        JavaScript:
          "Aplicação web interativa desenvolvida com JavaScript, focando em funcionalidades dinâmicas e experiência do usuário",
        TypeScript:
          "Projeto desenvolvido com TypeScript, garantindo tipagem estática e código mais robusto e manutenível",
        HTML: "Página web estática desenvolvida com HTML5 e CSS3, priorizando semântica e acessibilidade",
        CSS: "Projeto focado em estilização e design responsivo, demonstrando habilidades em CSS moderno",
        Python:
          "Aplicação desenvolvida em Python, explorando suas bibliotecas e funcionalidades para resolução de problemas",
        Dart: "Projeto desenvolvido com Dart/Flutter, criando aplicações multiplataforma com performance nativa",
        Java: "Aplicação Java demonstrando conceitos de programação orientada a objetos e boas práticas de desenvolvimento",
      }

      if (langDescriptions[repo.language]) {
        return langDescriptions[repo.language]
      }
    }

    // Descrição padrão mais específica
    return `Projeto de desenvolvimento web criado para praticar e demonstrar habilidades em ${repo.language || "programação"} e tecnologias modernas`
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Meus <span className="text-purple-400">Projetos</span>
            </h2>
          </div>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
            <p className="text-gray-300 mt-4">Carregando todos os projetos do GitHub...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-400">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              className="mt-4 bg-purple-600 hover:bg-purple-700 cursor-pointer transition-all duration-200 hover:scale-105"
            >
              Tentar novamente
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Separar projetos hospedados dos não hospedados
  const hostedRepos = repos.filter((repo) => isHosted(repo))
  const otherRepos = repos.filter((repo) => !isHosted(repo))

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meus <span className="text-purple-400">Projetos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Todos os meus projetos do GitHub, com destaque para aqueles que estão hospedados e funcionando online.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <span className="text-purple-400">
              <span className="font-semibold">{repos.length}</span> projetos total
            </span>
            <span className="text-green-400">
              <span className="font-semibold">{hostedRepos.length}</span> hospedados
            </span>
          </div>
        </div>

        {/* Projetos Hospedados em Destaque */}
        {hostedRepos.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="h-6 w-6 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Projetos Online</h3>
              <Badge className="bg-green-600 text-white">
                <Eye className="h-3 w-3 mr-1" />
                {hostedRepos.length} Live
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostedRepos.map((repo) => (
                <Card
                  key={repo.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 border-green-500/50 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Preview */}
                  <div className="relative h-48 bg-gray-700 overflow-hidden cursor-pointer">
                    <div className="relative w-full h-full">
                      <iframe
                        src={repo.homepage || ""}
                        className="w-full h-full scale-50 origin-top-left transform"
                        style={{ width: "200%", height: "200%" }}
                        loading="lazy"
                        sandbox="allow-same-origin"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-green-600 text-white">
                          <Eye className="h-3 w-3 mr-1" />
                          {getHostingPlatform(repo)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-white group-hover:text-green-400 transition-colors">
                        {repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </CardTitle>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span className="text-sm">{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="h-4 w-4" />
                          <span className="text-sm">{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 line-clamp-2">
                      {getProjectDescription(repo)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      {repo.language && (
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          <span className="text-sm text-gray-300">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{formatDate(repo.updated_at)}</span>
                      </div>
                    </div>

                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs bg-gray-700 text-gray-200">
                            {topic}
                          </Badge>
                        ))}
                        {repo.topics.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-200">
                            +{repo.topics.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-0"
                        asChild
                      >
                        <a href={repo.homepage || ""} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-white hover:bg-gray-50 text-gray-900 hover:text-gray-900 font-semibold py-2.5 px-4 rounded-lg border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md transition-all duration-200"
                        asChild
                      >
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Outros Projetos */}
        {otherRepos.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-white">Outros Projetos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherRepos.map((repo) => (
                <Card
                  key={repo.id}
                  className="group hover:shadow-lg transition-all duration-300 bg-gray-800 border-gray-700 hover:-translate-y-1 cursor-pointer"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-base text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                        {repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Star className="h-3 w-3" />
                        <span className="text-xs">{repo.stargazers_count}</span>
                      </div>
                    </div>
                    <CardDescription className="text-sm text-gray-300 line-clamp-2">
                      {getProjectDescription(repo)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      {repo.language && (
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          <span className="text-xs text-gray-300">{repo.language}</span>
                        </div>
                      )}
                      <span className="text-xs text-gray-400">{formatDate(repo.updated_at)}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs bg-white hover:bg-gray-50 text-gray-900 hover:text-gray-900 font-semibold py-2 px-3 rounded-md border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md transition-all duration-200"
                        asChild
                      >
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-2" />
                          Código
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Button
          variant="outline"
          className="bg-white hover:bg-gray-50 text-gray-900 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md transition-all duration-200"
          asChild
        >
          <a href="https://github.com/MatheusClaubert" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 mr-2" />
            Ver todos os {repos.length} projetos
          </a>
        </Button>
      </div>
    </section>
  )
}
