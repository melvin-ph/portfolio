'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const archives = [
  {
    title: 'Smart Locker',
    summary: 'Automated secure access with real-time tracking.',
    details: 'A serviceable locker system built for supply chain efficiency and automated access control. Designed with premium UX and secure workflows.',
  },
  {
    title: 'Student Performance Tracker',
    summary: 'A polished academic analytics suite for educators.',
    details: 'A refined system to track progress, automate insights, and reveal opportunity areas for academic teams and administrators.',
  },
  {
    title: 'CorelDRAW Automation',
    summary: 'Creative workflow automation for design output.',
    details: 'Automated repetitive vector operations and export workflows in CorelDRAW, saving time for visual production teams.',
  },
  {
    title: 'Supermarket Billing System',
    summary: 'A streamlined retail checkout and stock interface.',
    details: 'Designed for high-velocity retail operations with automated billing, inventory sync, and merchant-friendly reporting.',
  },
  {
    title: 'Medical Recall System',
    summary: 'Patient safety through automated alerting.',
    details: 'A clinical-grade recall and alert system that tracks product status, patient outreach, and compliance workflows.',
  },
  {
    title: 'Traffic Light Control System',
    summary: 'Smart urban signal orchestration.',
    details: 'A system that blends traffic forecasting, adaptive timing, and operational monitoring for safer intersections.',
  },
]

export default function Archives() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section id="archives" className="rounded-[2rem] border border-white/10 bg-[#081028]/85 px-6 py-16 shadow-[0_35px_120px_rgba(0,0,0,0.22)] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.36em] text-accent-cyan">Engineering archives</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Compact systems showcases</h2>
          <p className="max-w-3xl text-base leading-8 text-slate-400">
            A curated archive of secondary systems and automation experiments built with technical care and operational clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {archives.map((project, index) => {
            const open = openIndex === index
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0c1323]/95"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{project.summary}</p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.35em] text-accent-cyan">
                    {open ? 'Collapse' : 'Expand'}
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-80' : 'max-h-0'}`}>
                  <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-slate-300">
                    {project.details}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
