import { ComponentProps } from 'react'

export default function ActionButton({ children }) {
  return (
    <button className="px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100 ">
      {children}
    </button>
  )
}
