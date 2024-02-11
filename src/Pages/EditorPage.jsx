import { useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";
import ChatBox from "../Components/ChatBox";



function EditorPage() {


  const editorRef = useRef(null);
  const [code, setCode] = useState('');

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    const doc = new Y.Doc();

    const provider = new WebrtcProvider("test-room", doc);
    const type = doc.getText("monaco");

    const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);
    console.log(provider.awareness);
  }

  const handleCodeChange = (value, event) => {
    setCode(value);
  };

  return (
    <>
      <ChatBox code={code} onSend={() => setCode('')} />
      <Editor
        height="50vh" // Adjust the height as needed
        width="100vw"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        defaultLanguage="python"
        onChange={handleCodeChange}
      />
 

    </>
    
  );
}

export default EditorPage;