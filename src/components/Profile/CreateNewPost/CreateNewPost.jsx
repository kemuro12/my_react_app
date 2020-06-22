import React from 'react';
import s from './CreateNewPost.module.css';
import Button from '../../Templates/Button/Button';

const CreateNewPost = (props) => {
    
    let target = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = target.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.new_post}>
            <span>Добавить новый пост</span><br />
            <textarea className={s.textarea} ref={target} onChange={ onPostChange } value={props.textOnNewPost}/>
            <Button name="Добавить" clickCallback={ onAddPost } />
        </div>
    )
}

export default CreateNewPost;