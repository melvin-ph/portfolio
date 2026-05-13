'use client'

import { motion } from 'framer-motion'
import { SectionContainer, SectionTitle, SectionSubtitle, fadeInUpVariants } from '@/components/shared'

export default function About() {
  const expertise = [
    'AI-Powered Systems',
    'Business Automation',
    'Workflow Optimization',
    'Real-World Problem Solving',
    'Operational Software',
    'Full-Stack Development',
  ]

  return (
    <SectionContainer id="about" className="bg-dark-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <motion.div {...fadeInUpVariants(0)}>
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Building intelligent systems that solve real business problems
          </SectionSubtitle>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 space-y-4"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a college student and passionate developer with expertise in
              AI automation, systems engineering, and full-stack development. I
              focus on building intelligent solutions that solve real-world
              business challenges.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My background spans software development, automation engineering,
              web development, and IoT systems. I'm the founder of{' '}
              <span className="text-accent-cyan font-semibold">ToBro Agency</span>,
              where I deliver digital solutions focused on automation,
              operational workflows, and business software.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I specialize in building systems that optimize operations,
              integrate AI workflows, and transform business processes through
              intelligent automation and data-driven insights.
            </p>
          </motion.div>

          {/* Expertise Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="badge-secondary">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Stats Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            { title: 'Software Developer', desc: 'Full-stack development expertise' },
            { title: 'Automation Engineer', desc: 'Workflow optimization specialist' },
            { title: 'AI Systems Developer', desc: 'ML & intelligent automation' },
            { title: 'IoT Enthusiast', desc: 'Connected systems & sensors' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="card-glass p-6 hover-glow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-accent-cyan mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}
