export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-row h-screen">{children}</div>
}
