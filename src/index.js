import './index.css';
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// Import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Set redux state to user comment input
const commentReducer = (state = '', action) => {
    if( action.type === 'ADD_COMMENT'){
        return action.payload;
    }
    return state;
}

// Set redux state to user feeling input
const feelingReducer = (state = 0, action) => {
    if( action.type === 'ADD_FEELING'){
        return action.payload;
    }
    return state;
}

// Set redux state to user support input
const supportReducer = (state = 0, action) => {
    if( action.type === 'ADD_SUPPORT'){
        return action.payload;
    }
    return state;
}

// Set redux state to user understand input
const understandReducer = (state = 0, action) => {
    if( action.type === 'ADD_UNDERSTAND'){
        return action.payload;
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