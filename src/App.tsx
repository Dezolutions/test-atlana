import React from 'react'
import axios  from 'axios'
import {DebounceInput} from 'react-debounce-input'
const App = () => {
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    const fetchUser = async () => {

    }
  })
  return (
    <div>
      <h1>Github Searcher</h1>
      <DebounceInput
        debounceTimeout={300}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
    </div>
  )
}

export default App

