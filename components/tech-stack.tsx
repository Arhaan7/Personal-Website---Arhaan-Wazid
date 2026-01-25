import { SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript, SiLinux, SiGit, SiDocker, SiNextdotjs, SiNodedotjs, SiPostgresql } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const techStack = [
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
]

export default function TechStack() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies I use daily
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 min-w-[120px]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative mb-3">
                <tech.icon 
                  className="w-14 h-14 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
