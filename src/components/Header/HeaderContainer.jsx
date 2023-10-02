import React from "react";
import Header from '../Header/Header'
import { connect } from "react-redux";
import { getAuthDataTC, logout } from "../../redux/auth-reducer.ts";

class HeaderContainer extends React.Component {
    componentDidMount () {
        this.props.getAuthDataTC();
    }

    render () {
        return (
           <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        userPhotoSmall: state.auth.userPhotoSmall
    }
}

export default connect (mapStateToProps, {getAuthDataTC, logout}) (HeaderContainer);