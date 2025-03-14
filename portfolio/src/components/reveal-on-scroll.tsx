"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  once?: boolean
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }
      case "down":
        return { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } }
      case "left":
        return { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }
      case "right":
        return { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }
      default:
        return { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }
    }
  }

  const variants = getDirectionVariants()

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

