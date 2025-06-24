import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
          Arhaan Wazid's Portfolio
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
            About Me
          </Link>
          <a
            href="#resume"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Resume
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-gray-800 w-5 h-5" />}
          </button>
        </nav>
      </div>
    </header>
  )
}

