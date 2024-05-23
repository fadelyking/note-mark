import ActionButton from './Buttons'
import { LuFileSignature } from 'react-icons/lu'
export default function NewNoteButton() {
  return (
    <ActionButton>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
