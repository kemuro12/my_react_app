import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.block}>
            <img src={props.img}/>
            <span className={s.text}>{props.name}</span>
        </div>
    )
}

export default Dialog;