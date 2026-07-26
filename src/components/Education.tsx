import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#07070c] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Growth"
          title="Learning & development"
          description="Continuous upskilling through real products, leadership, and modern PHP practices."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          {education.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="glass-soft rounded-[20px] p-6"
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-cyan-400/15 text-cyan-300">
                <GraduationCap size={18} />
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-300">{item.place}</p>
              <p className="mt-1 text-xs text-muted">{item.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
