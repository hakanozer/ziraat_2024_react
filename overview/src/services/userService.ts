import { config } from "./config"

export const userLogin = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post('auth/login', sendObj)
}