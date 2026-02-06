import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 text-center text-slate-500 text-sm space-y-2">
      <p>© {new Date().getFullYear()} • Portfolio • Réalisé avec ❤️</p>
      <p className="text-xs text-slate-600">
        *Certaines images de démonstration des projets et documentations 
        ont été générées avec  l'assistance de l'IA (Claude d'Anthropic / CANVAS / Chat GPT) afin de fournir une meilleure présentation visuelle.
        **Le code source des projets reste 100% développé manuellement.
      </p>
    </footer>
  )
}