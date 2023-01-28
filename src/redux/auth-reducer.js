import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null,
};

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        };
            
        default:
            return state;
    };
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.IsAuthenticated();
    if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
                dispatch(getCaptchaUrlSuccess(null));
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                let message = data.messages.length > 0 ? data.messages[0] : 'Какая-то ошибка';
                dispatch(stopSubmit('login', { _error: message }));
            }
        })
}

export const getCaptchaUrl = () => async (dispatch) => {
    const responce = await securityAPI.getCaptchaUrl()
    const captchaUrl = responce.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default AuthReducer;


