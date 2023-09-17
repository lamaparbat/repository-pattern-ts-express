export interface UserLoginPayload {
  email: string,
  password: string
}

export interface Admin {
  username: string,
  email: string,
  password: string,
  contact?: string,
  address?: string,
  dob?: Date,
}