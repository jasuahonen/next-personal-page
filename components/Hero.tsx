'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FaMicrosoft, FaAmazon } from 'react-icons/fa'
import { SiCisco } from 'react-icons/si'

const certifications = [
  {
    icon: FaMicrosoft,
    count: 3,
    details: [
      "Microsoft Certified: Azure Fundamentals",
      "Microsoft Certified: Azure Developer Associate",
      "Microsoft Certified: Azure Solutions Architect Expert"
    ]
  },
  {
    icon: FaAmazon,
    count: 2,
    details: [
      "AWS Certified Cloud Practitioner",
      "AWS Certified Developer - Associate"
    ]
  },
  {
    icon: SiCisco,
    count: 1,
    details: [
      "Cisco Certified Network Associate (CCNA)"
    ]
  },
]

export default function Hero() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null)

  return (
    <section className="flex flex-col items-center justify-between gap-12 md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-4"
      >
        <h1 className="font-playfair text-4xl font-bold md:text-6xl">
          <span className="gradient-text">Software</span>
          <br />
          <span className="gradient-text">Engineer</span>
        </h1>
        <p className="max-w-md text-lg text-gray-300">
          27-year-old software engineer with a passion for creating innovative solutions. Interested in Cybersecurity and IoT 🔐💻
          Currently pursuing a Bachelor's degree at Tampere University of Applied Sciences 🎓
          On my free time I like to play golf and play fetch with my dog ⛳️🐶
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80">
          <Image
            src="/ja.jpg"
            alt="Jasu Ahonen"
            width={320}
            height={320}
            className="object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="mb-2 text-center text-lg font-semibold">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="w-24 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors cursor-pointer"
                  onClick={() => setExpandedCert(expandedCert === index ? null : index)}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center justify-center">
                      <cert.icon className="text-3xl text-primary mb-2" />
                      <span className="text-lg font-medium text-primary">{cert.count}</span>
                    </div>
                  </CardContent>
                </Card>
                <AnimatePresence>
                  {expandedCert === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 bg-gray-800/50 backdrop-blur-sm rounded-md p-2"
                    >
                      <ul className="text-sm text-gray-300">
                        {cert.details.map((detail, idx) => (
                          <li key={idx} className="mb-1">{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}


