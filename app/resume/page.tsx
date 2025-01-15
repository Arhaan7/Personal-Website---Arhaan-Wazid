import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#resume" className="inline-block mb-6">
        <Button variant="ghost" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Button>
      </Link>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">My Resume</h2>

        {/* Embed the PDF within the page */}
        <iframe
          src="/resume.pdf"
          width="100%"
          height="600px"
          title="Resume"
          className="border-0"
        />

        {/* Provide a download link for the resume */}
        <div className="mt-6">
          <a href="/resume.pdf" download>
            <Button variant="outline" className="w-full">
              Download My Resume (PDF)
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
