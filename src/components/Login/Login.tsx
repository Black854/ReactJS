import React from "react"
import { login } from "../../redux/auth-reducer"
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from "../../redux/store"
import LoginForm from "./LoginForm"

type MapStatePropstype = {
    isAuth: boolean
    error: string | null
}

type MapDispatchPropsType = {
    login: (formData: any) => void
}

type OwnPropsType = {

}

type PropsType = MapStatePropstype & MapDispatchPropsType & OwnPropsType

const Login: React.FC<PropsType> = (props) => {
    if (props.isAuth === true) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error
    }
}

export default connect<MapStatePropstype, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {login})(Login)