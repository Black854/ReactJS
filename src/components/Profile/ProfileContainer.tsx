import React from "react";
import Profile from './Profile'
import { connect } from "react-redux"
import { getProfileTC, getStatusTC, updateStatusTC, uploadPhotoTC, setProfile } from "../../redux/profile-reducer"
import { withRouter } from "../../hoc/withRouter"
import {compose} from 'redux'
import { AppStateType } from "../../redux/store"
import { PostType, ProfileType } from "../../types/types"

type MapStatePropsType = {
    profile: ProfileType
    posts: Array<PostType>
    id: number | null
    status: string
}

type MapDispatchPropsType = {
    getProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
    uploadPhotoTC: (photo: string) => void
    setProfile: (data: any, userId: number) => void
}

type OwnPropsType = {
    isAuth: boolean
    match: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.PureComponent <PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.id
        }
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount () {
        this.refreshProfile()
    }

    componentDidUpdate (prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this.refreshProfile()
        }
    }

    render () {
        return (
            <>
                <Profile {...this.props} isMyProfilePage={!this.props.match.params.userId} />
            </>
        );
    }
}

let mapStateToPropRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        id: state.auth.id,
        status: state.profilePage.status
    }
}

type MapStatePropsType2 = {
    profile: ProfileType | null
    posts: Array<PostType>
    id: number | null
    status: string | null
}

export default compose(
    connect<MapStatePropsType2, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC, uploadPhotoTC, setProfile}),
    withRouter,
    connect(mapStateToPropRedirect)
)(ProfileContainer)