import CryptoJS from 'crypto-js'
import { IUser } from '../models/IUser'

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : ''
const key1 = process.env.REACT_APP_KEY ?? ''

export const encrypt = (plainText:string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, key1).toString()
    return cipherText
}

export const decrypt = (cipherText:string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key1)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}

export const getUser = () => {
    const stUser = localStorage.getItem('user')
    if(stUser) {
        try {
            const plainText = decrypt(stUser)
            const user = JSON.parse(plainText) as IUser
            return user
        } catch (error) {
            localStorage.removeItem('user')
        }
    }
    return null
}

//const data = 'data'
//export const age = 100
//export default data