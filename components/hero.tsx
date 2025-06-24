import Image from 'next/image'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-8">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          Hi, I'm Arhaan Wazid
        </h1>
        <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
          A passionate Computer Science student and Teaching Assistant at Carleton University. Currently a Software Developer Intern at Ford Motor Company with experience in embedded systems.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:arhaanwazid@gmail.com"
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <Mail className="mr-2" />
            Contact Me
          </a>
          <a
            href="https://github.com/Arhaan7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            <GitHub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arhaan-wazid/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            <Linkedin className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mb-6 md:mb-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_pic.jpg-a66Crk0uWHUzjAwSQrVsbYbTIoaaRM.jpeg"
          alt="Arhaan Wazid"
          width={220}
          height={220}
          className="rounded-full mx-auto"
        />
      </div>
    </section>
  )
}

