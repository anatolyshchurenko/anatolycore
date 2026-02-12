import React from "react";
import PostItem from './PostItem';

const PostList = ({post, postlis}) => {
    return(<div>
        <h2 style={{marginTop: '25px', textAlign: 'left'}}>
            {postlis}:
        </h2>
        {post.map(post => 
            <PostItem post={post} key={post.id}/>
        )}
    </div>
    )
}
export default PostList 