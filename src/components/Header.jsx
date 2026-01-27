import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="flex items-center justify-between py-8 sticky top-0 bg-gradient-to-b from-[#071021] to-transparent backdrop-blur-sm z-40">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl neu-inset flex items-center justify-center">💼</div>
        <h1 className="text-xl font-bold">Fazed Dev</h1>
      </Link>

      <nav className="flex gap-6 text-slate-300 text-sm md:text-base">
        <Link to="/" className="hover:text-white transition">Accueil</Link>
        <Link to="/about" className="hover:text-white transition">À propos</Link>
        <Link to="/projects" className="hover:text-white transition">Projets</Link>
        <Link to="/contact" className="hover:text-white transition">Contact</Link>
      </nav>
    </header>
  )
}