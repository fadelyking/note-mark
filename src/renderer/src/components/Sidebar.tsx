import { notes } from '@renderer/assets/data'
import { v4 as uuidv4 } from 'uuid'

/* function handleClick() {

} */

export default function Sidebar() {
  return (
    <aside className=" overflow-auto w-[250px] h-screen bg-slate-500 p-5">
      <ul>
        {notes.map((note) => (
          <li key={uuidv4()} onClick={handleClick}>
            {note.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}
