import cl from './MyProfile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MyProfile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    );
};

export default MyProfile;