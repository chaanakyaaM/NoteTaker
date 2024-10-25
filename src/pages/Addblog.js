import React, { useState } from "react";
import { toast } from 'react-toastify';
import Markdown from "react-markdown";
import { v4 as uuidv4 } from 'uuid';


export default function Addblog({ update, posts, add, setadd }) {

  const [value, setvalue] = useState("");
  const [textvalue, setTextvalue] = useState("");
  const [choice, setchoice] = useState(true)

  function submit() {
    if ((value === "") | (textvalue === "")) {
      toast.error("You have to fill both fields");
      return;
    }
    const now = new Date();
    let dateinfo = now.toString().split(" ");
    update([
      {
        title: value,
        blog: textvalue,
        date: dateinfo.slice(1, 4).join(" "),
        time: dateinfo[4],
        id: uuidv4(),
        choice: choice
      },
      ...posts,
    ]);
    setvalue("");
    setTextvalue("");
    setadd(!add);
    toast.success('Note successfully created.')
  }
  function clear(){
    setTextvalue('')
    
  }

  function choicehandler(selectedChoice){
    setchoice(selectedChoice === 'Markdown');
  }
  
  return (
    <>
    <div className="addblog">
      <div className="selector">
        <button className ={ `choice choice1 ${choice ? 'activeclass' : ''}`} onClick={(e)=>choicehandler(e.target.textContent)}>Markdown</button>
        <button className={ `choice choice2 ${choice ?  '' : 'activeclass' }`} onClick={(e)=>choicehandler(e.target.textContent)}>Text</button>
      </div>
      <input
        type="text"
        className="inputfield"
        onChange={(e) => setvalue(e.target.value)}
        value={value}
        placeholder="Enter your title"
      />
      <div className="md-container">
      <textarea
        type="text"
        className="textfield"
        onChange={(e) => setTextvalue(e.target.value)}
        value={textvalue}
        placeholder="Enter your Note"
      />
      <div className="preview">
        {!textvalue && <p className="heading">Preview</p>}
        {choice? <Markdown className='markdown-preview'>{textvalue}</Markdown> : <pre>{textvalue}</pre>} 
        </div>
      </div>
      <div className='btn-section'>
      <button onClick={submit}>Create</button>
      <button onClick={clear}>Clear</button>
      </div>
    </div>
    </>
  );
}
