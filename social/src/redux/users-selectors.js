import {createSelector} from "reselect";

const usersList = (state) => {
    return state.usersPage.usersList;
}

export const getUsers = createSelector(usersList, (usersList) => {
    return usersList;
})

export const pageNumber = (state) => {
    return state.usersPage.pageNumber;
}

export const pageSize = (state) => {
    return state.usersPage.pageSize;
}

export const totalCount = (state) => {
    return state.usersPage.totalCount;
}

export const isLoading = (state) => {
    return state.usersPage.isLoading;
}

export const followInProgress = (state) => {
    return state.usersPage.followInProgress;
}

export const isAuth = (state) => {
    return state.auth.isAuth;
}