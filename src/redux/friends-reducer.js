import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    // Пользователи
    users: [
        // { id: 1, photoUrl: 'https://static.vecteezy.com/system/resources/previews/002/002/280/non_2x/old-man-with-beard-wearing-glasses-avatar-character-free-vector.jpg', followed: false, fullName: 'Sergay', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const FriendsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed:true})
                //     state.users.map(el => {
                //     if (el.id === action.userId) {
                //         return { ...el, followed: true };
                //     }
                //     return el;
                // })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed:false})
            };

        case SET_USERS: {
            return { ...state, users: action.users }
        };

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        };

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        };
            
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        };
            
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        };

        default:
            return state;
    };
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId, });

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId, });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await userAPI.GetUsers(page, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        }
    }

let followOrUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    
    return async (dispatch) => {
        followOrUnfollow(dispatch, userId, userAPI.Follow.bind(userAPI), followSuccess);
        }
    }

export const unfollow = (userId) => {
    
    return async (dispatch) => {
        followOrUnfollow(dispatch, userId, userAPI.Unfollow.bind(userAPI), unfollowSuccess);
        }
    }


export default FriendsReducer;


