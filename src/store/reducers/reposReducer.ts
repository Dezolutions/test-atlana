import { IReposAction, IReposList } from "../../types"

const initialState :IReposList= {
  repos: [],
  
}
  
const reposReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos
      }
    default:
      return state
  }
}

export default reposReducer