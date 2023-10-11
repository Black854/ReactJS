import {Link, NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import React from "react"
import Friends from "./Friends/Friends"
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

    const items: MenuProps['items'] = [
        {
            label: (<Link to='/profile'>Профиль</Link>),
            key: '1'
        },
        {
            label: (<Link to='/users'>Пользователи</Link>),
            key: '2'
        },
        {
            label: (<Link to='/dialogs'>Сообщения</Link>),
            key: '3'
        },
        {
            label: (<Link to='/new'>Новости</Link>),
            key: '4'
        },
        {
            label: (<Link to='/music'>Музыка</Link>),
            key: '5'
        },
        {
            label: (<Link to='/settings'>Настройки</Link>),
            key: '6'
        },
        {
            label: (<Link to='/friends'>Друзья</Link>),
            key: '7'
        },
    ]

    const friends = useSelector(getFriends)

    return (<>
        <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                style={{ height: '100%' }}
                items={items}
            />
        </Sider>
        {/* <Friends friends={friends} /> */}
        </>


        // <div className={s.nav}>
        //     <div>
        //         <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/profile'>Мой профиль</NavLink>
        //     </div>
        //     <div>
        //         <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/users'>Пользователи</NavLink>
        //     </div>
        //     <div>
        //         <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/dialogs'>Сообщения</NavLink>
        //     </div>
        //     <div>
        //         <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/news'>Новости</NavLink>
        //     </div>
        //     <div>
        //         <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/music'>Музыка</NavLink>
        //     </div>
        //     <div>
        //         <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/settings'>Настройки</NavLink>
        //     </div>
        //     <Friends friends={props.friends} />
        // </div>
    );
}

export default Navbar