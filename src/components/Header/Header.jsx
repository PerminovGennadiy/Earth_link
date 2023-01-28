import cl from '../Header/Header.module.css';
import { Navigate, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import React from 'react';

const Header = (props) => {
    return (
        <header className={cl.header}>
            <div className={cl.logoBrand}>
                <div><img className={cl.logo} src={logo} /></div>
                <NavLink to='/profile' className={cl.brand}>Earth link</NavLink>
            </div>
            <div className={cl.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button className={cl.logOutButton} onClick={props.logout}>Log out</button> </div>
                    : <NavLink to='/login' className={cl.settings}>Войти</NavLink>}
            </div>
        </header>
    );
};

export default Header;