export const projects = [
  // ========== PROJETS FREELANCE ==========
  {
    id: 'vitrine-magasin',
    title: 'Site Vitrine Commerce',
    subtitle: 'Site moderne pour entreprise de textile',
    category: 'freelance',
    technologies: ['React', 'Tailwind', 'Vite', 'deployment via GitHub Pages'],
    features: [
      'Design épuré et responsive',
      'Catalogue produits avec système de filtres',
      'Formulaire de commande en ligne',
      'Optimisation SEO (structure, balises, performances)',
      'Animations fluides avec transitions CSS',
      'Déploiement automatisé via GitHub Pages'
    ],
    github: '',
    demo: 'https://fazejli.github.io/vti-website/',
    image: `${import.meta.env.BASE_URL}demo/VTI-demo.png`,
    images: []
  },
  {
    id: 'zejli-paschal-wedding',
    title: 'Zejli & Paschal Wedding',
    subtitle: 'Site de mariage interactif permettant de partager les informations clés de l’événement et de gérer les confirmations de présence.',
    category: 'freelance',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    features: [
      'Présentation élégante du mariage avec storytelling',
      'Informations pratiques (date, lieu, déroulé)',
      'Interface responsive adaptée mobile et desktop',
      'Animations et transitions fluides',
      'Navigation simple et intuitive',
      'Déploiement rapide et optimisé via Vercel'
    ],
    github: '',
    demo: 'https://zejli-et-paschal.vercel.app/',
    image: `${import.meta.env.BASE_URL}demo/wedding_website.jpg`,
    images: []
  },
  {
    id: 'rapport-notes-auto',
    title: 'Générateur de Rapports de Notes',
    subtitle: 'Automatisation Python pour génération PDF',
    category: 'freelance',
    technologies: ['Python', 'Pandas', 'FPDF', 'Excel'],
    features: [
      'Lecture automatique depuis fichier Excel',
      'Calcul de moyennes et statistiques',
      'Génération de PDF personnalisés par étudiant',
      'Commentaires automatiques selon la moyenne',
      'Traitement batch de plusieurs étudiants',
      'Structure de dossiers automatique'
    ],
    github: '',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/rapport-generator-flow.svg`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}demo/rapport-generator-flow.svg`,
        title: 'Flux Automatisé',
        description: 'Pipeline de traitement automatique des notes'
      },
      {
        src: `${import.meta.env.BASE_URL}demo/rapport-pdf-mockup.svg`,
        title: 'Exemple de Rapport PDF',
        description: 'Aperçu d\'un rapport généré avec notes et commentaires'
      },
      {
        src: `${import.meta.env.BASE_URL}demo/rapport-impact-infographic.svg`,
        title: 'Impact & Performances',
        description: 'Gain de temps et efficacité mesurés'
      }
    ]
  },
  {
    id: 'csv-merger',
    title: 'CSV Data Merger',
    subtitle: 'Script d\'agrégation de données clients',
    category: 'freelance',
    technologies: ['Python', 'CSV', 'File Processing'],
    features: [
      'Parsing de multiples fichiers .txt',
      'Support de formats mixtes (CSV, TSV)',
      'Nettoyage et validation des données',
      'Agrégation dans un fichier CSV unique',
      'Gestion des encodages (UTF-8)',
      'Traitement robuste des erreurs'
    ],
    github: '',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/csv-merger-flow.svg`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}demo/csv-merger-flow.svg`,
        title: 'Pipeline de Traitement',
        description: 'Architecture du système de fusion de données'
      },
      {
        src: `${import.meta.env.BASE_URL}demo/csv-merger-before-after.svg`,
        title: 'Avant / Après',
        description: 'Transformation des données dispersées en fichier unifié'
      },
      {
        src: `${import.meta.env.BASE_URL}demo/csv-merger-impact.svg`,
        title: 'Cas d\'usage & impact',
        description: 'Applications réelles et métriques de performance'
      }
    ]
  },
  {
      id: 'email-signature-automation',
      title: 'Signatures Email Automatisées',
      subtitle: 'Mise en place de signatures professionnelles centralisées',
      category: 'freelance',
      technologies: ['HTML', 'CSS', 'Microsoft 365', 'Google Workspace', 'Google Directory', 'CodeTwo'],
      features: [
        'Création de modèles HTML/CSS conformes à la charte graphique',
        'Automatisation des informations utilisateurs depuis l\'annuaire',
        'Déploiement centralisé pour l\'ensemble des collaborateurs',
        'Compatibilité multi-clients mail (Outlook, Gmail, etc.)',
        'Mises à jour globales simples et rapides',
        'Test et validation du rendu sur différents appareils et résolutions'
      ],
      github: '',
      demo: `${import.meta.env.BASE_URL}demo/signature.jpg`,
      image: '',
      images: []
  },

  // ========== PROJETS ÉCOLE 42 ==========
    {
    id: 'cub3d',
    title: '🌟 Cub3D',
    subtitle: 'Moteur de rendu 3D type Wolfenstein',
    category: 'school',
    technologies: ['C', 'MiniLibX', 'Raycasting', '3D Graphics', 'Parsing'],
    features: [
      'Rendu 3D en temps réel avec raycasting',
      'Textures pour murs (Nord, Sud, Est, Ouest)',
      'Sprites animés (ennemis, objets)',
      'Minimap interactive en temps réel',
      'Déplacement fluide (WASD) et rotation (flèches)',
      'Parser de fichiers .cub avec validation'
    ],
    github: 'https://github.com/Fazejli/Cub3D',
    demo: '',
    image: '',
    images: []
  },
    {
    id: 'cpp-modules',
    title: 'C++ Modules (00-04)',
    subtitle: 'Introduction à la POO en C++',
    category: 'school',
    technologies: ['C++', 'OOP', 'Classes', 'Polymorphism'],
    features: [
      'Module 00: Namespaces, classes, member functions',
      'Module 01: Memory allocation, references, pointers',
      'Module 02: Polymorphisme ad-hoc, surcharge d\'opérateurs',
      'Module 03: Héritage et encapsulation',
      'Module 04: Polymorphisme de sous-typage, classes abstraites',
      'Orthodox Canonical Form pour toutes les classes'
    ],
    github: 'https://github.com/Fazejli/CPP',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/C++_demo.png`,
    images: []
  },
    {
    id: 'netpractice',
    title: 'NetPractice',
    subtitle: 'Configuration réseaux et adressage IP',
    category: 'school',
    technologies: ['Réseau', 'TCP/IP', 'Subnetting', 'Routing'],
    features: [
      'Calcul et configuration de sous-réseaux',
      'Adressage IP et masques de sous-réseau',
      'Configuration de tables de routage',
      'Résolution de problèmes réseau pratiques',
      'Comprendre NAT et passerelles',
      '10 niveaux de difficulté croissante'
    ],
    github: 'https://github.com/Fazejli/NetPractice',
    demo: '',
    image: `${import.meta.env.BASE_URL}netPractice.jpg`,
    images: []
  },
    {
    id: 'minishell',
    title: '🌟 Minishell',
    subtitle: 'Implémentation d\'un shell Unix',
    category: 'school',
    technologies: ['C', 'Unix', 'Bash', 'Parsing', 'Processes'],
    features: [
      'Interpréteur de commandes avec prompt interactif',
      'Gestion des pipes, redirections (>, <, <<, >>)',
      'Variables d\'environnement et expansion',
      'Signaux (Ctrl-C, Ctrl-D, Ctrl-\\)',
      'Builtins: echo, cd, pwd, export, unset, env, exit',
      'Gestion mémoire rigoureuse (aucune fuite)',
      'Opérateurs logiques (&& et ||) avec priorité et parenthèses',
      'Wildcards (*) pour expansion de fichiers',
      'Gestion avancée des redirections multiples',
      'Support de sous-shells',
      'Amélioration de la gestion des erreurs'
    ],
    github: 'https://github.com/dbouizem/minishell',
    demo: `${import.meta.env.BASE_URL}minishell.png`,
    image: `${import.meta.env.BASE_URL}demo/minishell_demo.jpg`,
    images: []
  },
    {
    id: 'philosophers',
    title: 'Philosophers (Dining Problem)',
    subtitle: 'Gestion de threads et synchronisation',
    category: 'school',
    technologies: ['C', 'Threads', 'Mutex', 'Synchronisation'],
    features: [
      'Simulation du problème des philosophes dinants',
      'Gestion de multithreading avec pthread',
      'Synchronisation par mutex pour éviter deadlocks',
      'Protection des ressources partagées (fourchettes)',
      'Monitoring temps réel de l\'état des philosophes',
      'Optimisation pour éviter data races'
    ],
    github: 'https://github.com/Fazejli/Philosophers',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/philo_demo.jpg`,
    images: []
  },
    {
    id: 'fdf-portfolio',
    title: 'Project FDF (Fil De fer)',
    subtitle: 'Wireframe 3D en C',
    category: 'school',
    technologies: ['C', 'MiniLibX', 'Graphisme', 'Mathématiques'],
    features: [
      'Rendu 3D isométrique de cartes topographiques',
      'Projection isométrique et parallèle',
      'Rotation, zoom, translation en temps réel',
      'Algorithme de tracé de lignes (Bresenham)',
      'Gestion de la palette de couleurs (dégradés)',
      'Parser de fichiers .fdf'
    ],
    github: 'https://github.com/Fazejli/FDF',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/fdf_demo.jpg`,
    images: []
  },
    {
    id: 'push-swap',
    title: '🌟 Push Swap',
    subtitle: 'Algorithme de tri optimisé',
    category: 'school',
    technologies: ['C', 'Algorithmes', 'Structures de données'],
    features: [
      'Tri de nombres avec 2 piles et opérations limitées',
      'Algorithme optimisé (< 700 ops pour 100 nombres)',
      'Implémentation de quicksort adapté',
      'Visualiseur graphique pour debug',
      'Checker intégré pour validation',
      'Gestion efficace de la complexité'
    ],
    github: 'https://github.com/Fazejli/Push_swap',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/push_swap_demo.png`,
    images: []
  },
    {
    id: 'pipex',
    title: 'Pipex',
    subtitle: 'Reproduction du pipe Unix',
    category: 'school',
    technologies: ['C', 'Unix', 'Processes', 'File Descriptors'],
    features: [
      'Simulation du comportement du pipe shell (|)',
      'Gestion des processus fils (fork, execve)',
      'Redirection des entrées/sorties',
      'Gestion des commandes avec arguments',
      'Protection contre les erreurs système',
      'Bonus: gestion de here_doc et multiple pipes'
    ],
    github: 'https://github.com/Fazejli/pipex',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/pipex_demo.png`,
    images: []
  },
    {
    id: 'get-next-line',
    title: 'Get Next Line',
    subtitle: 'Lecture ligne par ligne',
    category: 'school',
    technologies: ['C', 'File I/O', 'Static Variables'],
    features: [
      'Fonction de lecture ligne par ligne depuis un fd',
      'Gestion des buffers avec taille variable',
      'Support de fichiers multiples simultanés',
      'Utilisation de variables statiques',
      'Optimisation mémoire',
      'Compatible avec stdin et fichiers'
    ],
    github: 'https://github.com/Fazejli/get_next_line',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/gnl_demo.jpg`,
    images: []
  },
    {
    id: 'born2beroot',
    title: '🌟 Born2beRoot + WordPress',
    subtitle: 'Administration système Linux',
    category: 'school',
    technologies: ['Debian', 'VirtualBox', 'WordPress', 'LAMP', 'SSH'],
    features: [
      'Configuration complète d\'un serveur Debian',
      'Installation stack LAMP (Linux, Apache, MySQL, PHP)',
      'Déploiement WordPress avec configuration sécurisée',
      'Configuration SSH, pare-feu (UFW), sudo',
      'Politique de mots de passe forte',
      'Script de monitoring système (wall, cron)'
    ],
    github: 'https://github.com/Fazejli/born2beroot',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/B2B_demo.png`,
    images: []
  },
    {
    id: 'ft-printf',
    title: 'ft_printf',
    subtitle: 'Réimplémentation de printf',
    category: 'school',
    technologies: ['C', 'Variadic Functions', 'Parsing'],
    features: [
      'Reproduction fidèle de printf en C',
      'Gestion des conversions: %c, %s, %p, %d, %i, %u, %x, %X, %%',
      'Flags: -, 0, ., largeur minimale',
      'Fonctions variadiques (va_list, va_start, va_arg)',
      'Gestion rigoureuse de la mémoire',
      'Code modulaire et maintenable'
    ],
    github: 'https://github.com/Fazejli/ft_printf',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/printf_demo.png`,
    images: []
  },
    {
    id: 'libft',
    title: 'Libft',
    subtitle: 'Bibliothèque C personnalisée',
    category: 'school',
    technologies: ['C', 'Librairie', 'Makefile'],
    features: [
      'Réimplémentation de 40+ fonctions standard C',
      'Fonctions de manipulation de strings',
      'Fonctions de manipulation de mémoire',
      'Gestion de listes chaînées',
      'Makefile avec règles (all, clean, fclean, re)',
      'Base pour tous les projets 42 suivants'
    ],
    github: 'https://github.com/Fazejli/Libft',
    demo: '',
    image: `${import.meta.env.BASE_URL}demo/libft_demo.jpg`,
    images: []
  },
]