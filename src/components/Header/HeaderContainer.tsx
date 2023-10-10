import React from "react"
import Header from './Header'
import { connect } from "react-redux"
import { getAuthDataTC, logout } from "../../redux/auth-reducer"
import { AppStateType } from "../../redux/store"

type MapStatePropsType = {
    email: string | null
    login: string | null
    isAuth: boolean
    userPhotoSmall: string | null
}

type MapDispatchPropstype = {
    getAuthDataTC: () => void
    logout: () => void
}

type OwnPropsType = {
    
}

type PropsType = MapStatePropsType & MapDispatchPropstype & OwnPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount () {
        this.props.getAuthDataTC();
    }

    render () {
        return (
           <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        userPhotoSmall: state.auth.userPhotoSmall
    }
}

export default connect<MapStatePropsType, MapDispatchPropstype, OwnPropsType, AppStateType> (mapStateToProps, {getAuthDataTC, logout}) (HeaderContainer)