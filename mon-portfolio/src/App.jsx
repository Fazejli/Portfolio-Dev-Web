import React, { useState } from 'react';
import { Code2, Briefcase, GraduationCap, Mail, Github, Linkedin, ExternalLink, ChevronRight, Terminal, Layers, Zap, Award, Calendar, MapPin, CheckCircle, FileCode, Database } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('web');

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'Git', level: 90, category: 'Outils' },
  ];

  const projectsWeb = [
    {
      id: 'vti',
      title: 'VTI - Site Vitrine Entreprise',
      type: 'Site Vitrine',
      description: 'Site vitrine moderne pour une entreprise de fournitures textiles avec catalogue produits interactif, système de réservation en ligne et formulaire de contact optimisé.',
      context: 'Projet réalisé pour démontrer ma capacité à créer des sites vitrines professionnels complets avec une UX/UI moderne et performante.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Design moderne et responsive',
        'Catalogue produits avec filtres',
        'Formulaire de réservation',
        'Animations fluides',
        'SEO optimisé',
        'Performance élevée'
      ],
      github: 'https://github.com/username/vti-website',
      demo: 'https://username.github.io/vti-website/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      duration: '2 semaines',
      highlight: true
    }
  ];

  const projectsPython = [
    {
      id: 'data-cleaner',
      title: 'Nettoyeur de Données Clients',
      type: 'Automatisation',
      description: 'Script Python pour nettoyer et consolider des fichiers clients hétérogènes en un CSV exploitable.',
      context: 'Outil créé pour automatiser le traitement de données clients dispersées dans plusieurs fichiers texte avec formats différents.',
      technologies: ['Python', 'CSV', 'File Processing'],
      features: [
        'Lecture multi-fichiers',
        'Détection automatique des formats',
        'Nettoyage des données',
        'Export CSV structuré',
        'Gestion des erreurs',
        'Aucune dépendance externe'
      ],
      github: 'https://github.com/username/data-cleaner',
      duration: '3 jours',
    }
  ];

  const projects42 = [
    {
      id: 'libft',
      title: 'Libft',
      type: 'Bibliothèque C',
      description: 'Recréation de la bibliothèque standard C avec plus de 40 fonctions essentielles.',
      context: 'Premier projet majeur à 42 pour comprendre les fondamentaux de la programmation système et la gestion mémoire en C.',
      technologies: ['C'],
      notions: ['Pointeurs', 'Allocation mémoire', 'Manipulation de chaînes', 'Listes chaînées'],
      difficulty: 'Débutant',
      duration: '2 semaines',
    },
    {
      id: 'ft_printf',
      title: 'ft_printf',
      type: 'Formatage',
      description: 'Réimplémentation complète de printf() avec gestion de formats variés (d, i, u, x, X, s, c, p, %).',
      context: 'Projet pour maîtriser les arguments variadiques et le formatage de sortie en C.',
      technologies: ['C'],
      notions: ['Va_arg', 'Formatage', 'Buffer management', 'Conversion'],
      difficulty: 'Intermédiaire',
      duration: '3 semaines',
    },
    {
      id: 'get_next_line',
      title: 'get_next_line',
      type: 'Gestion I/O',
      description: 'Fonction de lecture ligne par ligne depuis un file descriptor avec buffer statique.',
      context: 'Projet pour comprendre les I/O systèmes et optimiser la gestion de buffer.',
      technologies: ['C'],
      notions: ['File descriptors', 'Static variables', 'Buffer optimization', 'Memory leaks'],
      difficulty: 'Intermédiaire',
      duration: '2 semaines',
    },
    {
      id: 'push_swap',
      title: 'Push_swap',
      type: 'Algorithmes',
      description: 'Algorithme de tri optimisé avec deux stacks et un set limité d\'opérations (5 mouvements max pour 5 nombres).',
      context: 'Projet complexe d\'optimisation algorithmique pour trier des nombres avec le minimum d\'opérations.',
      technologies: ['C'],
      notions: ['Algorithmes de tri', 'Structures de données', 'Optimisation', 'Complexité'],
      difficulty: 'Avancé',
      duration: '4 semaines',
    },
    {
      id: 'minishell',
      title: 'Minishell',
      type: 'Shell Unix',
      description: 'Création d\'un shell minimaliste inspiré de bash avec pipes, redirections et gestion de processus.',
      context: 'Projet de groupe pour comprendre le fonctionnement des shells Unix et la communication inter-processus.',
      technologies: ['C'],
      notions: ['Processus', 'Pipes', 'Redirections', 'Parsing', 'Signaux', 'Fork/Exec'],
      difficulty: 'Avancé',
      duration: '6 semaines',
      collab: true,
    },
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Sites Vitrines',
      description: 'Création de sites modernes, responsives et optimisés pour TPE/PME',
      features: ['Design sur mesure', 'SEO optimisé', 'Performance élevée']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Développement Rapide',
      description: 'Livraison de qualité dans des délais courts',
      features: ['Stack moderne', 'Code propre', 'Documentation']
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Collaboration Long Terme',
      description: 'Disponible pour projets récurrents et partenariats durables',
      features: ['Réactif', 'Fiable', 'Professionnel']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300">Disponible immédiatement</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Développeur Web Freelance
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Création de sites vitrines modernes et performants
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Étudiant à 42 Paris, spécialisé en développement web avec React & TypeScript. 
            Fiable, réactif et orienté qualité pour vos projets récurrents.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#projets"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Briefcase className="w-5 h-5" />
              Voir mes réalisations
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-all"
            >
              Discutons de votre projet
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-sm text-slate-400">Responsive</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">SEO</div>
              <div className="text-sm text-slate-400">Optimisé</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-3xl font-bold text-pink-400 mb-1">Rapide</div>
              <div className="text-sm text-slate-400">Livraison</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-xl text-slate-400">Ce que je peux faire pour vous</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-xl text-slate-400">Mes réalisations et projets</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <Code2 className="w-5 h-5 inline mr-2" />
              Sites Web ({projectsWeb.length})
            </button>
            <button
              onClick={() => setActiveTab('python')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'python'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <Database className="w-5 h-5 inline mr-2" />
              Python ({projectsPython.length})
            </button>
            <button
              onClick={() => setActiveTab('42')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === '42'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <GraduationCap className="w-5 h-5 inline mr-2" />
              Projets 42 ({projects42.length})
            </button>
          </div>

          {activeTab === 'web' && (
            <div className="grid md:grid-cols-2 gap-8">
              {projectsWeb.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    {project.highlight && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs text-green-300">
                        ⭐ Projet Phare
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-300">
                        {project.type}
                      </span>
                      <span className="text-slate-500 text-xs">• {project.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      <span className="text-slate-400">Cliquer pour plus de détails</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'python' && (
            <div className="grid md:grid-cols-2 gap-8">
              {projectsPython.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-300">
                      {project.type}
                    </span>
                    <span className="text-slate-500 text-xs">• {project.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <ExternalLink className="w-4 h-4" />
                    Voir les détails
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === '42' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects42.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <Award className={`w-5 h-5 flex-shrink-0 ${
                      project.difficulty === 'Débutant' ? 'text-green-400' :
                      project.difficulty === 'Intermédiaire' ? 'text-yellow-400' :
                      'text-red-400'
                    }`} />
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{project.difficulty}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Compétences</h2>
            <p className="text-xl text-slate-400">Stack technique maîtrisée</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-6 h-6 text-blue-400" />
                Technologies
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.category}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-purple-400" />
                Points forts
              </h3>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Formation 42 Paris</p>
                      <p className="text-sm text-slate-400">Rigueur, autonomie et résolution de problèmes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Collaboration long terme</p>
                      <p className="text-sm text-slate-400">Fiable, réactif et disponible pour projets récurrents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Qualité & Performance</p>
                      <p className="text-sm text-slate-400">Code propre, sites optimisés et documentation claire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Livraison rapide</p>
                      <p className="text-sm text-slate-400">Respect des délais et retouches réactives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Travaillons ensemble</h2>
          <p className="text-xl text-slate-400 mb-12">
            Disponible immédiatement pour collaboration long terme
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Localisation</p>
                  <p className="text-sm text-slate-400">France (Remote)</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Disponibilité</p>
                  <p className="text-sm text-slate-400">Immédiate</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold">Tarifs</p>
                  <p className="text-sm text-slate-400">Sur demande</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:votre.email@example.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <Mail className="w-5 h-5" />
                Discutons de votre projet
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-700 border border-slate-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-600 transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-700 border border-slate-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-600 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <p className="text-slate-500 text-sm">
            Collaboration professionnelle • Livraison rapide • Qualité garantie
          </p>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-300">
                    {selectedProject.type}
                  </span>
                  <span className="text-slate-500 text-sm">• {selectedProject.duration}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">📋 Description</h4>
                <p className="text-slate-300">{selectedProject.description}</p>
              </div>

              {selectedProject.context && (
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">🎯 Contexte</h4>
                  <p className="text-slate-300">{selectedProject.context}</p>
                </div>
              )}

              {selectedProject.notions && (
                <div>
                  <h4 className="font-semibold text-pink-400 mb-2">💡 Notions abordées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.notions.map((notion) => (
                      <span key={notion} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-sm">
                        {notion}
                      </span>
                    ))}
                                      </div>
                </div>
              )}

              {selectedProject.technologies && (
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">🛠 Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.features && (
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-3">✨ Fonctionnalités</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(selectedProject.github || selectedProject.demo) && (
                <div className="pt-4">
                  <h4 className="font-semibold text-blue-400 mb-2">🔗 Liens</h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-all"
                      >
                        <Github className="w-5 h-5" />
                        Code Source
                      </a>
                    )}

                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center gap-2 font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Voir la démo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} - Portfolio développé avec React & Tailwind CSS
      </footer>
    </div>
  );
};

export default Portfolio;
