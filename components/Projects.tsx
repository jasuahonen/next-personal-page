'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FaBriefcase, FaCar, FaUser, FaMapPin } from 'react-icons/fa'

const projects = [
  {
    title: 'Taxi Company infrastructure',
    description: 'A infrastructure for an electric-car-taxi-company. Manage trips, vehicles and charge cars with the cheapest hourly rates',
    icon: FaCar,
    technologies: ['Java', 'Spring Boot', 'ActiveMQ', 'PörssisähköAPI'],
    githubUrl: 'https://github.com/jasuahonen/electric-car-taxis'
  },
  {
    title: 'Job Search Web App',
    description: 'A web app for saving jobs and keeping track of your applications. Deployed in a IP-Blocked environment for GDPR compliance.',
    icon: FaBriefcase,
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/jasuahonen/job-search-helper'
  },
  {
    title: 'React Portfolio',
    description: 'A React Portfolio Website',
    icon: FaUser,
    technologies: ['JavaScript', 'HTML', 'SCSS'],
    githubUrl: 'https://github.com/jasuahonen/react-portfolio'
  },
  {
    title: 'Map Application',
    description: 'Basic map application with location tracking and markers for iOS',
    icon: FaMapPin,
    technologies: ['XCode', 'SwiftUI'],
    githubUrl: 'https://github.com/jasuahonen/SwiftUI-MapApp'
  },
]

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-playfair text-gray-200 mb-6 text-center">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-700 hover:bg-gray-900/50 transition-all duration-300 cursor-pointer group">
                <CardHeader className="flex flex-row items-center gap-2 md:gap-4 space-y-0 p-4 md:p-6">
                  <div>
                    <CardTitle className="text-lg md:text-xl font-playfair text-gray-200">{project.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base text-gray-400">{project.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-gray-800/50 text-gray-200 border-gray-700 text-xs md:text-sm px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

