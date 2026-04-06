import Layout from '@/components/layout'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

const projects = [
  {
    name: 't:slim X2 Insulin Pump Simulator',
    repo: 'https://github.com/Arhaan7/t-slim-Insulin-Pump',
    description:
      'A GUI-based insulin pump simulator built with Qt, featuring bolus calculation, profile management, CGM monitoring with predictive glucose tracking, insulin/battery level management, and automated safety alerts. Implements closed-loop Control-IQ behavior.',
    techStack: [
      { name: 'C++', color: '#00599C' },
      { name: 'Qt 5', color: '#41CD52' },
      { name: 'Qt Charts', color: '#41CD52' },
      { name: 'QMake', color: '#41CD52' },
    ],
    gradient: 'from-blue-500 to-cyan-500',
    accentColor: 'var(--heritage-saffron)',
  },
  {
    name: 'Multi-Threaded Ghost Simulator',
    repo: 'https://github.com/Arhaan7/Multi-Threaded-Ghost-Simulator',
    description:
      'A multi-threaded ghost hunting simulation where hunters and ghosts operate in separate threads, navigating connected rooms to gather evidence. Features dynamic memory management, linked lists, and semaphore-based thread synchronization.',
    techStack: [
      { name: 'C', color: '#A8B9CC' },
      { name: 'Pthreads', color: '#F05032' },
      { name: 'Semaphores', color: '#F05032' },
      { name: 'Make', color: '#6D8086' },
    ],
    gradient: 'from-purple-500 to-pink-500',
    accentColor: 'var(--heritage-maroon)',
  },
  {
    name: 'Electronic Store Shopping Cart',
    repo: 'https://github.com/Arhaan7/Shopping-Cart',
    description:
      'A JavaFX-based electronic store interface where users can browse products, add items to a shopping cart, and complete purchases. Uses object-oriented programming patterns with inheritance hierarchies and list manipulation.',
    techStack: [
      { name: 'Java', color: '#007396' },
      { name: 'JavaFX', color: '#007396' },
      { name: 'OOP', color: '#B07219' },
    ],
    gradient: 'from-green-500 to-emerald-500',
    accentColor: 'var(--heritage-green)',
  },
  {
    name: 'Dying to Restart (Board Game)',
    repo: 'https://github.com/Arhaan7/Dying--to-Restart-',
    description:
      'A Pygame-powered board game where the chip must land on the exact last spot to finish. Special rules include double turns on rolling a 3 (roll becomes 6) and skipped turns on rolling a 4.',
    techStack: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Pygame', color: '#00D1FF' },
    ],
    gradient: 'from-orange-500 to-red-500',
    accentColor: 'var(--heritage-saffron)',
  },
  {
    name: 'Movie Locator',
    repo: 'https://github.com/Arhaan7/Movie-Locator-',
    description:
      'A full-stack movie search application with user authentication, a shared favorites list across all users, and admin user management. Features a movie search API integration, SQLite database, and Handlebars templating.',
    techStack: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#000000' },
      { name: 'SQLite', color: '#003B57' },
      { name: 'Handlebars', color: '#F0772B' },
      { name: 'HTML/CSS', color: '#E34F26' },
    ],
    gradient: 'from-yellow-500 to-amber-500',
    accentColor: 'var(--heritage-maroon)',
  },
]

export default function ProjectsPage() {
  return (
    <Layout>
      <section className="relative min-h-screen">
        {/* Decorative orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] -top-32 -right-32"
          style={{ background: 'radial-gradient(circle, var(--heritage-saffron), transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] top-1/2 -left-32"
          style={{ background: 'radial-gradient(circle, var(--heritage-green), transparent 70%)' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-[0.03] bottom-20 right-10"
          style={{ background: 'radial-gradient(circle, var(--heritage-maroon), transparent 70%)' }} />

        <div className="container mx-auto px-6 py-12 max-w-6xl relative z-10">
          {/* Back navigation */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects spanning embedded systems, multi-threaded programming, game development, and full-stack web applications.
            </p>
            <div className="heritage-divider max-w-xs mx-auto mt-6" />
          </div>

          {/* Project Cards */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`reveal-on-scroll reveal-delay-${Math.min(index + 1, 5)} group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 dark:border-gray-700`}
              >
                <div className={`bg-gradient-to-r ${project.gradient} p-6 md:p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20" />
                  <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">
                    <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm font-semibold"
                    >
                      <GitHub className="w-4 h-4" />
                      View Code
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
                          style={{
                            backgroundColor: `${tech.color}15`,
                            color: tech.color,
                            border: `1.5px solid ${tech.color}40`,
                          }}
                        >
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: tech.color }} />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="h-1"
                  style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
                />
              </div>
            ))}
          </div>

          {/* GitHub profile link */}
          <div className="text-center mt-16 reveal-on-scroll">
            <a
              href="https://github.com/Arhaan7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <GitHub className="w-6 h-6" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
