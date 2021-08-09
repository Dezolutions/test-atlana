import {createStore,applyMiddleware,Store} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'

const store:Store = createStore(usersReducer,applyMiddleware(thunk))

export default store