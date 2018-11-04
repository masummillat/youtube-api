import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';
import Root from "./components/Root";
import configureStore, { history } from './store/configureStore';
const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
