import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC } from "../../redux/users-reducer";


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
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;