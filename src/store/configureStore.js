// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import reducer from "./reducer";

import { configureStore } from '@reduxjs/toolkit';
import reducer from './projects';

/*
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/

export default function configureAppStore() {
    // const store = createStore(
    //     reducer,
    //     devToolsEnhancer({
    //         trace: true
    //     })
    // );
    return configureStore({ reducer });
};