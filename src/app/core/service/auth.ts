export type ROLE = 'USER' | 'ADMIN' | "SUPERUSER"
export interface AuthToken {
  readonly  accessToken: string;
  readonly role: ROLE
}

export interface Auth {

  authToken: AuthToken | null
  username?: string
  email?: string
  tmdb_key?:string
}

export const emptyAuth: Auth = {
  authToken: null
}

export interface RegInfo{
  email: string
  username: string
  role: string
  password: string
  tmdb_key: string
}

