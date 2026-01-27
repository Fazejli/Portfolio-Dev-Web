import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Contact from './components/Contact'
import Footer from './components/Footer'



export default function App(){
const [selectedProject, setSelectedProject] = useState(null)


return (
<div className="min-h-screen px-6 md:px-20 py-8">
<Header />
<Hero />
<Services onSelect={setSelectedProject} />
<About />
<Projects onSelect={setSelectedProject} />
<Contact />
<Footer />


{selectedProject && (
<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
)}
</div>
)
}