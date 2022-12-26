import cl from '../Messages.module.css';


// Сообщения
const Message = (props) => {
    return (
        <div className={cl.message}>{props.message}</div>
    );
};

export default Message;