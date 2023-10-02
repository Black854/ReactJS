import React from "react";
import {Field, reduxForm} from 'redux-form';
import { login } from "../../redux/auth-reducer.ts";
import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom';
import { maxLength, required } from "../../utils/validators/validators";
import { Input, Textarea } from "../common/FormsControls/FormControls";
import s from "./Login.module.css";
import { CreateField } from "../common/FormsControls/form-helpers";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            { CreateField("email", Input, [required], {className: s.inputText, type: "email", placeholder: "Email"} ) }
            { CreateField("password", Input, [required], {className: s.inputText, type: "password", placeholder: "Password"} ) }
            { CreateField("rememberMe","input", [], {type: "checkbox"}, s.rememberMe, "Remember me") }
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