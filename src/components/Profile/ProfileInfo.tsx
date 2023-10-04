import Preloader from '../common/Preloader/Preloader';
import userPhoto from '../../img/user.jpg';
import { CreateField } from '../common/FormsControls/form-helpers';
import { required } from '../../utils/validators/validators';
import { Input, Textarea } from '../common/FormsControls/FormControls';
import { reduxForm } from 'redux-form';
import s from './Profile.module.css';
import React, { useState, useEffect, ChangeEvent } from "react";
import { ProfileType } from '../../types/types';

type PropsType = {
    status: string
    updateStatusTC: (status: string) => void
    profile: ProfileType
    uploadPhotoTC: (photo: string) => void
    setProfile: (data: any, userId: number) => void
    isMyProfilePage: boolean
}

 const ProfileInfo: React.FC<PropsType> = (props) => {
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

    const onChangeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    const onSelectPhoto = (e: any) => {
        props.uploadPhotoTC(e.currentTarget.files[0]);
    }

    const onSubmit = (formData: object) => {
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
                        <p className={s.profileItems}>Обо мне: {props.profile.aboutMe }</p>
                        <p className={s.profileItems}>В поиске работы: {props.profile.lookingForAJob ? "Да" : "Нет" }</p>
                        <p className={s.profileItems}>Мои профессиональные навыки: {props.profile.lookingForAJobDescription }</p>
                        {props.isMyProfilePage && <button onClick={() => setContactsChangeMode(true)}>Редактировать профиль</button> }  
                        <h3>Контакты</h3>
                        {props.profile.contacts.facebook && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.facebook }>Facebook</a>}
                        {props.profile.contacts.website && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.website }>WebSite</a>}
                        {props.profile.contacts.vk && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.vk }>VK</a> }
                        {props.profile.contacts.twitter && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.twitter }>Twitter</a>}
                        {props.profile.contacts.instagram && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.instagram }>Instagram</a> }
                        {props.profile.contacts.youtube && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.youtube }>YouTube</a> }
                        {props.profile.contacts.github && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.github }>GitHub</a> }
                        {props.profile.contacts.mainLink && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.mainLink }>MainLink</a>}
                        </>
                    }
                    
                    {contactsChangeMode && <ProfileEditReduxForm onSubmit={onSubmit} initialValues={props.profile}  />}
                </div>


            </div>
        </div>
    );
}

let ProfileEditForm = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit} className={s.profileForm} >
            <button>Save</button>
            <label>Полное имя</label>: {CreateField("fullName", Input, [required], {placeholder: "Full name"}, null, null)}
            <label>Обо мне</label>: {CreateField("aboutMe", Input, [required], {placeholder: "About me"}, null, null )}
            {CreateField("lookingForAJob", "input", [], {type: 'checkbox', placeholder: "Full name"}, null, "В поиске работы" )}
            <b>Мои навыки</b>: {CreateField("lookingForAJobDescription", Textarea,  [required], {placeholder: "My professional skills"}, null, null)}
            <h3>Контакты</h3>            
            {CreateField("contacts.facebook", Input, [], {placeholder: "Facebook"}, null, null)}
            {CreateField("contacts.website", Input, [], {placeholder: "WebSite"}, null, null)}
            {CreateField("contacts.vk", Input, [], {placeholder: "VK"}, null, null)}
            {CreateField("contacts.twitter", Input, [], {placeholder: "Twitter"}, null, null)}
            {CreateField("contacts.instagram", Input, [], {placeholder: "Instagram"}, null, null)}
            {CreateField("contacts.youtube", Input, [], {placeholder: "YouTube"}, null, null)}
            {CreateField("contacts.github", Input, [], {placeholder: "GitHub"}, null, null)}
            {CreateField("contacts.mainLink", Input, [], {placeholder: "MainLink"}, null, null)}
        </form>
    );
}

let ProfileEditReduxForm = reduxForm({form: 'ProfileEditForm'})(ProfileEditForm);

export default ProfileInfo;
