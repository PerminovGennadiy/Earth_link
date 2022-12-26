import cl from './MyPost.module.css';

const Post = (props) => {
    return (
            <div className={cl.post}>
                <div className={cl.name}>{props.message}</div>
                <div className={cl.likes}>Likes: {props.likes}</div>
            </div>
    );
};

export default Post;