import React from "react";
import './Styles/App.css'
import Logo from "./components/UI/Header/Logo/Logo";
import Navigations from "./components/UI/Header/Navigations/Navigations";
import DesInfo from "./components/UI/Header/Navigations/DesInfo";
import AuthorInfo from "./components/Other/AuthorInfo";
import InfoSpaceText from "./components/Other/InfoSpaceText";
import Holder from "./components/UI/Posts/Holdersrc/Holder";
import Createpost from "./components/UI/Posts/Create/Createpost";
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
      <DesInfo InfoSpace={<InfoSpaceText/>}/>
      <DesInfo/>
      <DesInfo/>
      <DesInfo InfoSpace={<AuthorInfo/>}/>

      <Holder/>
      <Createpost/>
    </div> 
  );
}
export default App;