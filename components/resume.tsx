import { Download } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Resume</h2>
        <Link
          href="/resume.pdf"
          download
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          <Download className="mr-2" />
          Download PDF
        </Link>
      </div>

      <div className="w-full aspect-[8.5/11]">
        <iframe
          src="/resume.pdf"
          className="w-full h-[90vh] border-2 border-gray-300 rounded-lg"
        ></iframe>
      </div>
    </section>
  );
}
