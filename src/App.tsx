import React from 'react'
import axios  from 'axios'

import {IProfile} from './types'
import SearchInput from './components/SearchInput/SearchInput'


const App = () => {

  

  return (
    <div>
      <h1>Github Searcher</h1>
      <SearchInput/>
    </div>
  )
}

export default App

