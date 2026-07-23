import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

export default function RichTextEditor({ value, onChange, placeholder = "Write content here..." }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({ placeholder }),
        ],
        content: value || "",
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "min-h-[200px] px-3 py-2 focus:outline-none prose prose-sm max-w-none",
            },
        },
    });

    if (!editor) return null;

    const btnClass = (active) =>
        `px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
            active ? "bg-[#1A3A5C] text-white" : "bg-white text-gray-600 hover:bg-gray-100"
        }`;

    return (
        <div className="border rounded-lg overflow-hidden">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={btnClass(editor.isActive("bold"))}
                >
                    Bold
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={btnClass(editor.isActive("italic"))}
                >
                    Italic
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={btnClass(editor.isActive("heading", { level: 3 }))}
                >
                    Heading
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={btnClass(editor.isActive("bulletList"))}
                >
                    • List
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={btnClass(editor.isActive("orderedList"))}
                >
                    1. List
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={btnClass(editor.isActive("paragraph"))}
                >
                    Paragraph
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    className={btnClass(false)}
                >
                    Undo
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    className={btnClass(false)}
                >
                    Redo
                </button>
            </div>

            {/* Editable area */}
            <EditorContent editor={editor} className="bg-white" />
        </div>
    );
}