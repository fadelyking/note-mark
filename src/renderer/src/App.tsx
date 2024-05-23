import Sidebar from './components/Sidebar'
import Content from './components/Content'
import RootLayout from './components/RootLayout'
function App() {
  return (
    <RootLayout>
      <Sidebar></Sidebar>
      <Content></Content>
    </RootLayout>
  )
}

export default App
