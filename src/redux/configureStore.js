import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { About } from './about';
import { Grammar } from './grammar'
import { Quali } from './quali';
import { Skills } from './skills';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            about: About,
            grammar: Grammar,
            quali: Quali,
            skills: Skills
        }),
        applyMiddleware(thunk)
    );
    return store;
}