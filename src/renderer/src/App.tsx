import Sidebar from './components/Sidebar'
import Content from './components/Content'
import RootLayout from './components/RootLayout'
import ActionButtonRow from './components/ActionButtonRow'

function App() {
  return (
    <RootLayout>
      <Sidebar>
        <ActionButtonRow />
        Sidebar
      </Sidebar>
      <Content>Content</Content>
    </RootLayout>
  )
}

export default App
