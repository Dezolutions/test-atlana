import React from 'react'
import {DebounceInput} from 'react-debounce-input'
import { fetchUsers } from '../../store/actionsCreators/GetUsersAction'
import {useDispatch,useSelector} from 'react-redux'


const SearchInput = () => {
  const state = useSelector((state:any) => state.users)
  console.log(state)
  const  dispatch = useDispatch()
  const [val,setVal] = React.useState('')

  React.useEffect(() => {
    val && dispatch(fetchUsers(val))
  },[val])

  return (
    <div>
      <DebounceInput
        debounceTimeout={350}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
      />
      
    </div>
  )
}

export default SearchInput
