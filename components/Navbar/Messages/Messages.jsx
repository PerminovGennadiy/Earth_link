import React from 'react';
import cl from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {

    let dialogsElements = props.state.dialogsData.map(el => <DialogItem name={el.name} id={el.id} way={el.way} />);

    let messagesElement = props.state.messagesData.map(el => <Dialog message={el.message} id={el.id} />);

    let NewMessage = React.createRef();

    let CreateMessage = () => {
        let text = NewMessage.current.value;
        alert(text);
    }
    
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialog_items}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElement}
                <textarea ref={NewMessage} className={cl.AreaMessage}></textarea>
                <button onClick={CreateMessage} className={cl.sendMessage}>Отправить</button>
            </div>
        </div>
    );
};

export default Messages;