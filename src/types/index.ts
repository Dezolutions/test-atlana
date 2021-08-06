export interface IProfile {
  avatar_url?: string
  name: string
  login: string
  public_repos?: number
}

export interface IUser {
  avatar_url?: string
  login: string
  public_repos?: number
}


export interface IUsersAction {
  type: string
  users: IUser[]
}


export interface IUserState {
  users: IUser[]
}