import cl from './MyPosts.module.css';
import MyPost from './Post/MyPost';


const MyPosts = (props) => {

    let postsElement = props.posts.map(el => <MyPost id={el.id} message={el.message} likes={el.likes} />)


    return (
        <div>
            <div className={cl.addNewPost}>
                <div className={cl.Name_button}>
                    <div><input className={cl.postName} placeholder='Название поста'></input></div>
                    <div><button className={cl.addNewPost_button}>Добавить пост</button></div>
                </div>
                <div><input className={cl.postMain} placeholder='Содержание поста'></input></div>
            </div>
            <div className={cl.posts}>
                My posts:
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;