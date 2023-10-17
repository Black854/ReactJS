import { Avatar, Card, Col, Row, Typography } from 'antd'
import React from "react"
import { getId, getUserPhotoSmall } from '../../../../redux/auth-selectors'
import { useSelector } from 'react-redux'
import { UserOutlined } from '@ant-design/icons';
 
const {Text} = Typography

type Propstype = {
    senderId: number
    message: string
}

const Item: React.FC<Propstype> = ({senderId, message}) => {
    let myId = useSelector(getId)
    let myAvatar = useSelector(getUserPhotoSmall)
    if (myId === senderId) {
        return  <Row><Col style={{textAlign: 'right'}} span={24}><Card style={{ maxWidth: '55%', backgroundColor: 'gold', display: 'inline-block' }}>
        <Avatar src={myAvatar} size={50} />
        <Text style={{marginLeft: '10px', backgroundColor: 'red'}}>
            {message}
        </Text>
    </Card></Col></Row>
    } else {
        console.log(myId)
        console.log(senderId)
        return          <Row><Card style={{margin: '10px 0', maxWidth: '55%', display: 'inline-block' }} size='small'>
        <Avatar size={50} icon={<UserOutlined rev={undefined} />}  />
        <Text style={{marginLeft: '10px'}}>
            {message}
        </Text>
    </Card></Row>
    }
}

export default Item