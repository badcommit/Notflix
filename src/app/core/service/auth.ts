
export interface AuthResponse {
  readonly  accessToken: string;
  readonly role: 'USER' | 'ADMIN'
}

export interface Auth {

  auth: AuthResponse | null
  username?: string
  email?: string
}

export const emptyAuth: Auth = {
  auth: null
}

export interface RegInfo{
  email: string
  username: string
  role: string
  password: string
  tmdb_key: string
}

