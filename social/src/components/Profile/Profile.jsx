import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.mainImage} src='https://rare-gallery.com/uploads/posts/557604-clouds-country.jpg' alt=''></img>
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>);
}

export default Profile;