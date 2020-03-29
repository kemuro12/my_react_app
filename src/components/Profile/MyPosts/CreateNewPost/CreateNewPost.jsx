import React from 'react';
import s from './CreateNewPost.module.css';
import Button from '../../../Templates/Button/Button';

const CreateNewPost = () => {
    return (
        <div className={s.new_post}>
            <span>Добавить новый пост</span><br />
            <textarea className={s.textarea}></textarea>
            <Button name="Добавить"/>
        </div>
    )
}

export default CreateNewPost;