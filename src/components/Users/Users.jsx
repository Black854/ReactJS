import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import s from "./Users.module.css";

let Users = ({usersList, followInProgress, follow, unfollow, totalCount, pageSize, pageNumber, updateCurrentPage, isLoading}) => {
    let userList = usersList.map(u => <User followInProgress={followInProgress} follow={follow} unfollow={unfollow} key={u.id} id={u.id} followed={u.followed} fullName={u.name} status={u.status} avatar={u.photos.small} /> );    
    return (
        <div className={s.mainDiv}>
            <Paginator totalCount={totalCount} pageSize={pageSize} pageNumber={pageNumber} updateCurrentPage={updateCurrentPage}  />
            {isLoading ? <Preloader /> :  userList }
        </div>
    );
}

export default Users;