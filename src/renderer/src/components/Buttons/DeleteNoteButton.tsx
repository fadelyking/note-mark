import ActionButton from './Buttons'
import { FaRegTrashCan } from 'react-icons/fa6'

export default function DeleteNoteButton() {
  return (
    <ActionButton>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
