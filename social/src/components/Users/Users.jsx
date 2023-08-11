import React from "react";
import User from "./User/User";
import s from "./Users.module.css";

import ars from "../../img/ars.jpg";
import sizh from "../../img/sizh.jpg";
import sistr from "../../img/sistr.jpg";

const Users = (props) => {
    if (props.usersList == 0) {
        props.setUsers ([
            {id: 1, fullName: 'Сижик', status: 'I am boss', location: {city: 'krg', country: 'kz'}, followed: false, avatar: sizh},
            {id: 2, fullName: 'Арсик', status: 'I am boss too', location: {city: 'krg', country: 'kz'}, followed: true, avatar: ars},
            {id: 3, fullName: 'Систр', status: 'I am boss too', location: {city: 'krg', country: 'kz'}, followed: false, avatar: sistr}]
        );
    }
    let userList = props.usersList.map(u => <User follow={props.follow} unfollow={props.unfollow} key={u.id} id={u.id} followed={u.followed} fullName={u.fullName} status={u.status} country={u.location.country} city={u.location.city} avatar={u.avatar} /> );

    return (
       
        <div className={s.mainDiv}>
            { userList }
        </div>
    );
}

export default Users;