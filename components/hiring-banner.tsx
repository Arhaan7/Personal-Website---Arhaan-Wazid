import { Briefcase, Calendar, GraduationCap } from 'lucide-react'

export default function HiringBanner() {
  return (
    <section className="py-12 px-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl shadow-2xl p-6 md:p-12 text-white transform hover:scale-[1.01] transition-transform duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Briefcase className="w-7 h-7 md:w-8 md:h-8" />
              <h2 className="text-2xl md:text-4xl font-bold">Open to New Opportunities</h2>
            </div>
            <p className="text-base md:text-xl mb-4 text-blue-50">
              Actively seeking full-time Software Engineering positions for New Grad 2027
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-sm md:text-base">
              <div className="flex items-center justify-center gap-2">
                <GraduationCap className="w-5 h-5" />
                <span>Expected Graduation: May 2027</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Available: Summer 2027</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto">
            <a
              href="mailto:arhaanwazid@gmail.com"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center shadow-lg w-full sm:w-auto whitespace-nowrap"
            >
              Let's Connect
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center shadow-lg w-full sm:w-auto whitespace-nowrap"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
