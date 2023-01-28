import React from 'react';
import { sendMessageActionCreator } from '../../redux/message-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapMessagesToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        },
    }
}

export default compose(
    connect(mapMessagesToProps, mapDispatchToProps),
    WithAuthRedirect
)(Messages);