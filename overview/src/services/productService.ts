import { IProducts } from "../models/IProducts"
import { config } from "./config"

export const allProduct = () => {
    return config.get<IProducts>('products')
}