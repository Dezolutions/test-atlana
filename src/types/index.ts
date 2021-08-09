export interface IProfile {
  avatar_url?: string
  name: string
  login: string
  public_repos?: number
}

export interface IUser {
  id: string
  avatar_url?: string
  login: string
  public_repos: number
}

export interface IUserReguest {
  items: IUser[]
}
export interface IUsersAction {
  type: string
  users: IUser[]
}

export interface IUserInfo {
  login: string
  avatar_url: string
  followers: number
  following: number
  email?: string
  location?:string
  created_at: string
  bio?: string
}
export interface IUserState {
  users: IUser[]
}

export interface IRepo {
  id: number
  name:string
  html_url: string
  forks:number
  stargazers_count:number

}

export interface IReposList {
  repos: IRepo[]
  
}

export interface IReposAction {
  type: string
  repos: IRepo[]
}

export interface ISearchRepos {
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}