import axios from "axios";
import { IUser, IUsersAction } from "../../types";

export const fetchUsers =  (payload:string) => async (dispatch:any) => {
  const {data:{items}} = await axios.get(`https://api.github.com/search/users?q=${payload}`)
  dispatch(setUsers(items))
}

export const setUsers = (users:IUser[]):IUsersAction => ({
  type: 'SET_USERS',
  users
})