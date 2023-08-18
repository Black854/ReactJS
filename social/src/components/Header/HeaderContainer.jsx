import React from "react";
import axios from 'axios';
import Header from '../Header/Header'
import { connect } from "react-redux";
import { setUserAuthData, setUserPhoto } from "../../redux/auth-reducer";
import { getAuthData, getProfile } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount () {

        getAuthData().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                this.props.setUserAuthData(id, email, login);
                getProfile(response.data.id).then(response2 => {
                   this.props.setUserPhoto(response2.photos.small);
                })
            }
        });
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

export default connect (mapStateToProps, {setUserAuthData, setUserPhoto}) (HeaderContainer);