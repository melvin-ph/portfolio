'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="rounded-[2rem] border border-brand-secondary/10 bg-brand-bg px-6 py-16 shadow-[0_35px_145px_rgba(0,0,0,0.3)] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.36em] text-brand-accent">Let’s build</p>
            <h2 className="text-4xl font-semibold text-brand-secondary sm:text-5xl">Let’s build intelligent systems together.</h2>
            <p className="max-w-xl text-base leading-8 text-brand-primary">
              I am available for senior automation engineering, systems development, and AI operations work. Reach out to discuss premium enterprise systems for real business challenges.
            </p>
            <div className="grid gap-4 text-sm text-brand-primary">
              <div className="rounded-[1.75rem] border border-brand-secondary/10 bg-[#131d33]/50 px-5 py-4">
                <p className="font-semibold text-brand-secondary">Availability</p>
                <p className="mt-2 text-brand-primary/80">Open to new remote and hybrid opportunities</p>
              </div>
              <div className="rounded-[1.75rem] border border-brand-secondary/10 bg-[#131d33]/50 px-5 py-4">
                <p className="font-semibold text-brand-secondary">Email</p>
                <a href="mailto:hello@melvin.com" className="mt-2 inline-block text-brand-primary transition hover:text-brand-accent">
                  hello@melvin.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            action="mailto:hello@melvin.com"
            method="POST"
            className="space-y-5 rounded-[2rem] border border-brand-secondary/10 bg-brand-bg/80 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-brand-primary">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" className="w-full rounded-2xl border border-brand-secondary/10 bg-brand-bg/60 px-4 py-3 text-sm text-brand-secondary outline-none transition focus:border-brand-accent/60 focus:ring-1 focus:ring-brand-accent/30" />
              </label>
              <label className="space-y-2 text-sm text-brand-primary">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@company.com" className="w-full rounded-2xl border border-brand-secondary/10 bg-brand-bg/60 px-4 py-3 text-sm text-brand-secondary outline-none transition focus:border-brand-accent/60 focus:ring-1 focus:ring-brand-accent/30" />
              </label>
            </div>

            <label className="space-y-2 text-sm text-brand-primary">
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="What systems would you like to build?" className="w-full rounded-2xl border border-brand-secondary/10 bg-brand-bg/60 px-4 py-4 text-sm text-brand-secondary outline-none transition focus:border-brand-accent/60 focus:ring-1 focus:ring-brand-accent/30" />
            </label>

            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-4 text-sm font-semibold text-brand-bg transition hover:bg-brand-accent/90">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
