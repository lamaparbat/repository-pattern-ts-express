
export interface IUser {
    username: string
    dob: string
    email: string
    password: string
}

export type IUserLoginParams = {
    username: string,
    password: string
}

export interface IUserRegisterPayload extends IUser {};