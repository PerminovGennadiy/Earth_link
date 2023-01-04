import React from 'react';
import cl from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = (props) => {

    let postsElement = props.posts.map(el => <MyPost id={el.id} message={el.message} likes={el.likes} />)

    let NewPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={cl.addNewPost}>
                <div className={cl.Name_button}>
                    <textarea className={cl.postName} placeholder='Название поста'></textarea>
                    <button onClick={onAddPost} className={cl.addNewPost_button}>Добавить пост</button>
                </div>
                <textarea ref={NewPostElement}
                    className={cl.postMain}
                    placeholder='Содержание поста'
                    value={props.NewPostText}
                    onChange={onPostChange} />
            </div>
            <div className={cl.posts}>
                My posts:
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;