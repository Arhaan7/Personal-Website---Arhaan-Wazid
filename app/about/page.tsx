import Image from 'next/image'
import { Cpu, Brain, BotIcon as Robot, Coins, GraduationCap, ArrowLeft } from 'lucide-react'
import { FaFutbol } from 'react-icons/fa' // Import soccer ball icon
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link 
        href="/" 
        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h1>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social-media-sample-red-247w-1-yrE6IKijjLwtqrTBKT7HdJlzVp5Alh.png"
            alt="Carleton University Logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Carleton University
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Proudly pursuing my Computer Science degree at Carleton University in Ottawa, specializing in AI and Machine Learning.
            </p>
          </div>
        </div>
        
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          As a passionate Computer Science student, I'm deeply interested in various aspects of technology and its applications. Here are some of my key interests:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <Cpu className="w-8 h-8 text-blue-500" />
            <span className="text-gray-800 dark:text-white">Embedded Systems</span>
          </div>
          <div className="flex items-center space-x-4">
            <Brain className="w-8 h-8 text-purple-500" />
            <span className="text-gray-800 dark:text-white">Machine Learning</span>
          </div>
          <div className="flex items-center space-x-4">
            <Robot className="w-8 h-8 text-green-500" />
            <span className="text-gray-800 dark:text-white">Artificial Intelligence</span>
          </div>
          <div className="flex items-center space-x-4">
            <Coins className="w-8 h-8 text-yellow-500" />
            <span className="text-gray-800 dark:text-white">Finance Technology</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">When I'm not coding...</h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaFutbol className="w-8 h-8 text-green-500" /> {/* Updated to use the soccer ball icon */}
          <span className="text-gray-800 dark:text-white">I enjoy playing soccer!</span>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soccer.jpg-hTgKz0NXSnDpC3Ln8LGqc9tpm0wqod.jpeg"
          alt="Soccer ball on a grass field"
          width={500}
          height={300}
          className="rounded-lg mx-auto w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  )
}
