'use client'

import { useState, useEffect } from 'react'
import Header from './header'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  return (
    <div
      className={`flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 pt-8 pb-2 max-w-7xl flex-grow">
        {children}
      </main>
      {/* Optional footer or empty spacer */}
      {/* <footer className="mt-auto py-4 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Arhaan Wazid
      </footer> */}
    </div>
  )
}
