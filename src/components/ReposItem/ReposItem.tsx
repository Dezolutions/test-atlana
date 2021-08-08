import React from 'react'
import { IRepo } from '../../types'

const ReposItem:React.FC<IRepo> = ({forks,stargazers_count,name}) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <p>forks: {forks}</p>
        <p>stars: {stargazers_count}</p>
      </div>
    </div>
  )
}

export default ReposItem
