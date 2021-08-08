import React from 'react'
import { IRepo, IReposList } from '../../types'
import ReposItem from '../ReposItem/ReposItem'
import {useSelector } from 'react-redux'
const ReposList:React.FC<IReposList> = ({repos}) => {
  return (
    <ul>
      {repos?.map((repo:any) => <ReposItem key={repo.id} {...repo}/>)}
    </ul>
  )
}

export default ReposList
