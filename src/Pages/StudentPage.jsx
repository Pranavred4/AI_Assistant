import { useState, useRef, useEffect } from 'react';
import Editor from "@monaco-editor/react";
import ChatBox from "../Components/ChatBox.jsx";
import FirebaseDataComponent from "./FirebaseDataComponent.jsx";

function StudentPage() {


  const editorRef = useRef(null);
  const [code, setCode] = useState('');

  const messageRef = useRef();


  return (
    <>
      <ChatBox code={code} onSend={() => setCode('')} />
      <Editor
        height="50vh" // Adjust the height as needed
        width="100vw"
        theme="vs-dark"
        defaultLanguage="python"
      />
      <form>
      <label>Enter Message</label>
      <input type ="text" ref={messageRef} />
      <button type="submit"></button>
      </form>
      
      <FirebaseDataComponent />
    
    </>
    
  );
}

export default StudentPage;
