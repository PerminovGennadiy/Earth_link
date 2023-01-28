import React from 'react';
import cl from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialog from './Dialog/Dialog';
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../UI/FormsControl/FormsControl';
import { maxLenghtCreator, required } from '../../utils/validators/validators';

const Messages = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(el => <DialogItem name={el.name} id={el.id} way={el.way} key={el.id} />);

    let messagesElement = state.messagesData.map(el => <Dialog message={el.message} id={el.id} key={el.id} />);

    let newMessageBody = state.newMessageText;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialog_items}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                <div className={cl.allMessages}>{messagesElement}</div>
                <AddMessageFormReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const maxLenght200 = maxLenghtCreator(200);

const AddMessageForm = (props) => {
    return (
        <form className={cl.AreaMessageContainer} onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                validate={[required, maxLenght200]}
                name='newMessageBody'
                className={cl.AreaMessage}> </Field>
            <button className={cl.sendMessage}>Отправить</button>
        </form>
    )
}

const AddMessageFormReduxForm = reduxForm({ form: 'messageAddMessageForm' })(AddMessageForm);

export default Messages;

