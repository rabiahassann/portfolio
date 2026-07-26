import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, profile, resumeUrl } from '../data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#07070c]/80 shadow-lg shadow-black/40 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="gradient-primary flex h-9 w-9 items-center justify-center rounded-[12px] text-sm font-bold text-white shadow-lg shadow-cyan-500/30">
            R
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-white">
              {profile.brand}
              <span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-cyan-300/80 uppercase">
              {profile.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[14px] px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[20px] border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5"
          >
            <Download size={15} />
            CV
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-primary shimmer-btn rounded-[20px] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25"
          >
            Hire Me
          </motion.a>
        </div>

        <button
          type="button"
          className="rounded-[12px] p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-soft border-t border-white/10 px-4 py-4 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[12px] px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-[12px] px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-cyan-300"
              >
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="gradient-primary mt-2 rounded-[20px] px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
