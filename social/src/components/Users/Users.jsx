import React from "react";
import User from "./User/User";
import s from "./Users.module.css";

const Users = (props) => {
    let userList = props.usersList.map(u => <User follow={props.follow} unfollow={props.unfollow} key={u.id} id={u.id} followed={u.followed} fullName={u.fullName} status={u.status} country={u.location.country} city={u.location.city} avatar={u.avatar} /> );

    return (
       
        <div className={s.mainDiv}>
            { userList }
        </div>
    );
}

export default Users;