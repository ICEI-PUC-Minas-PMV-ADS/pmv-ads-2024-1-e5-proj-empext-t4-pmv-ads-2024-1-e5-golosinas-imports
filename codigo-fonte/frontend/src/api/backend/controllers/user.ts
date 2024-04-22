import { instance } from "../config"
import { CreateUserResponse, LoginUserPayload, RegisterUserPayload, User } from "../types"

export interface AuthUserResponse {
    user: User,
    token: string
}

export async function loginUser(payload: LoginUserPayload) {
    try {
        const { data: user } = await instance.post<AuthUserResponse>('/login', payload)
        return user
    } catch (error) {
        throw error
    }
}

export async function registerUser(payload: RegisterUserPayload) {
    try {
        const {
            data: { token },
        } = await instance.post<CreateUserResponse>('/user/', payload)
        return token
    } catch (error) {
        throw error
    }
}

export type { LoginUserPayload }