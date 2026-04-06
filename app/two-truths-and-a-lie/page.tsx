import Layout from '../../components/layout'
import TwoTruthsAndALie from '../../components/TwoTruthsAndALie'
import Link from 'next/link'
import { ArrowLeft, Gamepad2 } from 'lucide-react'

export default function TwoTruthsAndALiePage() {
  return (
    <Layout>
      <section className="relative min-h-screen">
        <div className="container mx-auto px-6 py-12 max-w-3xl">
          {/* Back navigation */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <Gamepad2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Games
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Get to know me through a quick game!
            </p>
            <div className="heritage-divider max-w-xs mx-auto mt-6" />
          </div>

          <TwoTruthsAndALie />
        </div>
      </section>
    </Layout>
  )
}