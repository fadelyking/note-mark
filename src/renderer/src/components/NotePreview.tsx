import { NoteInfo } from '@shared/models'
import cn from 'clsx'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export function NotePreview({
  title,
  content,
  lastEdited,
  isActive = false,
  ...props
}: NotePreviewProps) {
  return (
    <div
      className={cn('cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75', {
        'bg-zinc-400/75': isActive,
        'hover:bg-zinc-500/75': !isActive
      })}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{lastEdited}</span>
    </div>
  )
}