'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'

const projects = [
  {
    title: 'AlignEd',
    subtitle: 'Enterprise training orchestration platform',
    description: 'A cinematic learning operations system designed for workforce alignment, data-driven execution, and measurable automation outcomes.',
    tags: ['Next.js', 'Python', 'AI', 'Automation'],
    details: [
      'Integrated stakeholder workflows with AI-driven role tracking.',
      'Automated training delivery, scheduling, and impact reporting.',
      'Designed a premium UI focused on clarity for executive audiences.',
    ],
    architecture: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    openSource: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Disaster Resource Allocation System',
    subtitle: 'Dynamic field logistics and resource orchestration',
    description: 'A resilient system that uses forecasting, routing, and automation to deploy critical resources during emergencies.',
    tags: ['AI', 'Logistics', 'GIS', 'Automation'],
    details: [
      'AI-powered demand forecasting for emergency response.',
      'Real-time routing and allocation based on availability and priority.',
      'Operational dashboard built for rapid decision making.',
    ],
    architecture: ['TensorFlow', 'FastAPI', 'MongoDB', 'GSAP'],
    openSource: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'VulnScope',
    subtitle: 'Proactive security automation intelligence',
    description: 'A premium vulnerability discovery and mitigation dashboard that unifies security signals with actionable automation workflow triggers.',
    tags: ['Cybersecurity', 'Python', 'Automation', 'Dashboard'],
    details: [
      'Automated vulnerability sweep and response orchestration.',
      'Engineered a secure reporting pipeline for leadership metrics.',
      'Built strong system telemetry for proactive operations.',
    ],
    architecture: ['Python', 'React', 'PostgreSQL', 'GSAP'],
    openSource: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Smart Waste Route Optimization',
    subtitle: 'Intelligent logistics for urban sanitation',
    description: 'A systems-level solution that optimizes waste collection routes using AI path planning and sensor-driven telemetry.',
    tags: ['AI', 'Routing', 'IoT', 'Optimization'],
    details: [
      'Computed efficient routes with dynamic load balancing.',
      'Integrated IoT sensor data to reduce wasted effort.',
      'Delivered a precise operations command center experience.',
    ],
    architecture: ['Java', 'MySQL', 'React', 'Node.js'],
    openSource: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Smart Inventory Management System',
    subtitle: 'Real-time stock intelligence and automation',
    description: 'A premium inventory suite for operational excellence, automated replenishment, and business-critical forecasting.',
    tags: ['Inventory', 'AI', 'SQL', 'Automation'],
    details: [
      'Built a predictive replenishment engine for stock optimization.',
      'Designed intuitive dashboards for ops and finance teams.',
      'Automated supplier workflows and restock alerts.',
    ],
    architecture: ['React', 'FastAPI', 'MySQL', 'TailwindCSS'],
    openSource: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Hotel Booking Management System',
    subtitle: 'Hospitality operations automation',
    description: 'A modern hotel management system with integrated AI scheduling, room automation, and guest operations orchestration.',
    tags: ['Hospitality', 'Automation', 'SaaS', 'Systems'],
    details: [
      'Designed guest operations dashboards and staff task flows.',
      'Automated reservation intelligence and service handoffs.',
      'Built a polished interface for premium enterprise adoption.',
    ],
    architecture: ['Next.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
    openSource: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const project = projects[activeProject]

  return (
    <section id="projects" className="rounded-[2rem] border border-brand-secondary/10 bg-brand-bg px-6 py-16 shadow-[0_35px_145px_rgba(0,0,0,0.3)] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.36em] text-brand-accent">Featured projects</p>
          <h2 className="text-4xl font-semibold text-brand-secondary sm:text-5xl">Engineering-grade case studies</h2>
          <p className="max-w-3xl text-base leading-8 text-brand-primary">
            Each project demonstrates a systems-first approach: operational automation, AI intelligence, and technical maturity designed for real business impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-brand-secondary/10 bg-brand-bg p-6 shadow-[0_30px_90px_rgba(0,0,0,0.2)] transition hover:border-brand-accent/30"
            >
              <div className="relative mb-6 h-[220px] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-[#131d33] via-brand-bg to-[#0b1324]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.1),_transparent_45%)] opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent,rgba(0,0,0,0.7))]" />
                <div className="absolute left-6 top-6 rounded-full border border-brand-secondary/10 bg-brand-secondary/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-primary">
                  {item.tags[0]}
                </div>
                <div className="absolute right-6 bottom-6 text-right text-brand-secondary/80">
                  <p className="text-2xl font-semibold">{item.title.split(' ')[0]}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-semibold text-brand-secondary">{item.title}</p>
                  <p className="mt-2 text-sm text-brand-primary">{item.subtitle}</p>
                </div>
                <p className="text-sm leading-6 text-brand-primary/90">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-secondary/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-brand-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(index)
                    setModalOpen(true)
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-accent bg-brand-accent/5 px-5 py-3 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent/20"
                >
                  Show More
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-bg/90 p-6 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-brand-secondary/10 bg-brand-bg p-8 shadow-[0_50px_140px_rgba(0,0,0,0.5)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-secondary/10 bg-brand-bg text-brand-primary transition hover:bg-brand-secondary/10"
              >
                <FiX className="h-5 w-5" />
              </button>
              <div className="flex flex-col gap-8 overflow-y-auto pr-1">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.34em] text-brand-accent">Case study</p>
                  <h3 className="text-3xl font-semibold text-brand-secondary">{project.title}</h3>
                  <p className="max-w-3xl text-base leading-8 text-brand-primary">{project.description}</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-brand-secondary/10 bg-[#131d33]/50 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-brand-primary">Problem solved</p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-brand-primary">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] border border-brand-secondary/10 bg-[#131d33]/50 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-brand-primary">Architecture</p>
                    <div className="mt-5 grid gap-3 text-sm text-brand-primary">
                      {project.architecture.map((item) => (
                        <span key={item} className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/5 px-4 py-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-brand-secondary/10 bg-[#131d33]/50 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-brand-primary">Project snapshot</p>
                    <div className="mt-5 grid gap-4">
                      {project.details.map((detail) => (
                        <div key={detail} className="rounded-3xl bg-brand-bg/80 p-4 text-sm text-brand-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-brand-secondary/10 bg-[#131d33]/50 p-6">
                    <div className="flex flex-col gap-4 text-sm text-brand-primary">
                      <a href={project.openSource} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between rounded-3xl border border-brand-secondary/10 bg-brand-secondary/5 px-4 py-4 transition hover:border-brand-accent hover:bg-brand-secondary/10">
                        <span>GitHub</span>
                        <FiGithub className="h-5 w-5" />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between rounded-3xl border border-brand-secondary/10 bg-brand-secondary/5 px-4 py-4 transition hover:border-brand-accent hover:bg-brand-secondary/10">
                        <span>Live demo</span>
                        <FiExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
