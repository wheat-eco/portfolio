"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import MobileNav from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-500"
          >
            Muiz<span className="text-black">.dev</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === item ? "text-blue-500" : "text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavClick={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <div className="pt-20">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <About />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="experience" className="py-20 bg-gray-50">
          <Experience />
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold">Muiz Adesope Ayomide</h2>
                <p className="mt-2 text-blue-100">Full-Stack Developer | Software Engineer</p>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="https://github.com/Muiz-Dev" target="_blank" rel="noopener noreferrer">
                    <GitHub className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="https://linkedin.com/in/adesopemuiz" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="mailto:muiz.dev.io@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-500 text-center text-blue-100">
              <p>&copy; {new Date().getFullYear()} Muiz Adesope. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all ${
            scrolled ? "visible" : "invisible"
          }`}
        >
          <ArrowDown className="h-5 w-5 transform rotate-180" />
        </motion.button>
      </div>
    </main>
  )
}
