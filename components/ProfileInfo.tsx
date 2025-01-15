'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export default function ProfileInfo() {
  const downloadCV = () => {
    // Implement CV download logic here
    console.log('Downloading CV...')
  }

  return (
    <section className="mb-12 flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
      </motion.div>
      <h1 className="mb-2 font-playfair text-4xl font-bold">John Doe</h1>
      <p className="mb-4 max-w-2xl font-playfair">
        Full-stack developer passionate about creating beautiful and functional web applications.
        Experienced in React, Node.js, and cloud technologies.
      </p>
      <div className="mb-4 flex space-x-4">
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="h-6 w-6 text-beige hover:text-blue-400" />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="h-6 w-6 text-beige hover:text-blue-400" />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter className="h-6 w-6 text-beige hover:text-blue-400" />
        </motion.a>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button onClick={downloadCV} className="bg-blue-600 text-white hover:bg-blue-700">
          Download CV
        </Button>
      </motion.div>
    </section>
  )
}

