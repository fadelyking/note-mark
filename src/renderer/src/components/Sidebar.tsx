import { notes } from '@renderer/assets/data'
import { v4 as uuidv4 } from 'uuid'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <aside className=" overflow-auto w-[250px] h-screen bg-slate-500 p-5">{children}</aside>
}
