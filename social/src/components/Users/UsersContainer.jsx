import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setLoading, setFollowProgress } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isLoading: state.usersPage.isLoading,
        followInProgress: state.usersPage.followInProgress
    }
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setLoading, setFollowProgress}) (UsersAPIComponent);
export default UsersContainer;