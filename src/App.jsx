import { useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";
import ChatBox from "./Components/ChatBox.jsx";

function App() {


  const editorRef = useRef(null);
  const [code, setCode] = useState('');

  

  return (
    <>
      <ChatBox code={code} onSend={() => setCode('')} />
      <Editor
        height="50vh" // Adjust the height as needed
        width="100vw"
        theme="vs-dark"
        defaultLanguage="python"
      />
    
    </>
    
  );
}

export default App;
