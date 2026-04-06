'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './header'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Sync dark mode from localStorage after mount (avoids hydration mismatch)
  useEffect(() => {
    const stored = localStorage.getItem('darkMode') === 'true'
    setDarkMode(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode, mounted])

  // Scroll-reveal observer — re-run on route changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const timer = setTimeout(() => {
      const els = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right, .reveal-scale'
      )
      els.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} mounted={mounted} />
      <main key={pathname} className="flex-grow page-enter">
        {children}
      </main>
      <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-800">
        <div className="heritage-divider max-w-xs mx-auto mb-4" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Arhaan Wazid. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
