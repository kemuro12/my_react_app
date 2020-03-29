import React from 'react';
import s from './MyPosts.module.css';
import CreateNewPost from './CreateNewPost/CreateNewPost'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.block}>
            <h3>Мои посты</h3>

            <CreateNewPost />

            <Post postText="Hello world" likes="2" />
            <Post postText="Coronavirus in Russia!" likes="6" />
            <Post postText="TSU has Locked" likes="11" />
            <Post postText="Good Game" likes="1" />
        </div>
    )
}

export default MyPosts;