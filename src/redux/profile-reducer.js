const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    // Пользователи
    posts: [
        { id: 1, message: 'Привет, как дела?', likes: '2' },
        { id: 2, message: 'Здравствуйте, меня зовут Сергей', likes: '1' },
        { id: 3, message: 'У меня рак:)', likes: '12' },
    ],

    NewPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.NewPostText,
                likes: 0,
            };
            state.posts.push(newPost);
            state.NewPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.newText;
            return state;
        
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
};

export const updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export default profileReducer;