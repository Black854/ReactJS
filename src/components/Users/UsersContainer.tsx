import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, setFollowProgress, getUsersTC } from "../../redux/users-reducer";
import { compose } from "redux";
import { getFollowInProgress, getUsersList, getIsAuth, getIsLoading, getPageNumber, getPageSize, getTotalCount } from "../../redux/users-selectors";
import { AppStateType } from "../../redux/store";

import React from "react";
import Users from "./Users";
import { UserType } from "../../types/types";

type MapStatePropsType = {
    usersList: Array<UserType>
    pageSize: number
    pageNumber: number
    isLoading: boolean
    totalCount: number
}

type MapDispatchPropsType = {
    getUsersTC: (pageSize: number, pageNumber: number) => void
    follow: () => void
    unfollow: () => void
    followInProgress: () => void
}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount () {
        if (this.props.usersList.length === 0) {
            this.props.getUsersTC(this.props.pageSize, this.props.pageNumber);
        }
    }

    updateCurrentPage = (pageNumber: number) => {
        this.props.getUsersTC(this.props.pageSize, pageNumber);
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
            followInProgress={this.props.followInProgress}
        />
    }
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
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