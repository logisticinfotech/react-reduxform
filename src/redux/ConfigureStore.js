/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createReducer from '../redux/Reducers';

export default function configureStore() {
    const store = createStore(createReducer, applyMiddleware(thunk));
    return store;
}