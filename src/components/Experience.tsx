import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experience } from '../data'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#07070c] py-20 sm:py-28">
      <div className="glow-orb pointer-events-none absolute top-10 left-[-8%] h-72 w-72 rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Work experience"
          description="5+ years building and leading Laravel products — from developer to team lead across Pakistan and remote US teams."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative mx-auto mt-14 max-w-3xl"
        >
          <div className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500/20 sm:left-[15px]" />

          <div className="space-y-6">
            {experience.map((job) => (
              <motion.article
                key={job.role + job.company}
                variants={fadeUp}
                className="relative pl-10 sm:pl-12"
              >
                <motion.span
                  whileInView={{ scale: [0.6, 1.15, 1] }}
                  viewport={{ once: true }}
                  className="absolute top-6 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#07070c] shadow-[0_0_16px_rgba(34,211,238,0.45)] sm:h-8 sm:w-8"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 sm:h-2.5 sm:w-2.5" />
                </motion.span>

                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(34, 211, 238, 0.35)' }}
                  className="glass-soft rounded-[20px] p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <p className="text-sm font-medium text-cyan-300">
                        {job.company}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                        <MapPin size={12} className="text-cyan-400" />
                        {job.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="rounded-[20px] bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
                        {job.period}
                      </span>
                      {job.current ? (
                        <span className="rounded-[20px] bg-emerald-400/15 px-3 py-1 text-[10px] font-bold tracking-wide text-emerald-300 uppercase">
                          Current
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-[20px] border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
