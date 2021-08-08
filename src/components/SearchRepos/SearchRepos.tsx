import React from 'react'
import { ISearchRepos } from '../../types'

const SearchRepos:React.FC<ISearchRepos> = ({...res}) => {
  return (
      <input 
       {...res}
       type='text'
       placeholder="enter a name of repository"
      />
  )
}

export default SearchRepos
