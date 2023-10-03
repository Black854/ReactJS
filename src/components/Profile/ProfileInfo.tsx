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

    const onSubmit = (formData: any) => {
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
            <label>Полное имя</label>: {CreateField("fullName", Input, [required] as any, {placeholder: "Full name"} as any)}
            <label>Обо мне</label>: {CreateField("aboutMe", Input, [required] as any, {placeholder: "About me"} as any )}
            {CreateField("lookingForAJob", "input", [] as any, {type: 'checkbox', placeholder: "Full name"} as any, null, "В поиске работы" as any )}
            <b>Мои навыки</b>: {CreateField("lookingForAJobDescription", Textarea,  [required] as any, {placeholder: "My professional skills"} as any)}
            <h3>Контакты</h3>            
            {CreateField("contacts.facebook", Input, [] as any, {placeholder: "Facebook"} as any)}
            {CreateField("contacts.website", Input, [] as any, {placeholder: "WebSite"} as any)}
            {CreateField("contacts.vk", Input, [] as any, {placeholder: "VK"} as any)}
            {CreateField("contacts.twitter", Input, [] as any, {placeholder: "Twitter"} as any)}
            {CreateField("contacts.instagram", Input, [] as any, {placeholder: "Instagram"} as any)}
            {CreateField("contacts.youtube", Input, [] as any, {placeholder: "YouTube"} as any as any)}
            {CreateField("contacts.github", Input, [] as any, {placeholder: "GitHub"} as any)}
            {CreateField("contacts.mainLink", Input, [] as any, {placeholder: "MainLink"} as any)}
        </form>
    );
}

let ProfileEditReduxForm = reduxForm({form: 'ProfileEditForm'})(ProfileEditForm);

export default ProfileInfo;
