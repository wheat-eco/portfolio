"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 max-w-2xl"
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-500">Muiz Adesope</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Full-Stack Developer | Blockchain Innovator | DeFi Architect
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            I'm passionate about revolutionizing the web through blockchain technology and decentralized solutions.
            Founder & Lead Developer at WheatChain, specializing in Sui Blockchain development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
              onClick={() => {
                const projectsSection = document.getElementById("projects")
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-md"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact Me
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-gray-500">Connect with me:</span>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 text-gray-700" asChild>
                <a href="https://github.com/Muiz-Dev" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 text-gray-700" asChild>
                <a href="https://linkedin.com/in/adesopemuiz" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 text-gray-700" asChild>
                <a href="mailto:muiz@wheatchain.xyz">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-500/10 p-2">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30">
              <Image
                src="/profile.jpeg"
                alt="Muiz Adesope"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <div className="bg-blue-500 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

