import './App.css';
import React,{useState} from "react";


function App() {
  const state= useState();
  console.log(state);
  
  const [count, setcount]= useState(0);
  
  const IncNum=()=>{
    setcount(count+5);
    // console.log("click"+ count++);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
     <button onClick={IncNum}>Click</button>
    </div>
  );
}

export default App;
