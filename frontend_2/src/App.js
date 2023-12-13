import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleClick = async () =>{
    console.log('Entrou no useEffect')
    console.log('Prompt = ', prompt)

    const response = await axios.post("http://localhost:3333/api/call", {prompt: prompt});
    setResult(response.data);
    console.log(response.data)
 
  };

   return (
<div className="App">


<textarea
      className="answer-box"
      id="answer-box"
      value={result}
    ></textarea>

<textarea
        className="text-box"
        id="text-box"
        placeholder="pergunte algo..."
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
    

    <div >

    <button style={{width:150,backgroundColor:'black',marginTop:30, marginLeft:380, color: 'white',
                    padding: '10px 60px', fontsize:0}}>
                    <text style={{marginLeft:2, font:30,  }}
                    onClick={handleClick}>
                    Enviar</text>
              </button>
    </div>   

    
</div>

  );
}


export default App;