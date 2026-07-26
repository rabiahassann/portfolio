import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Send } from 'lucide-react'
import { profile } from '../data'
import { fadeUp, slideLeft } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

const inputClass =
  'mt-1.5 w-full rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>(
    'idle',
  )

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = String(data.get('firstName') || '').trim()
    const lastName = String(data.get('lastName') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || 'Portfolio inquiry').trim()
    const message = String(data.get('message') || '').trim()
    const fullName = `${firstName} ${lastName}`.trim()

    setStatus('loading')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email,
          subject: `Portfolio: ${subject}`,
          message,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!res.ok) throw new Error('Email failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-alt relative overflow-hidden py-20 sm:py-28">
      <div className="glow-orb pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind or just want to say hi? Drop a message — I usually reply within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[20px] animated-gradient p-8 text-white shadow-2xl shadow-cyan-500/20"
          >
            <MessageSquare size={32} className="mb-4 opacity-90" />
            <h3 className="text-2xl font-extrabold">Get in touch</h3>
            <p className="mt-3 text-white/85">
              Tell me about your idea, timeline, and goals. I&apos;ll reply with
              clear next steps.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <p>
                <span className="block text-white/70">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {profile.email}
                </a>
              </p>
              <p>
                <span className="block text-white/70">WhatsApp</span>
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {profile.phone}
                </a>
              </p>
              <p>
                <span className="block text-white/70">Response time</span>
                <span className="font-semibold">Within 24 hours</span>
              </p>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass-soft rounded-[20px] p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white">Send a message</h3>
            <p className="mt-2 text-xs text-muted">
              Form submit pe query seedha {profile.email} pe jayegi.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-white/80">
                First Name *
                <input required name="firstName" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-white/80">
                Last Name *
                <input required name="lastName" className={inputClass} />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-white/80">
              Email *
              <input required type="email" name="email" className={inputClass} />
            </label>
            <label className="mt-4 block text-sm font-medium text-white/80">
              Subject
              <select
                name="subject"
                className={inputClass}
                defaultValue="Freelance project"
              >
                <option className="bg-[#07070c]">Freelance project</option>
                <option className="bg-[#07070c]">Full-time role</option>
                <option className="bg-[#07070c]">Collaboration</option>
                <option className="bg-[#07070c]">Other</option>
              </select>
            </label>
            <label className="mt-4 block text-sm font-medium text-white/80">
              Message * (min. 10 characters)
              <textarea
                required
                minLength={10}
                name="message"
                rows={4}
                className={`${inputClass} resize-y`}
              />
            </label>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="gradient-primary shimmer-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[20px] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 disabled:opacity-60 sm:w-auto"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </motion.button>

            {status === 'sent' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm font-medium text-cyan-300"
              >
                Thanks! Your message has been sent to {profile.email}.
              </motion.p>
            )}

            {status === 'error' && (
              <p className="mt-4 text-sm font-medium text-rose-300">
                Email send nahi hui. WhatsApp icon se seedha message bhej dein,
                ya phir {profile.email} pe email karein.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
