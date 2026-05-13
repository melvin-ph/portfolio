'use client'

import { motion } from 'framer-motion'
import { FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const ctaMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] pb-24 pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.12),_transparent_60%)] blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,_rgba(244,244,244,0.05),_transparent_55%)] blur-2xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-6 sm:px-8 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 flex-1"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-brand-secondary/10 bg-brand-secondary/5 px-4 py-2 text-sm text-brand-primary backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
            High-Security Systems & Intelligence Architecture
          </div>

          <p className="text-sm uppercase tracking-[0.34em] text-brand-primary">Melvin</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-brand-secondary sm:text-6xl lg:text-7xl">
            AI Automation Engineer & <span className="text-brand-accent">Systems Developer</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-primary sm:text-xl">
            Building intelligent systems, automation infrastructure, and operational software for real-world businesses with technical authority and engineering maturity.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              variants={ctaMotion}
              initial="hidden"
              animate="visible"
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-secondary/5 px-8 py-4 text-sm font-semibold text-brand-secondary transition hover:border-brand-accent hover:bg-brand-secondary/10"
            >
              View Projects
            </motion.a>
            <motion.a
              variants={ctaMotion}
              initial="hidden"
              animate="visible"
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-brand-secondary/10 bg-brand-bg px-8 py-4 text-sm font-semibold text-brand-primary transition hover:bg-brand-bg/80 hover:text-brand-secondary"
            >
              Contact Me
            </motion.a>
            <motion.a
              variants={ctaMotion}
              initial="hidden"
              animate="visible"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-brand-accent px-8 py-4 text-sm font-semibold text-brand-bg transition hover:bg-brand-accent/90"
            >
              Download Resume
            </motion.a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-brand-primary">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-brand-accent">
              <FiGithub /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-brand-accent">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="mailto:hello@melvin.com" className="inline-flex items-center gap-2 transition hover:text-brand-accent">
              <FiMail /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex w-full flex-1 items-center justify-center"
        >
          <div className="relative w-full max-w-[520px] rounded-[2rem] border border-brand-secondary/10 bg-[#131d33]/90 p-6 shadow-[0_45px_120px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.1),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,244,244,0.05),_transparent_40%)]" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-brand-secondary/10 bg-brand-bg p-6">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(244,244,244,0.03),transparent_70%)]" />
              <div className="relative flex items-center justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">Operational Ecosystems</p>
                  <h2 className="text-3xl font-semibold text-brand-secondary">Secure AI Pipelines</h2>
                  <p className="max-w-xl text-sm leading-7 text-brand-primary">
                    Tactical automation, workflow intelligence, and a stable engineering backbone designed for enterprise-grade scalability.
                  </p>
                </div>
                <div className="hidden h-20 w-20 rounded-3xl border border-brand-secondary/10 bg-gradient-to-br from-brand-bg via-[#131d33] to-brand-bg p-4 text-center text-xs text-brand-primary sm:block">
                  System
                  <span className="mt-2 block text-brand-secondary">v4.0</span>
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 w-[260px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.15),_transparent_55%)] blur-3xl" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-brand-primary opacity-80">
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
          System Status: Operational
        </div>
        <FiChevronDown className="mx-auto h-6 w-6 animate-bounce text-brand-primary" />
      </div>
    </section>
  )
}
