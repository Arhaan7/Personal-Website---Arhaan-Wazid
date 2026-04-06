import { Building2, Code2, Rocket, TrendingUp } from 'lucide-react'

const experiences = [
  {
    company: 'Ciena',
    role: 'Embedded Software Engineer Intern',
    period: 'Current',
    icon: Building2,
    highlights: [
      'Developing embedded Linux systems with Yocto Project',
      'Building and optimizing software in C/C++',
      'Contributing to network infrastructure solutions',
      'Working with cross-functional engineering teams'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'Ford Motor Company',
    role: 'Software Developer Intern',
    period: 'Previous',
    icon: Code2,
    highlights: [
      'Developed software for automotive systems',
      'Collaborated with engineering teams in Agile environment',
      'Built solutions using C/C++ and Python',
      'Gained experience in embedded systems development'
    ],
    color: 'from-purple-500 to-pink-500'
  }
]

const achievements = [
  { icon: Code2, stat: '5+', label: 'Programming Languages' },
  { icon: Rocket, stat: '10+', label: 'Technologies Mastered' },
  { icon: TrendingUp, stat: '6', label: 'Total Internships' },
]

export default function ExperienceHighlights() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My journey in software engineering
          </p>
          <div className="heritage-divider max-w-xs mx-auto mt-6" />
        </div>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className={`reveal-on-scroll reveal-delay-${index + 1} bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 heritage-glow`}
              style={{
                borderTopColor: index === 0 ? 'var(--heritage-saffron)' : index === 1 ? 'var(--heritage-maroon)' : 'var(--heritage-green)',
                borderTopWidth: '3px'
              }}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {item.stat}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`${index === 0 ? 'reveal-slide-left' : 'reveal-slide-right'} bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 dark:border-gray-700`}
            >
              <div className={`bg-gradient-to-r ${exp.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <exp.icon className="w-12 h-12" />
                    <span className="text-sm font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-lg opacity-95 font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-xl mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--heritage-saffron)' }}>▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
