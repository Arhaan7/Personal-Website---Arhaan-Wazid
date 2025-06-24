import Layout from '../../components/layout'
import TwoTruthsAndALie from '../../components/TwoTruthsAndALie'
import Link from 'next/link'

export default function TwoTruthsAndALiePage() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ← Back to Home
        </Link>
        <TwoTruthsAndALie />
      </div>
    </Layout>
  )
}