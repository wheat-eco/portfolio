"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Lightbulb, Server, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Passionate software engineer with a strong foundation in full-stack development since 2019. I'm dedicated to
          creating efficient, scalable, and user-friendly applications that solve real-world problems through innovative
          technology solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
          <p className="text-gray-600 mb-6">
            My journey in software development began with a curiosity about how digital solutions can transform
            businesses and improve lives. Over the years, I've honed my skills through hands-on experience, formal
            education, and continuous learning in the rapidly evolving tech landscape.
          </p>
          <p className="text-gray-600">
            Currently, I'm pursuing a degree in Mechatronics, Robotics, and Automation Engineering at Yaba College of
            Technology, while also enhancing my software engineering skills through the ALX Africa program. I'm also
            gaining valuable industry experience as an intern at the Digital Technology Academy at Yaba College of
            Technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-md">
                <Code className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Full-Stack Development</h4>
                <p className="text-gray-600">
                  Building responsive and dynamic web applications with modern technologies.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-md">
                <Database className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Database Design</h4>
                <p className="text-gray-600">
                  Creating efficient database structures and optimizing queries for performance.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-md">
                <Lightbulb className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Problem Solving</h4>
                <p className="text-gray-600">
                  Analyzing complex challenges and developing elegant technical solutions.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Globe className="h-10 w-10 text-blue-500" />,
            title: "Web Development",
            description: "Creating responsive, accessible, and performant web applications.",
          },
          {
            icon: <Server className="h-10 w-10 text-blue-500" />,
            title: "Backend Architecture",
            description: "Designing robust server-side systems with scalability in mind.",
          },
          {
            icon: <Zap className="h-10 w-10 text-blue-500" />,
            title: "Technical Innovation",
            description: "Implementing cutting-edge technologies to solve complex problems.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
