import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import React from "react"
import userPhoto from '../../img/user.jpg'
import logo from './../../img/logo.png'

type PropsType = {
    email: string | null
    login: string | null
    isAuth: boolean
    userPhotoSmall: string | null
    logout: () => void
    getAuthDataTC: () => void
}

const Header: React.FC<PropsType> = ({isAuth, logout, login, userPhotoSmall}) => {
  let logoutFunc = () => {
    return logout()
  }

  return (
    <header className={s.header}>
      <img className={s.logo} alt='' src={logo} />
      <div className={s.authBlock}>
        {isAuth ? <div><a><img className={s.userPhotoSmall} src={userPhotoSmall ? userPhotoSmall : userPhoto} alt="" />{login} (<span className={s.logout} onClick={logoutFunc}>выход</span>)</a></div> :
        <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>)
} 

export default Header