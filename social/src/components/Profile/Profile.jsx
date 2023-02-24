import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://rare-gallery.com/uploads/posts/557604-clouds-country.jpg' alt=''></img>
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>);
}

export default Profile;