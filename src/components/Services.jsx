import React from 'react'
import { CheckCircle, FileCode, Code2, Zap, Briefcase } from 'lucide-react'

export default function Services({ onSelect }) {

  const bio = `Salut ! Je suis Fadwa, étudiante à 42 Paris et développeuse web passionnée par la 3D. 
J'adore transformer des lignes de code en expériences visuelles immersives et rendre vos projets performants. 
Toujours avec le sourire 😄 et un café à la main !`

  const services = [
    {
      icon: <FileCode className="w-8 h-8" />,
      title: 'Mon CV',
      description: 'Téléchargez mon CV pour découvrir mon parcours complet et mes compétences techniques.',
      features: ['Formation 42 Paris', 'Projets 42 et Freelance', 'Compétences en développement web et 3D'],
      link: `${import.meta.env.BASE_URL}cv.pdf`
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Sites Vitrines',
      description: 'Création de sites modernes et responsives',
      features: ['Design sur mesure', 'SEO optimisé', 'Performance élevée']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Développement Rapide',
      description: 'Livraison de qualité dans des délais courts',
      features: ['Stack moderne', 'Code propre', 'Documentation']
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Collaboration Long Terme',
      description: 'Disponible pour projets récurrents et partenariats durables',
      features: ['Réactif', 'Fiable', 'Professionnel']
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <img 
            src={`${import.meta.env.BASE_URL}photo.jpg`}
            alt="Moi" 
            className="w-32 h-32 rounded-full border-4 border-blue-500/50 shadow-lg"
          />
          <p className="text-lg text-slate-300">{bio}</p>
        </div>

        <div className="text-center mb-16">
          <p className="text-xl text-slate-100">Ce que je peux faire pour vous:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-4">{service.description}</p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {service.link && (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Télécharger le CV
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}