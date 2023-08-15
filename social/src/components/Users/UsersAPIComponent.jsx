import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount () {
        if (this.props.usersList.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${ this.props.pageNumber}`).then(response => {
                this.props.setUsers([...response.data.items]);
                this.props.setTotalCount(response.data.totalCount);
            });
        }
    }

    updateCurrentPage = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(response => {
            this.props.setUsers([...response.data.items]);
        });
    }

    render () {
        return <Users updateCurrentPage={this.updateCurrentPage}
            usersList={this.props.usersList}
            pageNumber={this.props.pageNumber}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

export default UsersAPIComponent;