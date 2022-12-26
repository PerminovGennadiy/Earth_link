import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from '../src/state/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App state={state} />
);
