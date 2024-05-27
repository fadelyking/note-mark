import { MDXEditor } from '@mdxeditor/editor'

export default function MarkdownEditor() {
  return (
    <MDXEditor
      markdown={''}
      plugins={[]}
      contentEditableClassName=" outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500"
    />
  )
}
