import { Mail, GitlabIcon as GitHub, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Get in Touch</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:arhaanwazid@gmail.com"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <Mail className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/Arhaan7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <GitHub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/arhaan-wazid/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}

