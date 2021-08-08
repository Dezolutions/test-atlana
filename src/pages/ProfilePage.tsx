import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReposList from '../components/ReposList/ReposList'
import { IRepo, IUserInfo } from '../types'
import SearchRepos from '../components/SearchRepos/SearchRepos'
import {useDispatch} from 'react-redux'
import {  setReposOfUser } from '../store/actionsCreators/getReposAction'
const ProfilePage:React.FC = () => {

  const  dispatch = useDispatch()
  const [info, setInfo] = React.useState<IUserInfo>()
  const [repos, setRepos] = React.useState([])
  const [keyword,setKeyword] = React.useState('')
  const {loginParam}:any = useParams()
  const filteredRepos = repos.filter((item:IRepo) => item.name.includes(keyword))
  React.useEffect(() => {
    const fetchRepos = async () => {
      const {data} = await axios.get(`https://api.github.com/users/${loginParam}/repos`,{headers:{
        "Authorization": "token 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"
      }})
      setRepos(data)
      dispatch(setReposOfUser(data))

      const {data:{followers,following,email,location,created_at,bio,login,avatar_url}} = await axios.get<IUserInfo>(`https://api.github.com/users/${loginParam}`,{headers:{
        "Authorization": "token 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"
      }})
      setInfo({followers,following,email,location,created_at,bio,login,avatar_url})

      
    }
    fetchRepos()
  },[])
  const onSearchHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase())
    // repos.filter((item:IRepo) => item.name.includes(e.target.value))
  }

  return (
    <div>
      <h1>{info?.login}</h1>
      <img src={info?.avatar_url} alt="avatar" />
      <div>
        <p>email: {info?.email}</p>
        <p>location: {info?.location}</p>
        <p>followers: {info?.followers}</p>
        <p>following: {info?.following}</p>
        <p>join date: {info?.created_at}</p>
        <p>{info?.bio}</p>
      </div> 
      <SearchRepos onChange={onSearchHandler} />
      <ReposList repos={filteredRepos} />
    </div>
  )
}

export default ProfilePage
