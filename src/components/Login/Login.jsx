import React from "react";
import {Field, reduxForm} from 'redux-form';
import { login } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom';
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormControls";
import s from "./Login.module.css";
import { CreateField } from "../common/FormsControls/form-helpers";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            {CreateField(s.inputText, "email", "email", "Email", Input, [required])}
            {CreateField(s.inputText, "password", "password", "Password", Input, [required])}
            {CreateField(null, "rememberMe", "checkbox", null, "input", [], s.rememberMe, "Remember me")}
            <div>
                <p className={s.error} >
                    {props.error}
                </p>
            </div>
            <button className={s.submit}>Login</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
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

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login);