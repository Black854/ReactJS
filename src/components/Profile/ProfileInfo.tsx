import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../img/user.jpg'
import s from './Profile.module.css'
import React, { useState, useEffect, ChangeEvent } from "react"
import { ContactsType, ProfileType } from '../../types/types'
import { SubmitErrorHandler, SubmitHandler, useForm, Controller } from 'react-hook-form'
import headerImage from './../../img/header.jpg'
import { CustomInput, Textarea } from '../common/FormsControls/FormControls'
import { Button, Col, Descriptions, DescriptionsProps, Image, Input, Modal, Row, Space, Upload, Typography, Form, Checkbox } from 'antd'
import { UploadOutlined, EditOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { getAuthDataTC } from '../../redux/auth-reducer'
import Paragraph from 'antd/es/typography/Paragraph'
import Link from 'antd/es/typography/Link'
import TextArea from 'antd/es/input/TextArea'
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

    const { handleSubmit, reset, control, formState: { errors } } = useForm<MyForm>({
        defaultValues: profile
        })

    const submit: SubmitHandler<MyForm> = data => {
        setProfile(data, profile.userId)
        setContactsChangeMode(false)
    }

    const error: SubmitErrorHandler<MyForm> = data => {
        console.log(data)
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
                                <Button style={{position: 'absolute', left: '55%', top: '4%'}} type="primary" shape="circle" icon={<UploadOutlined rev={undefined} />} size={'middle'} onClick={() => fileInputRef.click()} />
                        </> }
                    </Col>
                    <Col span={16}>
                        <Title level={2}>{profile.fullName}</Title>
                        { isMyProfilePage ?  <Paragraph editable={{ onChange: (text) => {updateStatusTC(text)}}} >{status || '-----'}</Paragraph> : <Paragraph>{status || '-----'}</Paragraph> }
                        
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


                        {contactsChangeMode && <>
                            {console.log(errors)}
                            <Form onFinish={handleSubmit(submit, error)}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Отправить
                                    </Button>
                                </Form.Item>

                                <Controller
                                    name="fullName"
                                    control={control}
                                    rules={{ 
                                        required: 'Поле обязательно для заполнения',
                                        maxLength: {
                                            value: 20,
                                            message: 'Поле не может содержать более 20 символом',
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                    <Form.Item
                                        label="Полное имя"
                                        validateStatus={fieldState.invalid ? 'error' : ''}
                                        help={fieldState.invalid ? fieldState.error?.message : null}
                                    >
                                        <Input {...field} />
                                    </Form.Item>
                                    )}
                                />

                                <Controller
                                    name="aboutMe"
                                    control={control}
                                    rules={{ 
                                        required: 'Поле обязательно для заполнения',
                                        maxLength: {
                                            value: 40,
                                            message: 'Поле не может содержать более 40 символом',
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                    <Form.Item
                                        label="Обо мне"
                                        validateStatus={fieldState.invalid ? 'error' : ''}
                                        help={fieldState.invalid ? fieldState.error?.message : null}
                                    >
                                        <Input {...field} />
                                    </Form.Item>
                                    )}
                                />

                                <Controller
                                    name="lookingForAJob"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Form.Item label="Is Checked">
                                            <Checkbox checked={field.value} {...field} />
                                        </Form.Item>
                                    )}
                                />

                                <Controller
                                    name="lookingForAJobDescription"
                                    control={control}
                                    rules={{ 
                                        required: 'Поле обязательно для заполнения',
                                        maxLength: {
                                            value: 100,
                                            message: 'Поле не может содержать более 100 символом',
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                    <Form.Item
                                        label="Мои навыки"
                                        validateStatus={fieldState.invalid ? 'error' : ''}
                                        help={fieldState.invalid ? fieldState.error?.message : null}
                                    >
                                        <TextArea rows={4} {...field} />
                                    </Form.Item>
                                    )}
                                />
                                <Title level={4}>Контакты</Title>

                                <Controller
                                    name="contacts.facebook"
                                    control={control}
                                    rules={{ 
                                        maxLength: {
                                            value: 100,
                                            message: 'Поле не может содержать более 100 символом',
                                        },
                                        pattern: {
                                            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                                            message: 'Введенное значение не соответствует URL-адресу',
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                    <Form.Item
                                        label="Facebook"
                                        validateStatus={fieldState.invalid ? 'error' : ''}
                                        help={fieldState.invalid ? fieldState.error?.message : null}
                                    >
                                        <Input {...field} />
                                    </Form.Item>
                                    )}
                                />

                                {/* <Form.Item label="Facebook">
                                    <Controller
                                    name="contacts.facebook"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item>
                                <Form.Item label="Web-site">
                                    <Controller
                                    name="contacts.website"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item>
                                <Form.Item label="VK">
                                    <Controller
                                    name="contacts.vk"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item>
                                <Form.Item label="Twitter">
                                    <Controller
                                    name="contacts.twitter"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item>
                                <Form.Item label="Instagram">
                                    <Controller
                                    name="contacts.instagram"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item>
                                <Form.Item label="YouTube">
                                    <Controller
                                    name="contacts.youtube"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item>
                                <Form.Item label="GitHub">
                                    <Controller
                                    name="contacts.github"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item>
                                <Form.Item label="MainLink">
                                    <Controller
                                    name="contacts.mainLink"  // Имя поля в форме
                                    control={control}
                                    defaultValue="" // Значение по умолчанию
                                    render={({ field }) => (
                                        <Input {...field} />
                                    )}
                                    />
                                </Form.Item> */}
                                

                                {/* <CustomInput register={register} errors={errors.contacts?.facebook} name='contacts.facebook' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Facebook' />
                                <CustomInput register={register} errors={errors.contacts?.website} name='contacts.website' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Web-site' />
                                <CustomInput register={register} errors={errors.contacts?.vk} name='contacts.vk' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='VK' />
                                <CustomInput register={register} errors={errors.contacts?.twitter} name='contacts.twitter' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Twitter' />
                                <CustomInput register={register} errors={errors.contacts?.instagram} name='contacts.instagram' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='Instagram' />
                                <CustomInput register={register} errors={errors.contacts?.youtube} name='contacts.youtube' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='YouTube' />
                                <CustomInput register={register} errors={errors.contacts?.github} name='contacts.github' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='GitHub' />
                                <CustomInput register={register} errors={errors.contacts?.mainLink} name='contacts.mainLink' validate={{maxLength: 40, pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g }} placeholder='MainLink' /> */}
                            </Form>
                        </> }
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ProfileInfo
