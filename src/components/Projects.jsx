import React, { useState } from 'react'
import { projects } from '../data/projects'


export default function Projects({ onSelect }){
const [filter, setFilter] = useState('all')


const filtered = projects.filter(p => filter === 'all' ? true : p.technologies.includes(filter))


return (
<section id="projects" className="my-20">
<h3 className="text-3xl font-semibold mb-8 text-center">Projets récents</h3>


<div className="flex justify-center gap-3 mb-8 flex-wrap">
<button onClick={()=>setFilter('all')} className="button-neu">Tous</button>
<button onClick={()=>setFilter('React')} className="button-neu">React</button>
<button onClick={()=>setFilter('Node.js')} className="button-neu">Node</button>
</div>


<div className="grid md:grid-cols-2 gap-8">
{filtered.map(p => (
<article key={p.id} className="neu-card p-6 cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => onSelect(p)}>
<h4 className="text-xl font-semibold">{p.title}</h4>
<p className="text-slate-400 mb-4">{p.subtitle}</p>
<div className="flex gap-2 flex-wrap mb-4">
{p.technologies.map(t => <span key={t} className="px-3 py-1 rounded-xl neu-inset text-sm">{t}</span>)}
</div>
<div className="text-slate-300 text-sm">Cliquez pour voir les détails</div>
</article>
))}
</div>
</section>
)
}