'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { RiMailSendLine } from 'react-icons/ri'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement your email sending logic here
    console.log('Sending email:', { email, message })
    // Reset form fields
    setEmail('')
    setMessage('')
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-playfair text-gray-200 mb-6">Contact Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-2"
      >
        <div className="space-y-4">
          <p className="text-gray-300">
            I&apos;m always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out! 👋
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-800/50 border-gray-700 text-gray-100"
          />
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-gray-800/50 border-gray-700 text-gray-100 min-h-[150px]"
          />
          <Button type="submit" className="bg-black">
            <RiMailSendLine className="mr-2" />
            Send Message
          </Button>
        </form>
      </motion.div>
    </section>
  )
}

