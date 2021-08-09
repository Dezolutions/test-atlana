import React from 'react'
import { IUser } from '../../types'
import styles from './profile.module.css'
import {Link} from 'react-router-dom'

const Profile:React.FC<IUser> = ({avatar_url,login,public_repos}) => {

  return (
    
      <Link className={styles.btn} to={`users/${login}`}>
        <div className={styles.profile}>
          <img className={styles.avatar} src={avatar_url} alt="avatar" />
          <h1>{login}</h1>
          <p className={styles.repos}>Public repositories: <strong>{public_repos}</strong> </p>
    
        </div>
      </Link>
    
    
  )
}

export default Profile
