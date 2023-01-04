const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    // Пользователи
    dialogsData: [
        { id: 1, name: 'Sergay', way: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png' },
        { id: 2, name: 'Anabolic', way: 'https://static.vecteezy.com/system/resources/thumbnails/006/487/912/small_2x/hacker-avatar-ilustration-free-vector.jpg' },
        { id: 3, name: 'Ivan', way: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' },
        { id: 4, name: 'Andrew', way: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' },
        { id: 5, name: 'Stasik$', way: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' },
    ],

    // Сообщения
    messagesData: [
        { id: 1, message: 'Привет, как дела?' },
        { id: 2, message: 'Завтра свободен?' },
        { id: 3, message: 'У меня реально рак...' },
        { id: 4, message: 'My name is Anton' },
        { id: 5, message: 'I am a Thomas Shelby' },
    ],

    // сообщение, которое хочет отправить пользователь
    newMessageText: '',

}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({ id: 5, message: body });
            return state;
        
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
};

export const updateNewMessageBodyActionCreater = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
};

export default messageReducer;