import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'

import { BubbleMenu,
  EditorContent,
  FloatingMenu,
  useEditor,} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import EditorMenu from './EditorMenu'
import './PostEditor.css'




const PostEditor = () => {
  const CustomDocument = Document.extend({
    content: 'heading block*',
  })
  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What’s the title?'
          }

          return 'Can you add some further context?'
        },
      }),
      Highlight, 
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
      <h1>
        This  is the title  …
      </h1>
      <p>
        … Lets start writing and spread the knowlege .
      </p>
    `,
  })


  return (
    <div className="post-editor">
      <EditorMenu editor={editor} />
      <div className="editor-content">
      <EditorContent editor={editor} />
      </div>
      
    </div>
  )
}

export default PostEditor