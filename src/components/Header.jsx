import React from 'react'


export default function Header(){
return (
<header className="flex items-center justify-between py-8">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl neu-inset flex items-center justify-center">📂</div>
<h1 className="text-xl font-bold">Alfatac Portfolio</h1>
</div>


<nav className="flex gap-6 text-slate-300">
<a href="#projects" className="hover:text-white transition">Projets</a>
<a href="#contact" className="hover:text-white transition">Contact</a>
</nav>
</header>
)
}