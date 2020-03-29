import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img1.wbstatic.net/large/new/3800000/3800191-1.jpg" />
            <div className={s.text}>
                <span>{props.postText}</span>
                <span>Лайков : {props.likes}</span>
            </div>
        </div>
    )
}

export default Post;