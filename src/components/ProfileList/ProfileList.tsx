import axios from 'axios'
import React from 'react'
import {useSelector} from 'react-redux'
import { IUser, IUserState } from '../../types'
import Profile from '../Profile/Profile'

const ProfileList = () => {
  const users :IUser[] = useSelector((state:IUserState) => state.users)

  return (
    <ul>
      {users.map((user:IUser) => <Profile key={user.id} {...user}/>)}
    </ul>
  )
}

export default ProfileList
