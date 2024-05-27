import Sidebar from './components/Sidebar'
import NotesPreviewList from './components/NotePreviewList'
import Content from './components/Content'
import RootLayout from './components/RootLayout'
import ActionButtonRow from './components/ActionButtonRow'
import MarkdownEditor from './components/MarkdownEditor'
function App() {
  return (
    <RootLayout>
      <Sidebar>
        <ActionButtonRow />
        <NotesPreviewList />
      </Sidebar>
      <Content>
        <MarkdownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
