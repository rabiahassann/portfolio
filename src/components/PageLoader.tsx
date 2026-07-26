import { useEffect, useState } from 'react'

export function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 700)
    return () => window.clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07070c] transition-opacity"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="gradient-primary flex h-14 w-14 items-center justify-center rounded-[16px] text-xl font-bold text-white shadow-lg shadow-cyan-500/30">
          R
        </div>
        <div className="h-1 w-28 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>
      </div>
    </div>
  )
}
