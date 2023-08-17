import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import React from "react";
import userPhoto from '../../img/user.jpg';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.logo} alt='' src='https://avatars.mds.yandex.net/i?id=15a2ac92ae168bcc1ba82950d6175e2ca9706c83-5680489-images-thumbs&n=13' />
      <div className={s.authBlock}>
        {props.isAuth ? <div><a><img className={s.userPhotoSmall} src={props.userPhotoSmall ? props.userPhotoSmall : userPhoto} alt="" />{props.login}</a></div> :
        <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>);
} 

export default Header