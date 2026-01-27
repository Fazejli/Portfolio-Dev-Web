import React from 'react'


export default function Hero(){
  const bio = `Salut ! Je suis Fadwa, étudiante à 42 Paris, développeuse web et future spécialiste cybersécurité.
J’aime créer des expériences visuelles immersives, mais aussi sécuriser chaque couche d’un projet : backend, frontend, infrastructure.
Je suis passionnée par la détection de vulnérabilités, le pentest et le développement sécurisé.
Toujours avec le sourire 😄 et un café à la main !`

  return (
    <section className="text-center mt-10 mb-20">
      <div className="flex flex-col items-center gap-6 mb-8">
        <img 
          src={`${import.meta.env.BASE_URL}photo.jpg`}
          alt="Fadwa" 
          className="w-40 h-40 rounded-full border-4 border-blue-500/50 shadow-lg"
        />
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">• Conception et développement de solutions informatiques •</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-4">
            Étudiante 42 Paris — Je conçois des interfaces soignées, performantes et maintenables.
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto px-6">
            {bio}
          </p>
        </div>
      </div>
    </section>
  )
}