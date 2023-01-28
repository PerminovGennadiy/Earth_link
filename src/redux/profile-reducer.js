import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Привет, как дела?', likes: '2' },
        { id: 2, message: 'Здравствуйте, меня зовут Сергей', likes: '1' },
        { id: 3, message: 'У меня рак:)', likes: '12' },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likes: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                NewPostText: '',
            };
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        };

        case SET_STATUS: {
            return { ...state, status: action.status }
        };

        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(el => el.id != action.id) }
        };

        case SAVE_PHOTO_SUCCESS: {
            debugger
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        };

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const deletePost = (id) => ({ type: DELETE_POST, id });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (profileId) => {
    return async (dispatch) => {
        let data = await profileAPI.RenderMyProfille(profileId)
        dispatch(setUserProfile(data));
    };
}

export const getStatus = (profileId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(profileId)
        dispatch(setStatus(data));
    };
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

const getErrorsFromMessages = (messages) => {
    let errors = Object.keys(messages).reduce((acc, key) => {
        let errorMessage = messages[key].split("->");
        errorMessage = errorMessage[1]
            .slice(0, errorMessage[1].length - 1)
            .toLowerCase();
        return { ...acc, [errorMessage]: messages[key] };
    }, {});
    return errors;
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', { contacts: getErrorsFromMessages(response.data.messages) }));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;