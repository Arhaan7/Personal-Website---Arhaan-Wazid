import { Code, Database, PenToolIcon as Tool, Book } from 'lucide-react'

const skills = [
  { 
    name: 'Coding Languages', 
    icon: Code, 
    items: ['Java', 'C/C++', 'Python', 'SQL', 'JavaScript', 'HTML/CSS', 'JSON', 'MongoDB', 'Scheme']
  },
  { 
    name: 'Frameworks/Tools', 
    icon: Tool, 
    items: ['Linux/Unix', 'VS Code', 'Jira', 'Jenkins', 'PostgresSQL', 'Node.js', 'JavaFX', 'PowerShell', 'Python Slash']
  },
  { 
    name: 'Soft Skills', 
    icon: Book, 
    items: ['MS Office', 'Adaptability', 'Leadership', 'Time management', 'Teamwork', 'Communication']
  },
]

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <skill.icon className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{skill.name}</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

