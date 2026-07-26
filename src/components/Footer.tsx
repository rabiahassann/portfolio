import { Mail } from 'lucide-react'
import { navLinks, profile, resumeUrl } from '../data'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const hasLinkedIn =
  Boolean(profile.linkedin) &&
  !profile.linkedin.endsWith('linkedin.com/in/') &&
  !profile.linkedin.endsWith('linkedin.com/in')
const hasGithub =
  Boolean(profile.github) &&
  !profile.github.endsWith('github.com/') &&
  !profile.github.endsWith('github.com')

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050508] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="gradient-primary flex h-9 w-9 items-center justify-center rounded-[12px] text-sm font-bold text-white">
              R
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight">
                {profile.brand}
                <span className="text-cyan-400">.</span>
              </span>
              <span className="mt-0.5 text-[10px] font-medium tracking-[0.18em] text-cyan-300/80 uppercase">
                {profile.role}
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {profile.title} with 4+ years building
            Laravel products, APIs, and e-commerce platforms.
          </p>
          <div className="mt-5 flex gap-2">
            {hasLinkedIn ? (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 text-muted hover:text-cyan-300"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            ) : null}
            {hasGithub ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 text-muted hover:text-cyan-300"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            ) : null}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 text-muted hover:text-cyan-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition hover:text-cyan-300"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-cyan-300"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                WhatsApp {profile.phone}
              </a>
            </li>
            <li>Open to remote & full-time roles</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name} the Coder. All rights
            reserved.
          </p>
          <p>Laravel Team Lead</p>
        </div>
      </div>
    </footer>
  )
}
