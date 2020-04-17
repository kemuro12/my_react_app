import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={ s.block +" "+ (props.userId != 1 ? s.leftMessage : s.rightMessage)}>
            {props.userId == 1 ? 
            <div>
                <span className={s.text}>{props.message}</span>
                <img src={props.img} />
            </div>
            :
            <div>
                <img src={props.img} />
                <span className={s.text}>{props.message}</span>
            </div>
            }
            

        </div>
    )
}

export default Message;