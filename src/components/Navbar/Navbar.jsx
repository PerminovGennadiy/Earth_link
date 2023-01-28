import { NavLink } from 'react-router-dom';
import cl from '../Navbar/Navbar.module.css';
import FriendsList from '../FriendsList/FriendsList';
import React from 'react';

const Nav = (props) => {
    return (
        <nav className={cl.nav}>
            <div className={cl.navOption}><NavLink to='/profile' className={navData => navData.isActive ? cl.active : cl.item}>Профиль</NavLink></div>
            <div className={cl.navOption}><NavLink to='/friends' className = { navData => navData.isActive ? cl.active : cl.item }>Друзья</NavLink></div>
            <div className={cl.navOption}><NavLink to='/messages' className = { navData => navData.isActive ? cl.active : cl.item }>Сообщения</NavLink></div>
            <div className={cl.navOption}><NavLink to='/news' className = { navData => navData.isActive ? cl.active : cl.item }>Новости</NavLink></div>
            <div className={cl.navOption}><NavLink to='/music' className = { navData => navData.isActive ? cl.active : cl.item }>Музыка</NavLink></div>
            <div className={`${cl.navOption} ${cl.last}`}><NavLink to='/settings' className = { navData => navData.isActive ? cl.active : cl.item }>Настройки</NavLink></div>
            {/* <FriendsList props={props} /> */}
        </nav>
    );
};

export default Nav;