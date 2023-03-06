import { createStore, applyMiddleware } from 'redux'
import { counterReducer } from './Reduce';
import thunk from 'redux-thunk';


export const store = createStore(counterReducer, applyMiddleware(thunk))
