import s from './Profile.module.css';
import React, { useState, useEffect } from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';
import userPhoto from '../../img/user.jpg';

// class ProfileInfoNotAvailable extends React.Component {
//     state = {
//         changeMode: false,
//         status: this.props.status
//     }

//     componentDidUpdate (prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             });
//         }
//     }

//     activateChangeMode = () => {
//         this.setState({
//             changeMode: true
//         });
//     }

//     deactivateChangeMode = () => {
//         this.setState({
//             changeMode: false
//         });
//         this.props.updateStatusTC(this.state.status);
//     }

//     onChangeStatusText = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         });
//     }

//     render () {
//         if (!this.props.profile) {
//             return (
//                 <Preloader />
//             )
//         }

//         return (
//             <div>
//                 <img className={s.mainImage} src='https://c.wallhere.com/photos/12/e1/sky_clouds_sunset_air-26035.jpg!d' alt='' />
//                 <div className={s.profileBlock}>
//                     <img className={s.avatar} src={this.props.profile.photos.large ? this.props.profile.photos.large : userPhoto} alt="" />
//                     <div>
//                         <h2 className={s.userName}>{this.props.profile.fullName}</h2>
//                         {!this.state.changeMode && <p onDoubleClick={this.activateChangeMode}>{this.state.status || '------'}</p> } 
//                         {this.state.changeMode && <input autoFocus onBlur={this.deactivateChangeMode} type="text" value={this.state.status} onChange={this.onChangeStatusText} />}
//                         <p>Обо мне: {this.props.profile.aboutMe }</p>
//                         {this.props.profile.lookingForAJob && <p>В поиске работы: {this.props.profile.lookingForAJobDescription }</p>}
//                         <h3>Контакты</h3>
//                         {this.props.profile.contacts.facebook && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.facebook }>Facebook</a>}
//                         {this.props.profile.contacts.website && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.website }>WebSite</a>}
//                         {this.props.profile.contacts.vk && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.vk }>VK</a>}
//                         {this.props.profile.contacts.twitter && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.twitter }>Twitter</a>}
//                         {this.props.profile.contacts.instagram && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.instagram }>Instagram</a>}
//                         {this.props.profile.contacts.youtube && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.youtube }>YouTube</a>}
//                         {this.props.profile.contacts.github && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.github }>GitHub</a>}
//                         {this.props.profile.contacts.mainLink && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.mainLink }>MainLink</a>}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


const ProfileInfo = (props) => {
    let [changeMode, setChangeMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (() => {
        setStatus(props.status);
        }, [props.status]);

    const activateChangeMode = () => {
        setChangeMode(true);
    }

    const deactivateChangeMode = () => {
        setChangeMode(false);
        props.updateStatusTC(status);
    }

    const onChangeStatusText = (e) => {
        setStatus(e.currentTarget.value);
    }

    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <img className={s.mainImage} src='https://c.wallhere.com/photos/12/e1/sky_clouds_sunset_air-26035.jpg!d' alt='' />
            <div className={s.profileBlock}>
                <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="" />
                <div>
                    <h2 className={s.userName}>{props.profile.fullName}</h2>
                    {!changeMode && <p onDoubleClick={activateChangeMode}>{props.status || '------'}</p> } 
                    {changeMode && <input autoFocus onBlur={deactivateChangeMode} type="text" value={status} onChange={onChangeStatusText} />}
                    <p>Обо мне: {props.profile.aboutMe }</p>
                    {props.profile.lookingForAJob && <p>В поиске работы: {props.profile.lookingForAJobDescription }</p>}
                    <h3>Контакты</h3>
                    {props.profile.contacts.facebook && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.facebook }>Facebook</a>}
                    {props.profile.contacts.website && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.website }>WebSite</a>}
                    {props.profile.contacts.vk && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.vk }>VK</a>}
                    {props.profile.contacts.twitter && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.twitter }>Twitter</a>}
                    {props.profile.contacts.instagram && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.instagram }>Instagram</a>}
                    {props.profile.contacts.youtube && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.youtube }>YouTube</a>}
                    {props.profile.contacts.github && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.github }>GitHub</a>}
                    {props.profile.contacts.mainLink && <a target='_blank' className={s.contactsLink} href={'//' + props.profile.contacts.mainLink }>MainLink</a>}
                </div>
            </div>
        </div>
    );
}

const Profile = (props) => {
    useEffect(() => {
        if (!props.isAuth && !props.match.params.userId) {
          props.match.navigate("/login");
        }
      }, [props.isAuth, props.match.params.userId]);

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} />
            <MyPostsContainer store={props.store} posts={props.posts} />
        </div>
    );
}

export default Profile;