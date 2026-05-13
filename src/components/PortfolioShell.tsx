'use client'

import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Languages from './sections/Languages'
import Projects from './sections/Projects'
import Archives from './sections/Archives'
import Experience from './sections/Experience'
import Hobbies from './sections/Hobbies'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import CursorGlow from './CursorGlow'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioShell() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t: number) => Math.pow(t, 0.72),
      smooth: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { duration: 0, immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    })

    lenis.on('scroll', ScrollTrigger.update)
    ScrollTrigger.addEventListener('refresh', () => lenis.update())
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      ScrollTrigger.killAll()
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative overflow-hidden bg-brand-bg text-brand-secondary">
      <CursorGlow />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(244,244,244,0.04),_transparent_22%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,_rgba(244,244,244,0.02),_transparent_16%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.08),_transparent_12%)]" />

      <div className="fixed inset-x-0 top-0 z-40 border-b border-brand-secondary/10 bg-brand-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-brand-primary sm:px-8">
          <span className="font-medium tracking-[0.32em] uppercase text-brand-primary">Melvin</span>
          <nav className="flex items-center gap-7">
            {['home', 'about', 'skills', 'projects', 'archives', 'experience', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="transition hover:text-brand-accent"
              >
                {section === 'home' ? 'home' : section}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="relative z-10 overflow-hidden">
        <Hero />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-40 px-6 pb-24 pt-8 sm:px-8">
          <About />
          <Skills />
          <Languages />
          <Projects />
          <Archives />
          <Experience />
          <Hobbies />
          <Contact />
          <Footer />
        </div>
      </main>

      <AnimatePresence />
    </div>
  )
}
