import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import axios from "axios";

let Users = (props) => {
    let getUsers = () => {
        if (props.usersList.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?page=223').then(response => {
                props.setUsers([...response.data.items]);
            });
        }
    }
    let userList = props.usersList.map(u => <User follow={props.follow} unfollow={props.unfollow} key={u.id} id={u.id} followed={u.followed} fullName={u.name} status={u.status} avatar={u.photos.small} /> );

    return (
        <div className={s.mainDiv}>            
            <button onClick={getUsers}>getUsers</button>
            { userList }
        </div>
    );
}

export default Users;