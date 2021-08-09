import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReposList from '../components/ReposList/ReposList'
import { IRepo, IUserInfo } from '../types'
import SearchRepos from '../components/SearchRepos/SearchRepos'
import styles from './profilepage.module.css'
import Loader from '../components/Loader/Loader'
const ProfilePage:React.FC = () => {
  
  const [info, setInfo] = React.useState<IUserInfo>()
  const [repos, setRepos] = React.useState<IRepo[]>([])
  const [keyword,setKeyword] = React.useState<string>('')
  const [loaded,setLoaded] = React.useState<boolean>(false)
  const {loginParam}:any = useParams()
  const filteredRepos:IRepo[] = React.useMemo(() => repos.filter((item:IRepo) => item.name.includes(keyword)),[repos,keyword])
  const onSearchHandler = React.useMemo(() => (e:React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value.toLowerCase()),[keyword])
  
  React.useEffect(() => {
    const fetchRepos = async () => {
      const {data} = await axios.get<IRepo[]>(`https://api.github.com/users/${loginParam}/repos`)
      const {data:{followers,following,email,location,created_at,bio,login,avatar_url}} = await axios.get<IUserInfo>(`https://api.github.com/users/${loginParam}`)
      setRepos(data)
      setInfo({followers,following,email,location,created_at,bio,login,avatar_url})
      setLoaded(true)
    }
    fetchRepos()
  },[])
  
  return (
    <>
      {loaded ? 
        <div className={styles.profileBlock}>
          <div className={styles.profileBlockTop}>
            <div>
              <img className={styles.avatar} src={info?.avatar_url} alt="avatar" />

            </div>
            <div className={styles.info}>
              <h1 className={styles.login}>{info?.login}</h1>
              <p>email: {info?.email || 'no email'}</p>
              <p>location: {info?.location || 'no location'}</p>
              <p>followers: {info?.followers}</p>
              <p>following: {info?.following}</p>
              <p>join date: {info?.created_at}</p>

            </div> 
          </div>
          <p>{info?.bio}</p>
          <SearchRepos onChange={onSearchHandler} />
          <ReposList repos={filteredRepos} />
        </div>
        : <Loader/>
      }
    </>
  )
}

export default ProfilePage
