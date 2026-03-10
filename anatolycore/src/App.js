import React, { useState } from "react";
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
  const [title, setTitle] = useState('')
  const [userName, setUserName] = useState('')
  
  // Состояния для отслеживания активных блоков
  const [activeInfo, setActiveInfo] = useState(false) // для инфо
  const [activeAuthor, setActiveAuthor] = useState(false) // для автора
  
  const [posts, setPosts] = useState([
    { id: 1, userName: 'Анатолий Щуренко', text: 'Тестовое сообщение', time: '14:88' }
  ])

  const addNewPost = (e) => {
    e.preventDefault()
    
    if (title.trim() === '') {
      return
    }
    
    const finalUserName = userName.trim() === '' ? 'Аноним' : userName
    
    const newPost = {
      id: Date.now(),
      userName: finalUserName,
      text: title,
      time: new Date().toLocaleTimeString().slice(0,5)
    }
    
    setPosts([newPost, ...posts])
    setTitle('')
    setUserName('')
  }

  

  // Обработчики нажатия
  const handleInfoClick = () => {
    setActiveInfo(!activeInfo) // меняем состояние при нажатии
    setActiveAuthor(false) // сбрасываем автора
  }

  const handleAuthorClick = () => {
    setActiveAuthor(!activeAuthor) // меняем состояние при нажатии
    setActiveInfo(false) // сбрасываем инфо
  }

  const handleMainClick = () => {
    // главная страница - ничего не делаем, всегда прозрачная
    console.log('главная страница (всегда прозрачная)')
  }

  const handleLastClick = () => {
    // последние ветки - ничего не делаем, всегда прозрачная
    console.log('последние ветки (всегда прозрачная)')
  }

  return (
    <div className="App">
      {/* главный логотип */}
      <Logo logoText='anatolycore'/>

      {/* кнопки навигации */}
      <div onClick={handleInfoClick}>
        <Navigations>инфо</Navigations>
      </div>
      
      <div onClick={handleMainClick}>
        <Navigations>главная страница</Navigations>
      </div>
      
      <div onClick={handleLastClick}>
        <Navigations>последние ветки</Navigations>
      </div>
      
      <div onClick={handleAuthorClick}>
        <Navigations>автор</Navigations>
      </div>

      {/* текст внутри блоков навигации */}
      {/* инфо - меняет прозрачность при нажатии */}
      <div style={{ 
        opacity: activeInfo ? 1 : 0.0, 
        transition: 'opacity 0.3s ease' 
      }}>
        <DesInfo InfoSpace={<InfoSpaceText/>}/>
      </div>
      
      {/* главная страница - всегда прозрачная */}
      <div style={{ opacity: 0. }}>
        <DesInfo/>
      </div>
      
      {/* последние ветки - всегда прозрачная */}
      <div style={{ opacity: 0.0 }}>
        <DesInfo/>
      </div>
      
      {/* автор - меняет прозрачность при нажатии */}
      <div style={{ 
        opacity: activeAuthor ? 1 : 0.0, 
        transition: 'opacity 0.3s ease' 
      }}>
        <DesInfo InfoSpace={<AuthorInfo/>}/>
      </div>

      {/* блок создания постов */}
      <form onSubmit={addNewPost}>
        <UserName
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="как тебя зовут?"
        />
        
        <Holder
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
        
        <Createpost type="submit"/>
      </form>
      
      {/* посты */}
      {posts.map(post => (
        <PostTemplate 
          key={post.id}
          UserName={post.userName}
          PostText={post.text}
          Time={post.time}
        />
      ))}
    </div> 
  );
}

export default App;