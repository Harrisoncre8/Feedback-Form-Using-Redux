import './index.css';
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// Import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const commentReducer = (state = [], action) => {
    if( action.type === 'ADD_COMMENT'){
        return [...state, action.payload];
    }
    return state;
}

const feelingReducer = (state = [], action) => {
    if( action.type === 'ADD_FEELINGS'){
        return [...state, action.payload];
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if( action.type === 'ADD_SUPPORT'){
        return [...state, action.payload];
    }
    return state;
}

const understandReducer = (state = [], action) => {
    if( action.type === 'ADD_UNDERSTAND'){
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        commentReducer,
        feelingReducer,
        supportReducer,
        understandReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();