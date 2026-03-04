import React from "react";
import './Styles/App.css'
import Logo from "./components/UI/Header/Logo/Logo";
import Navigations from "./components/UI/Header/Navigations/Navigations";
import DesInfo from "./components/UI/Header/Navigations/DesInfo";
import AuthorInfo from "./components/Other/AuthorInfo";
function App() {



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
      <DesInfo InfoSpace={
        <div>
          Данный сайт являет <b>полностью анонимным</b> имиджбордом 
          нацеленным для саундклауд исполнителей
        </div>
      }/>
      <DesInfo/>
      <DesInfo/>
      <DesInfo InfoSpace={<AuthorInfo/>}/>
    </div> 
  );
}
export default App;