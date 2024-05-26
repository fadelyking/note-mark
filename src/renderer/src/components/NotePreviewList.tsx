import { notes } from '../store/mocks/index'
import uuid4 from 'uuid4'
export default function NotesPreviewList() {
  return (
    <ul className="mt-3 space-y-1">
      {notes.map((note) => (
        <li key={uuid4()}>{note.title}</li>
      ))}
    </ul>
  )
}
