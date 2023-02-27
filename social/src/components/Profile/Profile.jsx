import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.mainImage} src='https://rare-gallery.com/uploads/posts/557604-clouds-country.jpg'
                 alt='' />
            <div>avatar + description</div>
        </div>
    );
}

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;