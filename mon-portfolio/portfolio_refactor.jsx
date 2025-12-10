import React, { useState } from "react";
import { Github, ExternalLink, CheckCircle, Mail, Phone, User } from "lucide-react";

// 🌙 NEUMORPHISM THEME
// Couleurs douces + ombres internes/externe pour un rendu premium
const neu = {
  card: "bg-slate-900 rounded-3xl p-8 shadow-[10px_10px_20px_#0b0e14,-10px_-10px_20px_#1b2333]",
  inset: "shadow-[inset_8px_8px_16px_#0b0e14,inset_-8px_-8px_16px_#1b2333]",
  button: "px-5 py-3 rounded-2xl shadow-[6px_6px_12px_#0b0e14,-6px_-6px_12px_#1b2333] hover:shadow-[inset_6px_6px_12px_#0b0e14,inset_-6px_-6px_12px_#1b2333] transition-all",
};

// 🔥 Structure Pro & Organisée
// /components : Sections du portfolio
// /data : Données des projets
// Portfolio.jsx orchestre seulement l'affichage

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 md:px-20">
      <Header />
      <Hero />
      <Projects onSelect={setSelectedProject} />
      <Contact />
      <Footer />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

/*************************
 * HEADER
 *************************/
function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <h1 className="text-3xl font-bold tracking-wide">Mon Portfolio</h1>
      <nav className="flex gap-6 text-slate-300">
        <a href="#projects" className="hover:text-white transition">Projets</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
    </header>
  );
}

/*************************
 * HERO SECTION
 *************************/
function Hero() {
  return (
    <section className="text-center mt-20 mb-32">
      <h2 className="text-5xl font-bold mb-6">Développeur Full‑Stack</h2>
      <p className="text-slate-300 max-w-2xl mx-auto text-lg">
        Je crée des applications web modernes, performantes et élégantes.
      </p>
    </section>
  );
}

/*************************
 * PROJECTS SECTION
 *************************/
const sampleProjects = [
  {
    title: "Dashboard Analytics",
    subtitle: "React / Tailwind / API",
    technologies: ["React", "Tailwind", "Node.js"],
    features: ["Graphiques dynamiques", "Dark mode", "API sécurisée"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "E‑commerce UI",
    subtitle: "React / Stripe / Zustand",
    technologies: ["React", "Stripe", "Zustand"],
    features: ["Paiement en ligne", "Panier persistant", "Animations premium"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

function Projects({ onSelect }) {
  return (
    <section id="projects" className="mb-32">
      <h3 className="text-4xl font-semibold mb-12 text-center">Mes Projets</h3>

      <div className="grid md:grid-cols-2 gap-12">
        {sampleProjects.map((p, index) => (
          <div
            key={index}
            className={`${neu.card} cursor-pointer hover:scale-[1.02] transition-transform`}
            onClick={() => onSelect(p)}
          >
            <h4 className="text-2xl font-semibold mb-2">{p.title}</h4>
            <p className="text-slate-400 mb-4">{p.subtitle}</p>

            <div className="flex gap-2 flex-wrap mb-4">
              {p.technologies.map((t) => (
                <span key={t} className={`px-3 py-1 rounded-xl text-sm ${neu.inset}`}>
                  {t}
                </span>
              ))}
            </div>

            <button className={`${neu.button} mt-2`}>En savoir plus</button>
          </div>
        ))}
      </div>
    </section>
  );
}

/*************************
 * PROJECT MODAL
 *************************/
function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-6 z-50">
      <div className={`${neu.card} max-w-xl w-full relative p-10`}>
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-slate-300 mb-6">{project.subtitle}</p>

        <h4 className="text-xl font-semibold mb-2">Technologies</h4>
        <div className="flex gap-2 flex-wrap mb-6">
          {project.technologies.map((t) => (
            <span key={t} className={`px-3 py-1 rounded-xl text-sm ${neu.inset}`}>
              {t}
            </span>
          ))}
        </div>

        <h4 className="text-xl font-semibold mb-2">Fonctionnalités</h4>
        <ul className="space-y-3 mb-6">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-slate-300">
              <CheckCircle className="w-5 h-5 text-green-400" /> {f}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-6">
          <a
            href={project.github}
            target="_blank"
            className={`${neu.button} flex items-center gap-2`}
          >
            <Github className="w-5 h-5" /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            className={`${neu.button} flex items-center gap-2`}
          >
            <ExternalLink className="w-5 h-5" /> Démo
          </a>
        </div>
      </div>
    </div>
  );
}

/*************************
 * CONTACT
 *************************/
function Contact() {
  return (
    <section id="contact" className="mb-32 text-center">
      <h3 className="text-4xl font-semibold mb-12">Contact</h3>

      <div className="max-w-xl mx-auto space-y-6">
        <div className={`${neu.card} flex items-center gap-4 p-6`}>
          <Mail className="w-6 h-6" /> contact@mail.com
        </div>
        <div className={`${neu.card} flex items-center gap-4 p-6`}>
          <Phone className="w-6 h-6" /> 06 00 00 00 00
        </div>
      </div>
    </section>
  );
}

/*************************
 * FOOTER
 *************************/
function Footer() {
  return (
    <footer className="py-10 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} • Portfolio réalisé avec React & Neumorphism
    </footer>
  );
}
