"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Founder & Lead Developer",
      company: "WheatChain",
      period: "2022 - Present",
      description:
        "Leading the development of a revolutionary blockchain platform on Sui, combining social engagement with advanced DeFi features. Implementing cutting-edge DeFi features and creating innovative yield farming mechanisms.",
      type: "work",
    },
    {
      title: "Sui Blockchain Developer",
      company: "Freelance",
      period: "2021 - Present",
      description:
        "Developing custom DeFi protocols leveraging Sui's unique features. Creating decentralized governance systems and implementing advanced security measures using Move's safety features.",
      type: "work",
    },
    {
      title: "Full-Stack Developer",
      company: "Various Projects",
      period: "2019 - 2021",
      description:
        "Built responsive and dynamic web applications with modern technologies. Worked on both frontend and backend development using React, Node.js, and various databases.",
      type: "work",
    },
    {
      title: "Mechatronics, Robotics, and Automation Engineering",
      company: "Yaba College of Technology",
      period: "2023 - Present",
      description:
        "Currently pursuing a degree in Mechatronics, focusing on the integration of mechanical engineering, electronics, computer science, and control engineering.",
      type: "education",
    },
    {
      title: "Software Engineering Program",
      company: "ALX Africa",
      period: "2022 - Present",
      description:
        "Comprehensive software engineering program covering programming fundamentals, data structures, algorithms, and modern development practices.",
      type: "education",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          My professional journey and educational background that have shaped my expertise in blockchain development and
          software engineering.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-blue-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences
              .filter((exp) => exp.type === "work")
              .map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-blue-200 pb-8"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="flex items-center text-sm text-blue-600 font-medium mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-blue-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences
              .filter((exp) => exp.type === "education")
              .map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-blue-200 pb-8"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="flex items-center text-sm text-blue-600 font-medium mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 bg-blue-50 rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Continuous Learning</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="font-medium text-gray-800">ALX Software Engineering Program</p>
            <p className="text-sm text-gray-600">Current</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="font-medium text-gray-800">Sui Ecosystem Hackathons</p>
            <p className="text-sm text-gray-600">Active Participant</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="font-medium text-gray-800">Sui Developer Community</p>
            <p className="text-sm text-gray-600">Contributor</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

