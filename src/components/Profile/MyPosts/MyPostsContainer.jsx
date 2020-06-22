import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;