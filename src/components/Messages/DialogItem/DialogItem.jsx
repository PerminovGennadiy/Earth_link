import cl from './../Messages.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';


// Пользователи
const DialogItem = (props) => {
    return (
        <div className={cl.dialog}>
            <div className={cl.dialog__container}>
                <div><img className={cl.avatar} src={`${props.way}`}></img></div>
                <div className={cl.link}><NavLink className={cl.name} to={`/messages/${props.id}`}>{props.name}</NavLink></div>
            </div>
        </div>
    );
};

export default DialogItem;