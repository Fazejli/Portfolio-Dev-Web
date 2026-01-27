import React from 'react'
import { Code, Palette, Zap } from 'lucide-react'

export default function Hero() {
  const bio = `Salut ! Je suis Fadwa, étudiante à 42 Paris, développeuse web et future spécialiste cybersécurité. J'aime créer des expériences visuelles immersives, mais aussi sécuriser chaque couche d'un projet : backend, frontend, infrastructure. Je suis passionnée par la détection de vulnérabilités, le pentest et le développement sécurisé.`

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programmation Système",
      items: ["C/C++", "Unix/Linux", "Bash", "Algorithmique"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Développement Web",
      items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Outils & Autres",
      items: ["Git/GitHub", "Python", "3D Graphics", "Réseau"]
    }
  ]

  return (
    <section className="text-center mt-10 mb-20">
      <div className="flex flex-col items-center gap-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            • Conception et développement de solutions informatiques •
          </h2>

          <p className="text-slate-300 mb-6">
            Étudiante 42 Paris — Je conçois des interfaces soignées, performantes et maintenables.
          </p>

          <div className="flex justify-center mb-8">
            <img 
              src={`${import.meta.env.BASE_URL}photo.jpg`}
              alt="Fadwa" 
              className="w-40 h-40 rounded-full border-4 border-blue-500/50 shadow-lg"
            />
          </div>

          <p className="text-lg text-slate-300 leading-relaxed px-6">
            {bio}
            <br />
              Toujours avec le sourire 😄 et un café à la main ☕️ !
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
            {skills.map((skill, index) => (
              <div key={index} className="neu-card p-6">
                <div className="flex items-center gap-3 mb-4 text-blue-400">
                  <div className="w-12 h-12 rounded-xl neu-inset flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{skill.title}</h4>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
