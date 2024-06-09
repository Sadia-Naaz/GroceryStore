import './App.css';
import { useState } from 'react';

function App() {
 
  const[text,setText]=useState('');
  const[list,setList]=useState([]);
  const[history,setHistory]=useState([]);

  const handleChange=(e)=>{
  setText(e.target.value);
  }


  const HandleAdd=(e)=>{
  e.preventDefault();

 
    const newList = [...list,text];
    setList(newList);
    setHistory([...history,newList]);
    setText('');
  

}
const HandleUndo=()=>{
  if(history.length>0){
  const newHistory = history.slice(0,-1);

 const PrevList =  newHistory[newHistory.length-1]  ||  [];
 setList(PrevList);
 setHistory(newHistory);
  }

}

  return (
    <div className="App">
      <h1>Text Editor</h1>
      <form onSubmit={HandleAdd}>
     <input 
     type='text'
     value={text}
     onChange={handleChange}
         
     />
     <button type='submit'>Add</button>
     <button  onClick={(e) => {e.preventDefault(); HandleUndo();}} disabled={history.length===0}>Undo</button>
     </form>
     <ul>{list.map((item,index)=>(
       <li key={index}><span>{item}</span></li>
      ))}
      </ul>
     
    </div>
  );
}

export default App;
