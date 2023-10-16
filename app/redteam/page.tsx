'use client';
import { useState } from 'react'; 
import { useChat } from 'ai/react';
import { encodeGenerator } from 'gpt-tokenizer'



export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const text =  messages.toString()
  const tokens = []
  for (const tokenChunk of encodeGenerator(text)) {
    tokens.push(...tokenChunk)
  }

  
  const [successfulAttacks, setSuccessfulAttacks] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  const attackSuccessRate = ((successfulAttacks / totalAttempts) * 100).toFixed(2);


  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const colorTokens = tokens.map((token, index) => (
    <span key={index} style={{ color: getRandomColor() }}>
      {token} {' '}
    </span>
  ));

  return (
    <main className="mx-auto w-full h-screen max-w-4xl p-24 flex flex-col text-white">
       <form
      
      className=" space-x-4 my-2" onSubmit={handleSubmit}>
       
       
        <textarea 
            placeholder="Start Chat"
            className="w-full h-52 -py-2 text-white text-base bg-transparent 
            border border-slate-6 rounded-lg 
            "
            
   
          // className="rounded-md "
          value={input}
          onChange={handleInputChange} 
        >
          
        </textarea>
          
        <button
          className="border-solid  border-white m-4   "
          type="submit"
        >
          Send
        </button>
        <button
          className="border-solid  border-white m-4   "
          type="button"
          onClick={() => {
            
          }}
        >
          Tokenize  
           <span className='' style={{ background: `${colorTokens}` }}>
          {" "} {colorTokens} 
          </span>
          <span className="">Attack Success Rate (ATS) {attackSuccessRate} % </span>
         
        </button>
        
      
       

      </form>
       <div aria-hidden="true" className="w-[300px] max-w-[400px] mx-auto user-select-none center pointer-events-none  h-px max-w-full" 
      style={{background:"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.87) 50%, rgba(0, 0, 0, 0) 100%)"}}></div>
    
      <section className="mb-auto m">
        {messages.map(m => (
          <div className="mb-4" key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
             {m.role === 'user' ? '': '▷'}
          </div>
        ))}
      </section>
   


    </main>
  );
}
