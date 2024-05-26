import { notes } from '../store/mocks/index'
import { NotePreview } from './NotePreview'
import uuid4 from 'uuid4'
export default function NotesPreviewList() {
  if (notes.length === 0) {
    return (
      <ul className="text-center pt-4">
        <span>Nothing yet...</span>
      </ul>
    )
  }
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
