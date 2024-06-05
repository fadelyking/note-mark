import { useSetAtom } from 'jotai'
import ActionButton from './Buttons'
import { LuFileSignature } from 'react-icons/lu'
import { createEmptyNoteAtom } from '@renderer/store'
export default function NewNoteButton() {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const handleCreation = () => {
    createEmptyNote()
  }
  return (
    <ActionButton onClick={handleCreation}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
