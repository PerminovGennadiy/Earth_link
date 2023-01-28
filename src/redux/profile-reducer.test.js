import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import ReactDOM from 'react-dom';
import React from "react";

let state = {
    posts: [
        { id: 1, message: 'Привет, как дела?', likes: '2' },
        { id: 2, message: 'Здравствуйте, меня зовут Сергей', likes: '1' },
        { id: 3, message: 'У меня рак:)', likes: '12' },
    ]
}

it('New post should be added', () => {

    let action = addPostActionCreator('Try to test profile-reducer');

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(4);
})


it('Message of new post should be correct', () => {

    let action = addPostActionCreator('Try to test profile-reducer');

    let newState = profileReducer(state, action);

    expect (newState.posts[3].message).toBe('Try to test profile-reducer');
})


it('Post deleted', () => {

    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(2);
})