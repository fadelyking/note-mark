export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <aside className=" overflow-auto w-[250px] h-screen bg-zinc-900 p-5">{children}</aside>
}
