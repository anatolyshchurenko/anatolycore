import React from "react";
import './Styles/App.css'
import Logo from "./components/UI/Header/Logo/Logo";
import Navigations from "./components/UI/Header/Navigations/Navigations";
import DesInfo from "./components/UI/Header/Navigations/DesInfo";
import AuthorInfo from "./components/Other/AuthorInfo";
import InfoSpaceText from "./components/Other/InfoSpaceText";
import Holder from "./components/UI/Posts/Holdersrc/Holder";
import Createpost from "./components/UI/Posts/Create/Createpost";
import PostTemplate from "./components/UI/Posts/PostTemplate/PostTemplate";
import UserName from "./components/UI/Posts/UserName/UserName";
function App() {
  
  function addNewPost() {

  }

  return (
    <div className="App">
      {/* главный логотип */}
      <Logo logoText='anatolycore'/>

      {/* кнопки навигации */}
      <Navigations>инфо</Navigations>
      <Navigations>главная страница</Navigations>
      <Navigations>последние ветки</Navigations>
      <Navigations>автор</Navigations>  

      {/* текст внутри блоков навигации */}
      <DesInfo InfoSpace={<InfoSpaceText/>}/>
      <DesInfo/>
      <DesInfo/>
      <DesInfo InfoSpace={<AuthorInfo/>}/>

      {/* блок создания постов */}
      <UserName/>
      <Holder/>
      <Createpost onClick={addNewPost}/>
      
      {/* посты */}
      
      
      <PostTemplate 
        UserName='Яна' 
        PostText='НЕНАВИЖУ ПИПУКУ!'
        Time='20:04'
      />
      <PostTemplate 
        UserName='Пипука' 
        PostText='Тестовое сообщение 2'
        Time='20:01'
      />
      <PostTemplate 
        UserName='Анатолий Щуренко' 
        PostText='Тестовое сообщение'
        Time='20:00'
      />
    </div> 
  );
}
export default App;