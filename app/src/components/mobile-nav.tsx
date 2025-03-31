"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  onNavClick: (section: string) => void
  activeSection: string
}

export default function MobileNav({ isOpen, onClose, onNavClick, activeSection }: MobileNavProps) {
  const navItems = ["home", "about", "skills", "projects", "experience", "contact"]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-xl font-bold text-blue-500">
                Muiz<span className="text-black">.dev</span>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavClick(item)}
                  className={`capitalize text-left py-2 px-4 rounded-md transition-colors ${
                    activeSection === item ? "bg-blue-50 text-blue-500 font-medium" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-gray-200 mt-8">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/Muiz-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/adesopemuiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:muiz@wheatchain.xyz" className="text-gray-600 hover:text-blue-500">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

