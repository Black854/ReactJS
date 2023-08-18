import React from "react";
import axios from "axios";
import Users from "./Users";
import { followUser, getUsers, unfollowUser } from "../../api/api";

const API_KEY = "4f3d39e5-214f-420c-9ab3-f8c322bdb13c";

class UsersAPIComponent extends React.Component {
    componentDidMount () {
        if (this.props.usersList.length === 0) {
            this.props.setLoading();

            getUsers(this.props.pageSize, this.props.pageNumber).then(response => {
                this.props.setUsers([...response.items]);
                this.props.setTotalCount(response.totalCount);
                this.props.setLoading();
            });
        }
    }

    updateCurrentPage = (p) => {
        this.props.setCurrentPage(p);
        this.props.setLoading();
        getUsers(this.props.pageSize, p).then(response => {
            this.props.setUsers([...response.items]);
            this.props.setLoading();
        });
    }

    follow = (id) => {
        this.props.setFollowProgress(true, id);
        followUser(id).then(response => {
                if (response.resultCode === 0) {
                    this.props.follow(id);
                    this.props.setFollowProgress(false, id);
                }
            });
    }

    unfollow = (id) => {
        this.props.setFollowProgress(true, id);
        unfollowUser(id).then(response => {
                if (response.resultCode === 0) {
                    this.props.unfollow(id);
                    this.props.setFollowProgress(false, id);
                }
            });
    }

    render () {
        return <Users updateCurrentPage={this.updateCurrentPage}
            usersList={this.props.usersList}
            pageNumber={this.props.pageNumber}
            pageSize={this.props.pageSize}
            isLoading={this.props.isLoading}
            totalCount={this.props.totalCount}
            follow={this.follow}
            unfollow={this.unfollow}
            followInProgress={this.props.followInProgress}
        />
    }
}

export default UsersAPIComponent;