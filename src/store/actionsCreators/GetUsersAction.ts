import axios from "axios";
import { IUser, IUsersAction } from "../../types";

export const fetchUsers =  (payload:string) => async (dispatch:any) => {
  const {data:{items}} = await axios.get(`https://api.github.com/search/users?q=${payload}`,{headers:{authorization: "token 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"}})
  dispatch(setUsers(items))
  
}

export const setUsers = (users:IUser[]):IUsersAction => ({
  type: 'SET_USERS',
  users
})

export const fetchReposCount = () => ({
  type: 'ADD_REPOS_COUNT'
})