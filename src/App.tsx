import React from 'react'
import ProfileList from './components/ProfileList/ProfileList'
import SearchInput from './components/SearchInput/SearchInput'

const App:React.FC = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Github Searcher</h1>
      <SearchInput/>
      <ProfileList/>
    </div>
  )
}

export default App

