import React from "react";
import axios from 'axios';
import Header from '../Header/Header'
import { connect } from "react-redux";
import { setUserAuthData, setUserPhoto } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserAuthData(id, email, login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`).then(response2 => {
                   this.props.setUserPhoto(response2.data.photos.small);
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