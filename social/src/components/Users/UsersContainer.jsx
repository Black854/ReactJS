import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow, setCurrentPage, setFollowProgress, getUsersTC } from "../../redux/users-reducer";
import { compose } from "redux";
import { followInProgress, getUsers, isAuth, isLoading, pageNumber, pageSize, totalCount } from "../../redux/users-selectors";


let mapStateToProps = (state) => {
    return {
        usersList: getUsers(state),
        pageNumber: pageNumber(state),
        pageSize: pageSize(state),
        totalCount: totalCount(state),
        isLoading: isLoading(state),
        followInProgress: followInProgress(state),
        isAuth: isAuth(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setFollowProgress, getUsersTC})
)(UsersAPIComponent);