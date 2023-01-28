import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '../src/redux/redux-store';
import AppWithTest from './utils/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireThree = (state) => {
    root.render(
        <AppWithTest/>
    );
}
renderEntireThree(store.getState());
