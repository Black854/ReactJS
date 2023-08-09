import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import React from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.mainImage} src='https://c.wallhere.com/photos/12/e1/sky_clouds_sunset_air-26035.jpg!d'
                 alt='' />
            <div>avatar + description</div>
        </div>
    );
}

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} posts={props.store.getState().profilePage.posts} />
        </div>
    );
}

export default Profile;