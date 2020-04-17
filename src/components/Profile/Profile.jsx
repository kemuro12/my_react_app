import React from 'react';
import s from './Profile.module.css';
import PeopleCard from './PeopleCard/PeopleCard'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div className={s.block}>
            <img alt="avatar" src="https://blog.tutoronline.ru/media/621769/best-fishing-spots-emt.jpg" />
            <h3>Мой профиль</h3>

            <PeopleCard />
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;