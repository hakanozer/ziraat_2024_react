import { IUser } from "../models/IUser"
import { config } from "./config"

export const userServiceLogin = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<IUser>('auth/login', sendObj)
}