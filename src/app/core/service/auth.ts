export type ROLE = 'USER' | 'ADMIN' | "SUPERUSER"
export interface AuthResponse {
  readonly  accessToken: string;
  readonly role: ROLE
}

export interface Auth {

  authResponse: AuthResponse | null
  username?: string
  email?: string
}

export const emptyAuth: Auth = {
  authResponse: null
}

export interface RegInfo{
  email: string
  username: string
  role: string
  password: string
  tmdb_key: string
}

