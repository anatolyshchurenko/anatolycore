import React, { useState } from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
function App() {

  
  const [value, setValue] = useState('anatolycore')
  return (
    <div className="App">
      
      <h2>{value}</h2>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <PostItem post={{title: 'anatolycore', body:'лучший сайт'}} />
      <Counter/>
    </div> 
  );
}
export default App;