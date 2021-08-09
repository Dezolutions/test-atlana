import React from 'react'
import { ISearchRepos } from '../../types'
import styles from './searchrepos.module.css'
const SearchRepos:React.FC<ISearchRepos> = React.memo(({...res}) => {

  return (
      <input 
        className={styles.input}
       {...res}
       type='text'
       placeholder="enter a name of repository"
      />
  )
})

export default SearchRepos
