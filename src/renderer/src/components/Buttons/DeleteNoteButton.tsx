import { useSetAtom } from 'jotai'
import ActionButton from './Buttons'
import { FaRegTrashCan } from 'react-icons/fa6'
import { deleteNoteAtom } from '@renderer/store'

export default function DeleteNoteButton() {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = () => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
