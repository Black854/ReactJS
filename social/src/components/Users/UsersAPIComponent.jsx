import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount () {
        if (this.props.usersList.length === 0) {
            this.props.setLoading();
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${ this.props.pageNumber}`, {withCredentials: true}).then(response => {
                this.props.setUsers([...response.data.items]);
                this.props.setTotalCount(response.data.totalCount);
                this.props.setLoading();
            });
        }
    }

    updateCurrentPage = (p) => {
        this.props.setCurrentPage(p);
        this.props.setLoading();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`, {withCredentials: true}).then(response => {
            this.props.setUsers([...response.data.items]);
            this.props.setLoading();
        });
    }

    render () {
        return <Users updateCurrentPage={this.updateCurrentPage}
            usersList={this.props.usersList}
            pageNumber={this.props.pageNumber}
            pageSize={this.props.pageSize}
            isLoading={this.props.isLoading}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

export default UsersAPIComponent;