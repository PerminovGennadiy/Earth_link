import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from '../src/redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireThree = (state) => {
    root.render(
        <App state={state}
            store={store}
        />
    );
}


renderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireThree(state);
});