import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import PersonInCircle from '../Templates/PersonInCircle/PersonInCircle';

const Sidebar = (props) => {

    let linkElements = props.sideBarLinks.map(el => 
        <div>
            <NavLink to={el.link} activeClassName={s.active}>
                <li>{el.name}</li>
            </NavLink>
            {el.name == "Друзья" ?
                <div className={s.friendBlock}>
                    <PersonInCircle img={props.friendsList[3].img} />
                    <PersonInCircle img={props.friendsList[1].img} />
                    <PersonInCircle img={props.friendsList[2].img} />
                </div>
                :
                ""
            }
        </div>
    )

    return (
        <div className={s.block}>
            <ul>
                {linkElements}
            </ul>
        </div>
    )
}

export default Sidebar;