import {SetToken, SetUserAndPhoto} from "../store/features/UserSlice";
export function getStoreToUserToken(dispatch,response){
    dispatch(SetToken(response.data.token))
    dispatch(SetUserAndPhoto({username:response.data.user.username,photo:response.data.user.avatar}))
}