import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../img/user.jpg'
import s from './Profile.module.css'
import React, { useState, useEffect, ChangeEvent } from "react"
import { ContactsType, ProfileType } from '../../types/types'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import headerImage from './../../img/header.jpg'
import { Textarea } from '../common/FormsControls/FormControls'
import { Button, Col, Descriptions, DescriptionsProps, Image, Input, Modal, Row, Space, Upload } from 'antd'
import { UploadOutlined, EditOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { getAuthDataTC } from '../../redux/auth-reducer'
import { Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph'
import Link from 'antd/es/typography/Link'
const { Title, Text } = Typography;

type PropsType = {
    status: string
    updateStatusTC: (status: string) => void
    profile: ProfileType
    uploadPhotoTC: (photo: string) => void
    setProfile: (data: any, userId: number) => void
    isMyProfilePage: boolean
}

const ProfileInfo: React.FC<PropsType> = ({status, updateStatusTC, profile, uploadPhotoTC, setProfile, isMyProfilePage}) => {
    let [contactsChangeMode, setContactsChangeMode] = useState(false)

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
        reset(profile);
    }, [profile, reset])

    const onSelectPhoto = (e: any) => {
        uploadPhotoTC(e.currentTarget.files[0])
    }

    let fileInputRef: any = null;

    if (!profile) {
        return (
            <Preloader />
        )
    }

    return (
        <Row>
            {/* <img className={s.mainImage} src={headerImage} alt='' /> */}
            <Col span={22} push={1}>
                <Row>
                    <Col span={8}>
                        <Image src={profile.photos.large ? profile.photos.large : userPhoto} />
                        {isMyProfilePage && <>
                                <input id="uploadPhoto" type="file" style={{display: 'none'}} onChange={onSelectPhoto} ref={(input) => (fileInputRef = input)} />
                                <Button style={{position: 'absolute', left: '52%', top: '4%'}} type="primary" shape="circle" icon={<UploadOutlined rev={undefined} />} size={'large'} onClick={() => fileInputRef.click()} />
                        </> }
                    </Col>
                    <Col span={16}>
                        <Title level={2}>{profile.fullName}</Title>
                        <Paragraph editable={{ onChange: (text) => {updateStatusTC(text)}}}  >
                            {status}
                        </Paragraph>
                        {!contactsChangeMode && <>
                            <Space direction="vertical">
                                <Text type="secondary">Обо мне: {profile.aboutMe}</Text>
                                <Text type="secondary">В поиске работы: {profile.lookingForAJob ? "Да" : "Нет" }</Text>
                                <Text type="secondary" >Мои профессиональные навыки: {profile.lookingForAJobDescription }</Text>
                            </Space>
                            {isMyProfilePage && <Button type="primary" icon={<EditOutlined rev={undefined} />} onClick={() => setContactsChangeMode(true)}>Редактировать профиль</Button> }  
                            <Title level={4}>Контакты</Title>
                            <Space direction="vertical">
                                {profile.contacts.facebook && <Link target='_blank' href={'//' + profile.contacts.facebook }>Facebook</Link>}
                                {profile.contacts.website && <Link target='_blank' href={'//' + profile.contacts.website }>WebSite</Link>}
                                {profile.contacts.vk && <Link target='_blank' href={'//' + profile.contacts.vk }>VK</Link> }
                                {profile.contacts.twitter && <Link target='_blank' href={'//' + profile.contacts.twitter }>Twitter</Link>}
                                {profile.contacts.instagram && <Link target='_blank' href={'//' + profile.contacts.instagram }>Instagram</Link> }
                                {profile.contacts.youtube && <Link target='_blank' href={'//' + profile.contacts.youtube }>YouTube</Link> }
                                {profile.contacts.github && <Link target='_blank' href={'//' + profile.contacts.github }>GitHub</Link> }
                                {profile.contacts.mainLink && <Link target='_blank' href={'//' + profile.contacts.mainLink }>MainLink</Link>}
                            </Space>
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
