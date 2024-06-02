import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'

export default function FloatingNoteTitle() {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null
  return (
    <div className="flex justify-center">
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}
