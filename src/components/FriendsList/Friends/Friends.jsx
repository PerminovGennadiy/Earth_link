import cl from './Friends.module.css';
import React from 'react';

const Friends = (props) => {
    return (
        <div className={cl.container}>
            <div><img className={cl.avatar} src={props.way}></img></div>
            <div className={cl.name}>{props.name}</div>
        </div>
    );
};

export default Friends;