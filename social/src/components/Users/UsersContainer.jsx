import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC, isLoadingAC } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isLoading: state.usersPage.isLoading
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
        },
        setTotalCount (count) {
            dispatch(setTotalCountAC(count));
        },
        setLoading () {
            dispatch(isLoadingAC());
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent);
export default UsersContainer;