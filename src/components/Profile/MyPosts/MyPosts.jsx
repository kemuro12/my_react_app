import React from 'react';
import s from './MyPosts.module.css';
import CreateNewPost from './CreateNewPost/CreateNewPost'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(el => (<Post postText={el.text} likes={el.likes} />));

    return (
        <div className={s.block}>
            <h3>Мои посты</h3>

            <CreateNewPost textOnNewPost={props.state.textOnNewPost} dispatch={props.dispatch}/>
            {postsElements}
            
        </div>
    )
}

export default MyPosts;