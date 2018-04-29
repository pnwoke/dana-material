import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { startSetAccounts } from './actions/accounts';
import { firebase } from 'utils/firebase/firebase';
import { login, logout } from './actions/auth';
import configureStore from 'utils/store/configureStore';

import "assets/css/material-dashboard-react.css";
import "assets/css/index.css";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<div className="dana-load"><p><a>...DANA GROUP...</a></p></div>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetAccounts()).then(() => {
      renderApp();
      // if (history.location.pathname === '/') {
      //   history.push('/create');
      // }
    });
  } else {
    store.dispatch(logout());
    // renderApp();
    // history.push('/');
    store.dispatch(startSetAccounts()).then(() => {
      renderApp();
      // if (history.location.pathname === '/') {
      //   history.push('/create');
      // }
    });
  }
});