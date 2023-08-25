import s from './Profile.module.css';
import React from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Preloader/Preloader';
import userPhoto from '../../img/user.jpg'

class ProfileInfo extends React.Component {
    state = {
        changeMode: false,
        status: 's'
    }

    activateChangeMode = () => {
        this.setState({
            changeMode: true
        });
    }

    deactivateChangeMode = () => {
        this.setState({
            changeMode: false
        });
        this.props.updateStatusTC(this.statusText.current.value);
    }

    render () {
        if (!this.props.profile) {
            return (
                <Preloader />
            )
        }

        let statusText = React.createRef();
        return (
            <div>
                <img className={s.mainImage} src='https://c.wallhere.com/photos/12/e1/sky_clouds_sunset_air-26035.jpg!d' alt='' />
                <div className={s.profileBlock}>
                    <img className={s.avatar} src={this.props.profile.photos.large ? this.props.profile.photos.large : userPhoto} alt="" />
                    <div>
                        <h2 className={s.userName}>{this.props.profile.fullName}</h2>
                        {!this.state.changeMode && <p onDoubleClick={this.activateChangeMode}>{this.props.status}</p> } 
                        {this.state.changeMode && <input ref={statusText} autoFocus onBlur={this.deactivateChangeMode} type="text" value={this.props.status} />} 
                        
                        <p>Обо мне: {this.props.profile.aboutMe }</p>
                        {this.props.profile.lookingForAJob && <p>В поиске работы: {this.props.profile.lookingForAJobDescription }</p>}
                        <h3>Контакты</h3>
                        {this.props.profile.contacts.facebook && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.facebook }>Facebook</a>}
                        {this.props.profile.contacts.website && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.website }>WebSite</a>}
                        {this.props.profile.contacts.vk && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.vk }>VK</a>}
                        {this.props.profile.contacts.twitter && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.twitter }>Twitter</a>}
                        {this.props.profile.contacts.instagram && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.instagram }>Instagram</a>}
                        {this.props.profile.contacts.youtube && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.youtube }>YouTube</a>}
                        {this.props.profile.contacts.github && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.github }>GitHub</a>}
                        {this.props.profile.contacts.mainLink && <a target='_blank' className={s.contactsLink} href={'//' + this.props.profile.contacts.mainLink }>MainLink</a>}
                        
                    </div>
                </div>
            </div>
        );
    }
}

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} />
            <MyPostsContainer store={props.store} posts={props.posts} />
        </div>
    );
}

export default Profile;