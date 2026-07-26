import { motion } from 'framer-motion'
import { profile } from '../data'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.266.63 4.38 1.725 6.195L4 29l7.992-1.697A11.94 11.94 0 0 0 16.004 27C22.625 27 28 21.617 28 15.004 28 8.383 22.625 3 16.004 3zm6.93 16.93c-.29.816-1.7 1.49-2.36 1.586-.61.09-1.38.128-2.23-.14-.54-.164-1.23-.385-2.12-.753-3.73-1.612-6.16-5.37-6.35-5.62-.19-.25-1.52-2.02-1.52-3.85s.96-2.73 1.3-3.1c.29-.32.76-.47 1.14-.47.12 0 .23 0 .33.005.3.013.45.028.65.5.24.58.82 2.01.89 2.16.07.15.12.33.02.53-.09.2-.14.32-.28.5-.14.17-.3.39-.43.52-.14.14-.29.3-.12.58.17.29.75 1.23 1.61 2 .99.99 1.83 1.3 2.12 1.45.29.14.46.12.63-.07.17-.2.74-.86.94-1.16.2-.29.4-.24.67-.14.28.09 1.75.83 2.05.98.3.15.5.22.57.34.08.13.08.74-.21 1.55z" />
    </svg>
  )
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Hi Rabia, I found your portfolio...')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center sm:right-6 sm:bottom-6"
    >
      <span className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]/35" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)]">
        <WhatsAppIcon className="h-8 w-8" />
      </span>
    </motion.a>
  )
}
