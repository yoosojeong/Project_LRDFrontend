import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import createStore from './store';
import {AppContainer as HotContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

const store = createStore();

ReactDOM.render(
    <HotContainer key={Math.random()}>
        <Provider store={store}>
            <App/>
        </Provider>
    </HotContainer>,
    document.getElementById('root')
);