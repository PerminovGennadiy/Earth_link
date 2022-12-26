import cl from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {

    let dialogsElements = props.state.dialogsData.map(el => <DialogItem name={el.name} id={el.id} way={el.way} />);

    let messagesElement = props.state.messagesData.map(el => <Dialog message={el.message} id={el.id} />);

    
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialog_items}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Messages;