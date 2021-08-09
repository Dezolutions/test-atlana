import axios from "axios";
import { IUser, IUserReguest, IUsersAction } from "../../types";

export const fetchUsers =  (payload:string) => async (dispatch:any) => {
  try {
    const {data:{items}} = await axios.get<IUserReguest>(`https://api.github.com/search/users?q=${payload}`)
  
  await axios
    .all(items.map(async(item:IUser) => {
        return axios.get(`https://api.github.com/users/${item.login.toLowerCase()}`).then(res => item.public_repos = res.data.public_repos)
    }))
  
  dispatch(setUsers(items))
  } catch (error) {
    alert('Превышен лимит запросов(60 в час)')
  }
  
  
}

export const setUsers = (users:IUser[]):IUsersAction => ({
  type: 'SET_USERS',
  users
})

