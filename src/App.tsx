import React from 'react'
import axios  from 'axios'
import {DebounceInput} from 'react-debounce-input'
import {IProfile} from './types'
import Profile from './components/Profile/Profile'

const App = () => {

  const [value, setValue] = React.useState<string>('')
  const [user,setUser] = React.useState<IProfile>()
  const [err, setErr] = React.useState<boolean>(false)

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data:{avatar_url,name,public_repos,login}} = await axios.get<IProfile>(`https://api.github.com/users/${value}`)
        setUser({avatar_url,name,public_repos,login})
        setErr(false)
      } catch (error) {
        setErr(true)
      }
      
    }
    value && fetchUser()

  },[value])

  return (
    <div>
      <h1>Github Searcher</h1>
      <DebounceInput
        debounceTimeout={300}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      {err && <p>no user found</p>}
      {user && <Profile {...user}/>}
    </div>
  )
}

export default App

