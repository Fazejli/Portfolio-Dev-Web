import React from 'react'
import { Github, ExternalLink, CheckCircle } from 'lucide-react'


export default function ProjectModal({ project, onClose }){
if(!project) return null
return (
<div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-6 z-50">
<div className="neu-card max-w-2xl w-full p-8 modal-scroll relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-white" onClick={onClose}>✕</button>
<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
<p className="text-slate-300 mb-4">{project.subtitle}</p>


<div className="flex gap-2 flex-wrap mb-4">
{project.technologies.map(t => <span key={t} className="px-3 py-1 rounded-xl neu-inset text-sm">{t}</span>)}
</div>


<h4 className="font-semibold mb-2">Fonctionnalités</h4>
<ul className="space-y-2 mb-4">
{project.features.map((f,i)=> (
<li key={i} className="flex items-center gap-2 text-slate-300"><CheckCircle className="w-4 h-4 text-green-400"/>{f}</li>
))}
</ul>


<div className="flex gap-3 mt-6">
{project.github && (
<a href={project.github} target="_blank" rel="noreferrer" className="button-neu flex items-center gap-2"><Github className="w-4 h-4"/>Code</a>
)}
{project.demo && (
<a href={project.demo} target="_blank" rel="noreferrer" className="button-neu flex items-center gap-2"><ExternalLink className="w-4 h-4"/>Démo</a>
)}
</div>
</div>
</div>
)
}