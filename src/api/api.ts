import axios from "axios"
import { PhotosType, ProfileType, UserType } from './../types/types'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "4f3d39e5-214f-420c-9ab3-f8c322bdb13c"}
});

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

type FollowUserResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}

type UnfollowUserResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}

export const usersAPI = {
    getUsers (pageSize=5, pageNumber=1) {
        return instance.get<GetUsersResponseType>(`users?count=${pageSize}&page=${pageNumber}`).then (response => {
            return response.data;
        })
    },
    followUser (id: number) {
        return instance.post<FollowUserResponseType>(`follow/${id}`, {}).then (response => {
            return response.data;
        })
    },
    unfollowUser (id: number) {
        return instance.delete<UnfollowUserResponseType>(`follow/${id}`).then (response => {
            return response.data;
        })
    },
    getProfile (id: number) {
        return profileAPI.getProfile(id);
    }
}

type UpdateStatusResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}

type UploadPhotoResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {
        photos: PhotosType
    }
}

type SetProfileResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}

export const profileAPI = {
    getProfile (id: number) {
        return instance.get<ProfileType>(`profile/${id}`).then(response => {
            return response.data;
        })
    },
    getStatus (userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => {
            return response.data;
        })
    },
    updateStatus (status: string) {
        return instance.put<UpdateStatusResponseType>(`profile/status`, {status: status}).then(response => {
            return response.data;
        })
    },
    uploadPhoto (photo: any) {
        var formData = new FormData();
        formData.append("image", photo);
        return instance.put<UploadPhotoResponseType>(`profile/photo`, formData, { headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
            return response.data;
        })
    },
    setProfile (data: ProfileType) {
        return instance.put<SetProfileResponseType>(`profile`, data).then(response => {
            return response.data;
        })
    }

}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodesForCaptcha
    messages: Array<string>
}

type LogoutResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const authAPI = {
    me () {
        return instance.get<MeResponseType>(`auth/me`).then (response => {
            return response.data;
        })
    },
    login (data: {email: string, password: string, rememberMe: boolean}) {
        return instance.post<LoginResponseType>(`auth/login`, {email: data.email, password: data.password, rememberMe: data.rememberMe}).then(response => {
            return response.data;
        })
    },
    logout () {
        return instance.delete<LogoutResponseType>(`auth/login`).then(response => {
            return response.data;
        })
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodesForCaptcha {
    Captcha = 10
}