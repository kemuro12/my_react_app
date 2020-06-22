import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import CreateNewPost from './CreateNewPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        textOnNewPost : state.profilePage.textOnNewPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        } 
    }
}

const CreateNewPostContainer = connect(mapStateToProps, mapDispatchToProps) (CreateNewPost);

export default CreateNewPostContainer;