'use client'

import { motion } from 'framer-motion'

const capabilities = [
  { 
    title: 'AI Workflow Automation', 
    desc: 'Automating across people, systems, and data to create scalable, self-healing workflows.' 
  },
  { 
    title: 'Full Stack Engineering', 
    desc: 'Bridging frontend excellence with backend stability for high-quality software delivery.' 
  },
  { 
    title: 'IoT & Smart Systems', 
    desc: 'Connecting physical devices to automation backends for actionable field intelligence.' 
  },
  { 
    title: 'Business Automation', 
    desc: 'Designing workflow automation that reduces manual effort and improves decision velocity.' 
  },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden rounded-[2rem] border border-brand-secondary/10 bg-brand-bg px-6 py-16 shadow-[0_35px_145px_rgba(0,0,0,0.3)] sm:px-8">
      <div className="absolute right-[-18%] top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.1),_transparent_55%)] blur-3xl opacity-70" />
      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-brand-secondary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.34em] text-brand-accent">Mission Objective</p>
              <h2 className="text-4xl font-semibold text-brand-secondary sm:text-5xl lg:text-6xl">
                Engineering <span className="text-brand-accent">Precision</span> into every system.
              </h2>
            </div>
            
            <p className="max-w-2xl text-lg leading-8 text-brand-primary">
              I specialize in designing robust infrastructure and AI-driven operational experiences. By bridging the gap between complex data dashboards and mission-critical backend systems, I ensure your business operates with tactical intelligence and engineering maturity.
            </p>

            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-brand-secondary/10 bg-[#131d33]/50 p-7 transition hover:bg-brand-secondary/5">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Systems-First Logic</p>
                <p className="mt-4 text-base leading-8 text-brand-primary">
                  Every automation I build is treated as a core piece of infrastructure. I focus on observability, operational stability, and clear data hierarchy to ensure long-term scalability and security.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-brand-secondary/10 bg-[#131d33]/50 p-7 transition hover:bg-brand-secondary/5">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Operational Transparency</p>
                <p className="mt-4 text-base leading-8 text-brand-primary">
                  I believe technical depth should be matched by clear communication. My dashboards and reports provide immediate clarity for both engineering teams and leadership stakeholders.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5"
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[1.75rem] border border-brand-secondary/10 bg-brand-bg p-6 shadow-lg transition hover:-translate-y-1 hover:border-brand-accent/30 hover:bg-brand-secondary/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg font-semibold text-brand-secondary">{item.title}</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-accent/10 font-mono text-sm font-bold text-brand-accent ring-1 ring-brand-accent/20">
                    0{index + 1}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-brand-primary">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
