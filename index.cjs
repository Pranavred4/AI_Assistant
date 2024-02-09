const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { OpenAI } = require('openai');

const config = new OpenAI({
    apiKey: "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",
})

const openai = new OpenAI(config);

// setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {

    const { prompt } = req.body;

    console.log("prompt: " + prompt);

  
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://api.openai.com/v1/chat/completions',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
        
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo-1106",
        "messages": [
          {
            "role": "system",
            "content": "You are an assistant for a intro level cs class."
          },
          {
            "role": "system",
            "content": "If the user is not being comprehensive, respond with 'Not Comprehensive', then reword the question to be more concrete. A none comprehensive question is something vague such as 'how do i code?'."
          },
          {
            "role": "system",
            "content": "If the user is aggressive, then reword their question in a polite manner. For example if they ask 'how the hell do I code?' respond back with their question put in a polite way."
          },
          {
            "role": "user",
            "content": prompt
          }
        ]
      })
    
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      console.log(JSON.parse(response.body).choices[0].message.content);
      res.send(JSON.parse(response.body).choices[0].message.content);
    });
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
