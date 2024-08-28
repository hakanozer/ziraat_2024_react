import { UnknownAction } from "redux";
import { LikesEnum } from "./LikesEnum";

export interface ILikeAction extends UnknownAction {
    type: LikesEnum,
    payload: number
}