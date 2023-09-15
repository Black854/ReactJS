import React from "react";
import Profile from './Profile'
import { connect } from "react-redux";
import { getProfileTC, getStatusTC, updateStatusTC, cleanProfileTC } from "../../redux/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        this.props.getProfileTC(userId);
        this.props.getStatusTC(userId);
    }

    componentWillUnmount () {
        this.props.cleanProfileTC();
    }
    
    render () {
        return (
            <div>
                <Profile {...this.props} />
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
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC, cleanProfileTC}),
    withRouter,
    connect(mapStateToPropRedirect)
)(ProfileContainer);