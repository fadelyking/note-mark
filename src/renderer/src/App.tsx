import Sidebar from './components/Sidebar'
import NotesPreviewList from './components/NotePreviewList'
import Content from './components/Content'
import RootLayout from './components/RootLayout'
import ActionButtonRow from './components/ActionButtonRow'

function App() {
  return (
    <RootLayout>
      <Sidebar>
        <ActionButtonRow />
        <NotesPreviewList />
      </Sidebar>
      <Content>Content</Content>
    </RootLayout>
  )
}

export default App
