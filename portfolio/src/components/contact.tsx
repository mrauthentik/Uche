"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import RevealOnScroll from "./reveal-on-scroll"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  interface FormState {
    name: string
    email: string
    message: string
  }

  interface ChangeEvent {
    target: {
      name: string
      value: string
    }
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target
    setFormState((prev: FormState) => ({ ...prev, [name]: value }))
  }

  interface SubmitEvent {
    preventDefault: () => void
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </RevealOnScroll>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <RevealOnScroll delay={0.2} direction="right">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and full-time positions. Let's build something amazing
                together!
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <Card className="flex h-10 w-10 items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </Card>
                  <span>john.doe@example.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Card className="flex h-10 w-10 items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </Card>
                  <span>+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center gap-3">
                  <Card className="flex h-10 w-10 items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </Card>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3} direction="left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

