import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router';
import createStore, { history } from './store';

import 'rxjs';

import App from './App';

import Counter from './components/counter';
import Home from './components/home';

const store = new createStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Route exact path="/" component={Home} />
                <Route path="/counter" component={Counter} />
            </App>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
