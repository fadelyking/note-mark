import Sidebar from './components/Sidebar'
import NotesPreviewList from './components/NotePreviewList'
import Content from './components/Content'
import RootLayout from './components/RootLayout'
import ActionButtonRow from './components/ActionButtonRow'
import MarkdownEditor from './components/MarkdownEditor'
import FloatingNoteTitle from './components/FloatingNoteTitle'
function App() {
  return (
    <RootLayout>
      <Sidebar>
        <ActionButtonRow />
        <NotesPreviewList />
      </Sidebar>
      <Content>
        <FloatingNoteTitle />
        <MarkdownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
