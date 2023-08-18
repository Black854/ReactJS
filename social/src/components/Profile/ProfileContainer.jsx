import React from "react";
import axios from 'axios';
import Profile from './Profile'
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import {useParams} from 'react-router-dom';
import { getProfile } from "../../api/api";

export function withRouter (Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match} />
    }

}

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            this.props.isAuth ? userId = this.props.id : userId = 2
        }
        getProfile (userId).then(response => {
            this.props.setUserProfile(response);
        });
    }
    
    render () {
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

export default connect (mapStateToProps, {setUserProfile}) (profileContainerWithMatchParams);