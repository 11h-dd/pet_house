import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user:{
        username:"",
        photo:"",
    },
    token: ""
}
export const userConfigSlice = createSlice({
    name: "user", initialState, reducers: {
        //保存token
        SetToken: (state, payload) => {
            state.token = payload.payload
        },
    }

})
//异步
// const loadForToken = createAsyncThunk(SetToken,async()=> {
//
// })
export default userConfigSlice.reducer
export const {SetToken} = userConfigSlice.actions
