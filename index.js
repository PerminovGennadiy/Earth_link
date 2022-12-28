import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, { subscribe } from '../src/state/state.js';
import { addPost, updatePostText } from '../src/state/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireThree = (state) =>{
    root.render(
            <App state={state}
                addPost={addPost}
                updatePostText={updatePostText}/>
    );}


renderEntireThree(state);

subscribe(renderEntireThree);