import React from "react";
import Users from "./Users";
import { followUser, unfollowUser } from "../../api/api";

const API_KEY = "4f3d39e5-214f-420c-9ab3-f8c322bdb13c";

class UsersAPIComponent extends React.Component {
    componentDidMount () {
        if (this.props.usersList.length === 0) {
            this.props.getUsersTC(this.props.pageSize, this.props.pageNumber);
        }
    }

    updateCurrentPage = (p) => {
        this.props.getUsersTC(this.props.pageSize, p);
    }

    // follow = (id) => {
    //     this.props.setFollowProgress(true, id);
    //     followUser(id).then(response => {
    //         if (response.resultCode === 0) {
    //             this.props.followSuccess(id);
    //             this.props.setFollowProgress(false, id);
    //         }
    //     });
    // }

    // unfollow = (id) => {
    //     this.props.setFollowProgress(true, id);
    //     unfollowUser(id).then(response => {
    //         if (response.resultCode === 0) {
    //             this.props.unfollow(id);
    //             this.props.setFollowProgress(false, id);
    //         }
    //     });
    // }

    render () {
        return <Users updateCurrentPage={this.updateCurrentPage}
            usersList={this.props.usersList}
            pageNumber={this.props.pageNumber}
            pageSize={this.props.pageSize}
            isLoading={this.props.isLoading}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followInProgress={this.props.followInProgress}
        />
    }
}

export default UsersAPIComponent;