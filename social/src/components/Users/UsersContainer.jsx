import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow, setCurrentPage, setFollowProgress, getUsersTC } from "../../redux/users-reducer";
import { compose } from "redux";
import { getFollowInProgress, getUsersList, getIsAuth, getIsLoading, getPageNumber, getPageSize, getTotalCount } from "../../redux/users-selectors";


let mapStateToProps = (state) => {
    return {
        usersList: getUsersList(state),
        pageNumber: getPageNumber(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        isLoading: getIsLoading(state),
        followInProgress: getFollowInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setFollowProgress, getUsersTC})
)(UsersAPIComponent);