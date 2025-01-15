'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa'

export default function Header() {
  const downloadCV = () => {
    // Implement CV download logic here
    console.log('Downloading CV...')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-background/80 backdrop-blur-sm">
      <h1 className="text-2xl font-bold font-playfair">
        <span className="gradient-text">Jasu Ahonen</span>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {[
            { icon: FaGithub, href: 'https://github.com' },
            { icon: FaLinkedin, href: 'https://linkedin.com' },
            { icon: FaInstagram, href: 'https://instagram.com' },
            { icon: FaFileDownload, onClick: downloadCV, ariaLabel: 'Download CV' },
          ].map(({ icon: Icon, href, onClick, ariaLabel }, index) => (
            <motion.li key={href || index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ) : (
                <button
                  onClick={onClick}
                  className="text-primary hover:text-secondary transition-colors"
                  aria-label={ariaLabel}
                >
                  <Icon className="w-6 h-6" />
                </button>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

