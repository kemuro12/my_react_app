import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
    
    let postsElements = props.posts.map(el => (<Post postText={el.text} likes={el.likes} />));

    return (
        <div className={s.block}>
            <h3>Мои посты</h3>

            {postsElements}            
        </div>
    )
}

export default MyPosts;