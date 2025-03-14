"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import RevealOnScroll from "./reveal-on-scroll"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "TypeScript", "Firebase", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts and preferences.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing and analyzing social media accounts and performance.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Projects</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Here are some of my recent projects. Each one was built with a focus on performance, accessibility, and user
            experience.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={0.1 * (index + 1)} direction={index % 2 === 0 ? "right" : "left"}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

