import React from 'react';
import s from './Profile.module.css';
import PeopleCard from './PeopleCard/PeopleCard'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import CreateNewPostContainer from './CreateNewPost/CreateNewPostContainer';

const Profile = (props) => {

    return (
        <div className={s.block}>
            <img alt="avatar" src="https://blog.tutoronline.ru/media/621769/best-fishing-spots-emt.jpg" />
            <h3>Мой профиль</h3>

            <PeopleCard />
            <MyPostsContainer />
            <CreateNewPostContainer />
 
        </div>
    )
}

export default Profile;