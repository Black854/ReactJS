import { Avatar, Col, Image, Row, Typography } from 'antd'
import s from './Post.module.css'
import React from "react"
import { UserOutlined, LikeOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
const { Text, Title } = Typography;


type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = ({message, likesCount}) => {
    return (
        <div style={{padding: '10px 0'}}>
            <Avatar size={50} icon={<UserOutlined rev={undefined} />}/>
            <Text style={{marginLeft: '10px'}}>{message}</Text>
            <Row>
                <Col push={1}>
                    <LikeOutlined rev={undefined} /> {likesCount}
                </Col>
            </Row>
        </div>)
}

export default Post