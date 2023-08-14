import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
    constructor (props) {
        super(props);
        if (this.props.usersList.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(response => {
                this.props.setUsers([...response.data.items]);
            });
            this.props.setCurrentPage(2);
        }
    }

    getUsers = () => {
        let pageNumber =  this.props.pageNumber +1;
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${pageNumber}`).then(response => {
            this.props.setUsers([...response.data.items]);

        });
    }

    render () {
        let userList = this.props.usersList.map(u => <User follow={this.props.follow} unfollow={this.props.unfollow} key={u.id} id={u.id} followed={u.followed} fullName={u.name} status={u.status} avatar={u.photos.small} /> );
        
        return (
            <div className={s.mainDiv}>            
                <button className={s.getUsersButton} onClick={this.getUsers}>Еще</button>
                { userList }
            </div>
        );
    }
}

export default Users;