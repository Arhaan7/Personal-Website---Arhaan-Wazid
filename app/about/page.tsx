import Image from 'next/image'
import { Cpu, Brain, BotIcon as Robot, Coins, GraduationCap, ArrowLeft, Heart } from 'lucide-react'
import { FaFutbol } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/layout'

const interests = [
  { icon: Cpu, label: 'Embedded Systems', color: 'from-blue-500 to-cyan-500', emoji: '⚡' },
  { icon: Brain, label: 'Machine Learning', color: 'from-purple-500 to-pink-500', emoji: '🧠' },
  { icon: Robot, label: 'Artificial Intelligence', color: 'from-green-500 to-emerald-500', emoji: '🤖' },
  { icon: Coins, label: 'Finance Technology', color: 'from-yellow-500 to-amber-500', emoji: '💹' },
]

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative min-h-screen">
        {/* Decorative orbs */}
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] -top-20 -right-20"
          style={{ background: 'radial-gradient(circle, var(--heritage-saffron), transparent 70%)' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-[0.03] bottom-20 -left-20"
          style={{ background: 'radial-gradient(circle, var(--heritage-green), transparent 70%)' }} />

        <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
          {/* Back navigation */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A little bit about who I am and what drives me
            </p>
            <div className="heritage-divider max-w-xs mx-auto mt-6" />
          </div>

          {/* Education Card */}
          <div className="reveal-on-scroll bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-2 border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-6 mb-6">
              <div className="flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social-media-sample-red-247w-1-yrE6IKijjLwtqrTBKT7HdJlzVp5Alh.png"
                  alt="Carleton University Logo"
                  width={80}
                  height={80}
                  className="rounded-xl shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  Carleton University
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  4th-year Computer Science student specializing in AI, Machine Learning, and Embedded Systems.
                </p>
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                  Expected Graduation: 2027
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a passionate Computer Science student, I'm deeply interested in various aspects of technology and its applications. Here are some of my key interests:
            </p>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {interests.map((interest, index) => (
              <div
                key={interest.label}
                className={`reveal-on-scroll reveal-delay-${index + 1} group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 heritage-glow`}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${interest.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">{interest.label}</span>
                  <span className="ml-auto text-2xl">{interest.emoji}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hobbies Card */}
          <div className="reveal-on-scroll bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500" />
              When I'm not coding...
            </h2>
            <div className="flex items-center gap-4 mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <FaFutbol className="w-8 h-8 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-800 dark:text-white font-medium">I enjoy playing soccer! ⚽</span>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soccer.jpg-hTgKz0NXSnDpC3Ln8LGqc9tpm0wqod.jpeg"
                alt="Soccer ball on a grass field"
                width={800}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
