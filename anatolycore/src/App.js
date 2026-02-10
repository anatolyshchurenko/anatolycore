import React, { useState } from "react";

function App() {

  const [point, setPoint] = useState(0);
  const [value, setValue] = useState('anatolycore')

  function increment() {
    setPoint(point +1);
  }
  function decrement() {
    setPoint(point -1);
  }
  
  return (
    <div className="App">
      <h1>{point}</h1>
      <h2>{value}</h2>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default App;