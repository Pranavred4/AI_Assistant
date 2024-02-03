import React, { useState } from 'react';
import axios from 'axios';

function ChatComponent() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleChatRequest = async () => {
    try {
      const response = await axios.post('http://localhost:8080/chat', { prompt });
      setResponse(response.data);
    } catch (error) {
      console.error('Error making chat request:', error);
    }
  };

  return (
    <div>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={handleChatRequest}>Send Chat</button>
      {response && <div>{response}</div>}
    </div>
  );
}

export default ChatComponent;
