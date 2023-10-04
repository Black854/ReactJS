import React from "react";
import { login } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from "../../redux/store";
import { LoginReduxForm } from "./LoginForm";

type MapStatePropstype = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (formData: any) => void
}

type OwnPropsType = {

}

type PropsType = MapStatePropstype & MapDispatchPropsType & OwnPropsType

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData);
    }

    if (props.isAuth === true) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStatePropstype, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {login})(Login);