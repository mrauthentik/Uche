"use client"
import RevealOnScroll from "./reveal-on-scroll"
import ParallaxSection from "./parallax-section"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <ParallaxSection className="absolute inset-0 z-0" speed={0.1}>
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
      </ParallaxSection>

      <div className="container relative z-10 px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-bold text-primary">Passionate Developer</h3>
              <p className="mb-6 text-lg">
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital
                experiences. With 5+ years of experience in the field, I am always looking for new and innovative ways
                to bring my clients' visions to life.
              </p>
              <p className="text-lg">
                I believe that design is about more than just making things look pretty – it's about solving problems
                and creating intuitive, enjoyable experiences for users.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4} direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-bold">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    I write clean, maintainable code that follows best practices
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-bold">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">
                    I enjoy tackling complex problems with elegant solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg sm:col-span-2">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-bold">Fast Learner</h4>
                  <p className="text-sm text-muted-foreground">I quickly adapt to new technologies and methodologies</p>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

