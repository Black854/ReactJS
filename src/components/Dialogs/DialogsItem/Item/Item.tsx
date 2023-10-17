import {Link, useLocation} from "react-router-dom"
import React from "react"
import { Avatar, Card, Typography } from 'antd'
const {Text} = Typography

type PropsType = {
    id: string
    name: string
    url: string
}

const Item: React.FC<PropsType> = ({id, name, url}) => {
    const location = useLocation()
    let color = 'black'
    let Background = 'white'
    id = String(id)
    const result = location.pathname.replace(/^\/dialogs\//, '');
    (result === id) && (color = 'white') && (Background='#1677ff')
    return  <Link to={id}>
                <Card size="small" style={{backgroundColor: Background}}>
                    <Avatar src={url} size={'large'}/>
                    <Text style={{color: color, marginLeft: '10px', fontSize: '12pt'}}>{name}</Text>
                </Card>
            </Link>
}

export default Item