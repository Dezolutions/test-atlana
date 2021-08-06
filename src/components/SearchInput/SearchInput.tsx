import React from 'react'
import {DebounceInput} from 'react-debounce-input'
const SearchInput = () => {
  return (
    <div>
      <DebounceInput
        debounceTimeout={300}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
      />
      
    </div>
  )
}

export default SearchInput
