import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-alt relative overflow-hidden py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What collaborators say"
          description="A few words from people I've built and shipped with."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.name + item.role}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass-soft rounded-[20px] p-6"
            >
              <Quote className="mb-4 text-cyan-400" size={22} />
              <p className="text-sm leading-relaxed text-white/90">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="mt-5 border-t border-white/10 pt-4">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
