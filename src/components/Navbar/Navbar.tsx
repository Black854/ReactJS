import {Link, useLocation} from 'react-router-dom'
import React from "react"
import { FriensType } from '../../types/types'
import { Layout, Menu, MenuProps, theme } from 'antd'
import { getFriends } from '../../redux/sidebar-selector'
import { useSelector } from 'react-redux'

type PropsType = {
    friends: Array<FriensType>
}

const Navbar: React.FC = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const { Sider } = Layout;
    let location = useLocation()

    const getPathnameWithoutTrailingSlash = (pathname: string) => {
        if (pathname.includes("/profile")) {
            return "/profile"
        }
        if (pathname.includes("/dialogs")) {
            return "/dialogs"
        }
        return pathname
    }

    const items: MenuProps['items'] = [
        {
            label: (<Link to='/profile'>Профиль</Link>),
            key: "/profile"
        },
        {
            label: (<Link to='/users'>Пользователи</Link>),
            key: '/users'
        },
        {
            label: (<Link to='/dialogs'>Сообщения</Link>),
            key: '/dialogs'
        },
        {
            label: (<Link to='/news'>Новости</Link>),
            key: '/news'
        },
        {
            label: (<Link to='/music'>Музыка</Link>),
            key: '/music'
        },
        {
            label: (<Link to='/settings'>Настройки</Link>),
            key: '/settings'
        },
        {
            label: (<Link to='/friends'>Друзья</Link>),
            key: '/friends'
        },
    ]

    const friends = useSelector(getFriends)

    return  <Sider style={{ background: colorBgContainer }} width={200}>
                <Menu mode="inline"
                    selectedKeys={[getPathnameWithoutTrailingSlash(location.pathname)]}
                    style={{ height: '100%' }}
                    items={items}
                />
            </Sider>
}

export default Navbar