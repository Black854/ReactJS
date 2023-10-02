import { createNewPost } from '../../../redux/profile-reducer.ts';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect (mapStateToProps, {createNewPost}) (MyPosts);

export default MyPostsContainer;