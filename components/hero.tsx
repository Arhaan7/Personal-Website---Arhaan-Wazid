import Image from 'next/image'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-16">
      <div className="md:w-1/2 space-y-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hi, I'm Arhaan Wazid
          </h1>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            Embedded Software Engineer @ <span className="text-blue-600 dark:text-blue-400">Ciena</span>
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
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_pic.jpg-a66Crk0uWHUzjAwSQrVsbYbTIoaaRM.jpeg"
            alt="Arhaan Wazid"
            width={280}
            height={280}
            className="relative rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}

