import axios from "axios";
import { login } from "../redux/auth-reducer";
import { savePhoto } from "../redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '632c5fd9-83be-4227-825f-4155efafd36d'
    },
})

export const userAPI = {
    GetUsers(currentPage = 1, pageSize = 20) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data
        })
        .catch(() => console.log(`Error!`));
    },

    Follow(id) {
        return instance.post(`follow/${id}`, {},)
            .then(response => {
                return response.data
            })
    },

    Unfollow(id) {
        return instance.delete(`follow/${id}`,)
            .then(response => {
                return response.data
            })
    },
}


export const profileAPI = {
    RenderMyProfille(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(profileId) {
        return instance.get(`profile/status/${profileId}`)
            .then(response => {
                return response.data
            })
    },  
    updateStatus(status) {
        return instance.put('profile/status', { status })
        .then(response => {
            return response.data
        })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}


export const authAPI = {

    IsAuthenticated() {
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data
            })
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
        .then(response => {
            return response.data
        })
    },

    logout() {
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data
        })
    },
}

export const securityAPI = {

    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    },
}
