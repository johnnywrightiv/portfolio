"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import careerData from "@/data/career-experience.json"

interface CareerExperience {
  title: string
  company: string
  period: string
  description: string
  icon?: string
}

export default function CareerTimeline() {
  const isMobile = useMobile()
  const experiences = careerData as CareerExperience[]

  return (
    <section id="career" className="py-section bg-gradient-to-b from-gray-900/80 to-black">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Career Timeline</h2>
          <p className="text-white/75 max-w-2xl mx-auto">My professional journey and key milestones</p>
        </div>

        {isMobile ? (
          <div className="relative space-y-6">
            {/* Vertical line behind cards */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -z-10" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Full-width content card with icon integrated */}
                <div className="glass glass-hover rounded-xl p-4 border border-border">
                  <div className="flex items-start gap-3">
                    {/* Icon as part of the card */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg">
                      {experience.icon || "•"}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{experience.title}</h3>
                      <div className="mb-2 text-sm text-muted-foreground">
                        {experience.company} | {experience.period}
                      </div>
                      <p className="text-white/75 text-sm">{experience.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative space-y-12 before:absolute before:inset-0 before:left-1/2 before:z-0 before:ml-0 before:h-full before:-translate-x-px before:border-l-2 before:border-border">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <motion.div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="glass glass-hover rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                    <div className="mb-4 text-muted-foreground">
                      {experience.company} | {experience.period}
                    </div>
                    <p className="text-white/75">{experience.description}</p>
                  </div>
                </motion.div>

                <div className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {experience.icon || "•"}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
