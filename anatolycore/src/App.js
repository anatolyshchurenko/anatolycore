import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostUser from "./components/PostUser";
function App() {

  const [post] = useState([
    {title: 'anatolycore', body:'привет', id:'0'},
    {title: 'pippucka', body:'здарова!!!', id:'0'},
    {title: 'fr33fr3ind', body:'йайа космос', id:'0'},
  ])
  return (
    <div className="App">
      <PostUser/>
      <PostList post={post} postlis='postlis'/>;
    </div> 
  );
}
export default App;