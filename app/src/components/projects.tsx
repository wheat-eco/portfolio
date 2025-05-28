"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-Learning Platform",
      description:
        "A comprehensive online learning platform with course management, student progress tracking, and interactive content delivery.",
      image: "/project1.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      link: "#",
      github: "https://github.com/Muiz-Dev/e-learning-platform",
    },
    {
      title: "Inventory Management System",
      description:
        "A robust inventory tracking solution for small businesses with real-time updates, reporting, and user management.",
      image: "/project2.png",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/Muiz-Dev/inventory-system",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers to track engagement metrics and schedule content.",
      image: "/project3.png",
      tags: ["React", "Chart.js", "Firebase", "Material UI"],
      link: "#",
      github: "https://github.com/Muiz-Dev/social-dashboard",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, notifications, and team features.",
      image: "/project4.png",
      tags: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      link: "#",
      github: "https://github.com/Muiz-Dev/task-manager",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Explore my latest work in web development and software engineering. Each project represents my commitment to
          creating efficient, user-friendly, and scalable applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 border-blue-500 text-blue-500 hover:bg-blue-50"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Button
          className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          asChild
        >
          <a href="https://github.com/Muiz-Dev" target="_blank" rel="noopener noreferrer">
            View All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
