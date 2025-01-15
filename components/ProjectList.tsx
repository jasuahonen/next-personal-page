'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Project 1',
    description: 'A web application built with React and Node.js',
    technologies: ['React', 'Node.js', 'Express'],
    imageUrl: '/placeholder.svg?height=48&width=48',
  },
  {
    title: 'Project 2',
    description: 'Mobile app developed using React Native',
    technologies: ['React Native', 'Redux', 'Firebase'],
    imageUrl: '/placeholder.svg?height=48&width=48',
  },
  {
    title: 'Project 3',
    description: 'Full-stack application with Next.js and MongoDB',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: '/placeholder.svg?height=48&width=48',
  },
]

export default function ProjectList() {
  return (
    <section className="mb-12">
      <h2 className="mb-4 font-playfair text-xl font-bold">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

