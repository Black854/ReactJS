import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "4f3d39e5-214f-420c-9ab3-f8c322bdb13c"}
});

export const getUsers = (pageSize=1, pageNumber) => {
    return instance.get(`users?count=${pageSize}&page=${pageNumber}`).then (response => {
        return response.data;
    })
}

export const getProfile = (id=2) => {
    return instance.get(`profile/${id}`).then(response => {
        return response.data;
    })
}

export const getAuthData = () => {
    return instance.get(`auth/me`).then (response => {
        return response.data;
    })
}

export const followUser = (id) => {
    return instance.post(`follow/${id}`, {}).then (response => {
        return response.data;
    })
}

export const unfollowUser = (id) => {
    return instance.delete(`follow/${id}`).then (response => {
        return response.data;
    })
}
