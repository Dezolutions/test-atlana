import axios from "axios";
import { IUser, IUserReguest, IUsersAction } from "../../types";

export const fetchUsers =  (payload:string) => async (dispatch:any) => {
  const {data:{items}} = await axios.get<IUserReguest>(`https://api.github.com/search/users?q=${payload}`,{headers:{
    "Authorization": "token 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"
  }})
  
  await axios
    .all(items.map(async(item:IUser) => {
        return axios.get(`https://api.github.com/users/${item.login.toLowerCase()}`,{headers:{
        "Authorization": "token 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"
      }}).then(res => item.public_repos = res.data.public_repos)
    }))
  
  dispatch(setUsers(items))
  
}

export const setUsers = (users:IUser[]):IUsersAction => ({
  type: 'SET_USERS',
  users
})

