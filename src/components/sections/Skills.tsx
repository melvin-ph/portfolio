'use client'

import { motion } from 'framer-motion'

const stacks = [
  { category: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'FastAPI', 'TailwindCSS'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
  { category: 'Automation & AI', items: ['Make.com', 'TensorFlow', 'GSAP'] },
  { category: 'IoT & Systems', items: ['MQTT', 'Raspberry Pi', 'Edge Computing', 'Sensors'] },
  { category: 'Soft Skills', items: ['Leadership Skills', 'Pressure Handling', 'Communication Skills', 'Systems Thinking'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden rounded-[2rem] border border-brand-secondary/10 bg-brand-bg px-6 py-16 shadow-[0_30px_120px_rgba(0,0,0,0.3)] backdrop-blur sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.36em] text-brand-accent">Stack Inventory</p>
          <h2 className="text-4xl font-semibold text-brand-secondary sm:text-5xl">Technical Ecosystem</h2>
          <p className="max-w-3xl text-base leading-8 text-brand-primary">
            The specialized tools and frameworks that power my high-security automation pipelines and intelligent systems architecture.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-brand-secondary/10 bg-[#131d33]/30 p-1 backdrop-blur-md">
          <div className="divide-y divide-brand-secondary/5">
            {stacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-6 p-8 transition hover:bg-brand-secondary/5 lg:flex-row lg:items-center"
              >
                <div className="flex w-full items-center gap-4 lg:w-1/4">
                  <div className="h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-125 transition-transform" />
                  <p className="text-lg font-bold tracking-tight text-brand-secondary">{stack.category}</p>
                </div>
                
                <div className="flex flex-wrap gap-3 lg:w-3/4">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-xl border border-brand-secondary/10 bg-brand-bg px-4 py-2.5 text-sm font-medium text-brand-primary transition hover:border-brand-accent/40 hover:text-brand-secondary hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
