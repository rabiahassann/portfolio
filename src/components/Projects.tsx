import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section-alt relative overflow-hidden py-20 sm:py-28">
      <div className="glow-orb-purple pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Live client work"
          description="Real products I helped build and ship — with clear ownership, stack, and outcomes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group glass-soft overflow-hidden rounded-[20px] hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0b14]">
                  <img
                    src={project.image}
                    alt={`${project.title} homepage screenshot`}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 rounded-[20px] border border-white/10 bg-[#07070c]/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-300">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-purple-300">
                        Role: {project.role}
                      </p>
                    </div>
                    <span className="rounded-[14px] bg-white/5 p-2 text-muted transition group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-white">
                      <ExternalLink size={16} />
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-cyan-200/90">
                    {project.impact}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-cyan-400/80 truncate">
                    {project.url.replace(/^https?:\/\//, '')}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] border border-white/10 px-2.5 py-1 text-xs font-semibold text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
