import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let messagesElements = props.state.messages.map(el =>
        <Message
            id={el.id}
            message={el.message}
            userId={el.userId}
            img={props.state.dialogs[el.userId - 1].img}
        />);

    let dialogsElements = props.state.dialogs.map(el =>
        <Dialog
            id={el.id}
            name={el.name}
            img={el.img}
        />);
    
    let onSendMessageClick = ()=>{
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e)=>{
        let text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <div className={s.block}>
            <div className={s.people}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div><textarea onChange={ onNewMessageChange } value={props.state.messageText} placeholder="Enter your message"></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>  

        </div>
    )
}

export default Dialogs;