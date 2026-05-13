'use client'

import { motion } from 'framer-motion'
import { FiActivity, FiCpu, FiEye, FiLayers, FiShield, FiTrendingUp } from 'react-icons/fi'

const hobbies = [
  { title: 'AI Systems Exploration', description: 'Examining emerging automation patterns and deploying refined intelligence frameworks.', icon: FiCpu },
  { title: 'Automation Engineering', description: 'Designing efficient operational workflows and systems orchestration pipelines.', icon: FiTrendingUp },
  { title: 'IoT Experimentation', description: 'Prototyping connected devices and edge-enabled sensor networks for real systems.', icon: FiLayers },
  { title: 'UI/UX Exploration', description: 'Crafting premium interfaces with clarity, motion, and technical polish.', icon: FiEye },
  { title: 'Smart Infrastructure Concepts', description: 'Analyzing infrastructure design for resilient automation and service delivery.', icon: FiActivity },
  { title: 'Cybersecurity Learning', description: 'Studying defensive engineering to protect systems, data, and operations.', icon: FiShield },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="rounded-[2rem] border border-white/10 bg-[#071125]/85 px-6 py-16 shadow-[0_35px_115px_rgba(0,0,0,0.22)] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.36em] text-accent-cyan">Hobby systems</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Activity that supports high-end engineering</h2>
          <p className="max-w-3xl text-base leading-8 text-slate-400">
            A curated set of interests that complement AI automation work and sharpen systems thinking with practical experimentation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {hobbies.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0c1424]/95 p-7 transition"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-accent-cyan transition duration-300 group-hover:bg-accent-cyan/15">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
