import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cs = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)
