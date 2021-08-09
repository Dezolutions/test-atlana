import React from 'react'
import { IRepo } from '../../types'
import styles from './repositem.module.css'
const ReposItem:React.FC<IRepo> = ({forks,stargazers_count,name,html_url}) => {
  return (
    <li>
      <a href={html_url} target="_blank" className={styles.repos}>
        <h3>{name}</h3>
        <div>
          <p>forks: {forks}</p>
          <p>stars: {stargazers_count}</p>
        </div>
      </a>
    </li>
  )
}

export default ReposItem
