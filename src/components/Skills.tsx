import { motion } from 'framer-motion'
import { skillGroups } from '../data'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#07070c] py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools in my toolkit"
          description="PHP, Laravel, Vue.js, Angular — plus Git, Docker, Firebase, MySQL, and cloud integrations I use every day."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass-soft rounded-[20px] p-6 transition hover:border-cyan-400/30"
            >
              <h3 className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="cursor-default rounded-[20px] border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/85 hover:border-cyan-400/40 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
