import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow, setCurrentPage, setFollowProgress, getUsersTC } from "../../redux/users-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isLoading: state.usersPage.isLoading,
        followInProgress: state.usersPage.followInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setFollowProgress, getUsersTC}),
    withAuthRedirect
)(UsersAPIComponent);