import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import {rootEpic} from './effects';

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function (initialState) { 
    return createStore(rootReducer,  applyMiddleware(routeMiddleware, epicMiddleware));
};