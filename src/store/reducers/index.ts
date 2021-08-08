import {combineReducers} from 'redux'

import usersReducer from './usersReducer'
import reposReducer from './reposReducer'

const rootReducer = combineReducers({
  usersReducer,
  reposReducer
})

export default rootReducer