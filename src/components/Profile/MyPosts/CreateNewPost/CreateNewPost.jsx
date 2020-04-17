import React from 'react';
import s from './CreateNewPost.module.css';
import Button from '../../../Templates/Button/Button';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profile-reducer';


const CreateNewPost = (props) => {
    
    let target = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = target.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.new_post}>
            <span>Добавить новый пост</span><br />
            <textarea className={s.textarea} ref={target} onChange={ onPostChange } value={props.textOnNewPost}/>
            <Button name="Добавить" clickCallback={ addNewPost } />
        </div>
    )
}

export default CreateNewPost;