import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
const RichTextComp = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (value) => {
    setEditorContent(value);
    localStorage.setItem('editorContent', value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Rich Text Editor</h2>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        theme="snow"
      />
      <div>
        <h4 className="text-xl font-semibold mb-3">Output:</h4>
        <div>{editorContent}</div>
      </div>
    </div>
  );
};

export default RichTextComp;
