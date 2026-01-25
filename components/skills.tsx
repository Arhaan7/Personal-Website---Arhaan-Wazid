import { Code, Cpu, PenToolIcon as Tool, Book, Wrench } from 'lucide-react'

const skills = [
  { 
    name: 'Programming Languages', 
    icon: Code, 
    items: ['C/C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash/Shell']
  },
  { 
    name: 'Embedded & Systems', 
    icon: Cpu, 
    items: ['Embedded Linux', 'Yocto Project', 'Linux/Unix', 'System Programming', 'Debugging']
  },
  { 
    name: 'Development Tools', 
    icon: Tool, 
    items: ['Git/GitHub', 'Docker', 'Jenkins', 'Jira', 'VS Code', 'GDB', 'Make/CMake']
  },
  { 
    name: 'Web & Frameworks', 
    icon: Wrench, 
    items: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'HTML/CSS', 'REST APIs']
  },
  { 
    name: 'Professional Skills', 
    icon: Book, 
    items: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Technical Communication', 'Time Management']
  },
]

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

