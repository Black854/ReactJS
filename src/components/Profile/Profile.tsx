import React, { useEffect, memo} from "react"
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { PostType, ProfileType } from '../../types/types'
import ProfileInfo from "./ProfileInfo"

type MapStatePropsType = {
    isAuth: boolean
    match: any
    profile: ProfileType
    status: string
    posts: Array<PostType>
    id: number | null
}

type MapDispatchPropsType = {
    getProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (ststus: string) => void
    uploadPhotoTC: (photo: string) => void
    setProfile: (data: any, userId: number) => void
}

type OwnPropsType = {
    isMyProfilePage: boolean
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Profile: React.FC<PropsType> = (props) => {
    useEffect(() => {
        if (!props.isAuth && !props.match.params.userId) {
            props.match.navigate("/login")
        }
    }, [props.isAuth, props.match.params.userId])
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} uploadPhotoTC={props.uploadPhotoTC} setProfile={props.setProfile} isMyProfilePage={props.isMyProfilePage} />
            <MyPostsContainer />
        </div>
    );
}

export default memo(Profile)