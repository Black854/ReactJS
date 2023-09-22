import React from "react";
import Profile from './Profile'
import { connect } from "react-redux";
import { getProfileTC, getStatusTC, updateStatusTC, uploadPhotoTC } from "../../redux/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getProfileTC(userId);
        this.props.getStatusTC(userId);
    }

    componentDidMount () {
        this.refreshProfile();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId ) {
            this.refreshProfile();
        }
    }

    render () {
        return (
            <div>
                <Profile {...this.props} isMyProfilePage={!this.props.match.params.userId} />
            </div>
        );
    }
}

let mapStateToPropRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        id: state.auth.id,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC, uploadPhotoTC}),
    withRouter,
    connect(mapStateToPropRedirect)
)(ProfileContainer);