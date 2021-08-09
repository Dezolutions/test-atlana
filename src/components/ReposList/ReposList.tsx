import React from 'react'
import {  IRepo, IReposList } from '../../types'
import ReposItem from '../ReposItem/ReposItem'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import './animation.css'

const ReposList:React.FC<IReposList> = React.memo(({repos}) => {
  console.log('reposlist rerender')
  return (
    <TransitionGroup component="ul">
      {repos?.map((repo:IRepo) => 
        <CSSTransition       
          key={repo.id}
          timeout={500}
          in={true}
          classNames="list"
        >
          <ReposItem key={repo.id} {...repo}/>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
})

export default ReposList
