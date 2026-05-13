'use client'

import { motion } from 'framer-motion'

const timeline = [
  { 
    year: '2026', 
    title: 'Automation Systems', 
    subtitle: 'Architecting complex AI-driven automation workflows and autonomous operational infrastructure.' 
  },
  { 
    year: '2025', 
    title: 'Web Development Work', 
    subtitle: 'Delivering high-performance web platforms and digital experiences for diverse business needs.' 
  },
  { 
    year: '2024', 
    title: 'Building Projects', 
    subtitle: 'Transitioning from theory to practice by building full-stack applications and exploring software architecture.' 
  },
  { 
    year: '2023', 
    title: 'Language Mastery', 
    subtitle: 'Mastering core coding languages and engineering principles to build a solid technical base.' 
  },
  { 
    year: '2022', 
    title: 'Computer Science Foundations', 
    subtitle: 'Initiating the journey into computational logic, data structures, and algorithmic thinking to solve complex problems.' 
  },
]

export default function Experience() {
  return (
    <section id="experience" className="rounded-[2rem] border border-brand-secondary/10 bg-brand-bg px-6 py-16 shadow-[0_35px_145px_rgba(0,0,0,0.3)] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.36em] text-brand-accent">Evolution</p>
          <h2 className="text-4xl font-semibold text-brand-secondary sm:text-5xl">Professional Timeline</h2>
          <p className="max-w-3xl text-base leading-8 text-brand-primary">
            A vertical narrative communicating technical growth, engineering maturity, and systems thinking through steady execution.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative col-span-1"> 
            <div className="absolute left-5 top-4 h-[calc(100%-32px)] w-0.5 bg-brand-secondary/5 sm:left-6" />
            <div className="absolute left-0 top-0 h-[120px] w-10 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.1),_transparent_55%)] blur-2xl" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14 pb-12"
              >
                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/10 bg-brand-bg text-xs font-bold text-brand-secondary ring-4 ring-brand-bg">
                  {item.year}
                </div>
                <div className="rounded-[1.75rem] border border-brand-secondary/10 bg-[#131d33]/40 p-6 shadow-xl transition hover:border-brand-accent/20">
                  <h3 className="text-xl font-semibold text-brand-secondary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-primary">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="sticky top-28 h-fit flex flex-col gap-8">
            <div className="flex flex-col gap-8 rounded-[2rem] border border-brand-secondary/10 bg-[#131d33]/30 p-10 backdrop-blur-md">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.36em] text-brand-accent">Strategic Growth</p>
                <h3 className="text-3xl font-semibold text-brand-secondary">Where engineering meets operations.</h3>
                <p className="max-w-xl text-base leading-8 text-brand-primary">
                  This timeline reflects a trajectory built around intelligent systems, technical scaling, and premium delivery for business-critical products.
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="flex items-center gap-4 text-sm text-brand-primary">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Continuous skill integration
                </div>
                <div className="flex items-center gap-4 text-sm text-brand-primary">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Operational focus
                </div>
                <div className="flex items-center gap-4 text-sm text-brand-primary">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Architectural maturity
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 rounded-[2rem] border border-brand-secondary/10 bg-[#131d33]/30 p-10 backdrop-blur-md">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.36em] text-brand-accent">Technical Philosophy</p>
                <h3 className="text-3xl font-semibold text-brand-secondary">Logic above abstraction.</h3>
                <p className="max-w-xl text-base leading-8 text-brand-primary">
                  Engineering systems that prioritize resilience and clear logic over complex abstractions, ensuring every automation is built to last.
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="flex items-center gap-4 text-sm text-brand-primary">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Modular architecture
                </div>
                <div className="flex items-center gap-4 text-sm text-brand-primary">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Performance-first approach
                </div>
                <div className="flex items-center gap-4 text-sm text-brand-primary">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Security by design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
