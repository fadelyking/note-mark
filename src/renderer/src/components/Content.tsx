export default function Content({ children }: { children: React.ReactNode }) {
  return <div className="grow bg-zinc-700 pb-1 p-5 overflow-auto">{children}</div>
}
