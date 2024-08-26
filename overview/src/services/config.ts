import axios from "axios";

export const config = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 15000,
    headers: {app: 'overivew'},
    data: {ip: '122.22.22.22'},
    //auth: {username: '', password: ''}
})