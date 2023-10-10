import { profileActions } from '../../../redux/profile-reducer'
import { AppStateType } from '../../../redux/store'
import { PostType } from '../../../types/types'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    createNewPost: (text: string) => void
}

type OwnPropsType = {
    
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType> (mapStateToProps, {createNewPost: profileActions.createNewPost}) (MyPosts)

export default MyPostsContainer