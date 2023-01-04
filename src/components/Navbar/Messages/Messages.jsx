import React from 'react';
import cl from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialog from './Dialog/Dialog';
import { updateNewMessageBodyActionCreater, sendMessageActionCreator } from '../../../redux/message-reducer';

const Messages = (props) => {
debugger
    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(el => <DialogItem name={el.name} id={el.id} way={el.way} />);

    let messagesElement = state.messagesData.map(el => <Dialog message={el.message} id={el.id} />);

    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialog_items}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElement}
                <textarea onChange={onNewMessageChange} value={newMessageBody} className={cl.AreaMessage}></textarea>
                <button onClick={onSendMessageClick} className={cl.sendMessage}>Отправить</button>
            </div>
        </div>
    );
};

export default Messages;