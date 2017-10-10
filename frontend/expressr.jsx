import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as ApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.logout = ApiUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById("root");

  ReactDOM.render(
    <div className="bg-image">
    <Root store={store} />
    </ div>
    , root);

});
