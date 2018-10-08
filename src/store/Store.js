import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga/RootSaga';

const init = {};
const saga = createSagaMiddleware();
const middleware = applyMiddleware(saga);

const store = createStore(rootReducer, init, middleware);

saga.run(rootSaga);

export default store;