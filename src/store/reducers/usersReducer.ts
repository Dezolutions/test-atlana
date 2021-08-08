import { IUsersAction, IUserState } from "../../types"
const initialState :IUserState= {
  users: []
}
  
const usersReducer = (state = initialState, action:IUsersAction) => {
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

export default usersReducer