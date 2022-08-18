
import {
    FaBold, FaItalic, FaStrikethrough, FaCode, FaParagraph, FaList,
    FaListOl, FaFileCode, FaQuoteLeft, FaUndoAlt, FaRedoAlt, FaHighlighter, FaAlignLeft,
    FaAlignCenter, FaAlignRight, FaAlignJustify
} from "react-icons/fa";

const EditorMenu = ({ editor }) => {
    if (!editor) {
        return null
    }
    return (
        <div className="editor-menu">
            <div className="menu-group">
                <button onClick={() => editor.chain().focus().toggleBold().run()}>
                    <FaBold />
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <FaItalic />
                </button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()}>
                    <FaStrikethrough />
                </button>
                <button onClick={() => editor.chain().focus().toggleCode().run()}>
                    <FaCode />
                </button>
                <button onClick={() => editor.chain().focus().toggleHighlight().run()}>
                    <FaHighlighter />
                </button>
            </div>



            <div className="menu-group">
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                >
                    H5
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''} >
                    H6
                </button>
            </div>

            <div className="menu-group">
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    HR
                </button>
                <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                    BR
                </button>
            </div>


            <div className="menu-group">
                <button onClick={() => editor.chain().focus().setParagraph().run()}>
                    <FaParagraph />
                </button>
                <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} >
                    <FaFileCode />
                </button>
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    <FaQuoteLeft />
                </button>
                <button onClick={() => editor.chain().focus().toggleBulletList().run()} >
                    <FaList />
                </button>
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <FaListOl />
                </button>
            </div>

            <div className="menu-group">

                <button onClick={() => editor.chain().focus().setTextAlign('left').run()} >
                    <FaAlignLeft />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                    <FaAlignCenter />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('right').run()} >
                    <FaAlignRight />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
                    <FaAlignJustify />
                </button>
            </div>

            <div className="menu-group ">
                <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                    clear marks
                </button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}>
                    clear nodes
                </button>
            </div>
            <div className="menu-group last">
                <button onClick={() => editor.chain().focus().undo().run()}>
                    <FaUndoAlt />
                </button>
                <button onClick={() => editor.chain().focus().redo().run()}>
                    <FaRedoAlt />
                </button>
            </div>
        </div>
    )
}
export default EditorMenu