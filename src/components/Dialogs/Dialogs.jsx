import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let messagesElements = state.messages.map(el =>
        <Message
            id={el.id}
            message={el.message}
            userId={el.userId}
            img={state.dialogs[el.userId - 1].img}
        />);

    let dialogsElements = state.dialogs.map(el =>
        <Dialog
            id={el.id}
            name={el.name}
            img={el.img}
        />);

    return (
        <div className={s.block}>
            <div className={s.people}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={ props.updateNewMessageText } 
                        value={state.messageText} placeholder="Enter your message">
                            
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ props.sendMessage }>Send</button>
                    </div>
                </div>
            </div>  

        </div>
    )
}

export default Dialogs;