import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        dialogsPage : state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (e) => {
            dispatch(updateNewMessageTextCreator(e.target.value));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;