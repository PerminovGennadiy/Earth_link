import React from 'react';
import cl from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialog from './Dialog/Dialog';
import { updateNewMessageBodyActionCreater, sendMessageActionCreator } from '../../../redux/message-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreater(body));
    }
    
    return (
        <Messages
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state} />
    );
};

export default MessagesContainer;