import React from 'react'
import {DebounceInput} from 'react-debounce-input'
import { fetchUsers } from '../../store/actionsCreators/getUsersAction'
import {useDispatch} from 'react-redux'

import styles from './searchinput.module.css'
const SearchInput = () => {
  const  dispatch = useDispatch()
  const [val,setVal] = React.useState('')
  
  React.useEffect(() => {
    val && dispatch(fetchUsers(val))
  },[val])

  return (
    
      <div style={{textAlign: 'center'}} >
        <DebounceInput
          className={styles.input}
          debounceTimeout={350}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
        />
      </div>
      
    
  )
}

export default SearchInput
