// Set up your Redux store here
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Use if async actions are needed
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
