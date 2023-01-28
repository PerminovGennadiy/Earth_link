import React from "react";
import AppWithTest from "./App";
import * as ReactDOM from 'react-dom/client';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.createRoot(<AppWithTest />, div);
    ReactDOM.unmountComponentAtNode(div);
})