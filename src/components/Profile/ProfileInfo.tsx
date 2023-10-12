import Preloader from '../common/Preloader/Preloader'
import userPhoto from '../../img/user.jpg'
import React, { useState, useEffect, ChangeEvent } from "react"
import { ContactsType, ProfileType } from '../../types/types'
import { SubmitErrorHandler, SubmitHandler, useForm, Controller } from 'react-hook-form'
import { CustomController } from '../common/FormsControls/FormControls'
import { Button, Col, Image, Row, Space, Typography, Form } from 'antd'
import { UploadOutlined, EditOutlined } from '@ant-design/icons'
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
                                <Form.Item><Button type="primary" htmlType="submit">Отправить</Button></Form.Item>
                                <CustomController control={control} name='fullName' type='text' label='Полное имя' required={true} maxLength={20} />
                                <CustomController control={control} name='aboutMe' type='text' label='Обо мне' required={true} maxLength={40} />
                                <CustomController control={control} name='lookingForAJob' type='checkbox' label='В поиске работы' />
                                <CustomController control={control} name='lookingForAJobDescription' type='textarea' label='Мои навыки' required={true} maxLength={100} />
                                <Title level={4}>Контакты</Title>
                                <CustomController control={control} name='contacts.facebook' type='text' label='Facebook' pattern='URL' maxLength={50} />
                                <CustomController control={control} name='contacts.website' type='text' label='Web-site' pattern='URL' maxLength={50} />
                                <CustomController control={control} name='contacts.vk' type='text' label='VK' pattern='URL' maxLength={50} />
                                <CustomController control={control} name='contacts.twitter' type='text' label='Twitter' pattern='URL' maxLength={50} />
                                <CustomController control={control} name='contacts.instagram' type='text' label='Instagram' pattern='URL' maxLength={50} />
                                <CustomController control={control} name='contacts.youtube' type='text' label='YouTube' pattern='URL' maxLength={50} />
                                <CustomController control={control} name='contacts.github' type='text' label='GitHub' pattern='URL' maxLength={50} />
                                <CustomController control={control} name='contacts.mainLink' type='text' label='MainLink' pattern='URL' maxLength={50} />
                            </Form>
                        </> }
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ProfileInfo
