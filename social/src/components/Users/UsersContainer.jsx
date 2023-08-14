import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageNumber: state.usersPage.pageNumber
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
        },
        setCurrentPage (page) {
            dispatch(setCurrentPageAC(page));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;