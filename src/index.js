import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

let defaultValue = {
    prop1: 'Value1',
    f: function (message) {
        console.log(message.toString())
    }
};
export let MyContext = createContext(defaultValue)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyContext.Provider value={defaultValue}>
        <App/>
    </MyContext.Provider>
);

