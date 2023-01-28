import cl from '../Messages.module.css';
import React from 'react';


// Сообщения
const Message = (props) => {
    return (

        <div className={cl.message__container}>
            <div className={cl.message}>{props.message}</div>
        </div>
    );
};

export default Message;