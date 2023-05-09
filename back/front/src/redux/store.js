import {configureStore} from '@reduxjs/toolkit'
import rootReducer  from './rootReducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';

const sagaMiddleware= createSagaMiddleware();
const store=configureStore({
    reducer:rootReducer,
    middleware:[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store