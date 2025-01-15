import Image from 'next/image'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Hi, I'm Arhaan Wazid
        </h1>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
          A passionate Computer Science student and Teaching Assistant at Carleton University. Former Software Developer at Ford Motor Company with experience in embedded systems. Strong academic background and practical experience in software development and embedded systems.
        </p>
        <div className="flex flex-wrap gap-4">
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
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_pic.jpg-a66Crk0uWHUzjAwSQrVsbYbTIoaaRM.jpeg"
          alt="Arhaan Wazid"
          width={300}
          height={300}
          className="rounded-full mx-auto"
        />
      </div>
    </section>
  )
}

