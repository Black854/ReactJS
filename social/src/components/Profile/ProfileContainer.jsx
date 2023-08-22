import React from "react";
import Profile from './Profile'
import { connect } from "react-redux";
import { getProfileTC } from "../../redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';

export function withRouter (Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match} />
    }

}

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        this.props.getProfileTC(userId);
    }
    
    render () {
        if (!this.props.isAuth) {return <Navigate to='/login' />}
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}

let profileContainerWithMatchParams = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getProfileTC}) (profileContainerWithMatchParams);