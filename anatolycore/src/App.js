import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";

import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import Logo from "./components/UI/logo/Logo";
function App() {

  const [post] = useState([
    {title: 'anatolycore', body:'привет', id:'0'},
    {title: 'pippucka', body:'здарова!!!', id:'0'},
    {title: 'fr33fr3ind', body:'йайа космос', id:'0'},
  ])
  return (
    <div className="App">
      <Logo>anatolycore</Logo>
      <MyInput type='text' placeholder='Название поста'/>
      <MyInput type='text' placeholder='Описание поста'/>
      <MyButton disabled>Опубликовать</MyButton>
      <PostList post={post} postlis='postlist'/>
    </div> 
  );
}
export default App;