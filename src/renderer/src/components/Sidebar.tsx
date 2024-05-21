import { notes } from '@renderer/assets/data'
import { v4 as uuidv4 } from 'uuid'

export default function Sidebar() {
  return (
    <aside className=" overflow-auto w-[250px] h-screen bg-slate-500 p-5">
      <ul>
        {notes.map((note) => (
          <li key={uuidv4()} className=" mt-4">
            {note.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}