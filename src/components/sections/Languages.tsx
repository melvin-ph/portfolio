'use client'

import { motion } from 'framer-motion'

const languages = [
  { name: 'English', description: 'Speaking, Reading, Writing', level: 96 },
  { name: 'Malayalam', description: 'Speaking, Reading, Writing', level: 100 },
  { name: 'Tamil', description: 'Speaking, Reading, Writing', level: 98 },
  { name: 'Hindi', description: 'Speaking, Reading, Writing', level: 80 },
]

export default function Languages() {
  return (
    <section id="languages" className="rounded-[2rem] border border-white/10 bg-[#06101d]/80 px-6 py-16 shadow-[0_35px_135px_rgba(0,0,0,0.2)] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.36em] text-accent-cyan">Language fluency</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Spoken and written mastery</h2>
          <p className="max-w-3xl text-base leading-8 text-slate-400">
            Communicating across technical and business stakeholders with precision, multilingual nuance, and operational clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.75rem] border border-white/10 bg-[#081029]/85 p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{language.name}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-500">{language.description}</p>
                </div>
                <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-4 py-2 text-sm font-semibold text-accent-cyan">
                  {language.level}%
                </span>
              </div>
              <div className="space-y-4">
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-slate-400" style={{ width: `${language.level}%` }} />
                </div>
                <p className="text-sm leading-6 text-slate-300">High-impact communication across voice, text, and technical documentation.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
