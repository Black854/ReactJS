import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../img/user.jpg'
import s from './Profile.module.css'
import React, { useState, useEffect, ChangeEvent } from "react"
import { ContactsType, ProfileType } from '../../types/types'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import headerImage from './../../img/header.jpg'
import { Input, Textarea } from '../common/FormsControls/FormControls'
import { Button, Col, Image, Modal, Row, Space, Upload } from 'antd'
import { UploadOutlined, PlusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { getAuthDataTC } from '../../redux/auth-reducer'

type PropsType = {
    status: string
    updateStatusTC: (status: string) => void
    profile: ProfileType
    uploadPhotoTC: (photo: string) => void
    setProfile: (data: any, userId: number) => void
    isMyProfilePage: boolean
}

const ProfileInfo: React.FC<PropsType> = ({status, updateStatusTC, profile, uploadPhotoTC, setProfile, isMyProfilePage}) => {
    let [changeMode, setChangeMode] = useState(false)
    let [contactsChangeMode, setContactsChangeMode] = useState(false)
    let [localStatus, setStatus] = useState(status)

    interface MyForm {
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: ContactsType
        aboutMe: string
    }
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MyForm>({
        defaultValues: profile
    })
    const submit: SubmitHandler<MyForm> = data => {
        setProfile(data, profile.userId)
        setContactsChangeMode(false)
    }
    const error: SubmitErrorHandler<MyForm> = data => {
    //    console.log(data)
    }
    useEffect (() => {
        setStatus(status)
        }, [status]) 
    useEffect (() => {
        reset(profile);
    }, [profile, reset]) 
    const activateChangeMode = () => {
        setChangeMode(true)
    }
    const deactivateChangeMode = () => {
        setChangeMode(false)
        updateStatusTC(localStatus)
    }
    const onChangeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onSelectPhoto = (e: any) => {
        uploadPhotoTC(e.currentTarget.files[0])
    }
    
    if (!profile) {
        return (
            <Preloader />
        )
    }

    return (
        <Row>
            <img className={s.mainImage} src={headerImage} alt='' />
            <Col span={22} push={1}>
                <Row>
                    <Col span={8}>
                        <Image src={profile.photos.large ? profile.photos.large : userPhoto} />
                        {isMyProfilePage && 
                            <>
                                <input id="uploadPhoto" type="file" style={{display: 'none'}} onChange={onSelectPhoto} />
                                <label htmlFor="uploadPhoto" style={{position: 'absolute', left: '52%', top: '4%'}} >
                                    <Button type="primary" shape="circle" icon={<UploadOutlined rev={undefined} />} size={'large'}/>
                                </label>
                                {/* <Upload action="https://social-network.samuraijs.com/api/1.0/profile/photo" withCredentials={true} headers={{"API-KEY": "4f3d39e5-214f-420c-9ab3-f8c322bdb13c"}}>
                                    <Button type="primary" shape="circle" icon={<UploadOutlined rev={undefined} />} size={'large'}/>
                                </Upload> */}
                            </>
                        }
                    </Col>
                    <Col span={16}>
                        <h2 className={s.userName}>{profile.fullName}</h2>                    
                        {!changeMode && ( isMyProfilePage ? <p onDoubleClick={activateChangeMode}> Статус: {status || '------'}</p> : <p>{status || '------'}</p> )} 
                        {changeMode && <input autoFocus onBlur={deactivateChangeMode} type="text" value={localStatus} onChange={onChangeStatusText} />}
                        {!contactsChangeMode && <>
                            <p className={s.profileItems}>Обо мне: {profile.aboutMe }</p>
                            <p className={s.profileItems}>В поиске работы: {profile.lookingForAJob ? "Да" : "Нет" }</p>
                            <p className={s.profileItems}>Мои профессиональные навыки: {profile.lookingForAJobDescription }</p>
                            {isMyProfilePage && <button onClick={() => setContactsChangeMode(true)}>Редактировать профиль</button> }  
                            <h3>Контакты</h3>
                            {profile.contacts.facebook && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.facebook }>Facebook</a>}
                            {profile.contacts.website && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.website }>WebSite</a>}
                            {profile.contacts.vk && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.vk }>VK</a> }
                            {profile.contacts.twitter && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.twitter }>Twitter</a>}
                            {profile.contacts.instagram && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.instagram }>Instagram</a> }
                            {profile.contacts.youtube && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.youtube }>YouTube</a> }
                            {profile.contacts.github && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.github }>GitHub</a> }
                            {profile.contacts.mainLink && <a target='_blank' className={s.contactsLink} href={'//' + profile.contacts.mainLink }>MainLink</a>}
                            </>
                        }



                        {/* {contactsChangeMode && <>   
                            <form onSubmit={handleSubmit(submit, error)}>
                                <button>Save</button>
                                <label>Полное имя</label>:
                                <Input register={register} errors={errors.fullName} name='fullName' validate={{required: true, maxLength: 40}} placeholder='Full name' />
                                <label>Обо мне</label>:
                                <Input register={register} errors={errors.aboutMe} name='aboutMe' validate={{required: true, maxLength: 40}} placeholder='About me' />
                                <Input register={register} errors={errors.lookingForAJob} name='lookingForAJob' validate={{required: true}} type='checkbox' checkboxText='В поиске работы' />
                                <label>Мои навыки</label>:
                                <Textarea register={register} errors={errors.lookingForAJobDescription} name='lookingForAJobDescription' validate={{required: true, maxLength: 200}} />
                                <h3>Контакты</h3>
                                <Input register={register} errors={errors.contacts?.facebook} name='contacts.facebook' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Facebook' />
                                <Input register={register} errors={errors.contacts?.website} name='contacts.website' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Web-site' />
                                <Input register={register} errors={errors.contacts?.vk} name='contacts.vk' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='VK' />
                                <Input register={register} errors={errors.contacts?.twitter} name='contacts.twitter' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Twitter' />
                                <Input register={register} errors={errors.contacts?.instagram} name='contacts.instagram' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Instagram' />
                                <Input register={register} errors={errors.contacts?.youtube} name='contacts.youtube' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='YouTube' />
                                <Input register={register} errors={errors.contacts?.github} name='contacts.github' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='GitHub' />
                                <Input register={register} errors={errors.contacts?.mainLink} name='contacts.mainLink' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='MainLink' />
                            </form>
                        </> } */}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ProfileInfo
