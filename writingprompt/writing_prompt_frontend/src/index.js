import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import mainReducer from './reducers/main'
import contentReducer from './reducers/content'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const rootReducer = combineReducers({mainReducer, contentReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
registerServiceWorker();
