import React from 'react'
import {useSelector} from 'react-redux'
import { IUser} from '../../types'
import Profile from '../Profile/Profile'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

import './animation.css'
const ProfileList:React.FC = () => {
  const users :IUser[] = useSelector((state:any) => state.users)

  return (
    <TransitionGroup component="ul" >
      
        
          {users.map((user:IUser) => 

          <CSSTransition       
            key={user.id}
            timeout={500}
            in={true}
            classNames="list"
          >
            <Profile key={user.id} {...user}/>
          </CSSTransition>
          
          )}
          
        
      
    </TransitionGroup>
  )
  
}

export default ProfileList
