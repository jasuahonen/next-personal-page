'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa'

export default function Header() {
  const downloadCV = () => {
    // Implement CV download logic here
    console.log('Downloading CV...')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-black/50 backdrop-blur-sm">
      <h1 className="text-xl md:text-2xl font-bold font-playfair">
        <span className="text-gray-200">Jasu Ahonen</span>
      </h1>
      <nav>
        <ul className="flex space-x-3 md:space-x-4">
          {[
            { icon: FaGithub, href: 'https://github.com/jasuahonen', hoverColor: 'hover:text-gray-400' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/jasu-ahonen', hoverColor: 'hover:text-blue-500' },
            { icon: FaInstagram, href: 'https://instagram.com/jasuahonen', hoverColor: 'hover:text-purple-500' },
            { icon: FaFileDownload, onClick: downloadCV, ariaLabel: 'Download CV', hoverColor: 'hover:text-green-500' },
          ].map(({ icon: Icon, href, onClick, ariaLabel, hoverColor }, index) => (
            <motion.li key={href || index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white transition-colors ${hoverColor}`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              ) : (
                <button
                  onClick={onClick}
                  className={`text-white transition-colors ${hoverColor}`}
                  aria-label={ariaLabel}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

