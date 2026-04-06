import Image from 'next/image'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Parallax background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900" />
      
      {/* Heritage-tinted floating orbs for depth */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] dark:opacity-[0.06] -top-40 -left-40"
        style={{ background: 'radial-gradient(circle, var(--heritage-saffron), transparent 70%)' }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] dark:opacity-[0.06] -bottom-32 -right-32"
        style={{ background: 'radial-gradient(circle, var(--heritage-green), transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-24">
          <div className="md:w-1/2 space-y-4 reveal-slide-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Hi, I'm Arhaan Wazid
              </h1>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 rounded" style={{ background: 'linear-gradient(90deg, var(--heritage-saffron), var(--heritage-green))' }} />
              <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                Embedded Software Engineer Intern @ <span className="text-blue-600 dark:text-blue-400">Ciena</span>
              </p>
            </div>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              4th-year Computer Science student at <span className="font-semibold text-gray-800 dark:text-white">Carleton University</span>, interested in AI, embedded systems, and kernel development. Actively seeking <span className="font-semibold text-blue-600 dark:text-blue-400">New Grad Software Engineering roles for 2027</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:arhaanwazid@gmail.com"
                className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </a>
              <a
                href="https://github.com/Arhaan7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-700"
              >
                <GitHub className="mr-2 w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arhaan-wazid/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center reveal-scale">
            <div className="relative animate-float">
              <div
                className="absolute -inset-2 rounded-full blur-xl opacity-60 animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, var(--heritage-saffron), #8B5CF6, var(--heritage-green))'
                }}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_pic.jpg-a66Crk0uWHUzjAwSQrVsbYbTIoaaRM.jpeg"
                alt="Arhaan Wazid"
                width={280}
                height={280}
                className="relative rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Heritage divider */}
      <div className="absolute bottom-0 left-0 right-0 heritage-divider" />
    </section>
  )
}
