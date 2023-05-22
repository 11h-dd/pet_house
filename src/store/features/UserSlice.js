import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        username: "", photo: ""
    }, token: ""
}
export const userConfigSlice = createSlice({
    name: "user", initialState, reducers: {
        //保存token
        SetToken: (state, payload) => {
            state.token = payload.payload
        }, SetUserAndPhoto: (state, payload) => {
            state.user.username = payload.payload.username
            state.user.photo = payload.payload.photo
        },
        RemoveToken:(state) => {
            state.token = ""
            state.user.username = ""
            state.user.photo = ""
        },
        //修改头像
        ChangePhoto:(state,action) => {
            state.user.photo = action.payload
        },
        //修改用户名
        ChangeUsersUsernames:(state,action) => {
            state.user.username = action.payload
        }
    }

})
//异步
// const loadForToken = createAsyncThunk(SetToken,async()=> {
//
// })
export default userConfigSlice.reducer
export const {SetToken, SetUserAndPhoto,RemoveToken,ChangePhoto,ChangeUsersUsernames} = userConfigSlice.actions
