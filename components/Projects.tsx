'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FaReact, FaNodeJs, FaMobile } from 'react-icons/fa'

const projects = [
  {
    title: 'React Dashboard',
    description: 'A responsive admin dashboard with dark mode and data visualization.',
    icon: FaReact,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Node.js API',
    description: 'RESTful API built with Express.js and MongoDB for a social media platform.',
    icon: FaNodeJs,
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile app for tracking personal finances and investments.',
    icon: FaMobile,
    technologies: ['React Native', 'Redux', 'Firebase'],
  },
]

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold font-playfair gradient-text">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-primary transition-colors">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <project.icon className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-xl font-playfair">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

