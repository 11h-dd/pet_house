import {SetToken, SetUserAndPhoto} from "../store/features/UserSlice";
export function getTokenZero(dispatch){
    dispatch(SetToken(""))
    dispatch(SetUserAndPhoto({username:"",photo:""}))
}