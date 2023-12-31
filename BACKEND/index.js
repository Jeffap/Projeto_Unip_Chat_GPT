// EXPRESS
const express = require('express');
const app = express();
app.use(express.json())
app.listen(3333);


require('dotenv').config()
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
console.log("API OK")

//CORS
const cors = require('cors');
app.use(cors());
app.options('*', cors());

// OPEN-AI
const {Configuration, OpenAIApi} = require("openai");
const config = new Configuration({
    apiKey: OPENAI_API_KEY, 
});
const openai = new OpenAIApi(config);


// GET DE TESTE
app.get('/api/call', (request,response) => {
    return response.send({'message': 'Chat GPT'});
});


// POST
app.post('/api/call', async (req, res) =>{

  const runPrompt = async () =>{
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: req.body.prompt,
          max_tokens: 1024,
          temperature: 0.8,
        });
        return response.data;
  };

  const responseFromAPI = await runPrompt();

  console.log(responseFromAPI.choices[0].text);
  res.send(responseFromAPI.choices[0].text);

} );
