import NewNoteButton from './Buttons/NewNoteButton'
import DeleteNoteButton from './Buttons/DeleteNoteButton'

export default function ActionButtonRow() {
  return (
    <div className="flex justify-between mt-1">
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
