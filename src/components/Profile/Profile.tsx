import React from 'react'
import { IProfile } from '../../types'
import axios  from 'axios'

const Profile:React.FC<IProfile> = ({avatar_url,name,public_repos,login}) => {

  React.useEffect(() => {
    const fetchRepos = async () => {
      try {
        const {data} = await axios.get(`https://api.github.com/users/${login}/repos`)
        console.log(data)
        
      } catch (error) {
        
      }
      
    }
     fetchRepos()

  },[])
  return (
    <div>
      <img src={avatar_url} alt="avatar" />
      <h1>{name}</h1>
      <p>Public repositories : {public_repos}</p>

    </div>
  )
}

export default Profile
