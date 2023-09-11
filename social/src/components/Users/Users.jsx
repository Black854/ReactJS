import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import s from "./Users.module.css";

let Users = (props) => {
    let userList = props.usersList.map(u => <User followInProgress={props.followInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id} id={u.id} followed={u.followed} fullName={u.name} status={u.status} avatar={u.photos.small} /> );
    let pages = [];
    let totalPagesCount = Math.ceil(props.totalCount / props.pageSize);
    for (let i=1; i<= totalPagesCount; i++) {
        pages.push(i);
    }
    let curP = props.pageNumber;
    let curPF = ((curP-5) < 0 ) ? 0 : curP - 5;
    let curPL = curP +5;
    let slicedPages = pages.slice (curPF, curPL);
    return (
        <div className={s.mainDiv}>
            <div className={s.pagesNavigation}>
                { slicedPages.map( p => {
                   return <span key={p} onClick={() => {props.updateCurrentPage(p) }} className={props.pageNumber === p ? s.activeNumber : ''}>{p}</span>
                }) }
            </div>
            {props.isLoading ? <Preloader /> :  userList }            
            
            
        </div>
        
    );
}

export default Users;