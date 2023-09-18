import {createSelector} from "reselect";

const usersList = (state) => {
    return state.usersPage.usersList;
}

export const getUsersList = createSelector(usersList, (users) => {
    return users;
})

export const getPageNumber = (state) => {
    return state.usersPage.pageNumber;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading;
}

export const getFollowInProgress = (state) => {
    return state.usersPage.followInProgress;
}

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}