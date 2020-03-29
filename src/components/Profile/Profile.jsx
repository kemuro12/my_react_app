import React from 'react';
import s from './Profile.module.css';
import PeopleCard from './PeopleCard/PeopleCard'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.block}>
            <img src="https://blog.tutoronline.ru/media/621769/best-fishing-spots-emt.jpg" />
            <h3>Мой профиль</h3>

            <PeopleCard />
            <MyPosts />
        </div>
    )
}

export default Profile;