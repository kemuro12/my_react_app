import React from 'react';
import s from './PeopleCard.module.css';


const PeopleCard = () => {
    return (
        <div className={s.block}>
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/b43598bcba4547ce3836702fac9416d1.jpg" />
            <div className={s.info}>
                <ul>
                    <li>Денис</li>
                    <li>18 лет</li>
                    <li>Томск</li>
                </ul>
            </div>
        </div>
    )
}

export default PeopleCard;