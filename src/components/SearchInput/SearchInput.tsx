import React from 'react'
import {DebounceInput} from 'react-debounce-input'
import { fetchUsers } from '../../store/actionsCreators/getUsersAction'
import {useDispatch} from 'react-redux'


const SearchInput = () => {
  const  dispatch = useDispatch()
  const [val,setVal] = React.useState('')
  
  React.useEffect(() => {
    val && dispatch(fetchUsers(val))
  },[val])

  return (
    <div>
      <DebounceInput
        debounceTimeout={1000}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
      />
      
    </div>
  )
}

export default SearchInput
