import React, { useState } from 'react'
import { Github, ExternalLink, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const hasImages = project.images && project.images.length > 0

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-6 z-50">
      <div className="neu-card max-w-5xl w-full p-8 modal-scroll relative">
        {/* Bouton fermer */}
        <button 
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700/50" 
          onClick={onClose}
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* En-tête du projet */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-slate-300 text-lg mb-4">{project.subtitle}</p>

          {/* Badge catégorie */}
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            project.category === 'school' 
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
              : 'bg-green-500/20 text-green-300 border border-green-500/30'
          }`}>
            {project.category === 'school' ? '🎓 École 42' : '💼 Freelance'}
          </span>
        </div>

        {/* Galerie d'images */}
        {hasImages && (
          <div className="mb-8">
            <div className="relative bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700">
              {/* Image principale */}
              <div className="relative aspect-video flex items-center justify-center p-4">
                <img 
                  src={project.images[currentImageIndex].src} 
                  alt={project.images[currentImageIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Contrôles de navigation */}
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 button-neu p-3 hover:scale-110 transition-transform"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 button-neu p-3 hover:scale-110 transition-transform"
                      aria-label="Image suivante"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Indicateur de position */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-blue-500 w-8' 
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Légende de l'image */}
              <div className="p-4 bg-slate-800/50 border-t border-slate-700">
                <h4 className="font-semibold text-lg mb-1">
                  {project.images[currentImageIndex].title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {project.images[currentImageIndex].description}
                </p>
              </div>
            </div>

            {/* Miniatures (si plus d'une image) */}
            {project.images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-blue-500 scale-105' 
                        : 'border-slate-700 hover:border-slate-500 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="text-blue-400">🛠️</span>
            Technologies
          </h4>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map(t => (
              <span 
                key={t} 
                className="px-4 py-2 rounded-xl neu-inset text-sm font-medium hover:scale-105 transition-transform"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Fonctionnalités */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="text-green-400">✨</span>
            Fonctionnalités
          </h4>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 text-slate-300 p-3 rounded-lg hover:bg-slate-800/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Liens */}
        <div className="flex gap-4 mt-8 pt-6 border-t border-slate-700">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="button-neu flex items-center gap-2 px-6 py-3 hover:scale-105 transition-transform font-semibold"
            >
              <Github className="w-5 h-5" />
              Code Source
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="button-neu flex items-center gap-2 px-6 py-3 hover:scale-105 transition-transform font-semibold bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30"
            >
              <ExternalLink className="w-5 h-5" />
              Voir la Démo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}