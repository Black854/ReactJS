import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow (id) {
            dispatch(followAC(id));
        },
        unfollow (id) {
            dispatch(unfollowAC(id));
        },
        setUsers (users) {
            dispatch(setUsersAC(users));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;