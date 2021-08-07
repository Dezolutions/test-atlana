import React from 'react'
import { IUser } from '../../types'
import styles from './profile.module.css'
import {useHistory,Link} from 'react-router-dom'
import axios from 'axios'

const Profile:React.FC<IUser> = ({avatar_url,login}) => {
const history = useHistory()
const [repCount,setRepCount] = React.useState<number>(0)
  React.useEffect(() => {
    const  fetchReposCount = async () => {
      const {data:{public_repos}}:any = await axios.get(`https://api.github.com/users/${login.toLowerCase()}`,{headers:{authorization: "token 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"}})
      setRepCount(public_repos)
    }
    fetchReposCount()
  },[])

  return (
    <Link className={styles.btn} to={`users/${login}`}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={avatar_url} alt="avatar" />
        <h1>{login}</h1>
        <p>Public repositories :{repCount} </p>
  
      </div>
    </Link>
  )
}

export default Profile
