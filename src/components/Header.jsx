import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between py-8 sticky top-0 bg-gradient-to-b from-[#071021] to-transparent backdrop-blur-sm z-40">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl neu-inset flex items-center justify-center">💼</div>
        <h1 className="text-xl font-bold">Fazed Dev</h1>
      </div>

      <nav className="flex gap-6 text-slate-300 text-sm md:text-base">
        <a href="#about" className="hover:text-white transition">À propos</a>
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#projects" className="hover:text-white transition">Projets</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
    </header>
  )
}