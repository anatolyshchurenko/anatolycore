import React from "react";

const PostUser = () =>{
    return(
        <form style={{textAlign: 'left', marginTop: '20px'}}>
        <input type='text' placeholder='введите имя' style={{padding: '5px', width:'100px'}}></input><br></br>
        <input type='text' placeholder='напишите что хотите' style={{ marginTop: '5px',padding: '5px', width:'150px'}}></input>
        <button style={{border: '1px solid black', fontWeight: 'normal'}}>Опубликовать</button>
      </form>
    )
}

export default PostUser