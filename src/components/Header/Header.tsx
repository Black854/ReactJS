import { Link } from 'react-router-dom'
import React from "react"
import userPhoto from '../../img/user.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth, getLogin, getUserPhotoSmall } from '../../redux/auth-selectors'
import { logout } from '../../redux/auth-reducer'
import { Avatar, Button, Layout, Typography , MenuProps, Space, Row, Col } from 'antd'
const { Text } = Typography;

const Header: React.FC = () => {
  const isAuth = useSelector(getIsAuth)
  const login = useSelector(getLogin)
  const userPhotoSmall = useSelector(getUserPhotoSmall)

  const dispatch = useDispatch()

  const logoutFunc = () => {
    //@ts-ignore
    dispatch(logout())
  }
  
  const { Header } = Layout;
  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <>
    <Header>
      <Row>
        <Col span={21}>
          {/* <div className="demo-logo" /> */}
          <Button type="primary">
            <Link to='/users'>
              Developers
            </Link>
          </Button>
        </Col>
        {isAuth ?
          <>
            <Col span={2} style={{textAlign: 'right', paddingRight: '10px'}}>
              <Avatar src={userPhotoSmall ? userPhotoSmall : userPhoto} />
              <Text style={{color: 'white', paddingLeft: '10px'}} >{login}</Text>
            </Col>
            <Col span={1} style={{textAlign: 'right'}}>
              <Button type="primary" onClick={logoutFunc}>Выход</Button>
            </Col>
          </> :
          <Col span={3} style={{textAlign: 'right'}}>
            <Button type="primary">
              <Link to='/login'>Login</Link>
            </Button>
          </Col>
        }
      </Row>
    </Header>
    </>
  )
} 

export default Header