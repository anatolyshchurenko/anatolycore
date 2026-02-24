import React from "react";

const PostItem = (props) => {
    return(
        <div className='post'>
            <div className="post__content">
                <strong>{props.post.id}.</strong>
                <strong>{props.post.title}:</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="buttoNn">
                <button style={{borderRadius: '15px', backgroundColor: 'black', color: 'white', border: 'none'}}>Удалить</button>
            </div>
        </div>
    );
};
export default PostItem