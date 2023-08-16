import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setLoading } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isLoading: state.usersPage.isLoading
    }
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setLoading}) (UsersAPIComponent);
export default UsersContainer;