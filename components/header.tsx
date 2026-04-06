'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  mounted: boolean
}

export default function Header({ darkMode, setDarkMode, mounted }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resume', href: '/resume' },
    { label: 'Games', href: '/two-truths-and-a-lie' },
  ]

  return (
    <>
      {/* Static header — stays at top, does not follow scroll */}
      <header className="relative z-[60] px-6 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Wazid Web
        </Link>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle — only render icon after mount to avoid hydration mismatch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 w-9 h-9 flex items-center justify-center"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mounted ? (
              darkMode
                ? <Sun className="w-5 h-5 text-yellow-400" />
                : <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          {/* Hamburger / X */}
          <button
            className="relative w-8 h-8 flex items-center justify-center z-[70]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-7 h-5 relative">
              <span
                className={`absolute left-0 h-[2px] w-full rounded transition-all duration-500 ${
                  isOpen
                    ? 'top-[9px] rotate-45 bg-white'
                    : 'top-0 rotate-0 bg-gray-800 dark:bg-white'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)' }}
              />
              <span
                className={`absolute left-0 top-[9px] h-[2px] rounded transition-all duration-300 ${
                  isOpen
                    ? 'w-0 opacity-0 bg-white'
                    : 'w-full opacity-100 bg-gray-800 dark:bg-white'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full rounded transition-all duration-500 ${
                  isOpen
                    ? 'top-[9px] -rotate-45 bg-white'
                    : 'top-[18px] rotate-0 bg-gray-800 dark:bg-white'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)' }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Heritage accent line below header */}
      <div className="heritage-divider" />

      {/* Full-page menu overlay */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-700 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div
          className={`absolute inset-0 transition-transform duration-700 origin-top ${
            isOpen ? 'scale-y-100' : 'scale-y-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, #FF9933 0%, #B22222 40%, #8B0000 60%, #138808 100%)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        <div
          className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
        />

        {/* Close button in top-right of overlay */}
        <button
          className="absolute top-5 right-6 z-[70] w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <div className="w-7 h-5 relative">
            <span className="absolute left-0 top-[9px] h-[2px] w-full rounded bg-white rotate-45" />
            <span className="absolute left-0 top-[9px] h-[2px] w-full rounded bg-white -rotate-45" />
          </div>
        </button>

        <nav className="relative z-10 h-full flex flex-col items-center justify-center gap-10">
          {menuItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-4xl md:text-6xl font-light text-white/90 hover:text-white transition-all duration-500 tracking-wide ${
                isOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${pathname === item.href ? 'font-semibold text-white' : ''}`}
              style={{
                transitionDelay: isOpen ? `${150 + i * 80}ms` : '0ms',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
