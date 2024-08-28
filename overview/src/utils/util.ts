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


export const likeControl = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        const arr = JSON.parse(stLikes) as number[]
        const index = arr.findIndex(item => item === id)
        if (index > -1) {
            arr.splice(index, 1)
        }else {
            arr.push(id)
        }
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes',  stArr)
    }else {
        const arr = [id]
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes',  stArr)
    }
}

export const getAllLikes = () => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        const arr = JSON.parse(stLikes) as number[]
        return arr
    }
    return []
}

//const data = 'data'
//export const age = 100
//export default data