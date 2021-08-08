import { IRepo, IReposAction } from "../../types";

export const setReposOfUser = (repos:IRepo[]):IReposAction => ({
  type: 'SET_REPOS',
  repos
})
