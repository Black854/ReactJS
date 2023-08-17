import s from './Profile.module.css';
import React from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <img className={s.mainImage} src='https://c.wallhere.com/photos/12/e1/sky_clouds_sunset_air-26035.jpg!d' alt='' />
            <div className={s.profileBlock}>
                <img className={s.avatar} src={props.profile.photos.large} alt="" />
                <div>
                    <h2 className={s.userName}>{props.profile.fullName}</h2>
                    <p>Обо мне: {props.profile.aboutMe }</p>
                    {props.profile.lookingForAJob && <p>В поиске работы: {props.profile.lookingForAJobDescription }</p>}
                    <h3>Контакты</h3>
                    {props.profile.contacts.facebook && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.facebook }>Facebook</a>}
                    {props.profile.contacts.website && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.website }>WebSite</a>}
                    {props.profile.contacts.vk && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.vk }>VK</a>}
                    {props.profile.contacts.twitter && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.twitter }>Twitter</a>}
                    {props.profile.contacts.instagram && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.instagram }>Instagram</a>}
                    {props.profile.contacts.youtube && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.youtube }>YouTube</a>}
                    {props.profile.contacts.github && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.github }>GitHub</a>}
                    {props.profile.contacts.mainLink && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.mainLink }>MainLink</a>}
                    
                </div>
            </div>
        </div>
    );
}

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store} posts={props.posts} />
        </div>
    );
}

export default Profile;