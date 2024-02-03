import React, { useState } from 'react';
import axios from "axios";

function ChatBox({ code, onSend }) {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:8080/chat", { prompt: code + '\n\n' + prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setPrompt(''); // Reset the prompt after sending
        onSend(); // Reset the code after sending
      });
  };

  return (
    <div className="chatbox">
      <div>
        <p>{response}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          id="chat"
          className="text"
          name="w3review"
          rows="2"
          cols="50"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
}

export default ChatBox;
