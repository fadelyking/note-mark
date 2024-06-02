import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export function useNotesList({ onSelect }: { OnSelect?: () => void }) {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)
  }

  if (onSelect) {
    onSelect()
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
