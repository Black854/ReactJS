import s from './Profile.module.css';
import React, { useState, useEffect, memo } from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';
import userPhoto from '../../img/user.jpg';
import { CreateField } from '../common/FormsControls/form-helpers';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormControls';
import { reduxForm } from 'redux-form';

const ProfileInfo = (props) => {
    let [changeMode, setChangeMode] = useState(false);
    let [contactsChangeMode, setContactsChangeMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (() => {
        setStatus(props.status);
        }, [props.status]);

    const activateChangeMode = () => {
        setChangeMode(true);
    }

    const deactivateChangeMode = () => {
        setChangeMode(false);
        props.updateStatusTC(status);
    }

    const onChangeStatusText = (e) => {
        setStatus(e.currentTarget.value);
    }

    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    const onSelectPhoto = (e) => {
        props.uploadPhotoTC(e.currentTarget.files[0]);
    }

    const onSubmit = (formData) => {
        props.setProfile(formData, props.profile.userId);
        setContactsChangeMode(false);
    }

    return (
        <div>
            <img className={s.mainImage} src='https://c.wallhere.com/photos/12/e1/sky_clouds_sunset_air-26035.jpg!d' alt='' />
            <div className={s.profileBlock}>
                <div className={s.mainPhotoContainer}>
                    <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="" />
                    {props.isMyProfilePage && <><input id="uploadPhoto" type="file" className={s.buttonUploadPhoto} onChange={onSelectPhoto} />
                    <label htmlFor="uploadPhoto" className={s.buttonLabel}></label></>}
                </div>
                <div>
                    <h2 className={s.userName}>{props.profile.fullName}</h2>                    
                    {!changeMode && ( props.isMyProfilePage ? <p onDoubleClick={activateChangeMode}> Статус: {props.status || '------'}</p> : <p>{props.status || '------'}</p> )} 
                    {changeMode && <input autoFocus onBlur={deactivateChangeMode} type="text" value={status} onChange={onChangeStatusText} />}
                    {!contactsChangeMode && <>
                        <button onClick={() => setContactsChangeMode(true)}>Edit</button>
                        <b>FullName</b>: {props.profile.fullName}
                        {props.profile.lookingForAJob && <b>В поиске работы: {props.profile.lookingForAJobDescription }</b>}
                        <b>Обо мне</b>: {props.profile.aboutMe }
                        {/* <h3>Контакты</h3>
                        {props.profile.contacts.facebook ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.facebook }>Facebook</a> : <a className={s.contactsLink}>Facebook</a>}
                        {props.profile.contacts.website ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.website }>WebSite</a> : <a className={s.contactsLink}>WebSite</a>}
                        {props.profile.contacts.vk ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.vk }>VK</a> : <a className={s.contactsLink}>VK</a>}
                        {props.profile.contacts.twitter ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.twitter }>Twitter</a> : <a className={s.contactsLink}>Twitter</a>}
                        {props.profile.contacts.instagram ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.instagram }>Instagram</a> : <a className={s.contactsLink}>Instagram</a>}
                        {props.profile.contacts.youtube ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.youtube }>YouTube</a> : <a className={s.contactsLink}>YouTube</a>}
                        {props.profile.contacts.github ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.github }>GitHub</a> : <a className={s.contactsLink}>GitHub</a>}
                        {props.profile.contacts.mainLink ? <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.mainLink }>MainLink</a> : <a className={s.contactsLink}>MainLink</a>} */}
                        </>
                    }
                </div>
                
                {contactsChangeMode && <ProfileEditReduxForm onSubmit={onSubmit}  />}
            </div>
        </div>
    );
}



let ProfileEditForm = ({handleSubmit, initialValues}) => {
    console.log(initialValues);

    return (
        <form onSubmit={handleSubmit}>
            
            <b>About me</b>: {CreateField(null, "aboutMe", null, "", Input, [required])}
            <b>FullName</b>:{CreateField(null, "fullName", null, "Full name", Input, [required])}
            {CreateField(null, "lookingForAJob", {type: 'checkbox'}, "lookingForAJob", "input", [], '', 'В поиске работы')}
            <b>My professional skills</b>:{CreateField(null, "lookingForAJobDescription", null, "My professional skills", 'textarea', [required])}
            {CreateField(null, "contacts.facebook", null, "Facebook", Input, [])}
            {CreateField(null, "contacts.webSite", null, "WebSite", Input, [])}
            {CreateField(null, "contacts.vk", null, "VK", Input, [])}
            {CreateField(null, "contacts.twitter", null, "Twitter", Input, [])}
            {CreateField(null, "contacts.instagram", null, "Instagram", Input, [])}
            {CreateField(null, "contacts.youTube", null, "YouTube", Input, [])}
            {CreateField(null, "contacts.gitHub", null, "GitHub", Input, [])}
            {CreateField(null, "contacts.mainLink", null, "MainLink", Input, [])}
        </form>
    );
}

ProfileEditForm = memo(ProfileEditForm);



let ProfileEditReduxForm = reduxForm({form: 'ProfileEditForm', initialValues: {aboutMe: 'Какая то инфа для теста', fullName: 'Black', lookingForAJob: true, lookingForAJobDescription: 'ебусь с redux-form'}})(ProfileEditForm);





const Profile = (props) => {
    useEffect(() => {
        if (!props.isAuth && !props.match.params.userId) {
          props.match.navigate("/login");
        }
      }, [props.isAuth, props.match.params.userId]);

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} uploadPhotoTC={props.uploadPhotoTC} setProfile={props.setProfile} isMyProfilePage={props.isMyProfilePage} />
            <MyPostsContainer store={props.store} posts={props.posts} />
        </div>
    );
}

export default memo(Profile);