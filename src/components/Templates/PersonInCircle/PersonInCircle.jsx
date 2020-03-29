import React from 'react';
import s from './PersonInCircle.module.css';

const PersonInCircle = (props) => {
    return (
        <span className={s.circle}>
            <img src={props.img}/>
        </span>
    )
}

export default PersonInCircle;