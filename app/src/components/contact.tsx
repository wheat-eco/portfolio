"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)

    // Open mailto link
    window.location.href = `mailto:muiz@wheatchain.xyz?subject=${subject}&body=${body}`

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setSubmitSuccess(true)

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Have a project in mind or want to collaborate? Feel free to reach out to me. I'm always open to discussing new
          opportunities and innovative ideas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-none shadow-lg h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-md">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:muiz@wheatchain.xyz" className="text-blue-600 hover:underline">
                      muiz@wheatchain.xyz
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-md">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-md">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">Available upon request</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Connect with me</h4>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-50"
                    asChild
                  >
                    <a href="https://linkedin.com/in/adesopemuiz" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-50"
                    asChild
                  >
                    <a href="https://github.com/Muiz-Dev" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

