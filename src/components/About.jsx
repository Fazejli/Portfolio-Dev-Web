import React from 'react'
import { Code, Palette, Zap } from 'lucide-react'

export default function About() {
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
    <section id="about" className="my-20 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-8 text-center">À propos de moi</h3>
      
      <div className="neu-card p-8 mb-8">
        <p className="text-slate-300 mb-4 text-lg">
          👋 Bonjour ! Je suis <span className="text-blue-400 font-semibold">Fadwa</span>, 
          étudiante à <span className="font-semibold">42 Paris</span> et développeuse web passionnée 
          par la création d'expériences numériques innovantes.
        </p>
        <p className="text-slate-300 mb-4">
          Mon parcours à 42 m'a permis d'acquérir une solide maîtrise de la programmation en 
          <strong> C/C++</strong>, des systèmes Unix, et de l'algorithmique. J'ai développé 
          des projets variés allant des moteurs de rendu 3D (raycasting) aux shells Unix complets.
        </p>
        <p className="text-slate-300">
          En parallèle, je réalise des <strong>sites vitrines modernes</strong> et performants 
          avec React et Tailwind CSS. J'aime transformer des idées en interfaces élégantes et 
          fonctionnelles, tout en maintenant un code propre et maintenable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="neu-card p-6">
            <div className="w-12 h-12 rounded-xl neu-inset flex items-center justify-center mb-4 text-blue-400">
              {skill.icon}
            </div>
            <h4 className="text-xl font-semibold mb-3">{skill.title}</h4>
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

      <div className="mt-8 text-center">
        <p className="text-slate-400">
          🎯 Actuellement en recherche de missions freelance et opportunités professionnelles.
        </p>
      </div>
    </section>
  )
}