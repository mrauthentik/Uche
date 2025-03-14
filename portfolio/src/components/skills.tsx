"use client"

import { motion } from "framer-motion"
import RevealOnScroll from "./reveal-on-scroll"
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Typescript,
  Nextjs,
  Tailwind,
  Nodejs,
  Mongodb,
  Postgresql,
  Git,
  Docker,
} from "./tech-icons"

const skills = [
  { name: "HTML5", icon: Html5, delay: 0.1 },
  { name: "CSS3", icon: Css3, delay: 0.2 },
  { name: "JavaScript", icon: Javascript, delay: 0.3 },
  { name: "TypeScript", icon: Typescript, delay: 0.4 },
  { name: "React", icon: ReactLogo, delay: 0.5 },
  { name: "Next.js", icon: Nextjs, delay: 0.6 },
  { name: "Tailwind CSS", icon: Tailwind, delay: 0.7 },
  { name: "Node.js", icon: Nodejs, delay: 0.8 },
  { name: "MongoDB", icon: Mongodb, delay: 0.9 },
  { name: "PostgreSQL", icon: Postgresql, delay: 1.0 },
  { name: "Git", icon: Git, delay: 1.1 },
  { name: "Docker", icon: Docker, delay: 1.2 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Skills</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <RevealOnScroll key={skill.name} delay={skill.delay}>
              <motion.div
                className="flex flex-col items-center justify-center rounded-lg bg-card p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md"
                whileHover={{ y: -5 }}
              >
                <skill.icon className="mb-3 h-12 w-12" />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

