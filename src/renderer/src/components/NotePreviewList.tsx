import { notes } from '../store/mocks/index'
import { NotePreview } from './NotePreview'
import uuid4 from 'uuid4'
export default function NotesPreviewList() {
  return (
    <ul className="mt-3 space-y-1">
      {notes.map((note) => (
        <li key={uuid4()}>
          <NotePreview {...note} />
        </li>
      ))}
    </ul>
  )
}
