import cl from './MyProfile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MyProfile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts}
                NewPostText={props.posts.NewPostText}
                addPost={props.addPost}
                updatePostText={props.updatePostText} />
        </div>
    );
};

export default MyProfile;