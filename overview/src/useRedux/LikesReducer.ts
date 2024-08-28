import { ILikeAction } from "./ILikeAction";
import { LikesEnum } from "./LikesEnum";

export const LikesReducer = (state: number[] = [], action: ILikeAction ) => {
    switch (action.type) {
        case LikesEnum.LIKE_ADD:
            //const newArr = Object.assign([], state) 
            //newArr.push(action.payload)
            const index = state.findIndex(item => item === action.payload)
            if(index === -1) {
                return [...state, action.payload]
            }else {
                const newArr = state.filter(item => item !== action.payload)
                return newArr
            }

        case LikesEnum.LIKE_REMOVE:
        const newArr = state.filter(item => item !== action.payload)
        return newArr
    
        default:
            return state
    }
}