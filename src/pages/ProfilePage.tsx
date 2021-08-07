import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReposList from '../components/ReposList/ReposList'

const ProfilePage:React.FC = () => {
  const [repos, setRepos] = React.useState([])
  const {loginParam}:any = useParams()

  React.useEffect(() => {
    const fetchRepos = async () => {
      const {data} = await axios.get(`https://api.github.com/users/${loginParam}/repos`,{headers:{authorization: "token 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"}})
      console.log(data)
      setRepos(data)
    }
    fetchRepos()
  },[])

  return (
    <div>
      <h1>zdsfnxgjbld</h1> 
      <ReposList/>
    </div>
  )
}

export default ProfilePage
