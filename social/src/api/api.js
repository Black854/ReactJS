import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "4f3d39e5-214f-420c-9ab3-f8c322bdb13c"}
});

export const usersAPI = {
    getUsers (pageSize=5, pageNumber=1) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`).then (response => {
            return response.data;
        })
    },
    followUser (id) {
        return instance.post(`follow/${id}`, {}).then (response => {
            return response.data;
        })
    },
    unfollowUser (id) {
        return instance.delete(`follow/${id}`).then (response => {
            return response.data;
        })
    },
    getProfile (id) {
        return profileAPI.getProfile(id);
    }
}

export const profileAPI = {
    getProfile (id=25138) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data;
        })
    },
    getStatus (userId=25138) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data;
        })
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`).then (response => {
            return response.data;
        })
    }
}
