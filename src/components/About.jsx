import React from 'react'

export default function About() {
  return (
    <section id="about" className="my-5 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-8 text-center">À propos de moi</h3>
      <div className="neu-card p-8 mb-8">
        <p className="text-slate-300 mb-4 text-lg">
          👋 Je suis étudiante à <span className="font-semibold">42 Paris</span> et développeuse passionnée 
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
        <div className="mt-8 text-center">
            <p className="text-slate-400">
              🎯 Actuellement en recherche de missions freelance et opportunités professionnelles.
            </p>
        </div>
      </div>
    </section>
  )
}
