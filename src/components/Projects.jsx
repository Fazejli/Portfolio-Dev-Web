import React, { useState } from 'react'
import { projects } from '../data/projects'


export default function Projects({ onSelect }){
  const [filter, setFilter] = useState('all')


  const filtered = projects.filter(p => {
    if (filter === 'all') return true
    if (filter === 'web') return p.technologies.some(t => 
      ['React', 'Tailwind', 'Vite', 'JavaScript', 'GitHub Pages'].includes(t)
    )
    if (filter === 'c') return p.technologies.includes('C')
    if (filter === 'cpp') return p.technologies.includes('C++')
    if (filter === 'python') return p.technologies.includes('Python')
    if (filter === 'system') return p.technologies.some(t => 
      ['Unix', 'Debian', 'Processes', 'Threads'].includes(t)
    )
    if (filter === 'graphics') return p.technologies.some(t => 
      ['MiniLibX', 'Raycasting', '3D Graphics', 'Graphisme'].includes(t)
    )
    if (filter === 'network') return p.technologies.some(t => 
      ['Réseau', 'TCP/IP', 'Subnetting', 'Routing'].includes(t)
    )
    return false
  })

  const filterButtons = [
    { id: 'all', label: 'Tous', emoji: '🌐' },
    { id: 'web', label: 'Web', emoji: '💻' },
    { id: 'c', label: 'C/Algo', emoji: '⚙️' },
    { id: 'cpp', label: 'C++', emoji: '🔧' },
    { id: 'system', label: 'Système', emoji: '🖥️' },
    { id: 'graphics', label: 'Graphique', emoji: '🎮' },
    { id: 'network', label: 'Réseau', emoji: '🌐' },
    { id: 'python', label: 'Python', emoji: '🐍' },
  ]

  return (
    <section id="projects" className="my-20">
      <h3 className="text-3xl font-semibold mb-8 text-center">Projets & Réalisations</h3>
      <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
        Une sélection de mes projets : sites web clients, projets 42 Paris, et scripts d'automatisation
      </p>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {filterButtons.map(btn => (
          <button 
            key={btn.id}
            onClick={() => setFilter(btn.id)} 
            className={`button-neu px-4 py-2 transition-all ${
              filter === btn.id ? 'ring-2 ring-blue-400' : ''
            }`}
          >
            <span className="mr-2">{btn.emoji}</span>
            {btn.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <article 
            key={p.id} 
            className="neu-card p-6 cursor-pointer hover:scale-[1.02] transition-transform flex flex-col"
            onClick={() => onSelect(p)}
          >
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-slate-400 text-sm mb-4 flex-grow">{p.subtitle}</p>
            
            <div className="flex gap-2 flex-wrap mb-4">
              {p.technologies.slice(0, 3).map(t => (
                <span key={t} className="px-2 py-1 rounded-lg neu-inset text-xs">
                  {t}
                </span>
              ))}
              {p.technologies.length > 3 && (
                <span className="px-2 py-1 rounded-lg neu-inset text-xs text-slate-500">
                  +{p.technologies.length - 3}
                </span>
              )}
            </div>
            
            <div className="text-slate-400 text-xs flex items-center gap-2">
              <span>👉</span>
              <span>Cliquez pour voir les détails</span>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-slate-400 py-12">
          Aucun projet trouvé pour ce filtre
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm">
          📊 {projects.length} projets au total • {filtered.length} affichés
        </p>
      </div>
    </section>
  )
}