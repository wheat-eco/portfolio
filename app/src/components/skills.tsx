"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const categories = [
    {
      name: "Blockchain",
      skills: ["Sui", "Smart Contracts", "DeFi", "Web3.js", "Ethereum"],
    },
    {
      name: "Languages",
      skills: ["Move", "JavaScript", "Solidity", "Python", "PHP"],
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "TypeScript"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "GraphQL", "MongoDB", "MySQL"],
    },
    {
      name: "Tools & Frameworks",
      skills: ["Git", "Docker", "Sui SDK", "Move Prover", "Sui CLI"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          With a diverse skill set spanning blockchain development, web technologies, and software engineering, I bring
          a comprehensive approach to building innovative digital solutions.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {categories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{category.name}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
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
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 bg-blue-50 rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Strengths</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            "Sui Blockchain Development",
            "Smart Contracts",
            "DeFi Protocol Design",
            "Full-Stack Web Development",
            "Project Management",
            "Team Leadership",
            "Blockchain Interoperability",
            "Move Language Proficiency",
            "UI/UX Design",
          ].map((strength, index) => (
            <div key={index} className="bg-white p-3 rounded-md shadow-sm">
              <p className="font-medium text-gray-800">{strength}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

