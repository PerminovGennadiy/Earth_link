import React, { PureComponent } from 'react';
import cl from './MyPosts.module.css';
import MyPost from './Post/MyPost';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../../UI//FormsControl/FormsControl';

const maxLenght300 = maxLenghtCreator(300);

const MyPosts = React.memo(props => {
    
    let postsElement = props.posts.map(el => <MyPost id={el.id} message={el.message} likes={el.likes} key={el.id} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={cl.posts}>
                Мои посты:
            </div>
            <div className={cl.postItem}>{postsElement}</div>
        </div>
    );
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cl.addNewPost}>
            <div className={cl.Name_button}>
                <div className={cl.NameOfPostContainer}>
                    <Field component='textarea' name='newPostTextHeader' className={cl.postName} placeholder='Название поста' />
                </div>
                <button className={cl.addNewPost_button}>Добавить пост</button>
            </div>
            <Field component={Textarea} name='newPostText' validate={[required, maxLenght300]} className={cl.postMain} placeholder='Содержание поста' />
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;