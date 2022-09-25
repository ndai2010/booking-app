import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'

import RootSaga from '../Sagas/RootSaga'
import rootReducer from '../Reducers/RootReducer'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(RootSaga)

export default store