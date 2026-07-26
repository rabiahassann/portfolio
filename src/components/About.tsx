import { motion } from 'framer-motion'
import { aboutHighlights, profile, profileImage, stats } from '../data'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section-alt relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="glow-orb-purple pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Who I am behind the code"
          description={profile.tagline}
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="photo-frame overflow-hidden rounded-[24px]">
              <img
                src={profileImage}
                alt={`${profile.name} portrait`}
                className="aspect-[4/5] w-full object-cover object-[center_20%]"
              />
            </div>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card absolute -bottom-5 left-4 right-4 rounded-[20px] px-4 py-3 text-center sm:left-6 sm:right-6"
            >
              <p className="text-sm font-semibold text-white">
                {profile.name} · {profile.role}
              </p>
              <p className="text-xs text-cyan-300">{profile.location}</p>
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-soft rounded-[20px] p-4 text-center"
                >
                  <p className="text-2xl font-extrabold text-cyan-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-muted sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-6 grid gap-4 sm:grid-cols-3"
            >
              {aboutHighlights.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="glass-soft rounded-[20px] p-5 transition hover:border-cyan-400/30"
                >
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
