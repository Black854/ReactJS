import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={s.item}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <nav>News</nav>
      </div>
      <div className={s.item}>
        <nav>Music</nav>
      </div>
      <div className={s.item}>
        <nav>Settings</nav>
      </div>
    </nav>);
}

export default Navbar