import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../img/user.jpg'
import s from './Profile.module.css'
import React, { useState, useEffect, ChangeEvent } from "react"
import { ContactsType, ProfileType } from '../../types/types'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import s2 from './../common/FormsControls/FormControls.module.css'
import headerImage from './../../img/header.jpg'
import { Input2 } from '../common/FormsControls/FormControls'

type PropsType = {
    status: string
    updateStatusTC: (status: string) => void
    profile: ProfileType
    uploadPhotoTC: (photo: string) => void
    setProfile: (data: any, userId: number) => void
    isMyProfilePage: boolean
}

const ProfileInfo: React.FC<PropsType> = (props) => {
    let [changeMode, setChangeMode] = useState(false)
    let [contactsChangeMode, setContactsChangeMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    interface MyForm {
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: ContactsType
        aboutMe: string
    }
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MyForm>({
        defaultValues: props.profile
    })

    const submit: SubmitHandler<MyForm> = data => {
        props.setProfile(data, props.profile.userId)
        setContactsChangeMode(false)
    }

    const error: SubmitErrorHandler<MyForm> = data => {
    //    console.log(data)
    }

    useEffect (() => {
        setStatus(props.status)
        }, [props.status]) 

    useEffect (() => {
        reset(props.profile);
    }, [props.profile, reset]) 

    const activateChangeMode = () => {
        setChangeMode(true)
    }
    const deactivateChangeMode = () => {
        setChangeMode(false)
        props.updateStatusTC(status)
    }
    const onChangeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    
    const onSelectPhoto = (e: any) => {
        props.uploadPhotoTC(e.currentTarget.files[0])
    }

    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <img className={s.mainImage} src={headerImage} alt='' />
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

                    {contactsChangeMode && props.profile && <>   
                        <form onSubmit={handleSubmit(submit, error)}>
                            <button>Save</button>
                            <label>Полное имя</label>:
                            <div className={s2.formControl + " " + (errors.fullName && s2.error)}>
                                <input {...register('fullName', {value: props.profile.fullName, required: true, maxLength: 40 })} placeholder="Full name" />
                                {errors.fullName && errors.fullName.type === 'required' && <span>Поле обязательно для заполнения</span>}
                                {errors.fullName && errors.fullName.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <label>Обо мне</label>:
                            <div className={s2.formControl + " " + (errors.aboutMe && s2.error)}>
                                <input {...register('aboutMe', {required: true, maxLength: 40 })} placeholder="aboutMe" />
                                {errors.aboutMe && errors.aboutMe.type === 'required' && <span>Поле обязательно для заполнения</span>}
                                {errors.aboutMe && errors.aboutMe.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <div className={s2.formControl}>
                                <input type='checkbox' {...register('lookingForAJob', {required: true })} />
                                В поиске работы
                            </div>

                            <label>Мои навыки</label>:
                            <div className={s2.formControl + " " + (errors.lookingForAJobDescription && s2.error)}>
                                <textarea {...register('lookingForAJobDescription', {required: true, maxLength: 40 })} placeholder="My professional skills" />
                                {errors.lookingForAJobDescription && errors.lookingForAJobDescription.type === 'required' && <span>Поле обязательно для заполнения</span>}
                                {errors.lookingForAJobDescription && errors.lookingForAJobDescription.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <h3>Контакты</h3>

                            {/* <div className={s2.formControl + " " + (errors.contacts?.facebook && s2.error)}>
                                <input {...register('contacts.facebook', {maxLength: 40 })} placeholder="Facebook" />
                                {errors.contacts?.facebook && errors.contacts.facebook.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div> */}

                            <Input2 register={register} errors={errors} name='contacts.facebook' maxLength='40' required='false' />

                            <div className={s2.formControl + " " + (errors.contacts?.website && s2.error)}>
                                <input {...register('contacts.website', {maxLength: 40 })} placeholder="Web Site" />
                                {errors.contacts?.website && errors.contacts.website.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <div className={s2.formControl + " " + (errors.contacts?.vk && s2.error)}>
                                <input {...register('contacts.vk', {maxLength: 40 })} placeholder="VK" />
                                {errors.contacts?.vk && errors.contacts.vk.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <div className={s2.formControl + " " + (errors.contacts?.twitter && s2.error)}>
                                <input {...register('contacts.twitter', {maxLength: 40 })} placeholder="Twitter" />
                                {errors.contacts?.twitter && errors.contacts.twitter.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <div className={s2.formControl + " " + (errors.contacts?.instagram && s2.error)}>
                                <input {...register('contacts.instagram', {maxLength: 40 })} placeholder="Instagram" />
                                {errors.contacts?.instagram && errors.contacts.instagram.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <div className={s2.formControl + " " + (errors.contacts?.youtube && s2.error)}>
                                <input {...register('contacts.youtube', {maxLength: 40 })} placeholder="YouTube" />
                                {errors.contacts?.youtube && errors.contacts.youtube.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <div className={s2.formControl + " " + (errors.contacts?.github && s2.error)}>
                                <input {...register('contacts.github', {maxLength: 40 })} placeholder="GitHub" />
                                {errors.contacts?.github && errors.contacts.github.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>

                            <div className={s2.formControl + " " + (errors.contacts?.mainLink && s2.error)}>
                                <input {...register('contacts.mainLink', {maxLength: 40 })} placeholder="MainLink" />
                                {errors.contacts?.mainLink && errors.contacts.mainLink.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
                            </div>
                        </form>
                    </> }
                </div>


            </div>
        </div>
    );
}

export default ProfileInfo;
