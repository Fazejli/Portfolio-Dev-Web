import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <Router basename="/Portfolio-Dev-Web">
      <ScrollToTop />
      <div className="min-h-screen px-6 md:px-20 py-8">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage onSelect={setSelectedProject} />} />
          <Route path="/projects" element={<ProjectsPage onSelect={setSelectedProject} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </Router>
  )
}