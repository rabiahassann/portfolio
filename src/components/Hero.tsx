import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { profile, resumeUrl, stats } from '../data'
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const hasLinkedIn =
  Boolean(profile.linkedin) &&
  !profile.linkedin.endsWith('linkedin.com/in/') &&
  !profile.linkedin.endsWith('linkedin.com/in')
const hasGithub =
  Boolean(profile.github) &&
  !profile.github.endsWith('github.com/') &&
  !profile.github.endsWith('github.com')

const floatingTags = [
  { label: 'Laravel', x: '-8%', y: '12%', delay: 0 },
  { label: 'Vue.js', x: '78%', y: '8%', delay: 0.15 },
  { label: 'PHP', x: '-4%', y: '68%', delay: 0.3 },
  { label: 'MySQL', x: '82%', y: '62%', delay: 0.45 },
]

const codeLines = [
  { text: 'const rabia = {', color: 'text-purple-300' },
  { text: '  role: "The Coder",', color: 'text-cyan-300' },
  { text: '  stack: ["PHP", "Laravel", "Vue"],', color: 'text-sky-300' },
  { text: '  experience: "4+ years Laravel",', color: 'text-indigo-300' },
  { text: '  available: true,', color: 'text-emerald-300' },
  { text: '};', color: 'text-purple-300' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="gradient-hero relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-12"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-orb pointer-events-none absolute -top-24 right-0 h-[460px] w-[460px] rounded-full blur-2xl" />
      <div className="glow-orb-purple pointer-events-none absolute bottom-0 left-[-10%] h-[380px] w-[380px] rounded-full blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-[20px] border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-cyan-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <Sparkles size={14} />
            Available for remote roles
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
            <br />
            <span className="text-white/90 text-[1.65rem] sm:text-3xl lg:text-[2.15rem] font-bold block mt-2">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin size={14} className="text-cyan-400" />
            {profile.location}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="gradient-primary shimmer-btn inline-flex items-center gap-2 rounded-[20px] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25"
            >
              Let&apos;s Talk
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-[20px] border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Download size={16} />
              Download CV
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-[20px] border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
            {hasLinkedIn ? (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-muted transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
            ) : null}
            {hasGithub ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-muted transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
              </a>
            ) : null}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-muted transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="#about"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition hover:text-cyan-300"
          >
            Scroll to explore
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              <ArrowDown size={14} />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-cyan-500/25 via-indigo-500/10 to-purple-500/25 blur-3xl" />

          {floatingTags.map((tag) => (
            <motion.span
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { delay: 0.4 + tag.delay },
                scale: { delay: 0.4 + tag.delay },
                y: {
                  delay: 0.8 + tag.delay,
                  duration: 3.2 + tag.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              style={{ left: tag.x, top: tag.y }}
              className="absolute z-20 rounded-[14px] border border-white/15 bg-[#0b0b14]/90 px-3 py-1.5 text-xs font-semibold text-cyan-200 shadow-lg backdrop-blur-md"
            >
              {tag.label}
            </motion.span>
          ))}

          <div className="relative z-10 space-y-4">
            {/* Code terminal card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-card overflow-hidden rounded-[20px] shadow-2xl shadow-cyan-500/10"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 flex items-center gap-1.5 text-xs text-muted">
                  <Terminal size={12} />
                  rabia.dev
                </span>
              </div>
              <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                {codeLines.map((line, i) => (
                  <motion.p
                    key={line.text}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.12 }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.p>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block h-4 w-2 bg-cyan-400 align-middle"
                />
              </div>
            </motion.div>

            {/* Stats + status row */}
            <div className="grid grid-cols-2 gap-3">
              {stats.slice(0, 2).map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-soft rounded-[20px] p-4"
                >
                  <p className="text-2xl font-extrabold text-cyan-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="glass-soft flex items-center gap-3 rounded-[20px] p-4"
            >
              <span className="gradient-primary flex h-11 w-11 items-center justify-center rounded-[14px] text-white shadow-lg shadow-cyan-500/30">
                <Code2 size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Building
                </p>
                <p className="text-xs text-muted">
                  Laravel, Vue.js, PHP apps
                </p>
              </div>
              <span className="ml-auto rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold tracking-wide text-emerald-300 uppercase">
                Live
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
