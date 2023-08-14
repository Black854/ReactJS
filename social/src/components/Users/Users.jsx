import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
    componentDidMount () {
        if (this.props.usersList.length === 0) {
            let pageSize =  this.props.pageSize;
            let pageNumber =  this.props.pageNumber;
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pageNumber}`).then(response => {
                this.props.setUsers([...response.data.items]);
            });
        }
    }

    updateCurrentPage = (p) => {
        let pageSize =  this.props.pageSize;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${p}`).then(response => {
            this.props.setUsers([...response.data.items]);
        });
    }

    // getUsers = () => {
    //     let pageNumber =  this.props.pageNumber +1;
    //     this.props.setCurrentPage(pageNumber);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${pageNumber}`).then(response => {
    //         this.props.setUsers([...response.data.items]);

    //     });
    // }

    render () {
        let userList = this.props.usersList.map(u => <User follow={this.props.follow} unfollow={this.props.unfollow} key={u.id} id={u.id} followed={u.followed} fullName={u.name} status={u.status} avatar={u.photos.small} /> );
        let pages = [];
        let totalPagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        for (let i=1; i<= totalPagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className={s.mainDiv}>
                <div className={s.pagesNavigation}>
                    { pages.map( p => {
                       return <span onClick={() => {this.updateCurrentPage(p); 
                        this.props.updateCurrentPage(p);}} 
                            className={this.props.pageNumber === p && s.activeNumber}>{p}</span>
                    }) }
                </div>
                {/* <button className={s.getUsersButton} onClick={this.getUsers}>Еще</button> */}
                { userList }
            </div>
        );
    }
}

export default Users;