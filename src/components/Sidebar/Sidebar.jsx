import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={s.block}>
            <ul>
                <NavLink to="/profile" activeClassName={s.active}><li>Профиль</li></NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}><li>Диалоги</li></NavLink>
                <NavLink to="/news" activeClassName={s.active}><li>Новости</li></NavLink>
                <NavLink to="/music" activeClassName={s.active}><li>Музыка</li></NavLink>
                <NavLink to="/123" activeClassName={s.active}><li>Страница 5</li></NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;