"use client"

import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black opacity-80 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent"></div>

        <div className="container relative z-10 px-4 mx-auto flex flex-col items-center text-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            <Image src="/profile-image.jpg" alt="Xavier Perez Jimenez" fill className="object-cover" priority />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Xavier Perez Jimenez
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-gray-300">Back-end Developer</h2>
          <p className="max-w-2xl text-base md:text-lg text-gray-400 mb-8">
            Apasionado por la tecnología y especializado en backend development
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
              onClick={() => window.open("https://github.com/xvipj", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
              onClick={() => window.open("https://www.linkedin.com/in/xavierperezjimenez", "_blank")}
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sobre Mí
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Apasionado por la tecnología y especializado en backend development, he diseñado soluciones escalables y
              seguras que han optimizado los procesos internos de empresas. Destaco por mi curiosidad, proactividad y
              compromiso con la mejora continua, trabajando eficazmente en equipos ágiles y colaborativos.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Busco nuevos retos donde pueda aplicar mis conocimientos en tecnologías como Django, Python y AWS para
              aportar valor y seguir aprendiendo.
            </p>
            <div className="pt-4 bg-gradient-to-br from-purple-900/20 to-black p-4 sm:p-6 rounded-xl border border-purple-900/50 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-purple-400">Datos Personales</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="font-medium text-purple-300">Edad:</span> 21 años
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium text-purple-300">Idiomas:</span> Español (Nativo), Inglés (B2)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 text-purple-400">Lenguajes & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "Django Rest Framework", "JavaScript", "HTML", "CSS", "Kotlin"].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-purple-900/50 hover:bg-purple-800 text-purple-200 py-1 sm:py-1.5 px-2 sm:px-3 text-xs sm:text-sm rounded-full mb-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mt-6 md:mt-8 mb-4 md:mb-6 text-purple-400">
                Bases de Datos
              </h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Redis", "SQLite3", "AWS RDS"].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-purple-900/50 hover:bg-purple-800 text-purple-200 py-1 sm:py-1.5 px-2 sm:px-3 text-xs sm:text-sm rounded-full mb-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 text-purple-400">DevOps & Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "CI/CD", "Git", "GitHub", "AWS S3", "AWS EC2", "Linux", "Microservicios", "WordPress"].map(
                  (skill) => (
                    <Badge
                      key={skill}
                      className="bg-purple-900/50 hover:bg-purple-800 text-purple-200 py-1 sm:py-1.5 px-2 sm:px-3 text-xs sm:text-sm rounded-full mb-2"
                    >
                      {skill}
                    </Badge>
                  ),
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mt-6 md:mt-8 mb-4 md:mb-6 text-purple-400">
                Otras Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {["PyTest", "Auth0", "django-allauth", "Numpy", "drf-spectacular", "Markdown", "Typer"].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-purple-900/50 hover:bg-purple-800 text-purple-200 py-1 sm:py-1.5 px-2 sm:px-3 text-xs sm:text-sm rounded-full mb-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Experiencia Laboral
          </h2>

          <div className="space-y-6 md:space-y-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-black p-4 sm:p-6 rounded-xl border border-purple-900/50 shadow-lg">
              <div className="mb-3 md:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                  Back-end Developer & Soporte Técnico
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">Itnetgroup 2023</p>
              </div>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base pl-0 sm:pl-2">
                <li>
                  Desarrollé aplicaciones web de alto rendimiento, reduciendo los tiempos de carga en un 30% mediante la
                  optimización de microservicios.
                </li>
                <li>
                  Diseñé arquitecturas backend escalables y modulares que permitieron un aumento del 50% en la
                  eficiencia del mantenimiento del sistema.
                </li>
                <li>
                  Implementé APIs robustas que mejoraron la experiencia del usuario, logrando un incremento del 20% en
                  la satisfacción del cliente según métricas internas.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-black p-4 sm:p-6 rounded-xl border border-purple-900/50 shadow-lg">
              <div className="mb-3 md:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                  Agente de seguridad de la aviación civil
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">Longport Colombia 2024-2025</p>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Como Agente de Seguridad de la Aviación Civil en Longport Colombia, me encargo de la protección de los
                aviones y los pasajeros. Mi labor consiste en impedir el transporte de mercancías peligrosas y prevenir
                cualquier acto de interferencia ilícita que pueda poner en riesgo la aviación civil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Formación & Certificaciones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 text-purple-400">Formación Académica</h3>
              <Card className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/50 shadow-lg overflow-hidden">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-purple-300">Elyon Yire: 2022-2023</h4>
                  <p className="text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">Técnico laboral en sistemas</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 text-purple-400">Certificaciones</h3>
              <div className="space-y-3 sm:space-y-4">
                <Card className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/50 shadow-lg overflow-hidden">
                  <CardContent className="p-3 sm:p-4">
                    <h4 className="font-medium text-purple-300 text-sm sm:text-base">Platzi</h4>
                    <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
                      <li>Curso de Django</li>
                      <li>Curso de Kotlin</li>
                      <li>Programación con JavaScript</li>
                      <li>Curso Profesional de Docker</li>
                      <li>Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/50 shadow-lg overflow-hidden">
                  <CardContent className="p-3 sm:p-4">
                    <h4 className="font-medium text-purple-300 text-sm sm:text-base">Elyon Yire</h4>
                    <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
                      <li>Informática y Sistemas: Ethical Hacking</li>
                      <li>Analítica de Datos con Python y Excel</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/50 shadow-lg overflow-hidden">
                  <CardContent className="p-3 sm:p-4">
                    <h4 className="font-medium text-purple-300 text-sm sm:text-base">Codigo Facilito</h4>
                    <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
                      <li>Curso Profesional de Docker</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Proyectos
          </h2>

          <div className="flex flex-col items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] bg-gradient-to-br from-purple-900/20 to-black p-6 sm:p-10 rounded-xl border border-purple-900/50 shadow-lg text-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20 animate-ping"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-purple-900 rounded-full">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-300">Próximamente</h3>
            <p className="text-gray-400 max-w-lg text-sm sm:text-base">
              Aquí estarán mis proyectos. Actualmente estoy trabajando en soluciones innovadoras que pronto compartiré
              en esta sección.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-10 bg-black border-t border-purple-900/30">
        <div className="container px-4 mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://github.com/xvipj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/xavierperezjimenez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Xavier Perez Jimenez. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

