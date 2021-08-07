import { IUsersAction, IUserState } from "../../types"
import axios from "axios"
const initialState :IUserState= {
  users: []
}
  
const reducer = (state = initialState, action:IUsersAction) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }
    
    default:
      return state
  }
}

export default reducer