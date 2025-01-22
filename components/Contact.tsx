'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function Contact() {
  const openMail = () => {
    window.location.href = 'mailto:jasu.ahonen@outlook.com'
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-playfair text-gray-200 text-center">Get in Touch</h2>
      <p className="text-gray-300 text-center">
        I&apos;m always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out! 👋
      </p>
      <Card className="bg-black/50 backdrop-blur-sm border-gray-700 p-2 md:p-4">
        <div className="flex flex-col space-y-4 items-center">
          <motion.a
            href="https://linkedin.com/in/jasu-ahonen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-200 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="text-lg">Connect on LinkedIn</span>
          </motion.a>

          <motion.button
            onClick={openMail}
            className="flex items-center space-x-3 text-gray-200 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg">jasu.ahonen@outlook.com</span>
          </motion.button>
        </div>
      </Card>
    </section>
  )
}

