import Layout from '@/components/layout'
import Link from 'next/link'
import { ArrowLeft, Download, FileText } from 'lucide-react'

export default function ResumePage() {
  return (
    <Layout>
      <section className="relative min-h-screen">
        {/* Decorative orbs */}
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] -top-20 -left-20"
          style={{ background: 'radial-gradient(circle, var(--heritage-saffron), transparent 70%)' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-[0.03] bottom-20 -right-20"
          style={{ background: 'radial-gradient(circle, var(--heritage-green), transparent 70%)' }} />

        <div className="container mx-auto px-6 py-12 max-w-5xl relative z-10">
          {/* Back navigation */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Resume
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
              View or download my latest resume
            </p>
            <div className="heritage-divider max-w-xs mx-auto mt-6" />
          </div>

          {/* Download button */}
          <div className="flex justify-center mb-8 reveal-on-scroll">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="reveal-on-scroll bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-700">
            <iframe
              src="/resume.pdf"
              className="w-full border-0"
              style={{ height: '85vh' }}
              title="Arhaan Wazid Resume"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
