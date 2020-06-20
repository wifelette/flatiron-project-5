/// <reference path="./types/app.d.ts" />

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { allReducers } from "./reducers"; // No need to explicitly name Index.js
import {
  Provider,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// composeWithDevTools is just a cleaner way of getting the Redux browser extension to work. You pass it in as a second parameter to your store.

/**
 * @typedef {import("./reducers").AppState} AppState
 * @typedef {import("./reducers").AppAction} AppAction
 */

/**
 * @template T, U
 * @typedef {import("redux").Store<T, U>} Store
 */

/**
 * https://react-redux.js.org/using-react-redux/static-typing
 * @template T
 * @typedef {import("react-redux").TypedUseSelectorHook<T>} TypedUseSelectorHook
 */

/** @type {Store<AppState, AppAction>} */
const store = createStore(allReducers, composeWithDevTools());

/** @type {TypedUseSelectorHook<AppState>} */
export const useSelector = useReduxSelector;

/** @type {() => typeof store.dispatch} */
export const useDispatch = useReduxDispatch;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
