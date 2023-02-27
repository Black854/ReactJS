import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import React from "react";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink className={({ isActive }) => isActive ? s.active : s.item} to='/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink className={({ isActive }) => isActive ? s.active : s.item} to='/dialogs'>Messages</NavLink>
      </div>
      <div>
        <NavLink className={({ isActive }) => isActive ? s.active : s.item} to='/news'>News</NavLink>
      </div>
      <div>
        <NavLink className={({ isActive }) => isActive ? s.active : s.item} to='/music'>Music</NavLink>
      </div>
      <div>
        <NavLink className={({ isActive }) => isActive ? s.active : s.item} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar