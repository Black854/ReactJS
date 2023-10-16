import React from 'react'
import s from './User.module.css'
import userPhoto from '../../../img/user.jpg'
import {Link} from 'react-router-dom'
import { Button, Card, Col, Image, Row, Space, Typography } from 'antd'

const {Text} = Typography

type PropsType = {
    id: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    followed: boolean
    followInProgress: Array<number>
    avatar: string | null
    fullName: string
    status: string
}

const User: React.FC<PropsType> = ({id, follow, unfollow, followed, followInProgress, avatar, fullName, status}) => {
    let button
    let followCallback = () => {
        follow(id)
    }

    let unfollowCallback = () => {
        unfollow(id)
    }
    followed  ? button = <Button style={{textAlign: "center"}} disabled={followInProgress.some(userId => userId === id)} onClick={unfollowCallback}>Уже подписаны</Button> 
                    : button = <Button type='primary' disabled={followInProgress.some(userId => userId === id)} onClick={followCallback}>Подписаться</Button>
    return (
        <Card size="default" style={{margin: '10px 0'}} >
            <Row>
                <Col span={4}>
                    <Link to={'/profile/' + id}>
                        <Image src={avatar || userPhoto} width={130} preview={false} />
                    </Link>
                </Col>
                <Col span={15}>
                    <Space direction='vertical'>
                        <Link to={'/profile/' + id}>
                            <Text strong style={{color: '#2bbaff', fontSize:'16pt'}} color='blue'>
                                {fullName}
                            </Text>
                        </Link>
                        <Text style={{fontSize:'12pt'}}>{status || 'Нет статуса'}</Text>
                    </Space>
                </Col>
                <Col>
                    { button }
                </Col>                
            </Row>
        </Card>
        // <div className={s.frame}>
        //     <div className={s.followFrame}>
        //         <NavLink to={'/profile/' + id}>
        //             <img className={s.avatar} src={avatar ? avatar : userPhoto} />
        //         </NavLink>
        //         { button }
        //     </div>
        //     <div className={s.description}>
        //         <p>Имя: {fullName}</p>
        //         <p>Статус: {status}</p>
        //     </div>
        // </div>
    );
}

export default User;